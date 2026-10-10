---
title: "Google Search Console: guía práctica para tu pyme"
description: "Google Search Console paso a paso: cómo dar de alta tu web, enviar el sitemap, pedir indexación y leer los informes que importan. Guía para pymes uruguayas."
date: 2026-10-09
keywords: ["Google Search Console", "Search Console", "cómo usar Search Console", "verificar dominio en Search Console", "indexar mi página en Google", "enviar sitemap a Google"]
---

Google Search Console es la herramienta gratuita con la que Google te muestra cómo ve tu web: qué páginas tiene registradas, con qué búsquedas aparecés y cuántas personas hacen clic. No es publicidad ni te sube de posición: te da información para dejar de adivinar.

No hace falta registrarse para aparecer en Google; el propio Google lo aclara. Pero sin Search Console no sabés si tu web nueva ya está en el buscador, por qué una página no aparece ni qué escribe la gente antes de llegar a vos.

## Search Console, Analytics y la ficha de Google no son lo mismo

Tres herramientas gratuitas de Google, tres tareas distintas:

| Herramienta | Qué te muestra | ¿Necesita web propia? |
|---|---|---|
| Google Search Console | Lo que pasa en Google antes del clic: búsquedas, impresiones, clics y páginas indexadas | Sí |
| Google Analytics | Lo que pasa en tu web después del clic, venga la visita de Google, Instagram o WhatsApp | Sí |
| Perfil de Empresa (la ficha) | Cómo aparece tu negocio en el buscador y en Google Maps | No |

Search Console y Analytics se pueden vincular si sos propietario verificado en la primera y editor en la segunda ([ayuda de Analytics](https://support.google.com/analytics/answer/10737381?hl=es)). La ficha del mapa está explicada en [cómo aparecer en Google](/blog/como-aparecer-en-google/); acá vamos con la web.

## Para qué le sirve Google Search Console a una pyme

- **Confirmar que Google tiene tu web**, sobre todo cuando es nueva.
- **Ver con qué búsquedas aparecés.** A veces te encuentran por palabras que no esperabas, como "contador para unipersonal" en vez de "estudio contable". Eso te dice qué explicar mejor.
- **Enterarte de los problemas.** Si Google detecta uno en tu sitio, te avisa por correo.
- **Controlar un cambio**: si sumaste una sección, ves si Google la tomó.

## Cómo dar de alta tu web en Search Console

Entrá a [search.google.com/search-console](https://search.google.com/search-console) con la cuenta de Google del negocio, no con la de un empleado ni la de quien te hizo la web.

### Dominio o prefijo de URL: cuál elegir

Al tocar **Añadir propiedad**, Google te ofrece dos tipos:

| | Propiedad de dominio | Prefijo de URL |
|---|---|---|
| Qué escribís | `tunegocio.com.uy` (sin https ni www) | `https://www.tunegocio.com.uy/` (exacto) |
| Qué cubre | Todo: con y sin www, http y https, subdominios | Solo las direcciones que empiezan exactamente así |
| Cómo se verifica | Solo por DNS (registro TXT o CNAME) | Archivo HTML, etiqueta HTML, Google Analytics o Tag Manager, entre otros |

Si podés tocar el DNS, elegí dominio: una sola propiedad ve todo. Con prefijo, si cargás `http://` y tu web está en `https://`, la propiedad queda vacía. El detalle está en la [ayuda de Search Console](https://support.google.com/webmasters/answer/34592?hl=es).

### Cómo verificar tu dominio con el registro TXT

1. En **Añadir propiedad**, elegí **Dominio** y escribí tu dominio sin `https://` ni `www`.
2. Google te muestra un registro TXT que empieza con `google-site-verification=`. Copialo.
3. En el panel donde administrás el DNS del dominio (Cloudflare o el registrador), creá un registro de tipo TXT con ese valor. Si no sabés dónde está tu dominio, mirá la guía de [dominio .uy](/blog/dominio-uy-como-registrarlo/).
4. Volvé a Search Console y tocá **Verificar**.

Si falla, no es raro: el proveedor del DNS puede tardar hasta dos o tres días en servir el registro, y Google sugiere reintentar en uno o dos días ([ayuda de verificación](https://support.google.com/webmasters/answer/9008080?hl=es)). Una vez verificado, **no borres el registro**: si lo quitás, perdés la verificación.

## Enviá el sitemap a Google

El sitemap es la lista de páginas de tu web para el buscador. Las webs bien armadas lo generan solas; en las que hacemos queda en `/sitemap-index.xml`, declarado también en el archivo robots.txt.

Abrí el informe **Sitemaps**, pegá la dirección en **Añadir un sitemap** y tocá **Enviar**. Si el estado dice **Correcto**, Google lo leyó; si dice **No se ha podido obtener**, revisá que la dirección abra en el navegador.

Un sitemap correcto no garantiza que se indexen todas las páginas, como aclara la [ayuda de Sitemaps](https://support.google.com/webmasters/answer/7451001?hl=es): le avisa a Google qué hay y Google decide qué indexa.

## Inspeccioná una URL y pedí la indexación

Pegá la dirección completa de una página en la barra de arriba. La **Inspección de URLs** muestra un estado; los dos más comunes:

- **La URL está en Google**: está indexada y puede aparecer en resultados, aunque no asegura que aparezca ni en qué lugar.
- **La URL no está en Google**: la misma pantalla suele indicar el motivo.

**Probar URL publicada** muestra si Google accede a la versión actual; si está todo bien, tocá **Solicitar indexación**. Según la documentación de Google sobre [cómo pedir que se vuelva a rastrear](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl?hl=es):

- Hay un límite de solicitudes por propiedad.
- Pedir varias veces la misma URL no la hace rastrear más rápido.
- El rastreo puede tardar desde unos pocos días hasta unas semanas, y pedirlo no garantiza que la página se indexe.

Pedí indexación para una página nueva o un cambio importante; para muchas páginas, alcanza con el sitemap.

## Los informes que conviene mirar

Para una pyme, dos informes explican casi todo.

### Rendimiento: clics, impresiones y consultas

Arriba muestra cuatro números:

- **Clics**: veces que alguien entró a tu web desde los resultados.
- **Impresiones**: veces que tu web apareció en los resultados.
- **CTR**: clics divididos entre impresiones.
- **Posición media**: el promedio de dónde apareció tu primer resultado, no un puesto fijo.

Podés ver los datos por **Consultas**, **Páginas**, **Países**, **Dispositivos**, **Aparición en búsquedas** y **Fechas**. Por defecto muestra los últimos tres meses; Search Console guarda hasta 16 meses.

Lo más útil está en **Consultas**:

- **Muchas impresiones y pocos clics**: te ven y no entran. Revisá si el título y la descripción de esa página dicen lo que la persona buscaba.
- **Búsquedas que no esperabas**: ideas para una pregunta frecuente o una sección nueva.
- **Búsquedas con el nombre de tu negocio**: gente que ya te conoce.

Google oculta las consultas que hace muy poca gente, para proteger su privacidad, pero las suma al total: por eso la tabla de consultas no coincide con el total de clics.

### Indexación de páginas

En el menú, **Indexación > Páginas**. El informe separa tus páginas en indexadas y sin indexar, con el motivo de cada grupo. Algunos motivos habituales:

- **Página con redirección**: por ejemplo, la versión sin www que lleva a la versión con www. Normal.
- **Página alternativa con etiqueta canónica adecuada**: un duplicado que apunta a la versión principal. Normal.
- **Rastreada: actualmente sin indexar**: Google la rastreó y por ahora no la incluyó.

Tener páginas sin indexar no es un error en sí: según Google, el objetivo es que esté indexada la versión principal de cada página importante.

Si tu sitio tiene menos de 500 páginas, la [ayuda del informe](https://support.google.com/webmasters/answer/7440203?hl=es) dice que probablemente no necesites usarlo: alcanza con buscar `site:tudominio` en Google e inspeccionar tus páginas clave. Si corregís algo, **Validar corrección** le avisa a Google; suele tardar unas dos semanas, a veces bastante más.

## Cada cuánto mirarla

Google recomienda entrar una vez al mes o cuando cambiás algo en el sitio. Nuestra rutina, de quince minutos:

1. **Rendimiento**, últimos tres meses contra los tres anteriores: ¿suben o bajan los clics?
2. **Consultas**: ¿apareció alguna búsqueda nueva que valga una respuesta en la web?
3. **Inspección de URLs** de la portada y de tus dos o tres páginas clave.

Todos los días no: los datos más recientes son preliminares y cambian.

## Cómo dar acceso sin perder el control

Los roles principales:

| Rol | Qué puede hacer |
|---|---|
| Propietario verificado | Todo. Verificó con su propio token (DNS, archivo o etiqueta) |
| Propietario delegado | Todo, pero lo agregó otro propietario |
| Usuario con acceso total | Ve los datos, envía sitemaps y pide indexación; no maneja usuarios |
| Usuario con acceso restringido | Ve la mayoría de los datos |

Para sumar a alguien: **Ajustes > Usuarios y permisos > Añadir usuario**, escribís su cuenta de Google y elegís el permiso. Más en la [ayuda de permisos](https://support.google.com/webmasters/answer/7687615?hl=es).

La regla que seguimos: el propietario verificado es la cuenta del negocio. Quien te hace la web entra con acceso total, que alcanza para trabajar, y se lo quitás cuando quieras. Es la misma lógica que con el [dominio y el hosting](/blog/hosting-web-uruguay-que-necesitas/): todo a tu nombre.

Si hoy la propiedad la tiene un diseñador anterior, verificala con tu propio token y quitale el acceso. Después, en **Tokens de propiedad no utilizados**, mirá qué tokens suyos quedan y borralos del DNS o del sitio: si queda alguno, puede recuperar el acceso.

## Cuánto tarda Search Console en mostrar datos

Según la [ayuda sobre los datos de Search Console](https://support.google.com/webmasters/answer/96568?hl=es), un sitio recién agregado puede tardar hasta una semana en mostrar datos; después, los datos llegan con dos o tres días de demora. Si pasada una semana no ves nada, revisá el protocolo de la propiedad.

Search Console mide, no posiciona: lo que mueve la aguja es una web clara. Si estás arrancando, empezá por [qué necesitás para hacer tu página web](/blog/que-necesitas-para-hacer-tu-pagina-web/).

## Preguntas frecuentes

### ¿Google Search Console es gratis?

Sí. Es un servicio gratuito de Google: no se paga por el alta, la verificación ni los informes. Necesitás una cuenta de Google y una web propia con su dominio. Si alguien te cobra por Search Console, te está cobrando su trabajo de configurarla, no un costo de Google.

### ¿Necesito Search Console para aparecer en Google?

No. Google aclara que no hace falta registrarse en Search Console para aparecer en los resultados: el buscador encuentra las páginas por su cuenta. Lo que te da es información (si tu web está indexada, con qué búsquedas aparecés, qué problemas hay) y la opción de enviar el sitemap y pedir indexación.

### ¿Qué diferencia hay entre Search Console y Google Analytics?

Search Console mide lo que pasa en Google antes del clic: con qué búsquedas aparecés, cuántas veces te muestran y cuántos entran. Google Analytics mide lo que pasa dentro de tu web después del clic, venga la visita de Google, Instagram o WhatsApp. Son complementarias y se pueden vincular.

### ¿Por qué Search Console no me muestra datos?

Las causas más comunes: la propiedad es nueva y no pasó una semana; cargaste un prefijo de URL con el protocolo equivocado (http en lugar de https, o sin www); o tu web todavía no aparece en ninguna búsqueda. Revisá en ese orden; si pasó más de una semana, inspeccioná la portada.

### ¿Cuánto tarda Google en indexar una página después de pedirlo?

No hay plazo fijo. Google indica que el rastreo puede tardar desde unos pocos días hasta unas semanas, que pedirlo varias veces no lo acelera y que no garantiza la indexación. Si la página es nueva, pedí la indexación una vez, confirmá que el sitemap esté enviado y volvé a inspeccionarla en unos días.

El alta en el buscador viene en todos nuestros planes y, como todo lo demás, queda a tu nombre. Si preferís que te dejemos Search Console andando junto con la web, mirá los [planes publicados](/#paquetes) o [escribinos por WhatsApp](/#contacto): te decimos qué calza, sin vueltas.
