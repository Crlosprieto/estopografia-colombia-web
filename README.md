# Web de ESTOPOGRAFIA COLOMBIA

Sitio web estático (sin bases de datos, sin servidor) para Carlos Andrés Prieto
Alarcón, topógrafo profesional en Fusagasugá. Está hecho con **Astro**, un
generador de sitios que produce solo HTML, CSS y muy poco JavaScript.

Esta guía asume que **nunca has usado Node.js ni la terminal para programar**.
Ve paso a paso, sin saltarte nada.

---

## 1. Instalar Node.js

Node.js es el programa que necesitas para poder "construir" la web en tu
computador.

1. Entra a [https://nodejs.org](https://nodejs.org) y descarga la versión
   **LTS** (la recomendada, no la más nueva).
2. Instálalo como cualquier programa (siguiente, siguiente, finalizar).
3. Abre una terminal:
   - En Windows: busca "PowerShell" en el menú de inicio y ábrelo.
4. Escribe este comando y presiona Enter:

   ```
   node -v
   ```

   Si ves algo como `v22.12.0`, quedó instalado correctamente. Si da error de
   "comando no encontrado", reinicia el computador e intenta de nuevo.

## 2. Descargar las dependencias del proyecto

Desde la terminal, entra a la carpeta del proyecto (donde está este mismo
`README.md`) y ejecuta:

```
npm install
```

Esto descarga las piezas que Astro necesita para funcionar. Solo se hace una
vez (o cada vez que algo cambie en `package.json`). Puede tardar uno o dos
minutos.

## 3. Ver la web en tu computador (modo de edición en vivo)

```
npm run dev
```

Esto deja un servidor corriendo en tu computador. En la terminal verás una
dirección como `http://localhost:4321`. Ábrela en tu navegador: ahí verás la
web. Mientras este comando esté corriendo, cualquier cambio que hagas en los
archivos se refleja solo, sin recargar tú mismo la página.

Para detenerlo, vuelve a la terminal y presiona `Ctrl + C`.

## 4. Edita tus datos

**Todo el texto y los datos de la web están en un solo archivo:**
[`src/data/sitio.js`](src/data/sitio.js). No necesitas tocar ningún otro
archivo para cambiar textos, teléfono, casos o descripciones.

Abre ese archivo con cualquier editor de texto (recomendado:
[Visual Studio Code](https://code.visualstudio.com/), gratis) y busca los
comentarios que dicen `// CAMBIAR`. Estos son los pendientes actuales:

| Campo en `sitio.js` | Qué es | Prioridad |
|---|---|---|
| `whatsapp` | Número de WhatsApp en formato internacional sin `+` ni espacios (ej. `573142503961`) | Revisar primero |
| `heroImagen` / `heroImagenAlt` | Foto de retrato en el inicio de la página | Alta |
| `sobreMiImagen` / `sobreMiImagenAlt` | Foto de campo en la sección "Sobre mí" | Alta |
| `equipos[].imagen` (3 campos) | Fotos de la estación total, el GPS y el drone/software | Media |
| `galeria[].imagen` (4 campos) | Fotos de proyectos: levantamiento, plano, lote, trabajo en campo | Media |
| `logo` | Logo real de ESTOPOGRAFIA COLOMBIA | Media |
| `seo.siteUrl` | Dirección definitiva del sitio (cuando tengas el dominio) | Baja, se puede dejar para el final |

El resto de los datos (nombre, matrícula, los 6 casos, textos de "Sobre mí",
cobertura, etc.) ya están cargados con la información real y normalmente no
hace falta tocarlos — pero si algo cambia (por ejemplo, el número de WhatsApp),
edítalo directamente ahí.

Cada vez que guardes el archivo con `npm run dev` corriendo, el navegador se
actualiza solo.

## 5. Reemplazar las imágenes placeholder

Ahora mismo todas las fotos son dibujos genéricos con curvas de nivel de
fondo (para que veas dónde va cada imagen). Para poner las fotos reales:

1. Consigue la foto (celular, cámara, etc.) en formato `.jpg` o `.png`.
2. Cópiala dentro de la carpeta `public/img/` de este proyecto.
3. Dale el mismo nombre "base" que el placeholder que vas a reemplazar, pero
   con la extensión de tu foto. Por ejemplo, si vas a reemplazar
   `papa-retrato.svg` con una foto `.jpg`, guarda tu archivo como
   `papa-retrato.jpg` dentro de `public/img/`.
4. Abre `src/data/sitio.js`, busca el campo correspondiente (en este ejemplo,
   `heroImagen: "papa-retrato.svg"`) y cambia la extensión:
   `heroImagen: "papa-retrato.jpg"`.
5. Guarda. Listo — no hay que tocar ningún componente ni código adicional.

**Importante (privacidad):** si vas a subir fotos de planos, difumina o recorta
cualquier dato de clientes (nombres, cédulas, direcciones, códigos catastrales,
matrículas inmobiliarias). Esos datos nunca deben quedar publicados en la web.

## 6. Publicar la web gratis en Netlify

Netlify es un servicio gratuito para publicar sitios estáticos como este.

1. Sube este proyecto a una cuenta de [GitHub](https://github.com) (crea una
   cuenta gratis si no tienes, crea un "repositorio" nuevo y sube estos
   archivos — puedes arrastrar la carpeta desde la web de GitHub si no
   quieres usar comandos de git).
2. Entra a [https://app.netlify.com](https://app.netlify.com) y crea una
   cuenta gratis (puedes registrarte con la misma cuenta de GitHub).
3. Haz clic en **"Add new site" → "Import an existing project"**.
4. Elige **GitHub** y autoriza a Netlify a ver tus repositorios.
5. Selecciona el repositorio de este proyecto.
6. En la configuración de build, Netlify debería detectar Astro solo. Si te
   pide los valores manualmente, usa:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Haz clic en **"Deploy site"**. En uno o dos minutos tendrás una dirección
   tipo `nombre-al-azar.netlify.app` con tu web publicada.
8. Cada vez que subas cambios a GitHub, Netlify vuelve a publicar la web
   automáticamente.
9. Opcional: en "Domain settings" puedes conectar un dominio propio (por
   ejemplo `estopografiacolombia.com`) si lo compras más adelante.

## 7. Problemas comunes

**"Puerto ocupado" / `Port 4321 is in use`**
Ya tienes otra copia de `npm run dev` corriendo. Ciérrala (`Ctrl + C` en esa
terminal) o simplemente deja que Astro use el siguiente puerto disponible que
te sugiera (aparece en la terminal).

**`npm install` da error o se queda pegado**
- Revisa tu conexión a internet.
- Borra la carpeta `node_modules` (si existe) y el archivo
  `package-lock.json`, y vuelve a correr `npm install`.
- Verifica que `node -v` muestre una versión 22 o superior.

**Cambié `sitio.js` y no veo el cambio en el navegador**
- Confirma que `npm run dev` sigue corriendo en la terminal.
- Revisa que guardaste el archivo.
- Refresca el navegador manualmente (`Ctrl + R`).

**El botón de WhatsApp no abre el chat correcto**
Revisa que el campo `whatsapp` en `sitio.js` tenga el número completo con
código de país, sin `+`, espacios ni guiones (ejemplo correcto:
`573142503961`).

**Quiero verificar que todo está bien antes de publicar**
Corre:

```
npm run build
```

Si termina sin errores, el sitio está listo para publicarse. Puedes revisar
cómo queda con:

```
npm run preview
```

---

## Comandos, en resumen

| Comando | Qué hace |
|---|---|
| `npm install` | Instala las dependencias (una sola vez) |
| `npm run dev` | Abre la web en modo edición en vivo |
| `npm run build` | Genera la versión final en la carpeta `dist/` |
| `npm run preview` | Muestra cómo queda la versión final generada |
