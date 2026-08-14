// Genera el CSS de un carrusel de fotos que rota solo (crossfade, sin JS).
// Cada foto usa el mismo @keyframes pero con un animation-delay distinto,
// así que solo hace falta calcular la "ventana" de aparición según cuántas
// fotos haya. Se usa tanto en el carrusel del hero como en el de "Trabajos".
export function crearCarruselCss(nombreKeyframe, cantidad, duracionSlot = 4) {
  const duracionCiclo = cantidad * duracionSlot;
  const fraccion = 100 / cantidad;
  const entrada = (fraccion * 0.12).toFixed(2);
  const finHold = (fraccion * 0.85).toFixed(2);
  const finVentana = fraccion.toFixed(2);

  const css = `@keyframes ${nombreKeyframe} {
  0% { opacity: 0; }
  ${entrada}% { opacity: 1; }
  ${finHold}% { opacity: 1; }
  ${finVentana}% { opacity: 0; }
  100% { opacity: 0; }
}`;

  return { css, duracionCiclo, duracionSlot };
}
