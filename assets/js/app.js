/* Roboracer LMS portal – shared data + UI helpers (no build step, no dependencies) */
const COURSES = [
  { id: "roboracer-4w", title: "Roboracer – 4 Weeks Course", org: "Roboracer", code: "04weeks", weeks: 4, type: "core", starts: "Dec 31, 2019", ends: "Feb 27, 2021", effort: "8 hours per week",
    blurb: "A compact introduction: ROS basics, the Roboracer vehicle, reactive methods and a first race." },
  { id: "roboracer-10w", title: "Roboracer – 10 Weeks Course", org: "Roboracer", code: "10weeks", weeks: 10, type: "core", starts: "Dec 31, 2019", ends: "Feb 27, 2021", effort: "12 hours per week",
    blurb: "Adds mapping, localization and planning to the core lectures, with lab assignments." },
  { id: "roboracer-15w", title: "Roboracer – 15 Weeks Course", org: "Roboracer", code: "15weeks", weeks: 15, type: "core", starts: "Dec 31, 2019", ends: "Feb 27, 2021", effort: "20 hours per week",
    blurb: "The full course: perception, planning, control, vision, special topics and the Grand Prix." },
  { id: "penn", title: "Roboracer – Penn", org: "University-of-Pennsylvania", code: "F110", weeks: 15, type: "university", starts: "Dec 31, 2019", ends: "Feb 27, 2021", effort: "20 hours per week",
    wm: ["Penn", "University of Pennsylvania"], color: "#011f5b", blurb: "The original Penn offering of the Roboracer course." },
  { id: "tum", title: "Roboracer – TUM", org: "Technical-University-of-Munich", code: "F110", weeks: 10, type: "university", starts: "Oct 31, 2020", ends: "Mar 31, 2021", effort: "12 hours per week",
    wm: ["TUM", "Technische Universität München"], color: "#0065bd", blurb: "Roboracer taught at the Technical University of Munich." },
  { id: "ucsd", title: "Roboracer – UC San Diego", org: "UC-SanDiego", code: "10weeks", weeks: 10, type: "university", starts: "Dec 31, 2020", ends: "Jun 15, 2021", effort: "12 hours per week",
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

const STAFF = [
  ["Prof. Dr. Rahul Mangharam", "RM", "Rahul Mangharam is an Associate Professor in the Department of Electrical and Systems Engineering at the University of Pennsylvania. He is a founding member of the PRECISE Center and directs the Safe Autonomous Systems Lab at Penn. His research is at the intersection of formal methods, machine learning and controls for medical devices, energy efficient buildings and autonomous systems."],
  ["Dr. Johannes Betz", "JB", "Johannes is a postdoctoral researcher at the University of Pennsylvania where he is working at the mLAB Real-Time and Embedded Systems Lab. His current research focuses on the development of algorithms for autonomous vehicles, mostly for vehicles that operate at the limit of handling, including the integration of ethics for Level-5 autonomous vehicles."],
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const load = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };

function thumb(c) {
  if (c.type === "core") return `<div class="thumb"><img src="assets/logos/RoboRacer_SquareLogo.png" alt="Roboracer logo"><div class="weeks">${c.weeks} Weeks<br>Course</div></div>`;
  return `<div class="thumb"><div class="wm" style="color:${c.color}">${c.wm[0]}<small>${c.wm[1]}</small></div></div>`;
}

function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.h); toast.h = setTimeout(() => t.classList.remove("show"), 2600);
}

function shell(active) {
  const nav = [["index.html", "Courses", "courses"], ["index.html#discover", "Discover New", "discover"], ["instructors.html", "For Instructors", "instructors"]];
  document.body.insertAdjacentHTML("afterbegin", `
  <header><div class="wrap nav">
    <a class="logo" href="index.html" aria-label="Roboracer home"><img src="assets/logos/logo-black-gradient.png" alt="Roboracer"></a>
    <nav id="nav">${nav.map(n => `<a href="${n[0]}" class="${n[2] === active ? "active" : ""}">${n[1]}</a>`).join("")}<a href="instructors.html#faq">Help</a></nav>
    <div class="auth">
      <button class="icon-btn" id="theme" title="Toggle theme" aria-label="Toggle theme">◐</button>
      <span id="authbox"></span>
      <button class="icon-btn menu-toggle" id="menu" aria-label="Menu">☰</button>
    </div></div></header>`);
  document.body.insertAdjacentHTML("beforeend", `
  <footer><div class="wrap"><span><img src="assets/logos/logo-black-gradient.png" alt="Roboracer"></span>
    <span>© Roboracer. All rights reserved except where noted. Powered by Open edX (demo portal).</span></div></footer>
  <div class="modal" id="modal"><form id="authform">
    <h3 id="mtitle">Sign in</h3>
    <label>Email<input type="email" name="email" required autocomplete="email"></label>
    <div id="namef" hidden><label>Full name<input name="name" autocomplete="name"></label></div>
    <label>Password<input type="password" name="pw" required minlength="4" autocomplete="current-password"></label>
    <button class="btn primary" type="submit" id="msubmit">Sign in</button>
    <button class="btn" type="button" id="mcancel">Cancel</button>
    <small style="color:var(--muted)">Demo only – no data leaves your browser.</small></form></div>
  <div class="toast" id="toast" role="status"></div>`);

  const th = load("theme"); if (th) document.documentElement.dataset.theme = th;
  $("#theme").onclick = () => { const d = document.documentElement; const dark = getComputedStyle(d).getPropertyValue("--bg").trim() === "#14141d"; d.dataset.theme = dark ? "light" : "dark"; save("theme", d.dataset.theme); };
  $("#menu").onclick = () => $("#nav").classList.toggle("open");

  let mode = "in";
  const openM = m => { mode = m; $("#mtitle").textContent = $("#msubmit").textContent = m === "in" ? "Sign in" : "Register"; $("#namef").hidden = m === "in"; $("#modal").classList.add("open"); };
  const renderAuth = () => {
    const u = load("user");
    $("#authbox").innerHTML = u ? `<span style="font-size:.9rem;margin-right:8px">${u}</span><button class="btn" id="out">Sign out</button>` : `<button class="btn" id="reg">Register</button> <button class="btn primary" id="sin">Sign in</button>`;
    if (u) $("#out").onclick = () => { try { localStorage.removeItem("user"); } catch (e) {} renderAuth(); document.dispatchEvent(new Event("authchange")); toast("Signed out"); };
    else { $("#reg").onclick = () => openM("reg"); $("#sin").onclick = () => openM("in"); }
  };
  renderAuth();
  $("#mcancel").onclick = () => $("#modal").classList.remove("open");
  $("#modal").onclick = e => { if (e.target.id === "modal") $("#modal").classList.remove("open"); };
  $("#authform").onsubmit = e => {
    e.preventDefault(); const f = new FormData(e.target);
    save("user", (mode === "reg" && f.get("name")) || String(f.get("email")).split("@")[0]);
    $("#modal").classList.remove("open"); e.target.reset(); renderAuth(); document.dispatchEvent(new Event("authchange"));
    toast(mode === "reg" ? "Account created – welcome!" : "Signed in");
  };
  document.addEventListener("click", e => {
    const b = e.target.closest(".acc>button"); if (b) b.parentElement.classList.toggle("open");
    const t = e.target.closest(".tabs button"); if (t) { const root = t.closest("[data-tabs]"); $$(".tabs button", root).forEach(x => x.classList.toggle("on", x === t)); $$(".tabpane", root).forEach(p => p.classList.toggle("on", p.id === t.dataset.tab)); }
  });
}
window.requireSignIn = () => { if (load("user")) return true; $("#sin").click(); toast("Please sign in first"); return false; };
