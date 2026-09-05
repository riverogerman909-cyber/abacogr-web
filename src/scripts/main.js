// Ábaco — main.js (reveal · header · menú · nav activa · tilt · WA flotante · loader 3D)
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;

/* gancho para capturas/QA: ?reveal=1 muestra todo sin esperar al scroll */
if (new URLSearchParams(location.search).has('reveal')) {
  document.querySelectorAll('.reveal, .hairline').forEach((el) => el.classList.add('in'));
  document.querySelectorAll('img[loading=lazy]').forEach((i) => { i.loading = 'eager'; });
  const w = document.querySelector('.wa-float'); if (w) w.classList.add('is-on');
  const sc = new URLSearchParams(location.search).get('scroll');
  if (sc) { document.documentElement.style.scrollBehavior = 'auto'; addEventListener('load', () => scrollTo(0, +sc)); scrollTo(0, +sc); }
}

/* reveal + hairlines */
const io = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}, { threshold: 0.08 });
document.querySelectorAll('.reveal, .hairline').forEach((el) => io.observe(el));

/* header compacto */
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('is-compact', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* nav activa */
const links = [...document.querySelectorAll('.nav-links a')].filter((a) => a.hash);
const secs = links.map((a) => document.querySelector(a.hash)).filter(Boolean);
if (secs.length) {
  const nio = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) links.forEach((a) => a.classList.toggle('is-active', a.hash === '#' + e.target.id)); });
  }, { rootMargin: '-40% 0px -55% 0px' });
  secs.forEach((s) => nio.observe(s));
}

/* menú mobile (dialog) */
const dlg = document.querySelector('dialog.menu');
const openBtn = document.querySelector('[data-menu-open]');
if (dlg && openBtn) {
  openBtn.addEventListener('click', () => dlg.showModal());
  dlg.querySelectorAll('a, [data-menu-close]').forEach((el) => el.addEventListener('click', () => dlg.close()));
  dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
}

/* píldora WhatsApp flotante */
const waFloat = document.querySelector('.wa-float');
const hero = document.querySelector('.hero');
const contacto = document.querySelector('#contacto');
if (waFloat && hero) {
  let heroOut = false, contactoIn = false;
  const upd = () => waFloat.classList.toggle('is-on', heroOut && !contactoIn);
  new IntersectionObserver((es) => { heroOut = !es[0].isIntersecting; upd(); }).observe(hero);
  if (contacto) new IntersectionObserver((es) => { contactoIn = es[0].isIntersecting; upd(); }, { threshold: 0.2 }).observe(contacto);
}

/* 3D: puertas */
const obj = document.querySelector('[data-abaco]');
const can3d = obj && !reduce
  && !(navigator.connection && navigator.connection.saveData)
  && (navigator.deviceMemory ?? 4) >= 3
  && (navigator.hardwareConcurrency ?? 4) > 2
  && !!document.createElement('canvas').getContext('webgl2');

if (can3d) {
  const go = () => import('./abaco3d.js').then((m) => m.mount(obj)).catch((e) => console.error('abaco3d', e));
  const idle = () => ('requestIdleCallback' in window ? requestIdleCallback(go, { timeout: 1500 }) : setTimeout(go, 1200));
  const arm = () => {
    if (innerWidth < 900) new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { o.disconnect(); idle(); } }, { rootMargin: '200px' }).observe(obj);
    else idle();
  };
  document.readyState === 'complete' ? arm() : addEventListener('load', arm, { once: true });
} else if (obj) {
  obj.setAttribute('data-tilt', '');
}

/* tilt CSS (mockups de casos + sello estático cuando no hay 3D) */
if (fine && !reduce) {
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty('--rx', (((e.clientY - r.top) / r.height) * 2 - 1).toFixed(3));
      el.style.setProperty('--ry', (((e.clientX - r.left) / r.width) * 2 - 1).toFixed(3));
      el.classList.add('is-tilting');
    });
    el.addEventListener('pointerleave', () => {
      el.style.setProperty('--rx', '0'); el.style.setProperty('--ry', '0');
      el.classList.remove('is-tilting');
    });
  });
}
