
const cursos = {
  "GLOBALIZACIÓN Y REALIDAD NACIONAL": [],
  "LENGUAJE Y COMUNICACIÓN I": [],
  "LENGUAJE Y COMUNICACIÓN II": ["LENGUAJE Y COMUNICACIÓN I"],
  "MATEMÁTICA BÁSICA": [],
  "MATEMÁTICA APLICADA A LOS NEGOCIOS": ["MATEMÁTICA BÁSICA"],
  "ESTADÍSTICA BÁSICA PARA LOS NEGOCIOS": ["MATEMÁTICA BÁSICA"],
  "ESTADÍSTICA PARA LA GESTIÓN EMPRESARIAL I": ["ESTADÍSTICA BÁSICA PARA LOS NEGOCIOS"],
  "ESTADÍSTICA PARA LA GESTIÓN EMPRESARIAL II": ["ESTADÍSTICA PARA LA GESTIÓN EMPRESARIAL I"],
  "FUNDAMENTOS DE ADMINISTRACIÓN / MANAGEMENT FUNDAMENTALS": ["ECONOMÍA Y EMPRESA"],
  "ECONOMÍA Y EMPRESA": [],
  "INTRODUCCIÓN A LAS FINANZAS": ["MATEMÁTICA APLICADA A LOS NEGOCIOS"],
  "CONTABILIDAD GENERAL": ["MATEMÁTICA APLICADA A LOS NEGOCIOS"],
  "COSTOS Y PRESUPUESTOS": ["CONTABILIDAD GENERAL"],
  "ELABORACIÓN DE ESTADOS FINANCIEROS": ["INTRODUCCIÓN A LAS FINANZAS", "COSTOS Y PRESUPUESTOS"],
  "PLANEAMIENTO ESTRATÉGICO I / STRATEGIC PLANNING I": ["FUNDAMENTOS DE ADMINISTRACIÓN / MANAGEMENT FUNDAMENTALS"],
  "DISEÑO ORGANIZACIONAL / ORGANIZATIONAL DESIGN": ["PLANEAMIENTO ESTRATÉGICO I / STRATEGIC PLANNING I"],
  "PLANEAMIENTO ESTRATÉGICO II / STRATEGIC PLANNING II": ["DISEÑO ORGANIZACIONAL / ORGANIZATIONAL DESIGN"]
};

const estadoCursos = {};
const contenedor = document.getElementById("malla");

for (const [curso, requisitos] of Object.entries(cursos)) {
  const div = document.createElement("div");
  div.className = "curso";
  div.textContent = curso;
  div.dataset.nombre = curso;

  if (requisitos.length === 0) {
    div.classList.add("activo");
  }

  div.addEventListener("click", () => {
    if (!div.classList.contains("activo") || div.classList.contains("aprobado")) return;
    div.classList.add("aprobado");
    estadoCursos[curso] = true;
    actualizarCursos();
  });

  contenedor.appendChild(div);
}

function actualizarCursos() {
  const cursosDivs = document.querySelectorAll(".curso");

  cursosDivs.forEach(div => {
    const nombre = div.dataset.nombre;
    const requisitos = cursos[nombre];

    const desbloqueado = requisitos.every(req => estadoCursos[req]);

    if (desbloqueado && !div.classList.contains("aprobado")) {
      div.classList.add("activo");
    }
  });
}
