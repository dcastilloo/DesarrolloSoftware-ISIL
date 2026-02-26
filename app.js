/* =========================================================
   Grafo de Cursos (vis-network)
   - Layout jerárquico (DAG) para evitar apilamiento
   - 5 cursos raíz fijos (roots)
   - Dependencias solo entre cursos presentes en la currícula
   - Click en nodo => muestra sumilla + temas (texto embebido)
   ========================================================= */

/* =========================================================
   DATASET
   Pega aquí TU arreglo COURSES completo.
   Formato esperado por curso:
   {
     code: "30160",
     name: "INTRODUCCIÓN A LA PROGRAMACIÓN",
     credits: 4,
     sumilla: "...",
     temas: "...",
     predecessors: ["30010", "30030"]   // cursos que se recomiendan antes (predecesoras)
   }
   ========================================================= */
const COURSES = [
  /* PEGA AQUÍ TU LISTA REAL DE CURSOS */
  /* Ejemplo mínimo (borra estos 2 cuando pegues el tuyo):
  { code:"30160", name:"INTRODUCCIÓN A LA PROGRAMACIÓN", credits:4, sumilla:"...", temas:"...", predecessors:[] },
  { code:"30030", name:"BASE DE DATOS I", credits:4, sumilla:"...", temas:"...", predecessors:["30160"] },
  */
];

/* =========================================================
   ROOTS (cursos obligatorios al inicio)
   ========================================================= */
const ROOTS = new Set([
  "30041", // COMPETENCIAS INTRAPERSONALES
  "30089", // DISEÑO Y DESARROLLO WEB
  "30092", // DISEÑO Y PROGRAMACION DE BASE DE DATOS
  "30160", // INTRODUCCION A LA PROGRAMACION
  "30604"  // MATEMATICA APLICADA
]);

/* =========================================================
   Helpers
   ========================================================= */
const byCode = new Map(COURSES.map(c => [c.code, c]));

function labelFor(course){
  const cr = (course.credits === null || course.credits === undefined) ? "—" : String(course.credits);
  // 3 líneas: código / nombre / créditos
  return `${course.code}\n${course.name}\nCréditos: ${cr}`;
}

function buildEdges(){
  // Solo dependencias entre cursos presentes en COURSES
  const present = new Set(COURSES.map(c => c.code));
  const edges = [];

  for (const c of COURSES){
    const preds = Array.isArray(c.predecessors) ? c.predecessors : [];
    for (const p of preds){
      if (!present.has(p)) continue; // ignora dependencias fuera de currícula
      edges.push({ from: p, to: c.code, arrows: "to" });
    }
  }
  return edges;
}

function computeLevelsFromRoots() {
  // Calcula nivel (profundidad) desde ROOTS, usando dependencias internas
  const present = new Set(COURSES.map(c => c.code));
  const adj = new Map([...present].map(k => [k, []]));

  for (const e of buildEdges()) {
    adj.get(e.from).push(e.to);
  }

  const level = new Map([...present].map(k => [k, null]));
  const q = [];

  // roots => 0
  for (const code of present) {
    if (ROOTS.has(code)) {
      level.set(code, 0);
      q.push(code);
    }
  }

  while (q.length) {
    const u = q.shift();
    const lu = level.get(u);
    for (const v of adj.get(u) || []) {
      const lv = level.get(v);
      const candidate = lu + 1;
      if (lv === null || candidate > lv) {
        level.set(v, candidate);
        q.push(v);
      }
    }
  }

  // Si un nodo no es alcanzable desde roots, lo dejamos en 0 (igual se muestra)
  for (const code of present) {
    if (level.get(code) === null) level.set(code, 0);
  }

  return level;
}

function topoOrder(){
  // Orden topológico solo con dependencias internas
  const nodes = new Set(COURSES.map(c => c.code));
  const inDeg = new Map([...nodes].map(n => [n, 0]));
  const adj = new Map([...nodes].map(n => [n, []]));

  for (const e of buildEdges()){
    adj.get(e.from).push(e.to);
    inDeg.set(e.to, (inDeg.get(e.to) || 0) + 1);
  }

  const q = [];
  // Preferencia: que roots aparezcan primero
  for (const n of nodes){
    if ((inDeg.get(n) || 0) === 0) q.push(n);
  }
  q.sort((a,b) => (ROOTS.has(b) - ROOTS.has(a)) || a.localeCompare(b));

  const order = [];
  while (q.length){
    const n = q.shift();
    order.push(n);
    for (const v of adj.get(n)){
      inDeg.set(v, inDeg.get(v) - 1);
      if (inDeg.get(v) === 0) q.push(v);
    }
  }

  // Si hay ciclos/datos raros, agrega los faltantes
  if (order.length !== nodes.size){
    for (const n of nodes){
      if (!order.includes(n)) order.push(n);
    }
  }
  return order;
}

/* =========================================================
   Build graph
   ========================================================= */
const container = document.getElementById("network");

if (!COURSES.length) {
  container.innerHTML = `
    <div style="padding:18px;color:#e5e7eb;font-family:ui-sans-serif">
      <strong>Falta el dataset.</strong><br>
      Abre <code>app.js</code> y pega tu arreglo <code>COURSES</code> completo.
    </div>`;
  throw new Error("COURSES vacío: pega tu dataset en app.js");
}

const LEVELS = computeLevelsFromRoots();

const nodes = new vis.DataSet(
  COURSES.map(c => {
    const isRoot = ROOTS.has(c.code);

    return {
      id: c.code,
      label: labelFor(c),
      shape: "box",
      margin: { top: 10, right: 12, bottom: 10, left: 12 },
      widthConstraint: { maximum: 260 },
      font: { face: "ui-sans-serif", size: 14, color: "#E5E7EB", multi: "md" },

      level: LEVELS.get(c.code) ?? 0,

      // Roots anclados
      fixed: isRoot ? { x: true, y: true } : false,
      ...(isRoot ? { y: -300 } : {}),

      color: isRoot
        ? { background: "rgba(96,165,250,0.16)", border: "rgba(96,165,250,0.55)" }
        : { background: "rgba(34,197,94,0.12)", border: "rgba(34,197,94,0.45)" }
    };
  })
);

// Distribuir roots en X (fila superior)
const rootList = [...ROOTS].filter(code => nodes.get(code));
const spacing = 320;
const startX = -((rootList.length - 1) * spacing) / 2;
rootList.forEach((code, i) => {
  nodes.update({ id: code, x: startX + i * spacing, y: -300 });
});

const edges = new vis.DataSet(
  buildEdges().map((e, idx) => ({
    id: `e${idx}`,
    ...e,
    color: { color: "rgba(156,163,175,0.55)" },
    width: 1,
    smooth: { type: "cubicBezier", forceDirection: "vertical", roundness: 0.4 }
  }))
);

const data = { nodes, edges };

const options = {
  layout: {
    hierarchical: {
      enabled: true,
      direction: "UD",
      sortMethod: "directed",
      nodeSpacing: 260,
      levelSeparation: 220,
      treeSpacing: 260
    }
  },
  physics: { enabled: false },
  interaction: {
    hover: true,
    tooltipDelay: 120,
    dragNodes: true,
    dragView: true,
    zoomView: true
  }
};

const network = new vis.Network(container, data, options);

/* =========================================================
   Panel binding
   ========================================================= */
const el = (id) => document.getElementById(id);

function renderOrderList(){
  const orderEl = el("pOrder");
  orderEl.innerHTML = "";
  const order = topoOrder();
  for (const code of order){
    const c = byCode.get(code);
    const li = document.createElement("li");
    li.textContent = c ? `${c.code} — ${c.name}` : code;
    orderEl.appendChild(li);
  }
}

function setPanel(course){
  el("badge").textContent = ROOTS.has(course.code) ? "inicio (fijo)" : "activo";
  el("pCode").textContent = course.code;
  el("pName").textContent = course.name;
  el("pCredits").textContent = (course.credits == null ? "—" : String(course.credits));

  const present = new Set(COURSES.map(c => c.code));
  const preds = (course.predecessors || [])
    .filter(pc => present.has(pc)) // SOLO internos
    .map(pc => {
      const p = byCode.get(pc);
      return p ? `${pc} — ${p.name}` : pc;
    });

  el("pPred").textContent = preds.length ? preds.join(" | ") : "—";

  // Seguridad: mostrar como texto plano
  el("pSumilla").textContent = course.sumilla || "—";
  el("pTemas").textContent = course.temas || "—";
}

network.on("click", (params) => {
  if (!params.nodes || params.nodes.length === 0) return;
  const code = params.nodes[0];
  const course = byCode.get(code);
  if (!course) return;
  setPanel(course);
});

renderOrderList();

/* =========================================================
   UI actions
   ========================================================= */
el("fitBtn").addEventListener("click", () => network.fit({ animation: true }));

el("resetBtn").addEventListener("click", () => {
  network.setOptions(options);
  network.fit({ animation: true });
});

el("search").addEventListener("input", (ev) => {
  const q = (ev.target.value || "").trim().toLowerCase();

  // Restablecer
  if (!q){
    nodes.forEach(n => nodes.update({ id: n.id, hidden: false }));
    edges.forEach(e => edges.update({ id: e.id, hidden: false }));
    return;
  }

  // Filtrar nodos por código o nombre
  const visible = new Set();
  for (const c of COURSES){
    const hay = (c.code + " " + c.name).toLowerCase();
    if (hay.includes(q)) visible.add(c.code);
  }

  nodes.forEach(n => nodes.update({ id: n.id, hidden: !visible.has(n.id) }));

  // Ocultar edges cuyos extremos no están visibles
  edges.forEach(e => {
    const show = visible.has(e.from) && visible.has(e.to);
    edges.update({ id: e.id, hidden: !show });
  });
});
