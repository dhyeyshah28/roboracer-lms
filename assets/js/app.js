/* Roboracer LMS portal – shared data + UI helpers (no build step, no dependencies) */
const ICONS = {
  slides: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4M8 20h8M7.5 12l3-3 2.5 2 3.5-4"/>',
  video: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.3v5.4l4.6-2.7z"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>',
  notes: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h4"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11.5V16c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5M22 9v6"/>',
  chat: '<path d="M4 5h16v11H10l-5 4v-4H4z"/><path d="M8 9h8M8 12h5"/>',
  grade: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 3v2h6V3M8.5 13l2.5 2.5 4.5-5"/>',
  palette: '<path d="M12 3a9 9 0 100 18c1.6 0 2.2-1.100 1.600-2.200s0-2.300 1.600-2.300H18a3 3 0 003-3c0-5.500-4-10.500-9-10.500z"/><circle cx="8" cy="11" r="1"/><circle cx="12" cy="7.500" r="1"/><circle cx="16" cy="11" r="1"/>',
  sliders: '<path d="M4 7h9M17 7h3M4 17h3M11 17h9"/><circle cx="15" cy="7" r="2"/><circle cx="9" cy="17" r="2"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M15 9V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2h3"/>',
  upload: '<path d="M12 16V4M7 9l5-5 5 5M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.500 4-6 8-6s7 1.500 8 6"/>',
  users: '<circle cx="9" cy="8" r="3.500"/><path d="M2 20c.8-4 3.500-5.500 7-5.500s6.200 1.500 7 5.500M16 4.500a3.500 3.500 0 010 7M18 14.800c2.100.7 3.400 2.400 3.900 5.200"/>',
  flag: '<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
  check: '<path d="M5 12.500l4.500 4.500L19 7"/>',
  book: '<path d="M4 4.500A2.500 2.500 0 016.500 2H20v16H6.500A2.500 2.500 0 004 20.500zM4 20.500A2.500 2.500 0 006.500 23H20"/>',
  link: '<path d="M10 14a4 4 0 005.700 0l3-3a4 4 0 00-5.700-5.700l-1 1M14 10a4 4 0 00-5.700 0l-3 3a4 4 0 005.700 5.700l1-1"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0014 0M12 18v3"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.500 10.900c.6.500 1 1.200 1 2.100h5c0-.9.400-1.600 1-2.100A6 6 0 0012 3z"/>',
  building: '<path d="M4 21V5l8-2v18M12 8h8v13M8 8h.01M8 12h.01M8 16h.01M16 12h.01M16 16h.01M3 21h18"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5M3 17.500l9 5 9-5" opacity=".6"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.900 4.900l2.100 2.100M17 17l2.100 2.100M4.900 19.100L7 17M17 7l2.100-2.100"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  open: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
  shield: '<path d="M12 3l8 3v6c0 4.500-3.200 8-8 9-4.800-1-8-4.500-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  book2: '<path d="M4 19V5a2 2 0 012-2h13v16H6a2 2 0 00-2 2 2 2 0 002 2h13"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
};
const ic = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ""}</svg>`;

const COURSES = [
  { id: "roboracer-4w", title: "Roboracer – 4 Weeks Course", org: "Roboracer", code: "04weeks", weeks: 4, mods: 2, type: "core", starts: "Oct 5, 2026", ends: "Nov 2, 2026", effort: "8 hours per week",
    blurb: "A compact introduction: ROS basics, the Roboracer vehicle, reactive methods and a first race." },
  { id: "roboracer-10w", title: "Roboracer – 10 Weeks Course", org: "Roboracer", code: "10weeks", weeks: 10, mods: 4, type: "core", starts: "Nov 2, 2026", ends: "Jan 11, 2027", effort: "12 hours per week",
    blurb: "Adds mapping, localization and planning to the core lectures, with lab assignments." },
  { id: "roboracer-15w", title: "Roboracer – 15 Weeks Course", org: "Roboracer", code: "15weeks", weeks: 15, mods: 7, type: "core", starts: "Sep 14, 2026", ends: "Dec 28, 2026", effort: "20 hours per week",
    blurb: "The full course: perception, planning, control, vision, special topics and the Grand Prix." },
  { id: "penn", title: "Roboracer – Penn", org: "University-of-Pennsylvania", code: "F110", weeks: 15, mods: 7, type: "university", img: "assets/logos/penn-wide.png", starts: "Jan 20, 2027", ends: "May 5, 2027", effort: "20 hours per week",
    blurb: "The original Penn offering of the Roboracer course, taught by the course authors." },
  { id: "tum", title: "Roboracer – TUM", org: "Technical-University-of-Munich", code: "F110", weeks: 10, mods: 4, type: "university", starts: "Oct 19, 2026", ends: "Dec 28, 2026",
    effort: "12 hours per week", wm: ["TUM", "Technische Universität München"], color: "#0065bd", blurb: "Roboracer taught at the Technical University of Munich." },
  { id: "ucsd", title: "Roboracer – UC San Diego", org: "UC-SanDiego", code: "10weeks", weeks: 10, mods: 4, type: "university", starts: "Jan 4, 2027", ends: "Mar 15, 2027", effort: "12 hours per week",
    wm: ["UC San Diego", "University of California"], color: "#182b49", blurb: "Roboracer taught at UC San Diego." },
];

const MODULES = [
  ["Overview & Introduction", [["Introduction"], ["Syllabus"]]],
  ["Module A: Foundations of Roboracer", [["Lecture 1 – Introduction to the Roboracer Autonomous Vehicle", "Lab Assignments"], ["Lecture 2 – Automatic Emergency Braking", "Lab Assignments"], ["Lecture 3 – Rigid Body Transformation"], ["Lecture 4 – PID Controller & Laplace Domain", "Lab Assignments"]]],
  ["Module B: Reactive Methods", [["Lecture 5 – Car Building and VESC Tuning"], ["Lecture 6 – Reactive Methods: Follow the Gap & Variants", "Lab Assignments"], ["Lecture 7 – Race Preparation"], ["Lecture 8 – Race 1", "Competition Performance"]]],
  ["Module C: Mapping & Localization", [["Lecture 9 – Occupancy Grids & SLAM"], ["Lecture 10 – Particle Filter Localization", "Lab Assignments"]]],
  ["Module D: Planning", [["Lecture 11 – Path Planning & Racelines"], ["Lecture 12 – Trajectory Tracking (Pure Pursuit, MPC)", "Lab Assignments"]]],
  ["Module E: Vision", [["Lecture 13 – Object Detection"], ["Lecture 14 – GPU Acceleration for ML"]]],
  ["Module F: Special Topics", [["Lecture 15 – Sim-to-Real & HIL Development"], ["Lecture 16 – Ethics of Autonomous Systems"]]],
  ["Module G: Roboracer Grand Prix", [["Head-to-Head Racing", "Competition Performance"]]],
];
const outline = c => MODULES.slice(0, 1 + c.mods);
const lectureCount = c => outline(c).flatMap(m => m[1]).length;

const STAFF = { name: "Prof. Dr. Rahul Mangharam", img: "assets/logos/rahul-mangharam.png",
  bio: "Rahul Mangharam is an Associate Professor in the Department of Electrical and Systems Engineering at the University of Pennsylvania. He is a founding member of the PRECISE Center and directs the Safe Autonomous Systems Lab at Penn. His research is at the intersection of formal methods, machine learning and controls for medical devices, energy efficient buildings and autonomous systems." };

const LEARN = ["Introduction to the ROS framework", "Refresh your control theory knowledge", "Control theory and control application", "Introduction to a simulator for autonomous driving",
  "Fast and secure path planning", "Calculating the raceline for a given track", "Different methods for detecting objects", "Deploying software on real hardware",
  "GPU acceleration for machine learning", "Differences between SIL and HIL development", "Head-to-head racing", "Reasoning about situations with moral content"];
const learnFor = c => LEARN.slice(0, c.weeks <= 4 ? 5 : c.weeks <= 10 ? 8 : 12);

function faqFor(c) {
  const last = MODULES[c.mods][0].split(":")[0];
  const uni = c.type === "university";
  return [
    ["How long is the course and how much time will it take?", `${c.title} runs ${c.weeks} weeks with an estimated effort of ${c.effort}. It covers the overview plus Modules A–${last.slice(-1)} (${lectureCount(c)} units).`],
    ["When does it start, and can I join late?", `Classes start ${c.starts} and end ${c.ends}. You can enroll at any time in between and work through the material at your own pace. After the end date the content is archived.`],
    ["Do I need to buy and build the Roboracer car?", "No. Everything can be completed in the simulator. The 1/10th-scale car is an optional add-on that gives you insight into deploying software on real hardware" + (c.weeks <= 4 ? ", and this short course is designed to work fully in simulation." : ".")],
    ["How do I enroll and get help?", uni ? `Register as a student, sign in and click “Enroll now”. Course questions go to the discussion group, where ${c.org.replace(/-/g, " ")} staff and other students respond.` : "Register as a student, sign in and click “Enroll now”. Ask questions in the discussion group; the course staff and other learners will help you."],
    ["How am I graded?", c.weeks <= 4 ? "Through quizzes and short lab assignments. Instructors define the exact weights and pass threshold for their cohort." : "Through quizzes, lab assignments and competition performance in the race modules. Instructors define the exact weights and pass threshold for their cohort."],
  ];
}

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const load = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
const drop = k => { try { localStorage.removeItem(k); } catch (e) {} };
const user = () => { try { const u = JSON.parse(load("user")); return u && u.name ? u : null; } catch (e) { return null; } };
const esc = s => String(s).replace(/[&<>"']/g, m => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

function thumb(c) {
  if (c.type === "core") return `<div class="thumb"><img class="sq" src="assets/logos/RoboRacer_SquareLogo.png" alt="Roboracer logo"><div class="weeks">${c.weeks} Weeks<br>Course</div></div>`;
  if (c.img) return `<div class="thumb"><img class="uni" src="${c.img}" alt="${esc(c.org)} logo"></div>`;
  return `<div class="thumb"><div class="wm" style="color:${c.color}">${c.wm[0]}<small>${c.wm[1]}</small></div></div>`;
}

function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove("show"), 2800);
}

/* ---------- auth modal ---------- */
let A = { tab: "in", role: "student" };
function roleCards() {
  return `<div class="roles" role="radiogroup" aria-label="I am a">
    <button type="button" class="role ${A.role === "student" ? "on" : ""}" data-role="student" role="radio" aria-checked="${A.role === "student"}">${ic("cap")}<b>Student</b><small>Take courses, track progress, join discussions</small></button>
    <button type="button" class="role ${A.role === "instructor" ? "on" : ""}" data-role="instructor" role="radio" aria-checked="${A.role === "instructor"}">${ic("users")}<b>Instructor</b><small>Teach Roboracer at your university or lab</small></button></div>`;
}
function renderAuth() {
  const reg = A.tab === "reg", ins = A.role === "instructor";
  let f = "";
  if (reg) {
    f += `<label>Full name<input name="name" required autocomplete="name"></label>`;
    f += `<label>${ins ? "Institutional email" : "Email"}<input type="email" name="email" required autocomplete="email"></label>`;
    if (ins) f += `<label>University / lab<input name="inst" required placeholder="e.g. University of Pennsylvania"></label>
      <label>Which course length are you interested in?<select name="interest"><option>4 weeks</option><option selected>10 weeks</option><option>15 weeks</option><option>Custom selection of lectures</option></select></label>`;
    else f += `<label>University / school <span style="font-weight:400">(optional)</span><input name="inst"></label>`;
    f += `<label>Password<input type="password" name="pw" required minlength="8" autocomplete="new-password" placeholder="At least 8 characters"></label>`;
  } else {
    f += `<label>Email<input type="email" name="email" required autocomplete="email"></label><label>Password<input type="password" name="pw" required autocomplete="current-password"></label>`;
  }
  const title = reg ? (ins ? "Register as an instructor" : "Create your student account") : "Welcome back";
  const hint = reg ? (ins ? "Get your own rebrandable copy of the course, then plan it in the instructor dashboard." : "Free access to every lecture, quiz and discussion.") : "Sign in to continue.";
  $("#mbody").innerHTML = `<div class="mtabs"><button data-tab="in" class="${reg ? "" : "on"}">Sign in</button><button data-tab="reg" class="${reg ? "on" : ""}">Register</button></div>
  <form class="mform" id="authform"><div class="lbl">I am a…</div>${roleCards()}<h3 id="mtitle">${title}</h3><p class="hint">${hint}</p>${f}
  <button class="btn primary lg" type="submit">${reg ? (ins ? "Register as instructor" : "Create student account") : "Sign in as " + A.role}</button></form>`;
}
function openAuth(tab = "in", role = "student") { A = { tab, role }; renderAuth(); $("#modal").classList.add("open"); setTimeout(() => $("#authform input")?.focus(), 50); }
function closeAuth() { $("#modal").classList.remove("open"); }
window.openAuth = openAuth;

function renderUser() {
  const u = user(), box = $("#authbox");
  if (!u) { box.innerHTML = `<button class="btn" id="reg">Register</button><button class="btn primary" id="sin">Sign in</button>`; $("#reg").onclick = () => openAuth("reg"); $("#sin").onclick = () => openAuth("in"); }
  else { box.innerHTML = `<span class="who"><i>${esc(u.name[0].toUpperCase())}</i><span>${esc(u.name)}</span><em>${u.role}</em></span><button class="btn sm" id="out">Sign out</button>`;
    $("#out").onclick = () => { drop("user"); renderUser(); document.dispatchEvent(new Event("authchange")); toast("Signed out"); }; }
  const my = $("#mynav"); if (my) { my.hidden = !u; if (u) { my.textContent = u.role === "instructor" ? "My dashboard" : "My courses"; my.href = u.role === "instructor" ? "instructors.html#studio" : "index.html#mycourses"; } }
}

function shell(active) {
  const nav = [["index.html#courses", "Courses", "courses"], ["index.html#discover", "Platform", "platform"], ["instructors.html", "For Instructors", "instructors"], ["instructors.html#faq", "Help", "help"]];
  document.body.insertAdjacentHTML("afterbegin", `
  <header><div class="wrap nav">
    <a class="logo" href="index.html" aria-label="Roboracer home"><img src="assets/logos/logo-black-gradient.png" alt="Roboracer"></a>
    <nav id="nav">${nav.map(n => `<a href="${n[0]}" class="${n[2] === active ? "active" : ""}">${n[1]}</a>`).join("")}<a id="mynav" hidden></a></nav>
    <div class="auth"><button class="icon-btn" id="theme" title="Toggle theme" aria-label="Toggle theme">◐</button><span id="authbox" style="display:flex;gap:8px;align-items:center"></span>
      <button class="icon-btn menu-toggle" id="menu" aria-label="Menu">☰</button></div></div></header>`);
  document.body.insertAdjacentHTML("beforeend", `
  <footer><div class="wrap"><span class="l"><img src="assets/logos/logo-black-gradient.png" alt="Roboracer"></span>
    <span>© Roboracer. All rights reserved except where noted.</span>
    <span class="r">Powered by <a href="https://openedx.org" target="_blank" rel="noopener"><img src="assets/logos/openedx.png" alt="Open edX"></a></span></div></footer>
  <div class="modal" id="modal"><div class="mbox" role="dialog" aria-modal="true" aria-labelledby="mtitle">
    <div class="mtop"><img src="assets/logos/logo-black-gradient.png" alt="Roboracer"><button class="icon-btn mclose" id="mx" aria-label="Close">✕</button></div><div id="mbody"></div></div></div>
  <div class="toast" id="toast" role="status"></div>`);

  const th = load("theme"); if (th) document.documentElement.dataset.theme = th;
  $("#theme").onclick = () => { const d = document.documentElement; const dark = getComputedStyle(d).getPropertyValue("--bg").trim() === "#0e0e18"; d.dataset.theme = dark ? "light" : "dark"; save("theme", d.dataset.theme); };
  $("#menu").onclick = () => $("#nav").classList.toggle("open");
  renderUser();
  $("#mx").onclick = closeAuth;
  $("#modal").onclick = e => { if (e.target.id === "modal") closeAuth(); };
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeAuth(); });
  $("#mbody").addEventListener("click", e => {
    const r = e.target.closest("[data-role]"); if (r) { A.role = r.dataset.role; renderAuth(); }
    const t = e.target.closest("[data-tab]"); if (t) { A.tab = t.dataset.tab; renderAuth(); }
  });
  $("#mbody").addEventListener("submit", e => {
    e.preventDefault(); const f = new FormData(e.target), email = String(f.get("email")), ins = A.role === "instructor";
    const u = { name: String(f.get("name") || email.split("@")[0]), email, role: A.role, inst: String(f.get("inst") || "") };
    save("user", JSON.stringify(u)); renderUser(); document.dispatchEvent(new Event("authchange"));
    if (A.tab === "reg") {
      $("#mbody").innerHTML = `<div class="done"><div class="ok">${ic("check")}</div><h3 style="margin:0 0 6px">You're in, ${esc(u.name.split(" ")[0])}!</h3>
        <p style="color:var(--muted);margin:0 0 20px">${ins ? "Your instructor profile is ready. Plan your course, choose your lectures and set up your branding in the instructor dashboard." : "Your student account is ready. Pick a course and hit “Enroll now” to get started."}</p>
        <a class="btn primary lg" href="${ins ? "instructors.html#studio" : "index.html#courses"}" id="go">${ins ? "Open instructor dashboard" : "Browse courses"} ${ic("arrow")}</a></div>`;
      $("#go").onclick = closeAuth;
    } else {
      closeAuth(); toast(`Signed in as ${A.role}`);
      if (ins && !location.pathname.endsWith("instructors.html")) location.href = "instructors.html#studio";
    }
  });
  document.addEventListener("click", e => {
    const b = e.target.closest(".acc>button"); if (b) b.parentElement.classList.toggle("open");
    const t = e.target.closest(".tabs button"); if (t) { const root = t.closest("[data-tabs]"); $$(".tabs button", root).forEach(x => x.classList.toggle("on", x === t)); $$(":scope .tabpane", root).forEach(p => p.classList.toggle("on", p.id === t.dataset.tab)); }
    const open = e.target.closest("[data-auth]"); if (open) { e.preventDefault(); const [tab, role] = open.dataset.auth.split(":"); openAuth(tab, role); }
  });
}
window.requireSignIn = () => { if (user()) return true; openAuth("in", "student"); toast("Please sign in first"); return false; };

/* ---------- course chatbot (rule-based, scoped to one course) ---------- */
function lev(a, b) {
  if (a === b) return 0; const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) { const cur = [i]; for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
  return prev[n];
}
function fuzzyMatch(rules, q) {
  const words = q.toLowerCase().split(/[^a-z']+/).filter(w => w.length > 3);
  let best = null, bestD = Infinity;
  for (const r of rules) for (const k of r.kws || []) for (const w of words) {
    if (w[0] !== k[0] || Math.abs(w.length - k.length) > 2) continue;
    const thresh = k.length <= 5 ? 1 : 2;
    const d = lev(w, k);
    if (d <= thresh && d < bestD) { bestD = d; best = r; }
  }
  return best;
}
function runRules(rules, qRaw, fallback) {
  const q = qRaw.toLowerCase().trim();
  for (const r of rules) if (r.re.test(q)) return r.an();
  const m = fuzzyMatch(rules, q);
  if (m) return m.an();
  return fallback();
}
function courseRules(c) {
  const org = c.org.replace(/-/g, " "), uniStaff = c.type === "university" && c.id !== "penn";
  return [
    { re: /\b(hi|hello|hey|yo|good (morning|afternoon|evening))\b/, kws: ["hello"], an: () => ({ html: `Hi! Ask me about <b>${esc(c.title)}</b> — duration, schedule, topics, enrollment, grading, prerequisites or staff.` }) },
    { re: /\b(how are you|how'?s it going|who are you|what are you|are you (a |an )?(bot|robot|ai|human))\b/, an: () => ({ html: `I'm doing well, thanks for asking! I'm a simple assistant that only knows about <b>${esc(c.title)}</b> — what would you like to know?` }) },
    { re: /\b(how long|duration|weeks?|length|how many weeks)\b/, kws: ["duration", "weeks", "length"], an: () => ({ html: `${esc(c.title)} runs <b>${c.weeks} weeks</b> (${esc(c.effort)}), with ${lectureCount(c)} units across ${outline(c).length} modules.` }) },
    { re: /\b(start|end|when (does|is)|date|schedule|deadline)\b/, kws: ["schedule", "start", "date"], an: () => ({ html: `Classes start <b>${esc(c.starts)}</b> and run through <b>${esc(c.ends)}</b>. You can enroll any time before it ends.` }) },
    { re: /\b(effort|hours?|workload|time commitment|how much time)\b/, kws: ["effort", "hours", "workload"], an: () => ({ html: `Plan for about <b>${esc(c.effort)}</b> on this course.` }) },
    { re: /\b(prerequisite|background|beginner|level|need to know|experience|skills? required)\b/, kws: ["prerequisite", "background", "beginner", "experience"], an: () => ({ html: `This isn't a beginner course — it's best suited for graduate level, or at least a senior undergraduate level.` }) },
    { re: /\b(hardware|the car|robot|build|buy|simulator|simulation|equipment)\b/, kws: ["hardware", "simulator", "equipment"], an: () => ({ html: `No purchase is required — everything works in the simulator. The 1/10th-scale Roboracer car is an optional add-on.` }) },
    { re: /\b(learn|topics?|cover|curriculum|content)\b/, kws: ["topics", "curriculum", "content"], an: () => ({ html: `You'll learn:<br>${learnFor(c).slice(0, 6).map(x => "• " + esc(x)).join("<br>")}${learnFor(c).length > 6 ? "<br>…see the full list below." : ""}`, cta: [{ label: "Open the About tab", tab: "t1" }] }) },
    { re: /\b(module|lecture|unit|outline|syllabus)\b/, kws: ["module", "lecture", "outline", "syllabus"], an: () => ({ html: `The outline has <b>${outline(c).length} modules</b> and <b>${lectureCount(c)} units</b>: ${outline(c).map(m => esc(m[0])).join(", ")}.`, cta: [{ label: "Open the Course outline tab", tab: "t2" }] }) },
    { re: /\b(enroll|enrol|sign up|signup|register|join|get started|how do i start)\b/, kws: ["enroll", "register", "signup"], an: () => ({ html: `Click <b>Enroll now</b> at the top of this page — you'll be asked to sign in or register as a student first. It's free.`, cta: [{ label: "Scroll to Enroll now", scrollTop: true }] }) },
    { re: /\b(cost|price|free|pay|licen[cs]e|money|fee)\b/, kws: ["free", "price", "fee"], an: () => ({ html: `${esc(c.title)} is completely free, and instructors can copy it without any licensing.` }) },
    { re: /\b(grade|grading|exam|quiz|pass|cheat|honor|assessment)\b/, kws: ["grading", "exam", "assessment"], an: () => ({ html: `Grading is based on quizzes and lab work${c.weeks > 5 ? ", plus race or competition performance" : ""}. Instructors set the exact weights and pass mark.`, cta: [{ label: "Open the Logistics tab", tab: "t4" }] }) },
    { re: /\b(staff|instructors?|teachers?|who teaches|professors?|authors?|tas?\b|teaching assistants?)\b/, kws: ["instructor", "teacher", "professor", "author"], an: () => ({ html: `${esc(STAFF.name)} leads this course${uniStaff ? `, with local instructors from ${esc(org)}` : ""}. The course is also designed to need almost no teaching assistants.`, cta: [{ label: "Open the Staff tab", tab: "t3" }] }) },
    { re: /\b(discuss|stuck|contact|ask someone|forum|community)\b/, kws: ["discussion", "forum", "contact"], an: () => ({ html: `Use the discussion group linked from the course to ask questions — course staff and other students answer there.` }) },
    { re: /\b(certificate|credential|credit)\b/, kws: ["certificate", "credential"], an: () => ({ html: `There's no certificate built in — check with your instructor about credit or completion recognition at your institution.` }) },
    { re: /\b(about|overview|summary|tell me more|what is this|describe|details|info)\b/, kws: ["overview", "summary", "describe"], an: () => ({ html: `${esc(c.blurb)} It runs <b>${c.weeks} weeks</b> (${esc(c.effort)}) and covers ${learnFor(c).slice(0, 3).map(esc).join(", ")}, among other topics.`, cta: [{ label: "Open the Course outline tab", tab: "t2" }] }) },
    { re: /\b(thank|thanks|thx|bye|goodbye|see ya)\b/, an: () => ({ html: `You're welcome! Good luck with ${esc(c.title)}.` }) },
  ];
}
function platformRules() {
  return [
    { re: /\b(hi|hello|hey|yo|good (morning|afternoon|evening))\b/, an: () => ({ html: `Hi! I can help you find a course, explain enrollment or point you to the instructor guide. Open a course page and I'll switch to answering questions about that specific course.` }) },
    { re: /\b(how are you|how'?s it going|who are you|what are you|are you (a |an )?(bot|robot|ai|human))\b/, an: () => ({ html: `Doing well, thanks! I'm a simple assistant for the Roboracer platform — ask me how to find or teach a course.` }) },
    { re: /\b(find|browse|course|catalog|list|search)\b/, kws: ["browse", "catalog", "search"], an: () => ({ html: `Browse all courses in the Courses section on the home page — search, filter by institution or duration, and sort them.`, cta: [{ label: "Browse courses", href: "index.html#courses" }] }) },
    { re: /\b(teach|instructor|become|university|rebrand|lab)\b/, kws: ["teach", "instructor", "rebrand"], an: () => ({ html: `Head to the <b>For Instructors</b> page — register as an instructor, follow the step-by-step guide, and plan your course in the dashboard.`, cta: [{ label: "For Instructors", href: "instructors.html" }] }) },
    { re: /\b(free|cost|price|licen[cs]e|money|fee)\b/, kws: ["free", "price", "fee"], an: () => ({ html: `Every course is free, and instructors can copy the material without any licensing.` }) },
    { re: /\b(enroll|enrol|sign up|signup|register|join|account)\b/, kws: ["enroll", "register", "signup"], an: () => ({ html: `Open any course page and click <b>Enroll now</b> — you'll be asked to sign in or register as a student first.`, cta: [{ label: "Browse courses", href: "index.html#courses" }] }) },
    { re: /\b(thank|thanks|thx|bye|goodbye|see ya)\b/, an: () => ({ html: `You're welcome — happy learning!` }) },
  ];
}
function ctaHtml(cta) {
  if (!cta || !cta.length) return "";
  return `<div class="chat-cta">${cta.map(c => c.href ? `<a href="${esc(c.href)}" class="chat-cta-btn">${esc(c.label)} ${ic("arrow")}</a>`
    : `<button type="button" class="chat-cta-btn" ${c.tab ? `data-chat-tab="${esc(c.tab)}"` : `data-chat-top="1"`}>${esc(c.label)} ${ic("arrow")}</button>`).join("")}</div>`;
}
function initChat(course) {
  const isCourse = !!course;
  const chips = isCourse ? ["How long is it?", "What will I learn?", "How do I enroll?", "Do I need the hardware?"] : ["How do I find a course?", "How do I teach a course?", "Is it free?"];
  const greet = isCourse ? `Hi! I'm the course assistant for <b>${esc(course.title)}</b>. Ask me about its schedule, topics, enrollment, grading or staff — I only know about this course.`
    : `Hi! I can help with general questions about Roboracer. Open a course page and I'll answer questions about that specific course.`;
  const fallback = isCourse
    ? () => ({ html: `That's outside what I know about <b>${esc(course.title)}</b> — I can only help with this course. Try asking about its duration, schedule, topics, enrollment, grading, prerequisites or staff.` })
    : () => ({ html: `I can only answer general questions about the platform here. Open a specific course page and I'll answer questions about that course.` });
  const rules = isCourse ? courseRules(course) : platformRules();

  document.body.insertAdjacentHTML("beforeend", `
  <button class="chat-fab" id="chatFab" aria-label="Open course chat" aria-expanded="false">${ic("chat")}</button>
  <div class="chat-panel" id="chatPanel" role="dialog" aria-label="Chat">
    <div class="chat-head"><div class="chat-head-ico">${ic("chat")}</div>
      <div class="chat-head-t"><b>${isCourse ? "Course assistant" : "Roboracer assistant"}</b><span>${esc(isCourse ? course.title : "Ask about the platform")}</span></div>
      <button class="icon-btn" id="chatClose" aria-label="Close chat">✕</button></div>
    <div class="chat-body" id="chatBody"></div>
    <div class="chat-chips" id="chatChips">${chips.map(x => `<button type="button" data-q="${esc(x)}">${esc(x)}</button>`).join("")}</div>
    <form class="chat-form" id="chatForm"><input id="chatInput" placeholder="${isCourse ? "Ask about this course…" : "Ask a question…"}" autocomplete="off" maxlength="200"><button class="btn primary sm" type="submit" aria-label="Send">${ic("arrow")}</button></form>
  </div>`);

  const body = $("#chatBody");
  const addMsg = (who, r) => { body.insertAdjacentHTML("beforeend", `<div class="chat-msg ${who}">${typeof r === "string" ? r : r.html}${who === "bot" ? ctaHtml(r.cta) : ""}</div>`); body.scrollTop = body.scrollHeight; };
  let opened = false;
  const open = () => { $("#chatPanel").classList.add("open"); $("#chatFab").setAttribute("aria-expanded", "true"); if (!opened) { opened = true; addMsg("bot", { html: greet }); } $("#chatInput").focus(); };
  const close = () => { $("#chatPanel").classList.remove("open"); $("#chatFab").setAttribute("aria-expanded", "false"); };
  $("#chatFab").onclick = () => $("#chatPanel").classList.contains("open") ? close() : open();
  $("#chatClose").onclick = close;
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

  function reply(q) {
    addMsg("user", esc(q));
    const typing = document.createElement("div"); typing.className = "chat-msg bot typing"; typing.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(typing); body.scrollTop = body.scrollHeight;
    setTimeout(() => { typing.remove(); addMsg("bot", runRules(rules, q, fallback)); }, 450 + Math.random() * 250);
  }
  $("#chatForm").onsubmit = e => { e.preventDefault(); const v = $("#chatInput").value.trim(); if (!v) return; $("#chatInput").value = ""; reply(v); };
  $("#chatChips").onclick = e => { const b = e.target.closest("[data-q]"); if (!b) return; reply(b.dataset.q); };
  $("#chatBody").addEventListener("click", e => {
    const t = e.target.closest("[data-chat-tab]"); if (t) { const tb = $(`.tabs button[data-tab="${t.dataset.chatTab}"]`); tb?.click(); tb?.scrollIntoView({ behavior: "smooth", block: "start" }); close(); }
    const top = e.target.closest("[data-chat-top]"); if (top) { window.scrollTo({ top: 0, behavior: "smooth" }); close(); }
  });
}
window.initChat = initChat;
