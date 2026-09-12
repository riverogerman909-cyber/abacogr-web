---
title: "Correo profesional con dominio propio en Uruguay"
description: "Correo profesional con dominio propio: qué necesitás, cuánto cuesta y tres formas honestas de tenerlo en Uruguay, del reenvío sin costo a la casilla paga."
date: 2026-09-12
keywords: ["correo profesional con dominio propio", "mail con dominio propio", "correo con dominio propio sin costo", "correo corporativo Uruguay"]
---

Un correo profesional con dominio propio es una dirección como `hola@tunegocio.uy` en lugar de `tunegocio@gmail.com`, y para tenerlo necesitás dos cosas: un dominio registrado a tu nombre y un servicio que gestione las casillas. Se puede resolver sin costo mensual (reenviando a tu Gmail de siempre) o con una casilla paga completa, y la configuración son unas pocas líneas en el DNS que carga quien administra tu dominio.

Lo mínimo que vas a pagar es el dominio: un .uy ronda los USD 25 al año (unos $U 1.000) en nic.com.uy (Antel). Lo demás depende de si reenviás los mensajes a tu casilla actual o contratás una casilla completa por usuario. Abajo van las tres opciones, cómo se configura, qué pasa con el celular y los errores que más vemos en pymes y profesionales uruguayos.

## Qué cambia entre `tunegocio@gmail.com` y `hola@tunegocio.uy`

Seamos claros: un correo con dominio propio (lo que muchos llaman correo corporativo) no te trae clientes por sí solo. Es una señal de seriedad, y en algunos rubros pesa bastante.

Cuando un contador manda un presupuesto desde una casilla de Gmail, el cliente lo lee igual. Pero cuando lo manda desde `nombre@tuestudio.uy`, el mensaje dice algo más: hay un negocio detrás, con un sitio al que se puede entrar, y ese dominio es el mismo que figura en la web y en la tarjeta. Coherencia. Si sos contador, tenemos una nota específica sobre [página web para contadores en Uruguay](/blog/pagina-web-para-contadores-uruguay/).

Hay tres ventajas concretas, más allá de la imagen:

- **Coherencia con tu web.** Si tu sitio es tunegocio.uy, el correo con el mismo dominio confirma que sos vos.
- **Independencia.** Si mañana cambiás de proveedor de correo, la dirección sigue siendo la misma. El dominio es tuyo; la casilla de Gmail, no.
- **Continuidad.** Podés crear direcciones por rol (ventas@, administracion@) y redirigirlas cuando cambie la persona, sin que nadie se lleve los contactos.

No es una garantía de nada. Es orden.

## Qué necesitás para tener un mail con dominio propio

Dos piezas, y conviene no mezclarlas:

1. **Un dominio propio.** Es el "apellido" de la dirección: todo lo que va después de la @. En Uruguay, los .uy y .com.uy se registran en [nic.com.uy](https://www.nic.com.uy/) (Antel). Si todavía no tenés uno, en esta guía te contamos [cómo registrar un dominio .uy](/blog/dominio-uy-como-registrarlo/) paso a paso.
2. **Un servicio de correo.** Es quien recibe, guarda y envía los mensajes. Puede ser sin costo (reenvío), pago (casilla completa) o venir incluido con el hosting.

Son independientes: podés tener el dominio en nic.com.uy, la web en Cloudflare y el correo en Google. Lo que los conecta es el DNS.

## Las tres opciones, con sus límites

### Opción 1: reenvío sin costo

Es la forma más simple de tener un correo con dominio propio sin costo mensual. Creás `hola@tunegocio.uy` y todo lo que llega ahí se reenvía a tu casilla de Gmail (o la que uses). No pagás nada por mes y no cambiás de bandeja: seguís leyendo el correo donde siempre.

Cómo se hace: con [Cloudflare Email Routing](https://developers.cloudflare.com/email-routing/), que no tiene costo si tu dominio usa el DNS de Cloudflare, o con la opción de reenvío que ofrecen algunos registradores (consultá si el tuyo la incluye).

La limitación: recibir es gratis, pero **responder "desde" tunegocio.uy** requiere un paso más. Por defecto, cuando contestás desde Gmail, el cliente ve tu dirección de Gmail. Para que salga con tu dominio hay que configurar el envío: Gmail lo permite en "Enviar como", pero necesita un servidor de salida y algo de configuración. Es factible; no es automático.

Ideal para: quien está arrancando, recibe pocos mails por día y quiere probar antes de pagar.

### Opción 2: casilla completa paga

Acá el dominio tiene su propia bandeja, con almacenamiento, calendario, contactos y envío desde el dominio sin vueltas. Dos proveedores de referencia son [Google Workspace](https://workspace.google.com/pricing) y [Zoho Mail](https://www.zoho.com/mail/zohomail-pricing.html). Se cobran por usuario; los precios vigentes están en esos enlaces y cambian, así que no los copiamos acá.

Funciona en el celular y en la computadora, con filtro de spam y respaldo del proveedor. Si ya usás Gmail, Workspace te va a resultar familiar.

Ideal para: quien manda correos a clientes todos los días, tiene más de una persona en el equipo o necesita compartir calendario y archivos.

### Opción 3: el correo que viene con el hosting

Muchos planes de hosting tradicional incluyen "casillas de correo ilimitadas". Suena bien, pero en nuestra experiencia suele ser la opción más limitada: bandejas chicas, interfaz web incómoda, filtros de spam pobres y, en hosting compartido, una reputación de envío que compartís con los demás sitios del mismo servidor.

Si ya tenés hosting con correo incluido y te funciona, no hace falta cambiar. Pero si estás eligiendo, no lo tomes como argumento de compra. En nuestra nota sobre [qué hosting web necesitás en Uruguay](/blog/hosting-web-uruguay-que-necesitas/) contamos qué mirar de verdad.

### Comparación rápida

| Criterio | Reenvío sin costo | Casilla completa paga | Correo del hosting |
|---|---|---|---|
| Costo mensual | Ninguno | Por usuario, según proveedor | Incluido en el hosting |
| Recibir en tu dominio | Sí | Sí | Sí |
| Responder desde tu dominio | Con configuración extra | Sí, directo | Sí |
| Almacenamiento | El de tu Gmail | Propio, según plan | Suele ser reducido |
| Filtro de spam | El de tu Gmail | Del proveedor | Variable |
| Para quién | Arrancar | Uso diario, equipos | Solo si ya lo tenés |

## Cómo se configura el correo: registros MX, SPF y DKIM (en criollo)

El correo de un dominio se define en el DNS, que funciona como la guía telefónica del dominio: dice a dónde van las visitas a la web y a dónde van los correos.

Para el correo, la entrada clave son los **registros MX**. Indican qué servidor recibe los mensajes de @tunegocio.uy. El proveedor de correo que elijas (Cloudflare, Google, Zoho) te da los valores exactos; quien administra tu dominio los carga en el panel de DNS. Son dos o tres líneas.

Además del MX, el proveedor te va a pedir dos registros más:

- **SPF**: declara qué servidores pueden mandar correo en nombre de tu dominio.
- **DKIM**: firma digitalmente cada mensaje para que el destinatario compruebe que no fue alterado.

No hace falta entender cómo funcionan. Lo que sí hace falta es cargarlos, porque sin SPF y DKIM tus correos tienen más chances de terminar en spam. Cada proveedor publica sus instrucciones exactas; se copian y se pegan.

Un consejo que repetimos siempre: **el dominio y el acceso al DNS tienen que quedar a tu nombre**. Si la agencia o el diseñador lo registra a nombre suyo, el día que quieras cambiar de proveedor de correo vas a depender de ellos. En nuestros planes, dominio, web y cuentas quedan a nombre del cliente desde el primer día.

## Qué pasa con el celular

Nada raro. Una casilla con dominio propio se agrega al celular como cualquier otra cuenta: en Gmail, en Outlook o en la app de correo del teléfono, elegís "agregar cuenta", ponés la dirección y la contraseña y, si la app lo pide, los datos del servidor que publica tu proveedor. Con Google Workspace es igual que agregar una cuenta de Gmail.

Si elegiste el reenvío, no hay que agregar nada: los mensajes llegan a la casilla que ya tenés en el celular.

## La firma de mail profesional

Si vas a tener correo con dominio, aprovechalo y armá una firma que cierre. Lo que lleva:

- Nombre y apellido, y tu rol o profesión.
- Nombre del negocio.
- Teléfono o WhatsApp. Si lo ponés como enlace, mejor: acá te mostramos [cómo armar el link de WhatsApp de tu negocio](/blog/link-de-whatsapp-para-tu-negocio/).
- Dirección web (con tunegocio.uy alcanza; sin "www" ni "https").
- Una línea con la dirección física si atendés al público.

Lo que no lleva: frases motivacionales, tres logos, imágenes pesadas ni redes que no actualizás. Texto plano o con un logo chico. La firma tiene que ayudar a que te contacten, no decorar.

## Errores comunes que vemos

**Mandar presupuestos desde una casilla personal.** El cliente recibe una propuesta desde `nombre.apellido.1987@gmail.com` y la lee al lado de otra que viene de `nombre@tuestudio.uy`. No define la decisión, pero no ayuda.

**Crear info@ y que nadie la lea.** Una casilla genérica que no está en ningún celular es una casilla que se olvida. Si la creás, redirigila a alguien concreto o revisala todos los días.

**Registrar el dominio a nombre de un tercero.** Si perdés contacto con quien lo registró, podés perder el correo y el dominio. Siempre a tu nombre.

## Cuánto cuesta un correo profesional con dominio propio

Depende de la opción: con reenvío, solo el dominio (unos USD 25 al año para un .uy y nada por mes); con casilla completa, el dominio más lo que cobre el proveedor por usuario; con el correo del hosting, nada adicional a lo que ya pagás.

Si estás armando toda tu presencia digital de una vez, nuestro plan **Presencia ($U 19.500)** incluye el correo profesional con tu dominio, junto con la web multisección, WhatsApp Business configurado, la ficha de Google Maps y el resto de las piezas. Lo dejamos configurado con los registros correctos y a tu nombre.

## Preguntas frecuentes

### ¿Cuánto tarda en funcionar el correo con dominio propio?

Una vez cargados los registros MX en el DNS, el cambio suele propagarse entre minutos y unas horas. El panel del proveedor de correo avisa cuando los registros quedan activos. Mientras tanto, tu casilla de siempre sigue funcionando con normalidad.

### ¿Pierdo mis mails viejos si paso a un correo con dominio propio?

No. Tu casilla de Gmail o la que uses sigue existiendo con todo su historial. Lo que hacés es sumar una dirección nueva, no reemplazar la anterior. Si querés, podés importar los correos viejos a la casilla nueva; los proveedores suelen ofrecer herramientas de importación; fijate en la ayuda del que elijas.

### ¿Puedo usar Gmail con mi dominio?

Sí, de dos formas. La que no tiene costo es el reenvío: los mails a `hola@tunegocio.uy` llegan a tu Gmail, y para responder desde el dominio configurás "Enviar como" con un servidor de salida. La paga es Google Workspace, que es Gmail con tu dominio y con el envío ya resuelto; solo hay que cargar los registros en el DNS.

### ¿Cuántas casillas de correo necesita un negocio chico?

Para arrancar, una: la que revisás todos los días. Si tenés equipo, una por persona, y direcciones por rol (ventas@, administracion@) como alias que apuntan a alguien concreto. Tener muchas casillas que nadie lee es peor que tener una sola bien atendida.

### ¿Qué pasa si cambio de proveedor de correo?

Cambiás los registros MX (y los de SPF y DKIM) en el DNS para que apunten al nuevo proveedor. Tu dirección sigue siendo la misma, porque el dominio es tuyo. Por eso insistimos con que quede a tu nombre.

Si querés arrancar con web, dominio y correo profesional de una vez, fijate [nuestros planes](/#paquetes): el plan Presencia lo incluye, con fecha cerrada al arrancar y todo a tu nombre.
