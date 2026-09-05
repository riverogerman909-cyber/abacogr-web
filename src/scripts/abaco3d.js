// Ábaco — abaco3d.js · el sello como objeto: se ordena solo, se puede tocar, siempre vuelve al orden.
import {
  Scene, PerspectiveCamera, WebGLRenderer, Group, Mesh, Shape, Path, ExtrudeGeometry,
  CylinderGeometry, SphereGeometry, MeshPhysicalMaterial, MeshStandardMaterial,
  HemisphereLight, DirectionalLight, Raycaster, Plane, Vector2, Vector3, Color,
  PMREMGenerator, NeutralToneMapping, SRGBColorSpace,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const ROWS = [
  { y: 0.6, x: [-0.65, 0.05, 0.75], seed: [-1.05, 0.50, 1.10], c: ['em', 'ink', 'ink'] },
  { y: 0.0, x: [-0.85, 0.40, 0.90], seed: [-1.10, -0.50, 0.25], c: ['ink', 'em', 'ink'] },
  { y: -0.6, x: [-0.75, -0.05, 0.75], seed: [-0.30, 0.45, 1.10], c: ['ink', 'em', 'coral'] },
];
const R = 0.27, G = 2 * R + 0.02, LIM = 1.10;
const REST = { x: 0.06, y: -0.12 };
const COL = { em: '#12A187', ink: '#1E3457', coral: '#EF6D45' };
const outQuint = (k) => 1 - Math.pow(1 - k, 5);
const outBack = (k, c = 1.2) => 1 + (c + 1) * Math.pow(k - 1, 3) + c * Math.pow(k - 1, 2);
const inOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

function roundedRect(w, h, r) {
  const s = new Shape(); const x = -w / 2, y = -h / 2;
  s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
  s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
  s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
  return s;
}

export function mount(el) {
  const canvas = el.querySelector('canvas');
  const caption = el.querySelector('.hero-obj-caption');
  const hero = el.closest('.hero') || el;
  const mobile = innerWidth < 900;
  const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
  let destroyed = false;

  /* renderer / escena */
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 2));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = NeutralToneMapping; renderer.toneMappingExposure = 1.0;
  renderer.setClearColor(0x000000, 0);
  const scene = new Scene();
  const camera = new PerspectiveCamera(26, 1, 0.1, 30);
  camera.position.set(0, 0.15, 8.5); camera.lookAt(0, 0, 0);
  scene.add(new HemisphereLight(0xf5f6f4, 0x14243f, 0.6));
  const key = new DirectionalLight(0xfff4e8, 2.2); key.position.set(3, 4, 5); scene.add(key);
  const fill = new DirectionalLight(0xdce8ff, 1.0); fill.position.set(-4, 2, -3); scene.add(fill);

  /* geometría */
  const abaco = new Group(); scene.add(abaco);
  const shape = roundedRect(3.2, 3.0, 0.65);
  const hole = new Path(); const inner = roundedRect(2.8, 2.6, 0.45); hole.curves = inner.curves; shape.holes.push(hole);
  const frameGeo = new ExtrudeGeometry(shape, { depth: 0.42, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.04, bevelSegments: 3, curveSegments: 24 });
  frameGeo.translate(0, 0, -0.21); frameGeo.computeVertexNormals();
  const frameMat = new MeshPhysicalMaterial({ color: new Color('#14243F'), roughness: 0.45, metalness: 0.05, clearcoat: 0.5, clearcoatRoughness: 0.3 });
  abaco.add(new Mesh(frameGeo, frameMat));
  const rodGeo = new CylinderGeometry(0.035, 0.035, 3.0, 12); rodGeo.rotateZ(Math.PI / 2);
  const rodMat = new MeshStandardMaterial({ color: new Color('#AAB4C2'), metalness: 0.6, roughness: 0.3 });
  const beadGeo = new SphereGeometry(R, 28, 20);
  const mats = {};
  const beads = []; // {mesh, row, k, home}
  ROWS.forEach((row, ri) => {
    const rod = new Mesh(rodGeo, rodMat); rod.position.y = row.y; abaco.add(rod);
    row.x.forEach((hx, k) => {
      const c = row.c[k];
      if (!mats[c]) {
        mats[c] = new MeshPhysicalMaterial({ color: new Color(COL[c]), roughness: 0.35, metalness: 0, clearcoat: 1, clearcoatRoughness: 0.15, envMapIntensity: 0.5 });
        if (c === 'coral') { mats[c].emissive = new Color('#EF6D45'); mats[c].emissiveIntensity = 0.08; }
      }
      const m = new Mesh(beadGeo, mats[c]);
      m.position.set(row.seed[k], row.y, 0);
      abaco.add(m);
      beads.push({ mesh: m, row: ri, k, home: hx });
    });
  });
  const materials = [frameMat, ...Object.values(mats)];

  /* estado */
  const rot = { x: 0, y: 0 }; // arranca derecho (igual que el SVG) y se asienta en REST
  const target = { x: REST.x, y: REST.y };
  let pointerTilt = { x: 0, y: 0 }, dragRot = 0, scrollP = 0;
  let visible = true, pageVisible = !document.hidden, idleFloat = true, rafId = 0, last = performance.now();
  let tweens = [], drag = null, returnTimer = 0, sleepTimer = 0, firstFrame = false, degraded = false;
  let needs = true;
  const frameTimes = [];

  const tween = (o, key, to, dur, ease, delay = 0) => { tweens.push({ o, key, to, dur, ease, start: performance.now() + delay, from: null }); };
  const rowBeads = (ri) => beads.filter((b) => b.row === ri).sort((a, b) => a.mesh.position.x - b.mesh.position.x);
  const rowOrder = (ri) => rowBeads(ri).map((b, i) => { b.k = i; return b; });

  /* entrada: se ordena */
  const orderAll = (dur = 900, stagger = 40, ease = inOut) => {
    ROWS.forEach((row, ri) => {
      const sorted = rowOrder(ri);
      sorted.forEach((b, i) => tween(b.mesh.position, 'x', row.x[i], dur, ease, i * stagger + ri * stagger));
    });
  };
  const enter = () => {
    ROWS.forEach((row, ri) => rowOrder(ri).forEach((b, i) => tween(b.mesh.position, 'x', row.x[i], 1100, (k) => outBack(k, 0.25), (ri * 3 + i) * 70)));
    setTimeout(() => { if (caption && !destroyed) { caption.textContent = fine ? 'Arrastrá las bolitas' : 'Tocá o arrastrá las bolitas'; caption.hidden = false; } }, 1200);
  };

  /* tamaño */
  const resize = () => {
    const w = el.clientWidth, h = el.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix(); needs = true; wake();
  };
  const ro = new ResizeObserver(resize); ro.observe(el); resize();

  /* interacción */
  const ray = new Raycaster(), ndc = new Vector2(), v3 = new Vector3(), plane = new Plane();
  const pick = (e) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(beads.map((b) => b.mesh), false)[0];
    return hit ? beads.find((b) => b.mesh === hit.object) : null;
  };
  const dragX = (e, bead) => {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const rodWorld = abaco.localToWorld(new Vector3(0, ROWS[bead.row].y, 0));
    plane.setFromNormalAndCoplanarPoint(camera.getWorldDirection(v3).negate(), rodWorld);
    const hit = new Vector3(); if (!ray.ray.intersectPlane(plane, hit)) return null;
    return abaco.worldToLocal(hit).x;
  };
  const moveBead = (bead, x) => {
    const sorted = rowOrder(bead.row); const k = bead.k;
    const min = -LIM + k * G, max = LIM - (2 - k) * G;
    bead.mesh.position.x = clamp(x, min, max);
    for (let i = k + 1; i < 3; i++) sorted[i].mesh.position.x = Math.max(sorted[i].mesh.position.x, sorted[i - 1].mesh.position.x + G);
    for (let i = k - 1; i >= 0; i--) sorted[i].mesh.position.x = Math.min(sorted[i].mesh.position.x, sorted[i + 1].mesh.position.x - G);
  };
  const tapBead = (bead) => {
    const sorted = rowOrder(bead.row); const k = bead.k; const x = bead.mesh.position.x;
    const goal = x < 0 ? -LIM + k * G : LIM - (2 - k) * G;
    const xs = sorted.map((b) => b.mesh.position.x); xs[k] = goal;
    for (let i = k + 1; i < 3; i++) xs[i] = Math.max(xs[i], xs[i - 1] + G);
    for (let i = k - 1; i >= 0; i--) xs[i] = Math.min(xs[i], xs[i + 1] - G);
    sorted.forEach((b, i) => tween(b.mesh.position, 'x', xs[i], 450, outBack));
  };
  function scheduleReturn() { clearTimeout(returnTimer); returnTimer = setTimeout(() => { if (!drag) { orderAll(); wake(); } }, 1500); }
  function wake() { idleFloat = true; clearTimeout(sleepTimer); if (mobile) sleepTimer = setTimeout(() => { idleFloat = false; }, 8000); if (pageVisible && !firstFrame) armGuard(); if (!rafId) loop(); }
  let hovered = null;

  const onDown = (e) => {
    wake();
    const bead = pick(e);
    drag = { bead, x0: e.clientX, y0: e.clientY, t0: performance.now(), active: false, rotate: !bead, id: e.pointerId };
    if (fine) { canvas.setPointerCapture(e.pointerId); drag.active = true; if (!bead) canvas.style.cursor = 'grabbing'; }
  };
  const onMove = (e) => {
    if (!drag) {
      if (fine) { const b = pick(e); if (b !== hovered) { hovered && hovered.mesh.scale.setScalar(1); hovered = b; b && b.mesh.scale.setScalar(1.06); canvas.style.cursor = b ? 'grab' : ''; needs = true; } }
      return;
    }
    const dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
    if (!drag.active) {
      if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) { drag.active = true; canvas.setPointerCapture(e.pointerId); }
      else if (Math.abs(dy) > 8) { drag = null; return; }
      else return;
    }
    e.preventDefault();
    if (drag.bead) { tweens = []; const x = dragX(e, drag.bead); if (x !== null) moveBead(drag.bead, x); canvas.style.cursor = 'grabbing'; }
    else dragRot = clamp(dx * 0.006, -0.6, 0.6);
    needs = true;
  };
  const onUp = (e) => {
    if (!drag) return;
    const dt = performance.now() - drag.t0, dist = Math.hypot(e.clientX - drag.x0, e.clientY - drag.y0);
    if (drag.bead && dt < 250 && dist < 6) tapBead(drag.bead);
    if (!drag.bead) dragRot = 0;
    canvas.style.cursor = fine && pick(e) ? 'grab' : '';
    drag = null; scheduleReturn(); needs = true;
  };
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointercancel', () => { drag = null; dragRot = 0; scheduleReturn(); });

  const onHeroMove = (e) => {
    if (!fine) return;
    const r = hero.getBoundingClientRect();
    const nx = ((e.clientX - r.left) / r.width) * 2 - 1, ny = ((e.clientY - r.top) / r.height) * 2 - 1;
    pointerTilt = { x: ny * 0.045, y: nx * 0.07 };
    el.style.setProperty('--tilt', nx.toFixed(3)); el.style.setProperty('--tilt-abs', Math.abs(nx).toFixed(3));
    wake();
  };
  const onHeroLeave = () => { pointerTilt = { x: 0, y: 0 }; el.style.setProperty('--tilt', '0'); el.style.setProperty('--tilt-abs', '0'); wake(); };
  hero.addEventListener('pointermove', onHeroMove); hero.addEventListener('pointerleave', onHeroLeave);

  const onScroll = () => { scrollP = clamp(scrollY / Math.max(1, hero.offsetHeight), 0, 1); el.style.setProperty('--p', scrollP.toFixed(3)); needs = true; wake(); };

  /* visibilidad */
  const vio = new IntersectionObserver((es) => { visible = es[0].isIntersecting; if (visible) wake(); }); vio.observe(el);
  const onVis = () => { pageVisible = !document.hidden; if (pageVisible) wake(); };
  document.addEventListener('visibilitychange', onVis);

  /* loop */
  function loop() {
    rafId = 0;
    if (destroyed) return;
    if (!visible || !pageVisible) return; // se reanuda con wake()
    const now = performance.now(); const dt = Math.min(32, now - last) / 1000; last = now;
    // tweens
    if (tweens.length) {
      tweens = tweens.filter((t) => {
        if (now < t.start) return true;
        if (t.from === null) t.from = t.o[t.key];
        const k = Math.min(1, (now - t.start) / t.dur);
        t.o[t.key] = t.from + (t.to - t.from) * t.ease(k);
        return k < 1;
      });
      needs = true;
    }
    // rotación objetivo
    target.x = REST.x + pointerTilt.x; target.y = REST.y + pointerTilt.y + dragRot - scrollP * 0.28;
    const a = 1 - Math.exp(-dt * 6);
    const dxr = target.x - rot.x, dyr = target.y - rot.y;
    if (Math.abs(dxr) > 1e-3 || Math.abs(dyr) > 1e-3) { rot.x += dxr * a; rot.y += dyr * a; needs = true; }
    abaco.rotation.set(rot.x, rot.y, 0);
    if (idleFloat) { abaco.position.y = Math.sin(now / 1700) * 0.03 - scrollP * 0.5; needs = true; }
    else abaco.position.y = -scrollP * 0.5;
    if (needs) {
      const t0 = performance.now(); renderer.render(scene, camera); needs = false;
      if (!firstFrame) { firstFrame = true; el.classList.add('is-3d'); enter(); envLater(); }
      if (!degraded) { frameTimes.push(performance.now() - t0 + dt * 0); if (frameTimes.length > 60) { frameTimes.shift(); const avg = frameTimes.reduce((s, v) => s + v, 0) / 60; if (avg > 24) degrade(); } }
    }
    const busy = tweens.length || drag || idleFloat || Math.abs(target.x - rot.x) > 1e-3 || Math.abs(target.y - rot.y) > 1e-3;
    if (busy) rafId = requestAnimationFrame(loop);
  }
  function degrade() { degraded = true; renderer.setPixelRatio(1); materials.forEach((m) => { if ('clearcoat' in m) m.clearcoat = 0; m.needsUpdate = true; }); scene.environment = null; needs = true; }
  function envLater() {
    const go = () => { if (destroyed) return; try { const pm = new PMREMGenerator(renderer); scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; pm.dispose(); needs = true; wake(); } catch (_) {} };
    'requestIdleCallback' in window ? requestIdleCallback(go, { timeout: 2000 }) : setTimeout(go, 800);
  }

  /* primer frame con timeout; contexto perdido */
  let guard = 0;
  function armGuard() { if (guard) return; guard = setTimeout(() => { if (!firstFrame) destroy(); }, 2500); }
  canvas.addEventListener('webglcontextlost', () => destroy());

  function destroy() {
    if (destroyed) return; destroyed = true;
    clearTimeout(guard); clearTimeout(returnTimer);
    canvas.removeEventListener('pointerdown', onDown); canvas.removeEventListener('pointermove', onMove); canvas.removeEventListener('pointerup', onUp); clearTimeout(sleepTimer); cancelAnimationFrame(rafId);
    ro.disconnect(); vio.disconnect();
    hero.removeEventListener('pointermove', onHeroMove); hero.removeEventListener('pointerleave', onHeroLeave);
    removeEventListener('scroll', onScroll); document.removeEventListener('visibilitychange', onVis);
    el.classList.remove('is-3d'); if (caption) caption.hidden = true;
    renderer.dispose(); frameGeo.dispose(); rodGeo.dispose(); beadGeo.dispose(); materials.forEach((m) => m.dispose()); rodMat.dispose();
  }

  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  // si el hero ya no está a la vista al montar, arrancar ordenado sin entrada
  if (el.getBoundingClientRect().bottom < 0) { beads.forEach((b) => { b.mesh.position.x = ROWS[b.row].x[b.k]; }); rot.x = REST.x; rot.y = REST.y; }
  wake();
  return { destroy };
}
