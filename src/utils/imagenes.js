// Resuelve los nombres de archivo que se escriben en src/data/sitio.js
// (ej. "papa-retrato.png") contra los archivos reales en src/assets/img/,
// para poder pasarlos a <Image> de astro:assets y que Astro los optimice
// (tamaño, formato) en cada build. Así sitio.js sigue siendo el único lugar
// donde se edita "qué imagen va dónde": solo cambia el nombre del archivo
// ahí y sueltas la foto en src/assets/img/ con ese mismo nombre.
const archivos = import.meta.glob("/src/assets/img/*", { eager: true });

export function imagen(nombreArchivo) {
  const entrada = Object.entries(archivos).find(([ruta]) =>
    ruta.endsWith(`/${nombreArchivo}`)
  );

  if (!entrada) {
    throw new Error(
      `No se encontró "${nombreArchivo}" en src/assets/img/. Revisa el nombre en sitio.js o agrega el archivo.`
    );
  }

  return entrada[1].default;
}
