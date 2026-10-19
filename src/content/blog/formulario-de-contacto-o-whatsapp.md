---
title: "Formulario de contacto o WhatsApp: cuál usar en tu web"
description: "Formulario de contacto o WhatsApp: pros y contras de cada opción, cuál conviene según tu rubro, qué datos pedir según la Ley 18.331 y cómo medir consultas."
date: 2026-10-09
keywords: ["formulario de contacto o WhatsApp", "formulario de contacto para web", "botón de WhatsApp en la web", "formulario que abre WhatsApp", "spam en formulario de contacto"]
---

¿Formulario de contacto o WhatsApp? Es una de las primeras decisiones al armar la web de una pyme o un profesional, y depende menos de la tecnología que de tu rubro: cuánto querés exponer tu número, qué datos necesitás para contestar y quién va a atender las consultas.

Hay tres caminos: el botón de WhatsApp que abre un chat directo, el formulario tradicional que te llega por mail y un formulario que arma el mensaje con los datos de la persona y lo abre en WhatsApp.

## Las tres opciones de un vistazo

| | Botón de WhatsApp | Formulario a mail | Formulario a WhatsApp |
|---|---|---|---|
| Cómo funciona | Un enlace wa.me detrás de un ícono | Un servicio recibe los datos y te manda un correo | Arma el texto y abre WhatsApp con la consulta escrita |
| Necesita servicio de envío | No | Sí | No |
| Quién ve tu número | Quien abre el chat | Nadie, salvo que lo des vos | Quien envía la consulta |
| La consulta llega ordenada | No | Sí | Sí |
| Si la persona no usa WhatsApp | Se queda sin camino | Sin problema | Se queda sin camino |

## Botón de WhatsApp: el camino más corto

Es un enlace wa.me con un mensaje prearmado detrás de un ícono, flotante o dentro de cada sección. Cómo se arma está en [link de WhatsApp para tu negocio](/blog/link-de-whatsapp-para-tu-negocio/).

**A favor:** un toque y la persona ya te está escribiendo; no necesita servicios extra, y la conversación sigue donde ya respondés. Con [WhatsApp Business configurado](/blog/whatsapp-business-para-pymes/) sumás respuestas rápidas, mensaje de ausencia y etiquetas.

**En contra:**

- Llega lo que la persona quiera escribir: muchas veces un "hola, info" y cinco mensajes de ida y vuelta hasta saber qué necesita.
- Quien abre el chat ve tu número y puede guardarlo, llamarte o escribirte un domingo.

## Formulario de contacto tradicional: ordenado, pero con letra chica

La persona completa los campos, toca "enviar" y te llega un correo. Pero una web estática, como las que hacemos, no tiene un servidor propio que mande mails: hace falta un servicio de envío que reciba los datos y te los reenvíe: de ahí salen casi todos los problemas.

**A favor:** la consulta llega por escrito, con los campos que definiste; tu número no queda expuesto, porque contestás por mail o llamás solo si decidís darlo, y sirve para quien no usa WhatsApp o para consultas que necesitan registro escrito.

**En contra:**

- **Spam de bots.** Un formulario público recibe envíos automáticos. Se controla con un campo trampa, invisible para las personas, y con una verificación como [Turnstile de Cloudflare](https://developers.cloudflare.com/turnstile/plans/), que tiene plan gratuito y en general no le pide al visitante resolver acertijos.
- **Avisos que caen en spam.** Si el correo sale de un remitente que tu casilla no reconoce, puede terminar en no deseados. Si el servicio te deja mandar el aviso desde tu dominio ([correo con tu propio dominio](/blog/correo-profesional-con-dominio-propio/)), cargar sus registros SPF y DKIM ayuda; igual hay que probarlo el primer día.
- **Un intermediario con los datos.** El servicio de envío procesa lo que escribe la persona. Revisá dónde opera y si guarda copia: tu política de privacidad lo tiene que contar.

## Formulario que abre WhatsApp: el punto medio

Pide pocos datos y, al tocar el botón, arma un texto con ellos y abre WhatsApp con la consulta escrita. El mensaje sale recién cuando la persona lo confirma allí.

Un ejemplo es la web que hicimos con este criterio para una abogada de Montevideo. Su formulario pide nombre, tema (de una lista cerrada, como familia, sucesiones o propiedad horizontal), modalidad preferida (presencial o videollamada) y un mensaje breve opcional. Junto al botón aclara que no hace falta mandar documentos ni datos sensibles por ese medio y enlaza al aviso de privacidad. Más detalles en la guía de [página web para abogados](/blog/pagina-web-para-abogados-uruguay/).

**A favor:** cada consulta llega con nombre, tema y modalidad; no hay servicio de envío, ni bots llenándote el correo, ni base de datos en la web que proteger, y elegir el tema de una lista ayuda a que la persona no cuente su caso entero en el primer mensaje.

**En contra:**

- Quien envía la consulta ve tu número al abrir el chat, y el número figura en el código para que el enlace funcione: evitás tenerlo a la vista, no que sea secreto. Por eso, que sea un número de trabajo.
- Quien no usa WhatsApp necesita otra salida: un correo de contacto al pie alcanza.

## Formulario o WhatsApp: cuál conviene según tu rubro

| Rubro o situación | Qué recomendamos | Por qué |
|---|---|---|
| Comercio, gastronomía, servicios a domicilio | Botón de WhatsApp con mensaje prearmado | Consultas cortas y con apuro |
| Abogados | Formulario a WhatsApp con temas cerrados | Ordena la consulta sin pedir el relato del caso |
| Psicólogos y salud | Botón con mensaje neutro o formulario con modalidad y horario | El motivo es un dato de salud: se habla en la primera entrevista |
| Profesionales que no quieren dar su número | Formulario a mail | Quien consulta no ve tu número |
| Academias y profesores | Formulario a WhatsApp con curso y nivel | Llega lo justo para contestar con horario y cuota |
| Inmobiliarias | Botón por propiedad y formulario para tasaciones | Cada aviso trae su referencia; la tasación pide más datos |
| Empresas que venden a otras empresas | Formulario a mail | Queda registro escrito para todo el equipo |

Más detalle en las guías de [página web para psicólogos](/blog/pagina-web-para-psicologos-uruguay/), [para academias y profesores](/blog/pagina-web-para-academias-y-profesores/) y [para inmobiliarias](/blog/pagina-web-para-inmobiliarias-uruguay/).

## Qué campos pedir y cuáles no

La [Ley 18.331 de protección de datos personales](https://www.impo.com.uy/bases/leyes/18331-2008) pide, en su artículo 7, que los datos que se recogen sean "adecuados, ecuánimes y no excesivos en relación con la finalidad". En criollo: pedí lo que necesitás para contestar la primera consulta y nada más.

**Sí:** nombre; tema o servicio, de una lista; un dato práctico (modalidad, zona, horario o curso); un mensaje breve opcional y, en el formulario a mail, un solo dato de contacto obligatorio: correo o teléfono, a elección.

**No:**

- **Cédula, dirección completa o fecha de nacimiento**, salvo que de verdad los necesites para responder.
- **Datos sensibles.** La ley llama así a los que revelan origen racial y étnico, preferencias políticas, convicciones religiosas o morales, afiliación sindical e informaciones sobre salud o vida sexual (art. 4), y establece que nadie puede ser obligado a proporcionarlos (art. 18). Un psicólogo no necesita preguntar el motivo de consulta, ni siquiera en un campo opcional; un abogado no necesita el relato del caso.
- **Archivos adjuntos.** Si hacen falta documentos, se piden después, por un canal acordado.

## Privacidad: lo justo para el formulario

Si tu formulario recoge datos personales, la Ley 18.331 pone como regla el consentimiento libre, previo, expreso e informado (art. 9) y pide informar antes de recabarlos, entre otros puntos, para qué se van a usar y quién es el responsable (art. 13). En la web va una línea junto al botón con enlace a la política de privacidad y, en el formulario a mail, una casilla sin marcar para aceptarla. Qué tiene que decir la política está en [política de privacidad web en Uruguay](/blog/politica-de-privacidad-web-uruguay/).

Que el formulario a WhatsApp no guarde nada en la web no quiere decir que no haya datos: la consulta queda en tu teléfono, y la ley pide medidas de seguridad y confidencialidad (art. 10). Celular con bloqueo, nada de reenviar consultas a grupos y borrar lo que ya no necesitás.

¿Querés usar esos contactos para mandar novedades? El artículo 8 impide usar los datos para finalidades distintas o incompatibles con las que motivaron su obtención. Ante dudas, consultá a la [Unidad Reguladora y de Control de Datos Personales](https://www.gub.uy/unidad-reguladora-control-datos-personales/); esto es una guía práctica, no asesoramiento legal.

## Cómo medir cuántas consultas llegan

1. **Un mensaje prearmado por origen.** Un texto distinto para la web, Instagram y Google Maps te dice de dónde viene cada chat. En el formulario a WhatsApp, puede arrancar con "Consulta desde la web".
2. **Etiquetas en WhatsApp Business.** Una etiqueta "web" y, a fin de mes, contás.
3. **Google Analytics.** Con la [medición mejorada](https://support.google.com/analytics/answer/9216061) registra cada clic en un enlace que sale de tu web (un wa.me es uno) y, según cómo esté armado el formulario, los envíos. Cuenta intenciones, no mensajes: alguien puede abrir WhatsApp y no mandar nada.
4. **Search Console.** Te dice con qué búsquedas te encuentran en Google y cuántos hacen clic, no quién termina escribiendo: está en la [guía de Google Search Console](/blog/google-search-console-guia/).

## Errores que vemos seguido

- **El formulario que nadie lee.** Llega a una casilla que nadie abre, o al correo de quien hizo la web. Probalo el día que se publica y una vez al mes.
- **El formulario de diez campos.** Nadie completa un trámite para hacer una pregunta.
- **El botón flotante que tapa el de enviar** en el celular. Probá la web en un teléfono chico.

## Preguntas frecuentes

### ¿Qué conviene más: formulario de contacto o WhatsApp?

Para comercios y servicios con consultas cortas, el botón de WhatsApp con mensaje prearmado. Para profesionales con consultas delicadas, un formulario que arma el mensaje y lo abre en WhatsApp. Si no querés que quien consulta vea tu número, o necesitás registro escrito, el formulario que llega por mail. Muchas webs combinan una opción principal con un correo al pie.

### ¿El formulario que abre WhatsApp guarda datos en la web?

No. El texto se arma en el navegador de quien escribe y viaja en el enlace que abre WhatsApp; la web no lo guarda ni lo manda a un servidor propio. El mensaje sale recién cuando la persona lo confirma. Los datos sí quedan en tu WhatsApp, así que cuidá ese teléfono como cualquier archivo de clientes.

### ¿Cómo evito el spam en el formulario de contacto?

Combiná un campo trampa, invisible para las personas, que los bots completan y así se delatan, con una verificación como Turnstile de Cloudflare, que tiene plan gratuito y en general no le pide nada al visitante. Si tu rubro lo permite, el formulario que abre WhatsApp directamente no pasa por tu correo.

### ¿Qué datos no tengo que pedir en un formulario?

Los que no necesitás para contestar la primera consulta, como cédula, dirección completa o fecha de nacimiento. Y sobre todo datos sensibles, que la Ley 18.331 define como los que revelan origen racial y étnico, preferencias políticas, convicciones religiosas o morales, afiliación sindical, salud o vida sexual: nadie puede ser obligado a darlos.

### ¿Puedo tener formulario y botón de WhatsApp a la vez?

Sí, y es una combinación común: el botón para quien quiere escribir ya y el formulario para quien prefiere dejar la consulta ordenada. Lo importante es que los dos lleguen a alguien que responde y que el botón flotante no tape el formulario en el celular.

Todos nuestros planes, desde Web ($U 8.000), incluyen formulario y botón de WhatsApp, y al arrancar definimos juntos qué formato calza con tu rubro y qué campos pedir. Mirá los [planes publicados](/#paquetes) o [escribinos por WhatsApp](/#contacto).
