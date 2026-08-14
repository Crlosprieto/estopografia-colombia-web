// ============================================================================
// src/data/sitio.js
// TODOS los textos y datos editables del sitio viven aquí.
// Ningún componente debe tener texto escrito a mano: todos importan de aquí.
//
// Los campos marcados con "// CAMBIAR" son los que debes revisar o reemplazar
// tú (fotos reales, logo original, etc). El resto ya tiene los datos reales
// del negocio y normalmente no necesita tocarse.
//
// Las fotos van en src/assets/img/ (no en public/img/): así, cada vez que
// reemplaces un placeholder por una foto real, Astro la optimiza sola
// (la comprime y la convierte a WebP) al hacer `npm run build`.
// ============================================================================

// Se declaran aparte (en vez de escribirlas dos veces) porque también se
// usan para armar el aviso de privacidad más abajo, dentro del mismo objeto.
const NOMBRE_COMERCIAL = "ESTOPOGRAFIA COLOMBIA";
const EMAIL = "estopografiacolombi@gmail.com";

export const sitio = {
  // --- Identidad -----------------------------------------------------------
  nombreComercial: NOMBRE_COMERCIAL,
  nombre: "Carlos Andrés Prieto Alarcón",
  nombreCorto: "Carlos",
  titulo: "Topógrafo profesional",
  credencial: "Tecnólogo en Topografía (SENA) y en Cartografía (UDEC)",
  matricula: "CPNT No. 01-17928",
  matriculaEntidad: "Consejo Profesional Nacional de Topografía",
  licenciaEstado: "Licencia vigente · Sin antecedentes disciplinarios",
  aniosExperiencia: "17",
  aniosExperienciaTexto: "Más de 17 años de experiencia en campo",

  // Estado real de disponibilidad. Cámbialo a false cuando la agenda esté
  // llena — el sitio ajusta el texto y el color del indicador solo.
  disponible: true,

  // --- Contacto --------------------------------------------------------------
  // El número de WhatsApp va en formato internacional sin "+" ni espacios,
  // tal como lo exige el enlace wa.me. Es lo primero que debes revisar.
  whatsapp: "573142503961", // CAMBIAR si el número cambia
  telefonoDisplay: "314 250 3961",
  email: EMAIL,
  cobertura: "Fusagasugá, Sumapaz y Cundinamarca — con cobertura en toda Colombia",
  coberturaDetalle:
    "Fusagasugá, región del Sumapaz (Silvania, Pasca, Tibacuy, Arbeláez, Cabrera, Venecia, Pandi, San Bernardo) y Cundinamarca, con disponibilidad para proyectos en cualquier región de Colombia.",
  // Mismos municipios de coberturaDetalle, en lista, para alimentar el campo
  // "areaServed" de los datos estructurados (Schema.org) sin duplicar el dato a mano.
  municipiosCobertura: [
    "Fusagasugá",
    "Silvania",
    "Pasca",
    "Tibacuy",
    "Arbeláez",
    "Cabrera",
    "Venecia",
    "Pandi",
    "San Bernardo",
    "Cundinamarca",
  ],

  // --- Prueba social -----------------------------------------------------
  validoAnte: "Catastro · Notaría · Planeación · IGAC",
  clientesDestacados:
    "alcaldías municipales, la Unidad Nacional para la Gestión del Riesgo de Desastres, consorcios de obra pública, constructoras y familias de la región",

  // --- Hero ------------------------------------------------------------------
  heroKicker: "Topografía · Cartografía · Georreferenciación IGAC",
  heroTitular:
    "Topógrafo en Fusagasugá y Sumapaz: mida, divida, certifique o defienda su predio",
  heroSubtitulo:
    "Mediciones exactas y documentos listos para notaría, catastro o planeación.",
  // Carrusel de fotos del hero (se van rotando solas, sin JS, en CSS).
  // El primer elemento es el retrato; los demás son fotos de campo/equipos.
  // Puedes agregar o quitar elementos: el carrusel se ajusta solo al número que dejes aquí.
  heroCarrusel: [
    {
      imagen: "papa-retrato.png",
      alt: "Retrato de Carlos Andrés Prieto Alarcón, topógrafo profesional",
    },
    {
      imagen: "hero-campo-1.jpg",
      alt: "Carlos Prieto realizando un levantamiento topográfico en campo",
    },
    {
      imagen: "hero-campo-2.jpg",
      alt: "Trabajo con estación total en terreno de la región del Sumapaz",
    },
    {
      imagen: "hero-campo-3.jpg",
      alt: "Georreferenciación con GPS de doble frecuencia amarrado a bases IGAC",
    },
    {
      imagen: "hero-campo-4.jpg",
      alt: "Trabajo topográfico en campo en Fusagasugá y la región del Sumapaz",
    },
  ],

  // Mensaje de WhatsApp genérico (botón "no encontré mi caso" y CTA de reserva)
  mensajeWhatsAppGenerico:
    "Hola, Carlos. Tengo un caso predial en [Municipio/Vereda] y la situación es: ",

  // --- Los 6 casos -------------------------------------------------------
  // Estructura principal de navegación de la página. Cada caso arma su propio
  // enlace de WhatsApp con un mensaje precargado específico.
  casos: [
    {
      slug: "levantamientos",
      titulo: "Levantamientos topográficos",
      problemaCliente:
        "Necesito medir mi terreno para construir, vender o certificar el área",
      consecuencia:
        "Todo lo que se diseñe o firme sobre su predio parte de esta medición. Si el primer dato está mal, todo lo demás también.",
      detalle:
        "Levantamiento con estación total o GPS RTK, detalle de árboles, postes, alcantarillado y cuerpos hídricos, plano topográfico, informe final y minuta de linderos según norma.",
      mensajeWhatsApp:
        "Hola, Carlos. Necesito un levantamiento topográfico. El predio está en [municipio/vereda] y el área aproximada es: ",
    },
    {
      slug: "subdivisiones",
      titulo: "Subdivisiones, englobes y desenglobes",
      problemaCliente:
        "Quiero dividir mi predio para una herencia, venta o sucesión",
      consecuencia:
        "Una división mal hecha queda en escritura y registro. El error aparece después, cuando corregirlo cuesta más que hacerlo bien.",
      detalle:
        "Subdivisiones en fanegadas o metros cuadrados, loteos, sucesiones, donaciones y pertenencias, con plano y documentos listos para notaría y registro.",
      mensajeWhatsApp:
        "Hola, Carlos. Quiero dividir un predio (herencia/venta/sucesión). Está en [municipio/vereda] y quiero dividirlo en: ",
    },
    {
      slug: "aclaracion-areas",
      titulo: "Aclaración de áreas y verificación de linderos",
      problemaCliente:
        "El área de mi escritura no coincide con el catastro, o tengo dudas de mis linderos",
      consecuencia:
        "Mientras catastro y escritura digan cifras distintas, el predio queda frenado para cualquier trámite o venta.",
      detalle:
        "Verificación de mojones, linderos y área en terreno, comparación con escrituras antiguas y certificado de tradición, informe técnico.",
      mensajeWhatsApp:
        "Hola, Carlos. El área de mi escritura no coincide con el catastro (o tengo un tema de linderos). El predio está en [municipio/vereda]: ",
    },
    {
      slug: "replanteo",
      titulo: "Replanteo de lotes y obra",
      problemaCliente:
        "Voy a construir o lotear y necesito pasar el diseño del plano al terreno",
      consecuencia:
        "Lo que se construye corrido un metro, queda corrido para siempre. El replanteo es lo que garantiza que la obra quede donde dice el plano.",
      detalle:
        "Replanteo de lotes, ejes, cimentaciones, redes y vías; experiencia en urbanizaciones, vías y obra pública de la región.",
      mensajeWhatsApp:
        "Hola, Carlos. Necesito replantear un diseño en terreno (lotes/construcción). El proyecto está en [municipio/vereda]: ",
    },
    {
      slug: "georreferenciacion",
      titulo: "Georreferenciación y planos para trámites",
      problemaCliente:
        "Me piden planos o georreferenciación para un trámite en planeación, catastro o notaría",
      consecuencia:
        "Cada devolución del trámite son semanas perdidas. La mayoría se evitan entregando exactamente lo que la entidad exige.",
      detalle:
        "Georreferenciación según normas IGAC con rastreo satelital de doble frecuencia amarrado a bases IGAC, materialización de mojones, planos y minuta de linderos según resolución vigente.",
      mensajeWhatsApp:
        "Hola, Carlos. Me piden un plano/georreferenciación para un trámite. El predio está en [municipio/vereda] y la entidad es: ",
    },
    {
      slug: "avaluos",
      titulo: "Avalúos urbanos, rurales y peritajes judiciales",
      problemaCliente:
        "¿Necesita un dictamen o valor comercial exacto para respaldar su patrimonio o un proceso legal?",
      consecuencia:
        "En una negociación o disputa judicial, contar con el soporte técnico adecuado marca la diferencia. No deje el valor de sus bienes en manos de terceros: proteja sus intereses con avalúos precisos y peritajes con rigor técnico y cumplimiento legal.",
      detalle:
        "Avalúos urbanos y rurales, peritajes judiciales, control de asentamientos y verticalidad, asesorías prediales. Formación en derecho en curso: soporte técnico que entiende el contexto jurídico del trámite.",
      mensajeWhatsApp:
        "Hola, Carlos. Necesito un avalúo/peritaje judicial. El caso es en [municipio/vereda] y se trata de: ",
    },
  ],

  // --- Sobre mí ------------------------------------------------------------
  // Cita corta destacada (se muestra en grande) + párrafos de trayectoria
  // (se muestran más pequeños, uno debajo del otro).
  sobreMiCita:
    "Mediciones exactas, documentos bien hechos y claridad sobre lo que su caso requiere — aunque no sea lo que usted pensaba que necesitaba.",
  sobreMi: [
    "Soy Carlos Prieto, topógrafo profesional con licencia vigente del Consejo Profesional Nacional de Topografía (No. 01-17928). Llevo más de 17 años midiendo predios en Fusagasugá y la región del Sumapaz: desde fincas familiares que se dividen para una herencia, hasta vías, urbanizaciones y obra pública para alcaldías y consorcios.",
    "Trabajo con georreferenciación según normas IGAC y entrego planos e informes listos para el trámite que necesite: notaría, catastro o planeación. Además, actualmente curso estudios de derecho: entiendo tanto el terreno como el trámite, y eso hace la diferencia en sucesiones, aclaraciones de área y peritajes.",
  ],
  sobreMiImagen: "papa-trabajando-1.png",
  sobreMiImagenAlt: "Carlos Prieto realizando un levantamiento topográfico en campo",

  // --- Equipos ---------------------------------------------------------------
  equipos: [
    {
      nombre: "Estación total Nikon NIVO 2C — calibración certificada",
      descripcion:
        "Verificada por laboratorio bajo la norma ISO/IEC 17025, con certificado de calibración vigente. Precisión angular de 5 segundos: sus linderos no se miden con un equipo cualquiera.",
      imagen: "equipo-estacion.jpg",
    },
    {
      nombre: "GPS de doble frecuencia — amarre a bases IGAC",
      descripcion:
        "Rastreo satelital amarrado a las bases oficiales del IGAC, que es lo que exigen los trámites de georreferenciación ante catastro y planeación.",
      imagen: "equipo-gps.jpg",
    },
    {
      nombre: "Drone y software especializado",
      descripcion:
        "Vuelos con ortofoto para predios grandes o de difícil acceso, y procesamiento en Civil 3D y Pix4D para planos, perfiles y cálculo de volúmenes.",
      imagen: "equipo-software.jpg",
    },
  ],

  // --- Galería -----------------------------------------------------------
  // Planos solo con datos de clientes difuminados: nunca subir cédulas,
  // nombres de clientes, códigos catastrales ni matrículas inmobiliarias.
  galeria: [
    {
      leyenda: "Proyectos en campo",
      descripcion:
        "Levantamientos, subdivisiones, replanteos y georreferenciación en Fusagasugá y la región del Sumapaz: desde el predio de fácil acceso hasta la finca a dos horas a pie, con la misma exactitud y amarrados a las bases oficiales del IGAC.",
      destacado: true,
      // Varias fotos que van rotando solas (igual que el carrusel del hero).
      // Agrega o quita fotos aquí y el carrusel se ajusta solo.
      imagenes: [
        { imagen: "proyecto-lote-1.jpg", alt: "Replanteo de lote para construcción" },
        { imagen: "trabajo-campo-2.jpg", alt: "Levantamiento topográfico en campo" },
        { imagen: "trabajo-campo-3.jpg", alt: "Georreferenciación en terreno con GPS" }, // CAMBIAR: src/assets/img/trabajo-campo-3.jpg
      ],
    },
  ],

  // --- Logo ------------------------------------------------------------------
  logo: "logo.png",

  // --- Footer: CTA de cierre --------------------------------------------------
  footerCtaTitulo: "¿Tiene un proyecto en mente?",
  footerCtaSubtitulo: "Cuénteme su caso y lo oriento directamente por WhatsApp, sin compromiso.",

  // --- SEO ---------------------------------------------------------------
  seo: {
    title: "Topógrafo en Fusagasugá y Sumapaz | ESTOPOGRAFIA COLOMBIA",
    description:
      "Topógrafo en Fusagasugá y el Sumapaz: levantamientos, linderos, subdivisiones y georreferenciación IGAC. 17+ años de experiencia, licencia CPNT vigente.",
    siteUrl: "https://estopografiacolombia.com", // CAMBIAR cuando tengas el dominio definitivo
    ogImage: "/img/og-image.svg",
  },

  // Aviso de tratamiento de datos personales (Ley 1581 de 2012, Colombia).
  avisoPrivacidad: `${NOMBRE_COMERCIAL} trata los datos personales suministrados a través de este sitio (WhatsApp, correo o formularios) conforme a la Ley 1581 de 2012 y sus decretos reglamentarios, únicamente para responder solicitudes y prestar nuestros servicios. Puede ejercer sus derechos de conocer, actualizar, rectificar o suprimir sus datos escribiendo a ${EMAIL}.`,
};

// ----------------------------------------------------------------------------
// Helper: arma un enlace de WhatsApp con mensaje precargado y URL-encodeado.
// ----------------------------------------------------------------------------
export function whatsappUrl(mensaje) {
  return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export default sitio;
