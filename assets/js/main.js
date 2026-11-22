/* ==========================================================================
   BAMBOO TOURS CHIANG RAI — SITE SCRIPT (bilingual EN / TH)
   Renders tour cards, the detail pop-up, the gallery and the booking form.
   You normally do not need to edit this file:
     • prices and English text  → assets/js/data.js
     • Thai text                → assets/js/i18n.th.js
   ========================================================================== */

(function () {
  "use strict";

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const baht = (n) => n.toLocaleString("en-US");
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- Language ---------- */
  // "th" on the Thai pages, "en" everywhere else.
  const LANG = document.documentElement.lang === "th" ? "th" : "en";
  const TX = LANG === "th" && typeof TH !== "undefined" ? TH : null;
  // Thai pages live in /th/, so images need to step one folder up.
  const BASE = document.body.getAttribute("data-base") || "";

  // translate a single repeated phrase ("Lunch", "2–4 persons", "1 Day"…)
  const p = (s) => (TX && TX.phrase[s]) || s;
  // translate an interface label
  const t = (k) => (TX && TX.ui[k] !== undefined ? TX.ui[k] : EN_UI[k]);

  const EN_UI = {
    from: "From",
    perPerson: "/ person",
    viewDetails: "View details",
    bookNow: "Book now",
    programme: "Programme",
    pricePerPerson: "Price per person",
    groupSize: "Group size",
    price: "Price",
    tourIncludes: "Tour includes",
    notIncluded: "Not included",
    requestThisTour: "Request this tour",
    askOnWhatsApp: "Ask on WhatsApp",
    start: "Start",
    fullDayFrom: "Full day from",
    perDay: "/ day",
    vehicle: "Vehicle",
    reviewsWord: "reviews",
    waAsk: (code, title) =>
      `Hello Bamboo Tours! I am interested in ${code} — ${title}. Could you tell me more?`,
    waDefault: "Hello Bamboo Tours, I would like to ask about your tours.",
    chooseOption: "— Please choose —",
    formError: "Please fill in your name, your email and the tour you are interested in.",
    waSent: "Opening WhatsApp — please press send in the chat window. We usually reply within a few hours.",
    mailSent: "Opening your email app — please press send. We usually reply within a few hours.",
    enquiryTitle: "TOUR ENQUIRY — Bamboo Tours Chiang Rai",
    fName: "Name",
    fEmail: "Email",
    fPhone: "Phone / WhatsApp",
    fTour: "Tour",
    fDate: "Preferred date",
    fPeople: "Number of people",
    fNotes: "Special requests",
    mailSubject: "Tour enquiry",
    groups: {},
    programLabels: {},
  };

  /* ---------- Merge the Thai text over the master data ---------- */
  function localize(tour) {
    if (!TX) return tour;
    const o = TX.tours[tour.code] || {};
    return Object.assign({}, tour, {
      title: o.title || tour.title,
      summary: o.summary || tour.summary,
      walk: o.walk || (tour.walk ? p(tour.walk) : tour.walk),
      visits: o.visits || tour.visits,
      itinerary: o.itinerary || tour.itinerary,
      duration: p(tour.duration),
      start: p(tour.start),
      badge: tour.badge ? p(tour.badge) : tour.badge,
      min: tour.min ? p(tour.min) : tour.min,
      includes: tour.includes.map(p),
      excludes: tour.excludes ? tour.excludes.map(p) : tour.excludes,
      // prices stay exactly as they are in data.js — only the labels are translated
      prices: tour.prices.map((x) => ({ rate: x.rate, who: p(x.who) })),
    });
  }

  /* ---------- Mobile menu ---------- */
  const burger = $("#burger");
  if (burger) {
    burger.addEventListener("click", () => document.body.classList.toggle("menu-open"));
    $$(".nav a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("menu-open")));
    document.addEventListener("click", (e) => {
      if (!document.body.classList.contains("menu-open")) return;
      if (e.target.closest(".nav") || e.target.closest("#burger")) return;
      document.body.classList.remove("menu-open");
    });
  }

  /* ---------- WhatsApp helper ---------- */
  function waLink(msg) {
    return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(msg);
  }
  $$("[data-wa]").forEach((el) => {
    const th = el.getAttribute("data-wa-th");
    const msg = (LANG === "th" && th) || el.dataset.wa || t("waDefault");
    el.href = waLink(msg);
  });

  /* ---------- Tour cards ---------- */
  const TOUR_INDEX = {};
  [].concat(typeof TREKKING !== "undefined" ? TREKKING : [], typeof SIGHTSEEING !== "undefined" ? SIGHTSEEING : []).forEach(
    (x) => (TOUR_INDEX[x.code] = x)
  );

  function cardHTML(raw) {
    const d = localize(raw);
    const low = Math.min.apply(null, d.prices.map((x) => x.rate));
    return `
      <article class="tour-card reveal">
        <div class="tour-media">
          <img src="${BASE}${d.image}" alt="${esc(d.title)}" loading="lazy">
          <span class="tour-code">${esc(d.code)}</span>
          ${d.badge ? `<span class="tour-flag">${esc(d.badge)}</span>` : ""}
        </div>
        <div class="tour-body">
          <div class="tour-meta">
            <span class="chip">${esc(d.duration)}</span>
            <span class="chip chip-gold">${esc(t("start"))} ${esc(d.start)}</span>
            ${d.walk ? `<span class="chip">${esc(d.walk)}</span>` : ""}
          </div>
          <h3>${esc(d.title)}</h3>
          ${d.visits ? `<div class="visits">${esc(d.visits)}</div>` : ""}
          <p class="summary">${esc(d.summary)}</p>
        </div>
        <div class="price-line">
          <span class="price-from">${esc(t("from"))}</span>
          <span class="price-big">฿${baht(low)}</span>
          <span class="price-unit">${esc(t("perPerson"))}</span>
        </div>
        <div class="tour-actions">
          <button class="btn btn-outline btn-sm" data-detail="${esc(d.code)}">${esc(t("viewDetails"))}</button>
          <a class="btn btn-primary btn-sm" href="contact.html?tour=${encodeURIComponent(d.code)}">${esc(t("bookNow"))}</a>
        </div>
      </article>`;
  }

  function renderList(selector, list) {
    const host = $(selector);
    if (!host) return;
    host.innerHTML = list.map(cardHTML).join("");
  }

  if (typeof TREKKING !== "undefined") renderList("#trekking-list", TREKKING);
  if (typeof SIGHTSEEING !== "undefined") renderList("#sightseeing-list", SIGHTSEEING);

  const featuredHost = $("#featured-list");
  if (featuredHost && typeof TREKKING !== "undefined") {
    const picks = ["T1", "T2", "S1", "S3"].map((c) => TOUR_INDEX[c]).filter(Boolean);
    featuredHost.innerHTML = picks.map(cardHTML).join("");
  }

  /* ---------- Detail modal ---------- */
  const back = $("#modal-back");
  function openDetail(code) {
    const raw = TOUR_INDEX[code];
    if (!raw || !back) return;
    const d = localize(raw);
    const rows = d.prices
      .map((x) => `<tr><td>${esc(x.who)}</td><td class="amt">฿${baht(x.rate)}</td></tr>`)
      .join("");
    back.innerHTML = `
      <div class="modal" role="dialog" aria-modal="true" aria-label="${esc(d.title)}">
        <div class="modal-hd">
          <img src="${BASE}${d.image}" alt="${esc(d.title)}">
          <button class="modal-x" aria-label="Close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="tour-meta">
            <span class="chip">${esc(d.code)}</span>
            <span class="chip">${esc(d.duration)}</span>
            <span class="chip chip-gold">${esc(t("start"))} ${esc(d.start)}</span>
          </div>
          <h2>${esc(d.title)}</h2>
          ${d.visits ? `<div class="visits">${esc(d.visits)}</div>` : ""}
          <p>${esc(d.summary)}</p>

          <h4>${esc(t("programme"))}</h4>
          <ul class="itin">${d.itinerary.map((s) => `<li>${esc(s)}</li>`).join("")}</ul>

          <h4>${esc(t("pricePerPerson"))}</h4>
          <table class="ptable">
            <thead><tr><th>${esc(t("groupSize"))}</th><th>${esc(t("price"))}</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
          <p class="form-note">${esc(d.min || "")}</p>

          <h4>${esc(t("tourIncludes"))}</h4>
          <div class="taglist">${d.includes.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div>
          ${
            d.excludes && d.excludes.length
              ? `<h4>${esc(t("notIncluded"))}</h4><div class="taglist">${d.excludes
                  .map((i) => `<span class="chip chip-x">${esc(i)}</span>`)
                  .join("")}</div>`
              : ""
          }

          <div class="send-row" style="margin-top:28px">
            <a class="btn btn-primary" href="contact.html?tour=${encodeURIComponent(d.code)}">${esc(t("requestThisTour"))}</a>
            <a class="btn btn-gold" target="_blank" rel="noopener"
               href="${waLink(t("waAsk")(d.code, d.title))}">${esc(t("askOnWhatsApp"))}</a>
          </div>
        </div>
      </div>`;
    back.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeDetail() {
    if (!back) return;
    back.classList.remove("open");
    back.innerHTML = "";
    document.body.style.overflow = "";
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-detail]");
    if (b) { openDetail(b.dataset.detail); return; }
    if (e.target.closest(".modal-x") || e.target === back) closeDetail();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeDetail(); closeLightbox(); } });

  /* ---------- Gallery ---------- */

  /* Grid tiles are 190-400px wide but the photos are 1200px. Each gallery and
     cooking photo has a 520px copy in a thumbs/ folder beside it; the tile uses
     that and the click-to-enlarge pop-up still loads the full-size original. */
  const thumbSrc = (src) => src.replace(/\/(gallery|cooking)\/([^/]+)$/, "/$1/thumbs/$2");
  const galHost = $("#gallery-grid");
  if (galHost && typeof GALLERY !== "undefined") {
    const limit = parseInt(galHost.dataset.limit || "0", 10);
    const items = GALLERY.map((g, i) => ({
      src: BASE + g.src,
      caption: (TX && TX.gallery[i]) || g.caption,
    }));
    const shown = limit ? items.slice(0, limit) : items;
    galHost.innerHTML = shown
      .map(
        (g) => `<figure class="gal-item reveal" data-full="${g.src}">
            <img src="${thumbSrc(g.src)}" alt="${esc(g.caption)}" loading="lazy">
            <figcaption class="gal-cap">${esc(g.caption)}</figcaption>
          </figure>`
      )
      .join("");
  }
  const lb = $("#lightbox");
  let lbToken = 0;
  function closeLightbox() { if (lb) lb.classList.remove("open"); }
  document.addEventListener("click", (e) => {
    const it = e.target.closest(".gal-item");
    if (it && lb) {
      /* The tile now holds a 520px thumb, so opening the pop-up used to wait for
         the full photo to download - about a second. Show the thumb at once
         (it is already in cache) and swap in the full one when it arrives. */
      const lbImg = $("#lightbox-img");
      const tileImg = it.querySelector("img");
      const token = ++lbToken;
      lbImg.src = (tileImg && tileImg.currentSrc) || tileImg.src || it.dataset.full;
      const fullImg = new Image();
      fullImg.onload = function () { if (token === lbToken) lbImg.src = fullImg.src; };
      fullImg.src = it.dataset.full;
      lb.classList.add("open");
    } else if (lb && (e.target === lb || e.target.closest("#lightbox .modal-x"))) {
      closeLightbox();
    }
  });

  /* ---------- Cooking class photo gallery ---------- */
  const cookHost = $("#cooking-gallery");
  if (cookHost && typeof COOKING_GALLERY !== "undefined") {
    cookHost.innerHTML = COOKING_GALLERY.map(
      (g) =>
        `<figure class="gal-item reveal" data-full="${BASE}${g.src}">
           <img src="${thumbSrc(BASE + g.src)}" alt="${esc(g.caption)}" loading="lazy">
           <figcaption class="gal-cap">${esc(g.caption)}</figcaption>
         </figure>`
    ).join("");
  }

  /* ---------- About Us: founder + team cards ---------- */
  const skillChips = (txt) =>
    String(txt)
      .split("\u00b7")
      .map((t) => t.trim())
      .filter(Boolean)
      .map((t) => `<span class="skill-chip">${t}</span>`)
      .join("");
  const teamMeta = (p) =>
    `<div class="team-meta">
       <div class="tm-langs"><b>Speaks</b>${p.langs}</div>
       <div class="tm-skills"><b>Good at</b><div class="skill-chips">${skillChips(p.skills)}</div></div>
     </div>`;

  const founderHost = $("#team-founder");
  if (founderHost && typeof TEAM_FOUNDER !== "undefined") {
    const p = TEAM_FOUNDER;
    founderHost.innerHTML =
      `<article class="team-founder reveal">
         <div class="team-photo team-photo--lg">
           <img src="${BASE}assets/images/team/${p.photo}" alt="${esc(p.name)}" loading="lazy">
         </div>
         <div class="team-body">
           <h3>${esc(p.name)}${p.nick ? ` <span class="team-nick">\u201c${esc(p.nick)}\u201d</span>` : ""}</h3>
           <span class="team-role">${p.role}</span>
           <p>${esc(p.bio)}</p>
           ${teamMeta(p)}
         </div>
       </article>`;
  }

  const teamHost = $("#team-grid");
  if (teamHost && typeof TEAM !== "undefined") {
    teamHost.innerHTML = TEAM.map(
      (p) =>
        `<article class="team-card reveal">
           <div class="team-photo">
             <img src="${BASE}assets/images/team/${p.photo}" alt="${esc(p.name)}" loading="lazy">
           </div>
           <div class="team-body">
             <h3>${esc(p.name)}${p.nick ? ` <span class="team-nick">\u201c${esc(p.nick)}\u201d</span>` : ""}</h3>
             <span class="team-role">${p.role}</span>
             <p>${esc(p.bio)}</p>
             ${teamMeta(p)}
           </div>
         </article>`
    ).join("");
  }

  /* ---------- Booking form ---------- */
  const form = $("#booking-form");
  if (form) {
    const sel = $("#f-tour");
    if (sel && typeof ALL_PROGRAMS !== "undefined") {
      const labelFor = (prog) => {
        if (TX && TX.ui.programLabels[prog.code]) return TX.ui.programLabels[prog.code];
        if (TX && TX.tours[prog.code]) return prog.code + " — " + TX.tours[prog.code].title;
        return prog.label;
      };
      const groupName = (g) => (TX && TX.ui.groups[g]) || g;

      const groups = {};
      ALL_PROGRAMS.forEach((prog) => (groups[prog.group] = groups[prog.group] || []).push(prog));
      sel.innerHTML =
        `<option value="">${esc(t("chooseOption"))}</option>` +
        Object.keys(groups)
          .map(
            (g) =>
              `<optgroup label="${esc(groupName(g))}">` +
              groups[g]
                .map((prog) => `<option value="${esc(prog.code)}">${esc(labelFor(prog))}</option>`)
                .join("") +
              "</optgroup>"
          )
          .join("");

      const want = new URLSearchParams(location.search).get("tour");
      if (want && ALL_PROGRAMS.some((prog) => prog.code === want)) sel.value = want;
    }

    const msg = $("#form-msg");
    function collect() {
      const sel2 = $("#f-tour");
      const d = {
        name: $("#f-name").value.trim(),
        email: $("#f-email").value.trim(),
        phone: $("#f-phone").value.trim(),
        tour: sel2.options[sel2.selectedIndex] ? sel2.options[sel2.selectedIndex].text : "",
        tourCode: sel2.value,
        date: $("#f-date").value,
        people: $("#f-people").value,
        notes: $("#f-notes").value.trim(),
      };
      if (!d.name || !d.email || !d.tourCode) {
        msg.textContent = t("formError");
        msg.className = "form-msg err show";
        return null;
      }
      return d;
    }
    function messageText(d) {
      return [
        t("enquiryTitle"),
        "",
        t("fName") + ": " + d.name,
        t("fEmail") + ": " + d.email,
        d.phone ? t("fPhone") + ": " + d.phone : "",
        t("fTour") + ": " + d.tour,
        d.date ? t("fDate") + ": " + d.date : "",
        d.people ? t("fPeople") + ": " + d.people : "",
        "",
        d.notes ? t("fNotes") + ":\n" + d.notes : "",
      ]
        .filter(Boolean)
        .join("\n");
    }

    $("#send-wa").addEventListener("click", () => {
      const d = collect();
      if (!d) return;
      window.open(waLink(messageText(d)), "_blank", "noopener");
      msg.textContent = t("waSent");
      msg.className = "form-msg show";
    });

    $("#send-mail").addEventListener("click", () => {
      const d = collect();
      if (!d) return;
      const subject = t("mailSubject") + " — " + d.tour + " — " + d.name;
      location.href =
        "mailto:" + SITE.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(messageText(d));
      msg.textContent = t("mailSent");
      msg.className = "form-msg show";
    });

    form.addEventListener("submit", (e) => e.preventDefault());
    const dateInput = $("#f-date");
    if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
  }

  /* ---------- Car rental: the three vehicle photo cards ---------- */
  const fleetHost = $("#fleet-grid");
  if (fleetHost && typeof CAR_RENTAL !== "undefined" && CAR_RENTAL.fleet) {
    const dayRows = CAR_RENTAL.groups[0].rows;
    fleetHost.innerHTML = CAR_RENTAL.fleet
      .map((f, i) => {
        const ft = TX && TX.car.fleet ? TX.car.fleet[i] : null;
        const row = dayRows.filter((r) => r.vehicle === f.vehicle)[0];
        const price = row
          ? `<p class="fleet-price"><span>${esc(t("fullDayFrom"))}</span><b>฿${baht(row.price)}</b><i>${esc(t("perDay"))}</i></p>`
          : "";
        return `<article class="fleet-card reveal">
          <div class="fleet-shot"><img src="${BASE}assets/images/${f.img}" alt="${esc(ft ? ft.label : f.label)}" loading="lazy"></div>
          <div class="fleet-body">
            <h3>${esc(ft ? ft.label : f.label)}<span class="seats">${esc(ft ? ft.seats : f.seats)}</span></h3>
            <p>${esc(ft ? ft.desc : f.desc)}</p>
            ${price}
          </div>
        </article>`;
      })
      .join("");
  }

  /* ---------- Car rental tables ---------- */
  const rateHost = $("#rate-grid");
  if (rateHost && typeof CAR_RENTAL !== "undefined") {
    rateHost.innerHTML = CAR_RENTAL.groups
      .map((g, gi) => {
        const gt = TX ? TX.car.groups[gi] : null;
        /* keep each half of "Private car — 3 seats" on one line, so on a
           narrow phone it breaks at the dash instead of mid-phrase */
        const nb = (s) =>
          s
            .split(" — ")
            .map((part) => part.replace(/ /g, " "))
            .join(" — ");
        const vName = (v) => nb((TX && TX.car.vehicles[v]) || v);
        /* tiny photo beside each row — matched on seat count, so
           "4 seats" quietly reuses the 5-seat SUV photo */
        const thumb = (v) => {
          const fl = (CAR_RENTAL.fleet || []).filter((f) => f.vehicle === v)[0];
          const n = (v.match(/(\d+)/) || [])[1];
          const alt = fl || (CAR_RENTAL.fleet || []).filter((f) => /5 seats/.test(f.vehicle))[0];
          const pick = fl || (n && +n <= 5 ? alt : null);
          return pick ? `<img class="vthumb" src="${BASE}assets/images/${pick.img}" alt="" loading="lazy">` : "";
        };
        return `<div class="rate-card reveal">
          <h3>${esc(gt ? gt.title : g.title)}</h3>
          <p class="note">${esc(gt ? gt.note : g.note)}</p>
          <table class="ptable ptable-car">
            <thead><tr><th>${esc(t("vehicle"))}</th><th>${esc(t("price"))}</th></tr></thead>
            <tbody>${g.rows
              .map(
                (r) =>
                  `<tr><td><span class="vcell">${thumb(r.vehicle)}<span>${esc(vName(r.vehicle))}</span></span></td><td class="amt">฿${baht(
                    r.price
                  )}</td></tr>`
              )
              .join("")}</tbody>
          </table>
        </div>`;
      })
      .join("");
  }

  /* ---------- Cooking class blocks ---------- */
  const schedHost = $("#sched-grid");
  if (schedHost && typeof COOKING !== "undefined") {
    const sessions = TX ? TX.cooking.sessions : COOKING.sessions;
    schedHost.innerHTML = sessions
      .map(
        (s) => `<div class="sched reveal">
          <div class="sched-hd"><h3>${esc(s.name)}</h3><span>${esc(s.time)}</span></div>
          <ol>${s.steps.map((st) => `<li><b>${esc(st[0])}</b><span>${esc(st[1])}</span></li>`).join("")}</ol>
        </div>`
      )
      .join("");
  }
  const menuHost = $("#menu-grid");
  if (menuHost && typeof COOKING !== "undefined") {
    const menu = TX ? TX.cooking.menu : COOKING.menu;
    menuHost.innerHTML = menu
      .map(
        (m) => `<div class="menu-card reveal">
          <h3>${esc(m.group)}</h3>
          <ul>${m.dishes.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>
        </div>`
      )
      .join("");
  }


  /* ---------- Home hero slideshow ----------
     One photo every HERO_INTERVAL_MS. The current photo slides out to the
     left while the next one slides in from the right, then it loops. */
  const heroBox = $("#hero-slides");
  if (heroBox && typeof HERO_SLIDES !== "undefined" && HERO_SLIDES.length) {
    let cur = 0, timer = null;
    const dots = document.createElement("div");
    const slides = HERO_SLIDES.map((s, i) => {
      const im = document.createElement("img");
      im.className = "hero-slide" + (i === 0 ? " is-active" : "");
      /* Every slide sits at inset:0 and is only moved by a CSS transform, so the
         browser counts all of them as on-screen and loading="lazy" does nothing -
         all 11 photos used to download before the page had finished painting.
         Only the first one gets a src now; the rest are fetched just before they
         are needed. First paint drops from ~3.6 MB to ~0.4 MB. */
      var _u = BASE && s.src.indexOf("http") !== 0 ? BASE + s.src : s.src;
      if (i === 0) { im.src = _u; } else { im.dataset.src = _u; }
      im.style.objectPosition = "50% " + (s.focus == null ? 50 : s.focus) + "%";
      im.alt = i === 0 ? esc(s.caption || "") : "";
      im.setAttribute("aria-hidden", i === 0 ? "false" : "true");
      if (i === 0) im.setAttribute("fetchpriority", "high");
      im.addEventListener("error", function () { dropSlide(im); });
      heroBox.appendChild(im);
      return im;
    });

    /* give a slide its photo the moment we know it is about to be shown */
    const ensureSlide = (i) => {
      const im = slides[i];
      if (im && im.dataset.src) { im.src = im.dataset.src; delete im.dataset.src; }
    };
    /* once the first screen has painted, quietly fetch the second photo */
    window.addEventListener("load", () => setTimeout(() => ensureSlide(1), 600));

    // if a photo cannot be loaded, quietly take it out of the rotation
    function dropSlide(im) {
      const i = slides.indexOf(im);
      if (i < 0) return;
      slides.splice(i, 1);
      im.remove();
      if (dots.children[i]) dots.children[i].remove();
      if (cur >= slides.length) cur = 0;
      if (slides.length) {
        slides.forEach((s, n) => s.classList.toggle("is-active", n === cur));
        if (dots.children[cur]) dots.children[cur].className = "on";
      }
      if (slides.length < 2) stop();
    }

    // little dots showing how many photos there are
    dots.className = "hero-dots";
    slides.forEach((_, i) => {
      const d = document.createElement("i");
      if (i === 0) d.className = "on";
      dots.appendChild(d);
    });
    heroBox.parentNode.appendChild(dots);

    function show(next) {
      if (next === cur || slides.length < 2) return;
      const out = slides[cur], inn = slides[next];

      // park the incoming slide on the right with no animation, then slide it in
      inn.classList.add("no-anim");
      ensureSlide(next);
      inn.classList.remove("is-active", "is-out");
      void inn.offsetWidth;                 // force the browser to apply it now
      inn.classList.remove("no-anim");
      inn.classList.add("is-active");

      out.classList.remove("is-active");
      out.classList.add("is-out");
      // once it is off-screen, snap it back to the right, ready for next time
      setTimeout(function () {
        out.classList.add("no-anim");
        out.classList.remove("is-out");
        void out.offsetWidth;
        out.classList.remove("no-anim");
      }, 1050);

      dots.children[cur].className = "";
      dots.children[next].className = "on";
      cur = next;

      // warm up the one after next so it is ready when its turn comes
      ensureSlide((next + 1) % slides.length);
    }

    function start() { stop(); timer = setInterval(function () { show((cur + 1) % slides.length); }, typeof HERO_INTERVAL_MS !== "undefined" ? HERO_INTERVAL_MS : 4000); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    start();
    // pause while the tab is in the background so it does not jump on return
    document.addEventListener("visibilitychange", function () { document.hidden ? stop() : start(); });
    // let people click a dot to jump to that photo
    dots.addEventListener("click", function (e) {
      const i = Array.prototype.indexOf.call(dots.children, e.target);
      if (i >= 0) { show(i); start(); }
    });
  }

  /* ---------- Guest reviews carousel ----------
     Moves one card every REVIEW_INTERVAL_MS: the strip slides left by exactly
     one card, then the card that just left is moved to the end of the strip
     and the strip snaps back with no animation. The result is an endless
     loop where the old card always exits left and the new one enters right. */
  const revView = $("#rev-view");
  if (revView && typeof REVIEWS !== "undefined" && REVIEWS.length) {
    const track = document.createElement("div");
    track.className = "rev-track";

    const srcLabel = { tripadvisor: "Tripadvisor", google: "Google" };
    const cardFor = (r) => {
      const initial = (r.author || "?").trim().charAt(0).toUpperCase();
      const who = r.place ? `${esc(r.place)} · ${esc(r.date)}` : esc(r.date);
      return (
        `<article class="rev-slide">` +
        `<div class="stars" aria-label="5 out of 5">★★★★★</div>` +
        (r.title ? `<h4>${esc(r.title)}</h4>` : "") +
        `<blockquote>&ldquo;${esc(r.text)}&rdquo;</blockquote>` +
        `<div class="rev-foot">` +
        `<span class="rev-avatar" aria-hidden="true">${esc(initial)}</span>` +
        `<span class="rev-who"><b>${esc(r.author)}</b><span>${who}</span></span>` +
        `<span class="rev-src ${esc(r.source)}">${esc(srcLabel[r.source] || r.source)}</span>` +
        `</div></article>`
      );
    };

    // two passes, so the strip is always wider than the window
    const order = REVIEWS.concat(REVIEWS);
    track.innerHTML = order.map(cardFor).join("");
    revView.appendChild(track);

    const dots = $("#rev-dots");
    if (dots) {
      dots.innerHTML = REVIEWS.map(() => "<i></i>").join("");
      dots.children[0].classList.add("on");
    }

    let at = 0;            // which review is first in view
    let timer = null;
    let busy = false;

    const step = () => {
      const card = track.querySelector(".rev-slide");
      if (!card) return 0;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return card.getBoundingClientRect().width + gap;
    };

    function markDot() {
      if (!dots) return;
      Array.prototype.forEach.call(dots.children, (d, i) => d.classList.toggle("on", i === at));
    }

    function slide(dir) {
      if (busy) return;
      busy = true;
      const d = step();

      if (dir < 0) {
        // Going back: move the last card to the front, jump the strip one card
        // to the left with no animation, then glide it back to 0 — so the new
        // card appears to come in from the left.
        track.insertBefore(track.lastElementChild, track.firstElementChild);
        track.classList.add("no-anim");
        track.style.transform = `translateX(${-d}px)`;
        void track.offsetWidth;
        track.classList.remove("no-anim");
        track.style.transform = "translateX(0)";
      } else {
        // Forward: glide one card to the left. The card that left the view is
        // then moved to the end and the strip snaps back with no animation,
        // so the next card always arrives from the right.
        track.style.transform = `translateX(${-d}px)`;
      }

      setTimeout(() => {
        if (dir > 0) {
          track.classList.add("no-anim");
          track.appendChild(track.firstElementChild);
          track.style.transform = "translateX(0)";
          void track.offsetWidth;
          track.classList.remove("no-anim");
        }
        at = (at + (dir > 0 ? 1 : -1) + REVIEWS.length) % REVIEWS.length;
        markDot();
        busy = false;
      }, 790);
    }

    function start() { stop(); timer = setInterval(() => slide(1), REVIEW_INTERVAL_MS); }
    function stop() { if (timer) clearInterval(timer); timer = null; }

    start();
    document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
    revView.addEventListener("mouseenter", stop);
    revView.addEventListener("mouseleave", start);

    const prev = $("#rev-prev");
    const next = $("#rev-next");
    if (prev) prev.addEventListener("click", () => { slide(-1); start(); });
    if (next) next.addEventListener("click", () => { slide(1); start(); });

    // swipe on a touch screen
    let x0 = null;
    revView.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; stop(); }, { passive: true });
    revView.addEventListener("touchend", (e) => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) slide(dx < 0 ? 1 : -1);
      x0 = null;
      start();
    });
  }

  /* ---------- Rating summary chips ---------- */
  const statHost = $("#rev-stats");
  if (statHost && typeof REVIEW_STATS !== "undefined") {
    const linkFor = (s) => (s === "google" ? SITE.googleReviews : SITE.tripadvisor);
    statHost.innerHTML = REVIEW_STATS.map(
      (s) =>
        `<a class="rev-stat" href="${linkFor(s.source)}" target="_blank" rel="noopener">` +
        `<span class="score">${esc(s.rating)}</span>` +
        `<span class="meta"><b>${esc(s.label)}</b>` +
        `<span class="tiny-stars">★★★★★</span>` +
        `<span>${esc(String(s.count))} ${esc(t("reviewsWord"))}</span></span></a>`
    ).join("");
  }

  /* ---------- Reveal on scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
    { rootMargin: "0px 0px -60px 0px" }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  /* ---------- Year in footer ---------- */
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  /* ---------- Keep the floating WhatsApp button off the page's buttons -------
     On a phone the bubble sits in the bottom-right corner — exactly where a
     tour card's "Book now" button lands. So: it slides away while the page is
     being scrolled, and when the scrolling stops it only comes back if it is
     not sitting on top of a button. --------------------------------------- */
  (function () {
    const fc = $(".float-chat");
    if (!fc) return;
    let tuckTimer = null;

    // the bubble's resting box (offsetWidth / computed inset ignore transforms)
    function restBox() {
      const cs = getComputedStyle(fc);
      const r = parseFloat(cs.right) || 0;
      const b = parseFloat(cs.bottom) || 0;
      const right = window.innerWidth - r;
      const bottom = window.innerHeight - b;
      return { left: right - fc.offsetWidth, right: right, top: bottom - fc.offsetHeight, bottom: bottom };
    }

    function coversAButton() {
      const f = restBox();
      const pad = 10; // keep a little air around it too
      return $$(".btn, .float-chat ~ * .btn").some((el) => {
        if (el.closest(".float-chat")) return false;
        const r = el.getBoundingClientRect();
        if (!r.width || !r.height) return false;
        return r.left < f.right + pad && r.right > f.left - pad && r.top < f.bottom + pad && r.bottom > f.top - pad;
      });
    }

    function update(isScrolling) {
      document.body.classList.toggle("float-away", isScrolling || coversAButton());
    }

    window.addEventListener(
      "scroll",
      () => {
        update(true);
        clearTimeout(tuckTimer);
        tuckTimer = setTimeout(() => update(false), 420);
      },
      { passive: true }
    );
    window.addEventListener("resize", () => update(false), { passive: true });
    setTimeout(() => update(false), 400);
  })();
})();
