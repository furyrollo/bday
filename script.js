/* ============================================================
   THE BIRTHDAY FEAST — script.js
   ALL customizable text lives in CONFIG below. Edit freely!
============================================================ */

"use strict";

/* ============================================================
   ★★★  CONFIG — EDIT EVERYTHING HERE  ★★★
============================================================ */
const CONFIG = {

  // Her name as shown on the page (nickname only — keep it private!)
  name: "Pamcake",

  // ---- Countdown gate ----
  // The feast unlocks at this exact moment (ISO format with timezone offset).
  // "2026-10-31T00:00:00-05:00" = midnight Oct 31 in US Central (CDT ends Nov 1).
  // Change the offset for her timezone, e.g. +01:00 (CET), +00:00 (UK), -04:00 (US East).
  unlockDate: "2026-10-31T00:00:00-05:00",

  // ---- Stop 2: The Letter ----
  letter: {
    salutation: "Dear Pamcake,",
    paragraphs: [
      "We are delighted to inform you that you have been accepted into another year of being amazing.",
      "Term begins immediately. Please find enclosed: one candlelit feast, one potions lesson, one trophy room, and an unreasonable amount of confetti — all conjured in your honour.",
      // 👇 YOUR PERSONAL MESSAGE — edit this paragraph:
      "On a personal note: I'm so glad the universe plonked us into the same corner of the internet. You make ordinary days feel like Halloween-eve — a little more magical, a little more fun, and always with better snacks. Happy birthday week, you absolute legend. 🧡"
    ],
    signedBy: "The Ministry of Birthdays 🪄"
  },

  // ---- Stop 3: The Feast ----
  // Edit names/descriptions. Add or remove cards freely.
  foods: [
    { emoji: "🍕", name: "Polyjuice Pizza",            tag: "shapeshifts into whatever topping you crave", desc: "One slice and you become 10% more powerful. Two slices and you become the kind of person who orders a whole one for themselves. Correct behaviour." },
    { emoji: "🍜", name: "Cauldron of Endless Noodles", tag: "stirred counterclockwise at midnight",        desc: "Brewed in the deepest dungeon kitchen. Side effects include warmth, happiness, and refusing to share." },
    { emoji: "🌮", name: "Tricks-or-Tacos",             tag: "every third one is extra spicy. good luck",   desc: "The Sorting Taco decides your filling. It has never been wrong, and it says you deserve guac at no extra charge." },
    { emoji: "🍟", name: "Phoenix Fries",               tag: "rise again, golden, from the fryer's flames", desc: "Scientifically proven* to taste best when stolen off someone else's plate. (*by witches)" },
    { emoji: "🍺", name: "Butterbeer",                  tag: "frothy, warm, suspiciously cosy",             desc: "Served in a tankard bigger than your head. Foam moustache is mandatory and considered formal attire tonight." },
    { emoji: "🎃", name: "Pumpkin Pasties",             tag: "fresh off the trolley, dear",                 desc: "Anything off the trolley? Yes. Everything. We're taking the whole trolley — it's your birthday." },
    { emoji: "🥧", name: "Treacle Tart",                tag: "a certain chosen one's favourite",            desc: "So sticky-sweet it has been classified as a Class C Non-Tradeable Substance. The feast obtained a licence. For you." },
    { emoji: "🍬", name: "Every-Flavour Candy Corn",    tag: "mostly good flavours. mostly.",               desc: "Fear not — the earwax flavour was banished from this hall by decree. Only caramel, cinnamon, and pure October remain." }
  ],

  // "Pick your birthday dessert" pool
  desserts: [
    { emoji: "🎂", name: "Midnight Velvet Cake",     line: "One slice per candle. House rules." },
    { emoji: "🍫", name: "Chocolate Frog Fudge",     line: "It only has one good jump in it — eat fast." },
    { emoji: "🧁", name: "Witch Hat Cupcake",        line: "The hat is edible. The sparkles are magic. Both are yours." },
    { emoji: "🍩", name: "Portal Doughnut",          line: "The hole leads directly to a second doughnut." },
    { emoji: "🍮", name: "Pumpkin Spice Flan-tasma", line: "A ghost of a dessert. Hauntingly good." },
    { emoji: "🍪", name: "Grimoire Ginger Snaps",    line: "Each one whispers a tiny compliment when bitten." }
  ],

  // ---- Stop 4: Potions Class quiz ----
  // Each answer maps to a result key: vampire / plum / pumpkin / witch
  quiz: {
    questions: [
      {
        q: "The feast is over and midnight strikes. Where are you?",
        options: [
          { text: "🕯️ Still at the table — dessert round two", key: "pumpkin" },
          { text: "🌙 On the balcony, dramatically backlit by the moon", key: "vampire" },
          { text: "📚 Curled up in the library with snacks smuggled in", key: "plum" },
          { text: "✨ Leading everyone to the dance floor", key: "witch" }
        ]
      },
      {
        q: "Pick a familiar to follow you around all evening:",
        options: [
          { text: "🦇 A tiny bat with big opinions", key: "vampire" },
          { text: "🐈‍⬛ A black cat who judges everyone but you", key: "plum" },
          { text: "🦉 A wise owl carrying snacks", key: "pumpkin" },
          { text: "🕷️ A glittery spider who does your nails", key: "witch" }
        ]
      },
      {
        q: "Your autumn evening of choice:",
        options: [
          { text: "🍂 Crunchy-leaf walk, big scarf, hot drink", key: "pumpkin" },
          { text: "🎬 Scary movie marathon, lights OFF", key: "vampire" },
          { text: "🛁 Candlelit everything and a face mask", key: "plum" },
          { text: "🎃 Decorating so hard the neighbours worry", key: "witch" }
        ]
      },
      {
        q: "A mysterious potion appears before you. You…",
        options: [
          { text: "🍷 Swirl it, sniff it, sip it elegantly", key: "vampire" },
          { text: "🔮 Read the label, then the fine print, THEN sip", key: "plum" },
          { text: "☕ Ask if it comes in a pumpkin spice version", key: "pumpkin" },
          { text: "⚡ Down it. Chaos is a lifestyle", key: "witch" }
        ]
      },
      {
        q: "Choose your finishing touch for tonight's look:",
        options: [
          { text: "💋 A lip so dark it has its own backstory", key: "vampire" },
          { text: "👁️ A smoky eye that could end careers", key: "plum" },
          { text: "✨ Glow like you swallowed a candle (safely)", key: "pumpkin" },
          { text: "💫 Glitter. Everywhere. No regrets", key: "witch" }
        ]
      }
    ],
    results: {
      vampire: {
        title: "The Velvet Vampire",
        shade: "Signature shade: “Vampire Kiss Red” 💋",
        emoji: "🧛",
        color: "#8e1f2f",
        desc: "Dramatic, timeless, slightly dangerous in the best way. Your look: a blood-red lip, porcelain glow, and one perfectly raised eyebrow. You don't follow trends — trends follow you, nervously."
      },
      plum: {
        title: "The Midnight Enchantress",
        shade: "Signature shade: “Midnight Smoky Plum” 🌌",
        emoji: "🔮",
        color: "#4b2a5e",
        desc: "Mysterious, magnetic, impossible to read. Your look: a deep plum smoky eye, soft shimmer on the inner corner, and an aura that says you know everyone's secrets (you do)."
      },
      pumpkin: {
        title: "The Autumn Alchemist",
        shade: "Signature shade: “Pumpkin Spice Glow” 🍂",
        emoji: "🎃",
        color: "#c96a1f",
        desc: "Warm, golden, impossibly cosy. Your look: bronzed lids, a peachy flush, and a glow like you were lit by candlelight (because tonight, you were). Comfort and glamour in one spell."
      },
      witch: {
        title: "The Shimmer Witch",
        shade: "Signature shade: “Witch's Shimmer” ✨",
        emoji: "🧙‍♀️",
        color: "#7e6b23",
        desc: "Playful, dazzling, a one-woman light show. Your look: holographic glitter liner, gilded cheekbones, and the confidence of someone who has definitely hexed at least one bad vibe."
      }
    }
  },

  // ---- Stop 5: Trophy Room — reasons I appreciate her ----
  // rarity: "common" | "rare" | "legendary"
  reasons: [
    { emoji: "😂", title: "Keeper of Chaos & Laughter", rarity: "legendary", text: "Somehow you can turn the most ordinary conversation into something I'm still laughing about days later. That's not a skill, that's a superpower." },
    { emoji: "🕸️", title: "Patron Saint of Spooky Season", rarity: "rare",     text: "You love Halloween so much that October genuinely feels like YOUR month. Being born on the 31st wasn't a coincidence — it was destiny filing its paperwork correctly." },
    { emoji: "🍴", title: "Grand Sorceress of Snacks", rarity: "rare",          text: "Your food opinions are strong, correct, and delivered with the confidence of a Michelin inspector. I trust your recommendations more than most official reviews." },
    { emoji: "💄", title: "Artist of the Arcane Palette", rarity: "rare",       text: "What you do with makeup is genuinely art. You could blend eyeshadow in the dark, during a storm, on a moving broomstick." },
    { emoji: "🫂", title: "The Always-There Charm", rarity: "legendary",        text: "Good day, weird day, 2am-brain day — you show up. Talking to you is like a warm common-room fire. Thank you for being that." },
    { emoji: "🧠", title: "Ravenclaw-Grade Wit", rarity: "common",              text: "Quick, sharp, and always three jokes ahead. Honestly rude of you to be this funny AND this smart at the same time." },
    { emoji: "🌙", title: "Finder of Small Magic", rarity: "common",            text: "You notice the little things — the perfect leaf, the good candle, the exact right emoji. You make the small stuff feel enchanted." }
  ],

  // ---- Stop 6: Finale ----
  finale: {
    heading: "Happy Birthday, Pamcake!",
    // Set to true AFTER you add a "voice-note.mp3" file next to index.html
    voiceNote: false,
    paragraphs: [
      // 👇 YOUR FINAL MESSAGE — edit these:
      "The candles are lit, the bats are doing a flyover in your honour, and somewhere a cauldron is bubbling out a birthday song.",
      "I hope this next year of yours is full of perfect autumn days, flawless eyeliner wings, food that tastes like it was made by house-elves, and at least one genuinely good scare.",
      "Thank you for being exactly who you are. The internet is a weirder, warmer, better place with you in it. Happy Halloween, and happiest of birthdays. 🎃🧡"
    ]
  },

  // ---- Easter egg messages ----
  eggs: {
    moon:    "🌙 The moon says: it's told every star about your birthday. They're all showing up tonight.",
    owl:     "🦉 The owl hoots: “Special delivery — one (1) entire wonderful year, addressed to you.”",
    pumpkin: "🎃 The pumpkin whispers: you're its favourite human. Don't tell the other pumpkins.",
    cat:     "🐈‍⬛ The black cat crossed your path on purpose. For you, it's GOOD luck. Forever."
  }
};

/* ============================================================
   Utilities
============================================================ */
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, cls, html) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (html !== undefined) n.innerHTML = html;
  return n;
}

/* ============================================================
   STOP 0 — Countdown gate  (bypass with ?preview=1)
============================================================ */
(function initGate() {
  const gate = $("#gate");
  const journey = $("#journey");
  const unlockTime = new Date(CONFIG.unlockDate).getTime();
  const preview = new URLSearchParams(location.search).has("preview");

  function openGate() {
    gate.remove();
    journey.hidden = false;
    showStop(0, false);
  }

  if (preview || Date.now() >= unlockTime) {
    openGate();
    return;
  }

  const ids = { days: "#cd-days", hours: "#cd-hours", mins: "#cd-mins", secs: "#cd-secs" };
  const nodes = Object.fromEntries(Object.entries(ids).map(([k, s]) => [k, $(s)]));

  function tick() {
    const diff = unlockTime - Date.now();
    if (diff <= 0) { clearInterval(timer); openGate(); return; }
    const s = Math.floor(diff / 1000);
    nodes.days.textContent  = Math.floor(s / 86400);
    nodes.hours.textContent = String(Math.floor((s % 86400) / 3600)).padStart(2, "0");
    nodes.mins.textContent  = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    nodes.secs.textContent  = String(s % 60).padStart(2, "0");
  }
  tick();
  const timer = setInterval(tick, 1000);
})();

/* ============================================================
   Guided journey — reveal stops one at a time + smooth scroll
============================================================ */
function stops() { return $$(".stop[data-stop]"); }

function showStop(index, scroll = true) {
  const target = stops().find(s => +s.dataset.stop === index);
  if (!target) return;
  target.hidden = false;
  target.setAttribute("data-visible", "");
  if (scroll) {
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    });
  }
  if (index === 2) observeFoodCards();
  if (index === 5) finaleEntrance();
}

/* Wire all "Next" buttons */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-next]");
  if (!btn) return;
  const current = btn.closest(".stop");
  showStop(+current.dataset.stop + 1);
});

/* ============================================================
   STOP 1 — The envelope
============================================================ */
(function initEnvelope() {
  const env = $("#envelope");
  env.addEventListener("click", () => {
    if (env.classList.contains("open")) return;
    env.classList.add("open");
    env.setAttribute("aria-label", "The seal is broken and the envelope is open.");
    $("#envelope-hint").textContent = "The seal is broken… ✨";
    burstSparkles(env.getBoundingClientRect());
    setTimeout(() => showStop(1), reducedMotion ? 300 : 1400);
  });
})();

/* ============================================================
   STOP 2 — The letter (render from CONFIG)
============================================================ */
(function renderLetter() {
  const body = $("#letter-body");
  body.appendChild(el("p", "salutation", CONFIG.letter.salutation));
  CONFIG.letter.paragraphs.forEach(p => body.appendChild(el("p", "", p)));
  $("#letter-signature").textContent = CONFIG.letter.signedBy;
})();

/* ============================================================
   STOP 3 — The feast
============================================================ */
(function renderFeast() {
  const grid = $("#food-grid");
  CONFIG.foods.forEach((f, i) => {
    const card = el("button", "food-card");
    card.style.transitionDelay = `${(i % 4) * 90}ms`;
    card.setAttribute("aria-label", `${f.name}. Tap to read the menu note.`);
    card.innerHTML = `
      <div class="food-card-inner">
        <div class="food-face food-front">
          <span class="food-emoji" aria-hidden="true">${f.emoji}</span>
          <h3>${f.name}</h3>
          <small>${f.tag}</small>
        </div>
        <div class="food-face food-back"><p>${f.desc}</p></div>
      </div>`;
    card.addEventListener("click", () => card.classList.toggle("flipped"));
    grid.appendChild(card);
  });

  // Dessert picker
  const btn = $("#dessert-btn");
  const reveal = $("#dessert-reveal");
  btn.addEventListener("click", () => {
    const d = CONFIG.desserts[Math.floor(Math.random() * CONFIG.desserts.length)];
    reveal.innerHTML = `
      <div class="treat">
        <span class="treat-emoji" aria-hidden="true">${d.emoji}</span>
        <strong>${d.name}</strong><br><em>${d.line}</em>
      </div>`;
    burstSparkles(reveal.getBoundingClientRect());
  });
})();

/* Food cards float in on scroll */
let foodObserved = false;
function observeFoodCards() {
  if (foodObserved) return;
  foodObserved = true;
  const cards = $$(".food-card");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    cards.forEach(c => c.classList.add("float-in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add("float-in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.15 });
  cards.forEach(c => io.observe(c));
}

/* ============================================================
   STOP 4 — Potions quiz
============================================================ */
(function initQuiz() {
  const card = $("#quiz-card");
  const nextBtn = $("#potions-next");
  const Q = CONFIG.quiz.questions;
  let idx = 0;
  const tally = {};

  function renderProgress() {
    return `<div class="quiz-progress" aria-label="Question ${idx + 1} of ${Q.length}">` +
      Q.map((_, i) =>
        `<i class="${i < idx ? "done" : i === idx ? "now" : ""}"></i>`).join("") +
      `</div>`;
  }

  function renderQuestion() {
    const q = Q[idx];
    card.innerHTML = renderProgress() + `<p class="quiz-q">${q.q}</p><div class="quiz-options"></div>`;
    const wrap = $(".quiz-options", card);
    q.options.forEach(opt => {
      const b = el("button", "quiz-option", opt.text);
      b.addEventListener("click", () => {
        tally[opt.key] = (tally[opt.key] || 0) + 1;
        idx++;
        idx < Q.length ? renderQuestion() : brew();
      });
      wrap.appendChild(b);
    });
  }

  function brew() {
    card.innerHTML = `<div class="quiz-brewing" role="status">
      <span class="cauldron" aria-hidden="true">🫧🧪</span>
      The cauldron is brewing your look…</div>`;
    setTimeout(showResult, reducedMotion ? 200 : 2000);
  }

  function showResult() {
    const winner = Object.entries(tally).sort((a, b) => b[1] - a[1])[0][0];
    const r = CONFIG.quiz.results[winner];
    card.innerHTML = `
      <div class="quiz-result">
        <p class="eyebrow">The cauldron has decided</p>
        <div class="result-swatch" style="background:${r.color}; --swatch-glow:${r.color}aa">
          <span aria-hidden="true">${r.emoji}</span>
        </div>
        <h3>${r.title}</h3>
        <p class="result-shade">${r.shade}</p>
        <p>${r.desc}</p>
        <button class="quiz-retake" id="quiz-retake">Brew again 🔁</button>
      </div>`;
    burstSparkles(card.getBoundingClientRect());
    nextBtn.hidden = false;
    $("#quiz-retake").addEventListener("click", () => {
      idx = 0;
      Object.keys(tally).forEach(k => delete tally[k]);
      renderQuestion();
    });
  }

  renderQuestion();
})();

/* ============================================================
   STOP 5 — Trophy room
============================================================ */
(function renderTrophies() {
  const grid = $("#trophy-grid");
  CONFIG.reasons.forEach((r, i) => {
    const card = el("button", "trophy-card");
    card.setAttribute("aria-label", `Collectible card: ${r.title}, ${r.rarity}. Tap to flip and read.`);
    card.innerHTML = `
      <div class="trophy-inner">
        <div class="trophy-face trophy-front">
          <span class="trophy-emoji" aria-hidden="true">${r.emoji}</span>
          <h3>${r.title}</h3>
          <span class="rarity ${r.rarity}">${r.rarity}</span>
        </div>
        <div class="trophy-face trophy-back">
          <span class="trophy-no">CARD No. ${String(i + 1).padStart(2, "0")} / ${String(CONFIG.reasons.length).padStart(2, "0")}</span>
          <p>${r.text}</p>
        </div>
      </div>`;
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
      if (card.classList.contains("flipped")) burstSparkles(card.getBoundingClientRect(), 6);
    });
    grid.appendChild(card);
  });
})();

/* ============================================================
   STOP 6 — Finale
============================================================ */
(function renderFinale() {
  $("#finale-title").textContent = CONFIG.finale.heading;
  const msg = $("#finale-message");
  CONFIG.finale.paragraphs.forEach(p => msg.appendChild(el("p", "", p)));

  // Voice note: shown only when CONFIG.finale.voiceNote is true
  // (add voice-note.mp3 next to index.html, then flip the flag)
  const audio = $("#voice-audio");
  const voiceWrap = $("#voice-note");
  const voiceBtn = $("#voice-btn");
  if (CONFIG.finale.voiceNote) voiceWrap.hidden = false;
  voiceBtn.addEventListener("click", () => {
    if (audio.paused) { audio.play(); voiceBtn.textContent = "⏸️ Pause"; }
    else { audio.pause(); voiceBtn.textContent = "▶️ Play my voice note"; }
  });
  audio.addEventListener("ended", () => voiceBtn.textContent = "▶️ Play it again");

  $("#confetti-btn").addEventListener("click", () => launchConfetti(80));
})();

function finaleEntrance() {
  if (!reducedMotion) setTimeout(() => launchConfetti(70), 600);
}

/* Confetti of bats, pumpkins and stars */
function launchConfetti(count = 60) {
  if (reducedMotion) count = Math.min(count, 15);
  const layer = $("#sparkle-layer");
  const pieces = ["🦇", "🎃", "⭐", "✨", "🦇", "🌟", "🎃", "🍂"];
  for (let i = 0; i < count; i++) {
    const p = el("span", "confetti-piece", pieces[Math.floor(Math.random() * pieces.length)]);
    p.style.left = Math.random() * 100 + "vw";
    p.style.setProperty("--size", 14 + Math.random() * 18 + "px");
    p.style.setProperty("--dur", 3 + Math.random() * 3.5 + "s");
    p.style.setProperty("--spin", (Math.random() > .5 ? "" : "-") + (180 + Math.random() * 540) + "deg");
    p.style.animationDelay = Math.random() * 1.2 + "s";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 8500);
  }
}

/* ============================================================
   Easter eggs
============================================================ */
(function initEggs() {
  const toast = $("#egg-toast");
  let toastTimer;
  function reveal(btn, msg, fx) {
    btn.classList.remove("found");
    void btn.offsetWidth; // restart wiggle
    btn.classList.add("found");
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 4500);
    if (fx) fx();
  }
  $("#egg-moon").addEventListener("click", function () {
    reveal(this, CONFIG.eggs.moon, () => burstSparkles(this.getBoundingClientRect(), 10, "⭐"));
  });
  $("#egg-owl").addEventListener("click", function () {
    reveal(this, CONFIG.eggs.owl, () => burstSparkles(this.getBoundingClientRect(), 8, "💌"));
  });
  $("#egg-pumpkin").addEventListener("click", function () {
    reveal(this, CONFIG.eggs.pumpkin, () => launchConfetti(18));
  });
  $("#egg-cat").addEventListener("click", function () {
    reveal(this, CONFIG.eggs.cat, () => burstSparkles(this.getBoundingClientRect(), 10, "🐾"));
  });
})();

/* ============================================================
   Ambient music toggle (off by default)
============================================================ */
(function initMusic() {
  const btn = $("#music-toggle");
  const audio = $("#ambient-audio");
  audio.volume = 0.35;
  btn.addEventListener("click", async () => {
    const on = btn.getAttribute("aria-pressed") === "true";
    if (on) {
      audio.pause();
      btn.setAttribute("aria-pressed", "false");
      btn.textContent = "🔇";
    } else {
      try {
        await audio.play();
        btn.setAttribute("aria-pressed", "true");
        btn.textContent = "🎵";
      } catch {
        // No ambient.mp3 present — gentle feedback instead of silence
        btn.textContent = "🚫";
        setTimeout(() => (btn.textContent = "🔇"), 1200);
      }
    }
  });
})();

/* ============================================================
   Sparkles — wand cursor trail (desktop) & tap bursts (mobile)
============================================================ */
const sparkleLayer = $("#sparkle-layer");
const SPARKLE_CHARS = ["✦", "✧", "⋆", "✨"];

function spawnSparkle(x, y, char) {
  const s = el("span", "sparkle", char || SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)]);
  s.style.left = x + "px";
  s.style.top = y + "px";
  s.style.color = Math.random() > 0.5 ? "#ecd28a" : "#f08a3e";
  s.style.setProperty("--size", 10 + Math.random() * 10 + "px");
  s.style.setProperty("--dx", (Math.random() - 0.5) * 50 + "px");
  s.style.setProperty("--dy", 10 + Math.random() * 35 + "px");
  sparkleLayer.appendChild(s);
  setTimeout(() => s.remove(), 850);
}

function burstSparkles(rect, n = 12, char) {
  if (reducedMotion) return;
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  for (let i = 0; i < n; i++) {
    spawnSparkle(cx + (Math.random() - 0.5) * rect.width * 0.8,
                 cy + (Math.random() - 0.5) * rect.height * 0.8, char);
  }
}

if (!reducedMotion) {
  // Desktop: trail behind the wand cursor (throttled)
  let lastTrail = 0;
  window.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const now = performance.now();
    if (now - lastTrail < 70) return;
    lastTrail = now;
    spawnSparkle(e.clientX + 6, e.clientY + 6);
  }, { passive: true });

  // Mobile: a little burst where she taps
  window.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse") return;
    for (let i = 0; i < 5; i++) {
      spawnSparkle(e.clientX + (Math.random() - 0.5) * 36,
                   e.clientY + (Math.random() - 0.5) * 36);
    }
  }, { passive: true });
}

/* ============================================================
   Canvas particles — starfield, falling leaves, drifting bats
============================================================ */
(function initParticles() {
  if (reducedMotion) return;
  const canvas = $("#particle-canvas");
  const ctx = canvas.getContext("2d");
  let W, H, dpr;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  const rnd = (a, b) => a + Math.random() * (b - a);

  // Stars (twinkling dots)
  const stars = Array.from({ length: 60 }, () => ({
    x: Math.random(), y: Math.random() * 0.75,
    r: rnd(0.4, 1.4), tw: rnd(0.5, 2.5), ph: rnd(0, Math.PI * 2)
  }));

  // Leaves (drawn as small rotated ellipses in autumn colours)
  const LEAF_COLORS = ["#d9692a", "#c9a24b", "#a84a1e", "#8d6b2f"];
  const leaves = Array.from({ length: 14 }, () => spawnLeaf(true));
  function spawnLeaf(anywhere) {
    return {
      x: rnd(0, 1), y: anywhere ? rnd(0, 1) : -0.05,
      size: rnd(5, 10), vy: rnd(0.0003, 0.0008),
      sway: rnd(0.3, 1), swaySpd: rnd(0.5, 1.4),
      rot: rnd(0, Math.PI * 2), rotSpd: rnd(-0.02, 0.02),
      color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      ph: rnd(0, Math.PI * 2)
    };
  }

  // Bats (drawn as simple flapping wing shapes)
  const bats = Array.from({ length: 4 }, () => ({
    x: rnd(0, 1), y: rnd(0.05, 0.45),
    vx: rnd(0.0004, 0.001) * (Math.random() > 0.5 ? 1 : -1),
    size: rnd(7, 13), ph: rnd(0, Math.PI * 2), flap: rnd(4, 7)
  }));

  function drawBat(b, t) {
    const x = b.x * W, y = b.y * H + Math.sin(t * 1.5 + b.ph) * 12;
    const flap = Math.sin(t * b.flap + b.ph) * 0.7;
    const s = b.size;
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(b.vx > 0 ? 1 : -1, 1);
    ctx.fillStyle = "rgba(14, 8, 18, 0.9)";
    ctx.beginPath();
    // body
    ctx.ellipse(0, 0, s * 0.32, s * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    // wings
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-s * 1.4, -s * (0.8 + flap), -s * 2.1, flap * s * 0.5);
    ctx.quadraticCurveTo(-s * 1.1, s * 0.25, 0, s * 0.3);
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(s * 1.4, -s * (0.8 + flap), s * 2.1, flap * s * 0.5);
    ctx.quadraticCurveTo(s * 1.1, s * 0.25, 0, s * 0.3);
    ctx.fill();
    ctx.restore();
  }

  let running = true;
  document.addEventListener("visibilitychange", () => {
    running = !document.hidden;
    if (running) requestAnimationFrame(frame);
  });

  function frame(ts) {
    if (!running) return;
    const t = ts / 1000;
    ctx.clearRect(0, 0, W, H);

    // stars
    for (const s of stars) {
      const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * s.tw + s.ph));
      ctx.fillStyle = `rgba(243, 230, 200, ${a})`;
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // leaves
    for (let i = 0; i < leaves.length; i++) {
      const l = leaves[i];
      l.y += l.vy;
      l.rot += l.rotSpd;
      if (l.y > 1.05) leaves[i] = spawnLeaf(false);
      const x = l.x * W + Math.sin(t * l.swaySpd + l.ph) * 36 * l.sway;
      ctx.save();
      ctx.translate(x, l.y * H);
      ctx.rotate(l.rot);
      ctx.fillStyle = l.color;
      ctx.globalAlpha = 0.75;
      ctx.beginPath();
      ctx.ellipse(0, 0, l.size, l.size * 0.45, 0, 0, Math.PI * 2);
      ctx.fill();
      // stem
      ctx.strokeStyle = l.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(l.size, 0);
      ctx.lineTo(l.size + 3, 0);
      ctx.stroke();
      ctx.restore();
    }

    // bats
    for (const b of bats) {
      b.x += b.vx;
      if (b.x > 1.1) b.x = -0.1;
      if (b.x < -0.1) b.x = 1.1;
      drawBat(b, t);
    }

    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
