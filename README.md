# cumple-emma

Invitación web de los 15 de Emma (23/12/2026, 21:00 a 05:00 hs, Vivanco Eventos, Tigre).
Sitio estático (HTML/CSS/JS), sin build ni dependencias.

## Qué se edita
Todo está en `config.js`:

| Campo | Para qué |
|---|---|
| `inicio` | Fecha/hora de la cuenta regresiva (hora Argentina, UTC-3) |
| `fechaTexto`, `horarioTexto` | Textos visibles de fecha y horario |
| `lugar` | Nombre, dirección y link de Google Maps |
| `dressCode`, `dressCodeEvitar` | Código de vestimenta |
| `alias` | Alias para el regalo (el botón lo copia) |
| `musica` | `{ youtube: "<id del video>", inicio: <segundos> }`. Vacío (`""`) oculta el botón play |
| `contactos` | Teléfonos de WhatsApp, formato `54911XXXXXXXX`. Con uno abre el chat directo; con varios muestra un selector |
| `mensajes` | Mensajes prellenados de WhatsApp |

## Fotos
`img/emma-1.jpg` (portada), `img/emma-2.jpg` (cierre, sepia), `img/emma-3.jpg` (foto con fondo difuminado).

## Música
El video de YouTube se carga recién cuando la persona toca el botón play (los navegadores no permiten reproducir solos).
Hasta ese momento no se hace ningún pedido a YouTube.

## Probar en local
Abrir `index.html` o servir la carpeta con cualquier servidor estático.

## Publicar (GitHub Pages)
Repo `cumple-emma` → Settings → Pages → Branch `main`, carpeta `/ (root)`.
