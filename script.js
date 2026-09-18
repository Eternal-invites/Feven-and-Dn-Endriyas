/* ══════════════════════════════════════════════════════════════
   የጋብቻ ግብዣ — ዲ/ን እንድሪያስ & ፌቨን
   Vanilla JS — no frameworks
   ══════════════════════════════════════════════════════════════ */

/* ══════════ WEDDING CONFIGURATION ══════════
   Replace these two URLs when ready. Leave "" to hide the
   related control safely (no broken links are ever shown).   */

const YOUTUBE_URL = "https://youtu.be/0geCM_Dh_-s";
const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/65zKueXBzEtqiGQz7";

/* Countdown target — መስከረም 24 ፣ 2019 ዓ.ም · 11:30 Ethiopian local time
   (= October 4, 2026 · 17:30 East Africa Time / 14:30 UTC).
   Anchored in UTC so the countdown is correct from any timezone. */
const WEDDING_TIMESTAMP = Date.UTC(2026, 9, 4, 14, 30, 0);

/* Add or remove mezmur titles here — the list renders itself.
   Plain text  → "ትዕዛዝ ስም ብቻ"
   With lyrics → { title: "ስም", lyrics: "መስመር 1\nመስመር 2" }
   Songs with lyrics become tappable to reveal the words.      */
const mezmurList = [
  {
    title: "ወንድና ሴት አድርጎ",
    lyrics:
`ወንድና ሴት አድርጐ እንደፈጠራቸው
ኋላም ለኑሮአቸው ጋብቻን ሰጣቸው
አንዴ ከተጋቡ አንድ ሥጋ ናቸው
ከእንግዲህ ወደፊት ይጸናል ፍቅራቸው

ደስ ይበለን ሙሽሪት ሙሽራው (፪)

አንድ አካል ሆነዋል አምላክ አጣምሮአቸው
በምንም ምክንያት ማንም አይለያቸው
በጣም ይወዳታል ባል ክብርት ሚስቱን
ስለ እርስዋ አሳልፎ ይሰጣል ነፍሱን

ደስ ይበለን ሙሽሪት ሙሽራው (፪)

ለአብርሃም ለሣራ እንደሰጠ ትዳር
ለእናንተም ይለግስ የዘለዓለም ፍቅር
ኣንቺም እንደሣራ አንተም እንደ አብርሃም
ተፋቅራችሁ ኑሩ እስከ ዘለዓለም

ደስ ይበለን ሙሽሪት ሙሽራው (፪)

ለዚህ ላበቃችሁ ለቸሩ አምላካችን
ምስጋና ይድረሰው ዛሬ ከሁላችን
በሉ ደኅና ግቡ ወደ አዲስ ጐጆአችሁ
አምላክ በጥበቡ ፍቅርን ያላብሳችሁ`
  },
  {
    title: "መጽአ መርዓዊ",
    lyrics:
`መጽአ መርአዊ ፍስሐ ለኩሉ (፪)
በሰላም ፃኡ ተቀበሉ (፪)

ትርጉም፦ መጣ ሙሽራ የሁላችን ደስታ (፪)
በሰላም ውጡ ተቀበሉ (፪)`
  },
  {
    title: "መርዓዊ ሰማያዊ",
    lyrics:
`መርዓዊ ሰማያዊ /፪/ ለእመ ገብረ በዓለ /፪/
ኧኸ ይኑሩ በሰላም /፪/ ጸንተው ዘለዓለም /፪/
ደናግል ተነሡ ያዙ መብራቱን
ሙሽሪው ደረሰ አጉል እንዳንሆን

አዝ ---

ወንጌልን ይዘዋል ጐዳናቸው ያምራል
ዓላማው መልካም ነው እነ እርሱን እንምሰል

አዝ ---

የድካም ዋጋቸው ብርሃንን ያበራል
በሀይማኖታቸው ፀንተው ድል አርገዋል

አዝ ---`
  },
  {
    title: "እንዘ ስውር",
    lyrics:
`እንዘስውር እምኔነ ይእዜሰ ክሱተ ኮነ /፪/
ተአምረ ወመንክረ ገብረ መድኃኒነ በቃና /፪/
ኧኸ ዘገሊላ ክብካብ /፪/`
  },
  {
    title: "ዳዊት ይሴብሕ",
    lyrics:
`ዳዊት ይሴብሕ ወይዜምር እዝራ /፪/
ኧኸ እንዘይብሉ ሙሽሪት ሙሽራ /፬/`
  },
  {
    title: "ደስ አላቸው ሙሽራው ሙሽሪት",
    lyrics:
`ደስ አላቸው ሙሽራው ሙሽሪት

ደስ አላቸው ሙሽራው ሙሽሪት
በዝማሬው >>
ደምቆ ታይቷል >>
ጋብቻቸው >>

እግዚአብሔር ይመስገን >>
ኃያሉ ጌታችን >>
ለዚህ ላበቃቸው >>
ወንድም እኅታችንን >>
ጋብቻ ቅዱስ ነው >>
ብሏል አምላካችን >>
እንደዚህ ሲፈፀም በቤተክርስቲያን

አዝ ---

መኖር የለበትም ሙሽራው ሙሽሪት
አዳም ብቻውን >>
ብሎ ፈጠረለት >>
ከጎኑ ሔዋንን >>
ዛሬም እንደ ቀድሞው >>
እንደ መጽሐፉ >>
መርጦ እኅት ሰጠው፥ ለአዳም ሙሽራው

አዝ ---

ሔዋን ጎኑ ኾና ሙሽራው ሙሽሪት
አዳም ሆይ ስትለው >>
በረዳትነቷ >>
አዳም ደስ ደስ አለው >>
በአምላክ መልካም ፈቃድ >>
በፍቅር ተሳስረው >>
አንድ አካል ሆነዋል ማንም አይለያቸው`
  },
  {
    title: "ደመቀ አበራልን የአማኑኤል ሥራ",
    lyrics:
`ደመቀ አበራልን የአማኑኤል ሥራ (፪)
ሙሽሮቹ ሆኑ አብርሃም ወሳራ
በቤተክርስቲያን ጥላ ተከልለው
ተክሊል አድርገዋል ሙሽሪት ሙሽራው
ጸጋ መንፈስ ቅዱስ ስለተሰጣቸው
ሙሽሪት ሙሽራው አበራ ገጻቸው

የተራራቀ አካል አንድ ሆነ በተክሊል
እግዚአብሔር ይመስገን እልል /፪/ እንበል
አጥንትሽ ከአጥንቴ ሥጋሽ ከሥጋዬ
አዳም የሰበከው ይኸው ዛሬ ታዬ

የተክሊል ብርሃን በእኛ መሀል በርቶ
ረቂቅ አንድነት ታየ በእርሷ ጎልቶ
ይህን ድንቅ ነገር ለማየት ያበቃን
ምስጢሩን የሚገልጽ እግዚአብሔር ይመስገን

ነጭ መጐናጸፊያ በአንድ ተጐናጽፈው
በመንፈስ ቅዱስ ኃይል አረፉ በጥላው
ሙሽሪት ሙሽራው ለፍቅር ተሸነፉ
የቁርባን መቁረቢያ ነጭ ልብስ አሰፉ

እመቤታችን ባንቺ ምልጃ (፪)
ድንግል ማርያም ባንቺ ምልጃ (፪)
መድኃኒዓለም ታምር ሰራ በማየ ቃና (፪)
ለጌታችን ታምር በማየ ቃና
ተመርጣ ታድላ በማየ ቃና
መጀመርያ ሆነች በማየ ቃና
ቃና ዘገሊላ በማየ ቃና
ቃናን ሊያደርጋት የታምሩ ቀዳሚ ስፍራ የድንግልም ክብር ተገለጠ የምልጃ ሥራ

አዝ ---

ታውቋት ስላለችው በማየ ቃና
ወይንኪ አልቦሙ በማየ ቃና
ውሃ ወይን ሲሆን በማየ ቃና
ሁሉ አዩ ሰሙ በማየ ቃና
ቃናን ሊያደርጋት የታምሩ ቀዳሚ ስፍራ የድንግልም ክብር ተገለጠ የምልጃ ሥራ

አዝ ---

አሳላፊዎቹ በማየ ቃና
ግራ ቢገባቸው በማየ ቃና
የድንግል ማርያም ልጅ በማየ ቃና
ከጭንቅ አወጣቸው በማየ ቃና
ቃናን ሊያደርጋት የታምሩ ቀዳሚ ስፍራ የድንግልም ክብር ተገለጠ የምልጃ ሥራ

አዝ ---

እኛም እናምናለን በማየ ቃና
በእርሷ ትንብልና በማየ ቃና
ስለ ቃልኪዳኗ በማየ ቃና
ሁሉ እንደሚቃና በማየ ቃና
ቃናን ሊያደርጋት የታምሩ ቀዳሚ ስፍራ የድንግልም ክብር ተገለጠ የምልጃ ሥራ`
  },
  {
    title: "ኑ ተመልከቱልን የአማኑኤልን ሥራ",
    lyrics:
`ኑ ተመልከቱልን የአማኑኤልን ሥራ
ኑ ተመልከቱልኝ የአማኑኤልን ሥራ (፪)
ሙሽሮቹ ሆኑ አብርሃም ወሳራ (፪)

ሐናና ኢያቄም በጸሎት ሲተጉ
በፈጣሪያቸው ፊት መልካሙን ቢያደርጉ
በቅዱስ ጋብቻ ጸንተው ቢራመዱ
የአምላክን እናት ድንግልን ወለዱ (፪)

ቀን ከሌት ሲጸልይ ዘካሪያስ ካህን
ኤልሳቤጥም ጸንታ ፈጣሪን ብትለምን
በእግዚአብሔር ጥበብ በስተ እርጅናቸው
ቅዱስ ዮሐንስን አክብሮ ሰጣቸው (፪)

ፀጋ ዘአብና ቅድስት እግዚአርያ
ለመልካም ጋብቻ ሆነዋል አርአያ
ተክለ ሃይማኖትን ጻድቁን ያፈሩት
ቀን ከሌት ተግተው ነው በጾምና ጸሎት

ኑ ተመልከቱልኝ የአማኑኤልን ሥራ
ኑ ተመልከቱልኝ የእመቤቴን ሥራ
በሰርጉ ተገኘች ከአማኑኤል ጋር
በሰርጉ ተገኘች ከመላእክት ጋር`
  }
];

/* Wedding program — do not add times here; placeholders only. */
const weddingEvents = [
  { title: "ሙሽራውና ሙሽራይቱ መግባት", icon: "rings" },
  { title: "መዝሙር",                 icon: "music" },
  { title: "ወንጌል",                  icon: "gospel" },
  { title: "እራት",                   icon: "dinner" },
  { title: "ቅኔ",                    icon: "qene" },
  { title: "ወረብ",                   icon: "drum" },
  { title: "ዝማሬ",                   icon: "choir" },
  { title: "ኬክ ቆረሳ",               icon: "cake" },
  { title: "መዝሙር",                 icon: "music" },
  { title: "ፎቶ",                    icon: "camera" }
];

"use strict";

/* ─────────────────────────────────────────────
   SMALL HELPERS
───────────────────────────────────────────── */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ─────────────────────────────────────────────
   EVENT ICONS (inline SVG, gold stroke)
───────────────────────────────────────────── */
const ICONS = {
  rings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="9" cy="13" r="5.2"/><circle cx="15" cy="13" r="5.2"/><path d="M12 3.5 L13.4 6 h-2.8 Z"/></svg>',
  music: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M9 17.5 V5.5 l9 -2 v12"/><circle cx="6.8" cy="17.5" r="2.2"/><circle cx="15.8" cy="15.5" r="2.2"/></svg>',
  gospel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M12 5.5 C10 4 7 3.8 4.5 4.5 V18 c2.5 -0.7 5.5 -0.5 7.5 1 2 -1.5 5 -1.7 7.5 -1 V4.5 C17 3.8 14 4 12 5.5 Z"/><path d="M12 5.5 V19 M12 8.5 v3.5 M10.7 10 h2.6"/></svg>',
  dinner: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="13" r="6.5"/><circle cx="12" cy="13" r="2.6"/><path d="M5 3.5 v4 M3.5 3.5 v4 a1.5 1.5 0 0 0 3 0 M20.5 3.5 V10 c0 1 -0.8 1.5 -1.5 1.5 V3.5"/></svg>',
  qene: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M6 4 h9 a3 3 0 0 1 3 3 v13 h-9 a3 3 0 0 1 -3 -3 Z"/><path d="M6 4 a3 3 0 0 0 -3 3 M6 4 v13 M9.5 8.5 h5 M9.5 11.5 h5 M9.5 14.5 h3"/></svg>',
  drum: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M7 7 h10 v10 a5 5 0 0 1 -10 0 Z"/><ellipse cx="12" cy="7" rx="5" ry="2.2"/><path d="M8.5 12.5 h7 M9.5 15 h5"/></svg>',
  choir: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M7 19 a2.2 2.2 0 1 0 0 -4.4 a2.2 2.2 0 0 0 0 4.4 Z M7 14.6 V6 M17 17 a2.2 2.2 0 1 0 0 -4.4 a2.2 2.2 0 0 0 0 4.4 Z M17 12.6 V4 M7 6 l10 -2"/></svg>',
  cake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M5 12 h14 v8 H5 Z M5 12 c0 1.4 1 2 2 2 c1 0 1.6 -0.8 2.4 -0.8 c0.8 0 1.2 0.8 2.6 0.8 c1.4 0 1.8 -0.8 2.6 -0.8 c0.8 0 1.4 0.8 2.4 0.8 c1 0 2 -0.6 2 -2 M12 8.5 V12 M12 5.5 a1.2 1.2 0 0 0 0.9 -2 c-0.6 0.7 -0.9 1.2 -0.9 2 Z"/></svg>',
  camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><rect x="3.5" y="7" width="17" height="12.5" rx="2.5"/><path d="M8.5 7 L10 4.5 h4 L15.5 7"/><circle cx="12" cy="13" r="3.4"/><circle cx="17.8" cy="9.8" r="0.6" fill="currentColor"/></svg>'
};

/* ─────────────────────────────────────────────
   13. GOLD PARTICLES (cover canvas)
───────────────────────────────────────────── */
function initParticles() {
  const canvas = $("#coverParticles");
  if (!canvas || prefersReducedMotion) return;

  const ctx = canvas.getContext("2d");
  const COUNT = window.innerWidth < 640 ? 26 : 42;
  let particles = [];
  let rafId = null;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function spawn() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.6 + Math.random() * 1.8,
      speed: 0.12 + Math.random() * 0.35,
      drift: (Math.random() - 0.5) * 0.25,
      alpha: 0.15 + Math.random() * 0.5,
      pulse: Math.random() * Math.PI * 2
    };
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const p of particles) {
      p.y -= p.speed;
      p.x += p.drift;
      p.pulse += 0.02;
      if (p.y < -4 || p.x < -4 || p.x > canvas.width + 4) {
        Object.assign(p, spawn(), { y: canvas.height + 4 });
      }
      const glow = p.alpha * (0.7 + 0.3 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 175, 55, ${glow.toFixed(3)})`;
      ctx.shadowColor = "rgba(212, 175, 55, 0.8)";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    rafId = requestAnimationFrame(tick);
  }

  resize();
  particles = Array.from({ length: COUNT }, spawn);
  tick();
  window.addEventListener("resize", resize);

  /* expose a stopper so the cover can shut the loop down */
  canvas.stopParticles = () => {
    if (rafId) cancelAnimationFrame(rafId);
    window.removeEventListener("resize", resize);
  };
}

/* ─────────────────────────────────────────────
   1. OPENING COVER → ENTER INVITATION
───────────────────────────────────────────── */
function initCover() {
  const cover = $("#cover");
  const enterBtn = $("#enterBtn");
  if (!cover || !enterBtn) {
    document.body.classList.add("entered");
    return;
  }
  enterBtn.disabled = false;

  enterBtn.addEventListener("click", () => {
    document.body.classList.add("entered");
    $("#siteNav").setAttribute("aria-hidden", "false");
    cover.classList.add("leaving");

    const canvas = $("#coverParticles");
    if (canvas && canvas.stopParticles) canvas.stopParticles();

    /* remove cover from the DOM once the fade completes */
    setTimeout(() => cover.remove(), 1300);

    /* user gesture — safe moment to attempt starting music */
    startMusic();
  }, { once: true });
}

/* ─────────────────────────────────────────────
   10. NAVIGATION
───────────────────────────────────────────── */
function initNav() {
  const nav = $("#siteNav");
  const toggle = $("#navToggle");
  const menu = $("#navMenu");
  const links = $$(".nav-link");

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "ምናሌ ዝጋ" : "ምናሌ ክፈት");
  });

  links.forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  /* highlight the section currently in the middle of the viewport */
  const sections = links
    .map(l => document.getElementById(l.dataset.section))
    .filter(Boolean);

  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l =>
        l.classList.toggle("active", l.dataset.section === entry.target.id)
      );
    });
  }, { rootMargin: "-45% 0px -45% 0px" });

  sections.forEach(s => spy.observe(s));
}

/* ─────────────────────────────────────────────
   12. SCROLL REVEALS
───────────────────────────────────────────── */
function initScrollReveals() {
  const targets = $$(".reveal, .reveal-left, .reveal-right, .reveal-scale, .timeline-item");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach(t => t.classList.add("in-view"));
    return;
  }
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  targets.forEach(t => io.observe(t));
}

/* ─────────────────────────────────────────────
   6. EVENT TIMELINE
───────────────────────────────────────────── */
function renderTimeline() {
  const list = $("#timelineList");
  if (!list) return;
  const frag = document.createDocumentFragment();

  weddingEvents.forEach((ev, i) => {
    const li = document.createElement("li");
    li.className = "timeline-item";
    li.innerHTML =
      '<span class="timeline-icon" aria-hidden="true">' + (ICONS[ev.icon] || ICONS.music) + "</span>" +
      '<div class="timeline-body">' +
        '<span class="timeline-step">' + String(i + 1).padStart(2, "0") + "</span>" +
        '<h3 class="timeline-title">' + ev.title + "</h3>" +
      "</div>";
    frag.appendChild(li);
  });

  list.appendChild(frag);
}

/* ─────────────────────────────────────────────
   7. MEZMUR ACCORDION
───────────────────────────────────────────── */
function toggleSongLyrics(btn, panel) {
  const isOpen = btn.getAttribute("aria-expanded") === "true";
  btn.setAttribute("aria-expanded", String(!isOpen));
  btn.setAttribute("aria-label", btn.getAttribute("aria-label").replace(isOpen ? "ዝጋ" : "ክፈት", isOpen ? "ክፈት" : "ዝጋ"));

  if (isOpen) {
    panel.style.maxHeight = panel.scrollHeight + "px";
    requestAnimationFrame(() => { panel.style.maxHeight = "0px"; });
    setTimeout(() => {
      panel.hidden = true;
      panel.style.maxHeight = "";
    }, prefersReducedMotion ? 0 : 560);
  } else {
    panel.hidden = false;
    panel.style.maxHeight = "0px";
    requestAnimationFrame(() => requestAnimationFrame(() => {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }));
  }
}

function initMezmur() {
  const toggle = $("#mezmurToggle");
  const panel = $("#mezmurPanel");
  const list = $("#mezmurSongs");
  if (!toggle || !panel || !list) return;

  /* render songs from the editable mezmurList array —
     strings and { title } objects both supported */
  const songs = mezmurList.map(s => typeof s === "string" ? { title: s } : s);

  songs.forEach((song, i) => {
    const li = document.createElement("li");
    li.className = "mezmur-song";
    li.style.transitionDelay = (i * 90) + "ms";

    const num = document.createElement("span");
    num.className = "mezmur-num";
    num.textContent = String(i + 1);

    if (!song.lyrics) {
      const name = document.createElement("span");
      name.className = "mezmur-name";
      name.textContent = song.title;
      li.append(num, name);
    } else {
      li.classList.add("has-lyrics");

      const head = document.createElement("button");
      head.type = "button";
      head.className = "mezmur-song-toggle";
      head.setAttribute("aria-expanded", "false");
      head.setAttribute("aria-controls", "mezmur-lyrics-" + i);
      head.setAttribute("aria-label", song.title + " — ቃላት ክፈት");

      const name = document.createElement("span");
      name.className = "mezmur-name";
      name.textContent = song.title;

      const chev = document.createElement("span");
      chev.className = "mezmur-song-chevron";
      chev.setAttribute("aria-hidden", "true");

      head.append(name, chev);

      const lyrics = document.createElement("div");
      lyrics.className = "mezmur-lyrics";
      lyrics.id = "mezmur-lyrics-" + i;
      lyrics.hidden = true;
      lyrics.setAttribute("role", "region");

      song.lyrics.split("\n").forEach(line => {
        const p = document.createElement("p");
        if (line.trim() === "") {
          p.className = "mezmur-line-gap";
          p.setAttribute("aria-hidden", "true");
        } else if (line.trim().startsWith("አዝ")) {
          p.className = "mezmur-az";
          p.textContent = line.trim();
        } else {
          p.className = "mezmur-line";
          p.textContent = line.trim();
        }
        lyrics.appendChild(p);
      });

      head.addEventListener("click", () => toggleSongLyrics(head, lyrics));

      li.append(num, head, lyrics);
    }

    list.appendChild(li);
  });

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));

    if (isOpen) {
      panel.classList.remove("open");
      /* wait for the collapse transition, then hide from AT/tab order */
      setTimeout(() => { panel.hidden = true; }, prefersReducedMotion ? 0 : 620);
    } else {
      panel.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        panel.classList.add("open");
      }));
    }
  });
}

/* ─────────────────────────────────────────────
   5. LOCATION — MAP LINK
───────────────────────────────────────────── */
function initMapLink() {
  const mapLink = $("#mapLink");
  if (!mapLink) return;
  if (GOOGLE_MAPS_URL && GOOGLE_MAPS_URL.trim() !== "") {
    mapLink.href = GOOGLE_MAPS_URL.trim();
  } else {
    mapLink.hidden = true; /* never show a broken link */
  }
}

/* ─────────────────────────────────────────────
   8 / 11. BACKGROUND YOUTUBE MUSIC
───────────────────────────────────────────── */
let ytPlayer = null;
let ytReady = false;
let wantPlayOnReady = false;

function extractYouTubeId(url) {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:watch\?.*v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  return m ? m[1] : null;
}

function loadYouTubeAPI() {
  if (window.YT && window.YT.Player) return Promise.resolve();
  return new Promise(resolve => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (typeof prev === "function") prev();
      resolve();
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });
}

function setPlayingUI(isPlaying) {
  const wrap = $("#musicWrap");
  const btn = $("#musicToggle");
  if (!wrap || !btn) return;
  wrap.classList.toggle("playing", isPlaying);
  btn.setAttribute("aria-pressed", String(isPlaying));
  btn.setAttribute("aria-label", isPlaying ? "ሙዚቃ አቁም" : "ሙዚቃ አጫውት");
}

function createYouTubePlayer(videoId) {
  ytPlayer = new YT.Player("ytPlayer", {
    videoId,
    playerVars: { autoplay: 0, controls: 0, loop: 1, playlist: videoId, rel: 0 },
    events: {
      onReady: e => {
        ytReady = true;
        const slider = $("#volumeSlider");
        if (slider) e.target.setVolume(Number(slider.value));
        if (wantPlayOnReady) { e.target.playVideo(); wantPlayOnReady = false; }
      },
      onStateChange: e => setPlayingUI(e.data === YT.PlayerState.PLAYING)
    }
  });
}

function initMusic() {
  const videoId = extractYouTubeId(YOUTUBE_URL);
  const wrap = $("#musicWrap");
  const toggle = $("#musicToggle");
  const slider = $("#volumeSlider");
  if (!wrap || !toggle) return;

  /* No URL configured yet — keep the player hidden, code stays ready. */
  if (!videoId) return;

  loadYouTubeAPI()
    .then(() => {
      createYouTubePlayer(videoId);
      wrap.hidden = false;
    })
    .catch(() => { wrap.hidden = true; });

  toggle.addEventListener("click", () => {
    if (!ytPlayer || !ytReady) return;
    const playing = ytPlayer.getPlayerState() === YT.PlayerState.PLAYING;
    playing ? ytPlayer.pauseVideo() : ytPlayer.playVideo();
  });

  if (slider) {
    slider.addEventListener("input", () => {
      if (ytPlayer && ytReady) ytPlayer.setVolume(Number(slider.value));
    });
  }
}

/* Attempt to start playback. Called on page load AND inside the
   enter-button click (a real user gesture). If the browser blocks
   load-time autoplay, the enter click starts it instead, and the
   floating button always remains as manual control. */
function startMusic() {
  if (!extractYouTubeId(YOUTUBE_URL)) return;
  if (ytPlayer && ytReady) {
    ytPlayer.playVideo();
  } else {
    wantPlayOnReady = true;
  }
}

/* ─────────────────────────────────────────────
   COUNTDOWN TO THE WEDDING DAY
───────────────────────────────────────────── */
function setCdValue(el, value) {
  const text = String(value).padStart(2, "0");
  if (el.textContent !== text) {
    el.textContent = text;
    if (!prefersReducedMotion) {
      el.classList.remove("tick");
      void el.offsetWidth; /* restart the pulse animation */
      el.classList.add("tick");
    }
  }
}

function initCountdown() {
  const wrap = $("#countdownWrap");
  if (!wrap) return;

  const daysEl = $("#cdDays");
  const hoursEl = $("#cdHours");
  const minsEl = $("#cdMinutes");
  const secsEl = $("#cdSeconds");
  const grid = $("#countdown");
  const done = $("#countdownDone");

  function update() {
    const diff = WEDDING_TIMESTAMP - Date.now();

    if (diff <= 0) {
      grid.hidden = true;
      done.hidden = false;
      clearInterval(timer);
      return;
    }

    const totalSecs = Math.floor(diff / 1000);
    setCdValue(daysEl, Math.floor(totalSecs / 86400));
    setCdValue(hoursEl, Math.floor(totalSecs % 86400 / 3600));
    setCdValue(minsEl, Math.floor(totalSecs % 3600 / 60));
    setCdValue(secsEl, totalSecs % 60);
  }

  update();
  const timer = setInterval(update, 1000);
}

/* ─────────────────────────────────────────────
   9. GUEST WISHES
   Storage is isolated behind WishStore so the
   localStorage backend can later be swapped for
   a real API by editing only these two methods.
───────────────────────────────────────────── */
const WishStore = {
  KEY: "wedding_wishes_v1",

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      const data = raw ? JSON.parse(raw) : [];
      return Array.isArray(data) ? data : [];
    } catch {
      return [];
    }
  },

  save(wish) {
    const wishes = this.load();
    wishes.unshift(wish); /* newest first */
    localStorage.setItem(this.KEY, JSON.stringify(wishes));
    return wishes;
  }
};

function saveWish(name, message) {
  const wish = {
    name: name.trim(),
    message: message.trim(),
    date: new Date().toISOString()
  };
  return WishStore.save(wish);
}

function loadWishes() {
  return WishStore.load();
}

function formatWishDate(iso) {
  const d = new Date(iso);
  if (isNaN(d)) return "";
  return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function renderWishes() {
  const container = $("#wishesList");
  if (!container) return;
  container.textContent = "";

  const wishes = loadWishes();
  if (wishes.length === 0) {
    const empty = document.createElement("p");
    empty.className = "wishes-empty";
    empty.textContent = "የመጀመሪያውን መልካም ምኞት ይሁኑ!";
    container.appendChild(empty);
    return;
  }

  const frag = document.createDocumentFragment();
  wishes.forEach(w => {
    const card = document.createElement("article");
    card.className = "wish-card";

    const nameEl = document.createElement("h3");
    nameEl.className = "wish-name";
    nameEl.textContent = w.name;

    const msgEl = document.createElement("p");
    msgEl.className = "wish-message";
    msgEl.textContent = "“" + w.message + "”";

    const dateEl = document.createElement("time");
    dateEl.className = "wish-date";
    dateEl.dateTime = w.date;
    dateEl.textContent = formatWishDate(w.date);

    card.append(nameEl, msgEl, dateEl);
    frag.appendChild(card);
  });
  container.appendChild(frag);
}

function initWishForm() {
  const form = $("#wishForm");
  if (!form) return;
  const nameInput = $("#wishName");
  const msgInput = $("#wishMessage");
  const errorEl = $("#wishError");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const message = msgInput.value.trim();

    /* validation */
    if (!name || !message) {
      errorEl.textContent = "እባክዎ ስምዎን እና መልካም ምኞትዎን ያስገቡ።";
      errorEl.hidden = false;
      (!name ? nameInput : msgInput).focus();
      return;
    }
    errorEl.hidden = true;

    saveWish(name, message);
    renderWishes();
    form.reset();
    nameInput.focus();
  });
}

/* ─────────────────────────────────────────────
   BOOT
───────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  renderTimeline();
  initCover();
  initNav();
  initParticles();
  initScrollReveals();
  initMezmur();
  initCountdown();
  initMapLink();
  initMusic();
  initWishForm();
  renderWishes();

  /* try to begin music automatically once the player is ready;
     if the browser blocks it, the enter-button click retries */
  startMusic();
});
