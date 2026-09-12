---
title: "Cómo crear un link de WhatsApp para tu negocio"
description: "Armá tu link de WhatsApp en un minuto: formato wa.me, mensaje prearmado con ?text=, versión QR y los errores que lo rompen. Guía para negocios de Uruguay."
date: 2026-09-12
keywords: ["link de WhatsApp", "crear link de WhatsApp", "enlace wa.me", "link de WhatsApp con mensaje", "QR de WhatsApp"]
---

Un link de WhatsApp para tu negocio se crea así: `https://wa.me/598` seguido de tu número sin el 0 inicial y sin espacios. Si tu WhatsApp es el 099 123 456 (número inventado, solo para el ejemplo), el link queda `https://wa.me/59899123456`. Quien lo toque abre un chat con vos, aunque no tenga tu número agendado.

Si además querés que el cliente llegue con un mensaje ya escrito, agregás `?text=` y el texto con los espacios reemplazados por `%20`. No hace falta ninguna herramienta: lo escribís a mano en el bloc de notas y listo.

Acá tenés el paso a paso, qué mensaje conviene prearmar según dónde vaya el link, cómo convertirlo en un QR y los errores más comunes que lo rompen.

## El formato exacto del enlace wa.me

`wa.me` es el dominio corto oficial de WhatsApp para abrir un chat desde un enlace, tal como lo documenta [la ayuda de WhatsApp](https://faq.whatsapp.com/5913398998672934). La regla es una sola: después de la barra va el número en formato internacional, sin el signo +, sin ceros iniciales, sin espacios, guiones ni paréntesis.

Para Uruguay el código de país es 598. Los celulares se escriben 09X XXX XXX; en el link se saca ese 0 y quedan 8 dígitos. O sea que un link uruguayo bien armado tiene siempre 11 dígitos después de `wa.me/`: 598 más los 8 de tu número.

| Número como lo escribís | Número en el link |
|---|---|
| 099 123 456 | `https://wa.me/59899123456` |
| +598 99 123 456 | `https://wa.me/59899123456` |
| 2903 1234 (fijo de Montevideo) | `https://wa.me/59829031234` |

Todos los números de la tabla son inventados. Si tu WhatsApp Business está en un fijo, la regla es la misma: 598 más sus 8 dígitos.

## Paso a paso: tu link de WhatsApp en un minuto

1. Abrí el bloc de notas del celular o de la computadora.
2. Escribí `https://wa.me/598`.
3. Pegá a continuación tu número sin el 0 inicial y sin espacios.
4. Contá los dígitos después de la barra: tienen que ser 11.
5. Copiá el link, pegalo en el navegador y tocá Enter. Si se abre WhatsApp en un chat con ese número, está bien armado.

Hacé la prueba final desde un celular que no tenga tu número agendado: es la única forma de ver el link como lo ve un cliente nuevo.

## Cómo crear un link de WhatsApp con mensaje prearmado (?text=)

El mensaje prearmado es texto que aparece ya escrito en el cuadro del chat cuando el cliente abre el link. Le ahorra pensar qué poner y a vos te dice de dónde viene. Se agrega al final del link con `?text=`, y cada espacio se reemplaza por `%20`.

Ejemplo con el mismo número inventado de antes:

- Mensaje: `Hola, quiero pedir un presupuesto`
- Link: `https://wa.me/59899123456?text=Hola,%20quiero%20pedir%20un%20presupuesto`

Dos detalles que importan. La coma puede ir tal cual (también funciona codificada como `%2C`). Las tildes y la ñ, en cambio, no siempre viajan bien cuando el link va en una bio o en un QR: lo más seguro es escribir el mensaje sin tildes o pasarlo por un codificador de URL (buscá "codificar URL", pegá el texto y copiá el resultado).

Una aclaración: el mensaje aparece escrito, pero no se envía solo. El cliente lo puede editar, borrar o mandar tal cual; nunca sale nada sin que toque enviar.

## Qué mensaje prearmar según dónde va el link

El mismo número puede tener tantos links como lugares donde lo publiques. Cambiás solo el texto y, cuando te escriben, sabés desde dónde vinieron sin instalar nada.

| Dónde va el link | Mensaje sugerido |
|---|---|
| Bio de Instagram | Hola, vengo de Instagram y quiero consultar por |
| Botón de la web | Hola, vi la web y quiero pedir un presupuesto |
| Ficha de Google Maps | Hola, los vi en Google Maps y quiero hacer una consulta |
| Firma de correo | Hola, te escribo por lo que hablamos por mail |
| Cartel con QR en el local | Hola, estoy en el local y quiero hacer un pedido |

Fijate que los mensajes son de una línea, arrancan con "Hola", nombran el origen y dejan la frase abierta para que el cliente la complete. Ninguno lleva tildes ni ñ, y es a propósito: así funcionan igual en todos lados. Después reemplazás los espacios por `%20` y armás un link por cada fila.

## Cómo convertir el link en un QR de WhatsApp

Un QR es solo tu link dibujado. Sirve para el mostrador, la vidriera, la tarjeta, los envases o el menú.

1. Armá primero el link completo, con mensaje incluido, y probalo en el navegador.
2. Pegalo en cualquier generador de QR. Hay muchos gratuitos; elegí la opción de QR estático, que apunta directo a `wa.me`.
3. Descargalo en el tamaño más grande que ofrezca (o en SVG, si lo vas a imprimir en cartelería).
4. Escanealo con dos celulares distintos, un Android y un iPhone si podés, antes de mandarlo a imprimir.
5. Debajo del QR poné en texto qué hace ("Escaneá y escribinos por WhatsApp") y tu número escrito, para quien no quiera escanear.

Un cuidado con los generadores gratuitos: algunos crean QR "dinámicos" que pasan por el servidor del generador y dejan de funcionar cuando termina el período de prueba. Un QR estático que apunta directo a `wa.me` no depende de ningún servicio intermedio: funciona mientras tu número siga activo.

## Los errores que rompen el link

Cuando un link de WhatsApp no funciona, suele ser por uno de estos problemas:

| Error | Así se rompe | Así se arregla |
|---|---|---|
| Dejar el 0 inicial | `wa.me/598099123456` | `wa.me/59899123456` |
| Poner el signo + | `wa.me/+59899123456` | `wa.me/59899123456` |
| Espacios o guiones | `wa.me/598 99 123 456` | `wa.me/59899123456` |
| Olvidar el 598 | `wa.me/99123456` | `wa.me/59899123456` |
| Espacios en el mensaje sin `%20` | el link se corta en el primer espacio | `?text=Hola,%20quiero...` |

Hay un sexto error que no rompe el link, pero sí te complica el trabajo: poner el número personal en vez del de WhatsApp Business. Funciona, pero los clientes te escriben al mismo celular que el grupo de la familia y a los 15 días ya no sabés qué conversación era de trabajo. Desde el día uno, al número del negocio.

## Lo que no conviene hacer con el link

- Mandarlo a un número que nadie atiende. El link es la puerta; si del otro lado responden dos días después, el cliente ya resolvió en otro lado. Definí quién atiende y en qué horario, y configurá un mensaje de ausencia para el resto.
- Prearmar un mensaje kilométrico. Un texto que pide nombre, dirección, producto, talle y forma de pago se parece a un formulario, y la gente lo borra entero. Una línea alcanza; el resto lo preguntás vos en la conversación.
- Cambiar de número sin actualizar el link en todos lados. Anotá dónde lo pusiste: bio, web, ficha de Google, firma, carteles impresos. El QR de la vidriera es el que siempre se olvida.
- Pegarlo donde no se puede tocar. En los pies de foto de Instagram los links no son clicables. Ahí va "link en la bio", y el link real va en el perfil o en el sticker de enlace de una historia.

## Cómo combinar el link con WhatsApp Business, tu web y Google Maps

El link abre la conversación; lo que pasa después depende de cómo tengas configurado WhatsApp. Con [WhatsApp Business](https://business.whatsapp.com/), que es gratuita, podés configurar un mensaje de bienvenida automático, uno de ausencia fuera de horario, respuestas rápidas para las preguntas repetidas y un catálogo con tus productos. Tenemos una guía para [configurar WhatsApp Business paso a paso](/blog/whatsapp-business-para-pymes/).

En la web, el botón flotante de WhatsApp que ves en tantos sitios no es más que este mismo link detrás de un ícono. Todas nuestras webs lo llevan incluido desde el plan Web, con el mensaje prearmado que definamos juntos al arrancar. Si estás decidiendo entre [tener solo Instagram o también una página web](/blog/instagram-o-pagina-web/), ahí comparamos las dos opciones sin humo.

En la [ficha de Google Maps](https://www.google.com/business/), que también es gratuita, cargás tu teléfono y tu web. El campo de sitio web es solo para tu web: las [normas de Google](https://support.google.com/business/answer/3038177) no admiten ahí enlaces que deriven a otra página, WhatsApp incluido. Mientras no tengas web, dejá cargado el teléfono y fijate si tu ficha ofrece la opción de chat por WhatsApp; cuando la tengas, va la web y el botón de WhatsApp queda adentro. Y si aún no creaste la ficha, en [cómo aparecer en Google](/blog/como-aparecer-en-google/) explicamos cómo hacerlo.

En el correo, el link va en la firma, debajo de tu nombre y teléfono. Si usás [un correo con tu propio dominio](/blog/correo-profesional-con-dominio-propio/), la firma queda completa y todo apunta a tu negocio.

## Preguntas frecuentes

### ¿El link funciona si el cliente no tiene mi número agendado?

Sí, y esa es justamente su gracia. El enlace `wa.me` abre el chat directo, sin que nadie tenga que agendar a nadie. El cliente ve tu número y el nombre de tu perfil (o el de tu empresa, si usás WhatsApp Business) y escribe.

### ¿El link de WhatsApp sirve para WhatsApp Business?

Sí, el formato es exactamente el mismo; lo único que cambia es el número que ponés. La app de WhatsApp Business también genera su propio enlace corto desde las herramientas para la empresa, con formato `wa.me/message/...` (WhatsApp lo explica en [su ayuda oficial](https://faq.whatsapp.com/502291734918768)). Los dos funcionan; el de `wa.me/598...` tiene la ventaja de que lo armás y lo controlás vos.

### ¿Puedo tener varios links con mensajes distintos?

Sí, todos los que quieras, y conviene. El número es siempre el mismo y cambiás solo el texto después de `?text=`. Así sabés qué canal te trajo cada consulta sin mirar ninguna estadística.

### ¿Cómo poner el link de WhatsApp en Instagram?

Entrá a tu perfil, tocá Editar perfil y pegá el link completo, con `https://` incluido, en el campo de enlaces; Instagram admite varios, así que puede convivir con tu web. En las historias podés usar el sticker de enlace. Y si usás WhatsApp Business, podés agregar un botón de WhatsApp al perfil: [la ayuda oficial de WhatsApp](https://faq.whatsapp.com/647574060315065) explica cómo vincular las cuentas.

### ¿Qué pasa si cambio de número?

Tenés que rearmar el link y reemplazarlo en cada lugar donde lo publicaste; por eso conviene tener la lista. Antes de dar de baja el número viejo, dejá un mensaje de ausencia avisando el nuevo. Y si tenés carteles con QR impresos, es el momento de reimprimirlos.

---

Si querés que todo esto quede armado y a tu nombre —web con botón de WhatsApp, WhatsApp Business configurado e Instagram con el link en la bio—, fijate en [nuestros planes](/#paquetes): el plan Presencia lo incluye completo, se entrega en días y sin mensualidades obligatorias. Y si querés probar un link real ahora mismo, este es el nuestro, con mensaje incluido: [https://wa.me/59898521288?text=Hola,%20quiero%20pedir%20un%20presupuesto](https://wa.me/59898521288?text=Hola,%20quiero%20pedir%20un%20presupuesto).
