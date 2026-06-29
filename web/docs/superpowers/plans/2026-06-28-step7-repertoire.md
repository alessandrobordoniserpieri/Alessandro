# Pagina /repertoire Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Creare `web/src/pages/repertoire.astro` — pagina tipografica con 5 sezioni di repertorio (71 brani totali), intro e CTA finale, che risolve il 404 del footer.

**Architecture:** Singolo file Astro. Nessuna immagine. Riusa Layout.astro, Button.astro, palette colori e font esistenti. Sezioni alternate bg-bg / bg-alt con data-reveal fade-in. Griglia brani a 2 colonne su desktop, 1 su mobile.

**Tech Stack:** Astro, Tailwind CSS, font Cormorant Garamond + Inter già caricati.

## Global Constraints

- File unico: `web/src/pages/repertoire.astro`
- Zero nuove librerie, zero immagini decorative
- Layout title: `"Repertoire — Caterina Strings, Manchester"`
- Layout description: `"Our full repertoire — classical, sacred, romantic, pop and folk arrangements. We're happy to learn something specific on request."`
- Riusa `Button.astro` con variant primary e ghost
- Sistema `[data-reveal]` su ogni `<section>` per fade-in
- Colori: `var(--color-ink)`, `var(--color-bg)`, `var(--color-bg-alt)`, `var(--color-wedding)` — nessun `var(--color-funeral)`
- Eyebrow: Inter 500, uppercase, `font-size: 0.75rem; letter-spacing: 0.15em; color: color-mix(in srgb, var(--color-ink) 60%, transparent)`
- Heading sezioni: Cormorant, font-normal, `font-size: clamp(1.75rem, 3vw, 2.25rem)`
- Brani: Inter, `font-size: 0.9375rem; line-height: 1.6; color: color-mix(in srgb, var(--color-ink) 78%, transparent)`

---

### Task 1: Scaffolding + Intro tipografica

**Files:**
- Create: `web/src/pages/repertoire.astro`

- [ ] **Step 1: Crea il file con import e sezione intro**

```astro
---
import Layout from '../layouts/Layout.astro';
import Button from '../components/Button.astro';
---

<Layout
  title="Repertoire — Caterina Strings, Manchester"
  description="Our full repertoire — classical, sacred, romantic, pop and folk arrangements. We're happy to learn something specific on request."
>

  <!-- INTRO tipografica -->
  <section data-reveal class="py-32 md:py-40" style="background-color: var(--color-bg);">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <p class="font-body font-medium uppercase mb-6"
        style="font-size: 0.75rem; letter-spacing: 0.15em; color: color-mix(in srgb, var(--color-ink) 60%, transparent);">
        Our Repertoire
      </p>
      <h1 class="font-display font-normal leading-tight mb-8"
        style="font-size: clamp(3rem, 6vw, 5rem);">
        What we can play, on request.
      </h1>
      <p class="font-body mx-auto"
        style="font-size: 1.125rem; line-height: 1.75; max-width: 60ch; color: color-mix(in srgb, var(--color-ink) 80%, transparent);">
        From Baroque processionals to modern pop arrangements, from sacred hymns to film themes.
        Below is a selection of our most-requested pieces. If you'd like something not listed — just ask.
        We're happy to learn a piece that matters to you.
      </p>
    </div>
  </section>

</Layout>
```

- [ ] **Step 2: Verifica nel browser che la pagina carica senza errori**

  Apri `http://localhost:4321/repertoire` — deve mostrare l'intro. Footer deve linkare correttamente.

---

### Task 2: Sezioni A e B

**Files:**
- Modify: `web/src/pages/repertoire.astro`

Pattern helper da ripetere per ogni sezione (inserire prima di `</Layout>`):

```astro
<!-- SEZIONE [LETTERA]: [NOME] -->
<section data-reveal class="py-20 md:py-24" style="background-color: var(--color-[bg|bg-alt]);">
  <div class="max-w-6xl mx-auto px-6 md:px-12">
    <div class="text-center mb-12">
      <p class="font-body font-medium uppercase mb-4"
        style="font-size: 0.75rem; letter-spacing: 0.15em; color: color-mix(in srgb, var(--color-ink) 60%, transparent);">
        [EYEBROW]
      </p>
      <h2 class="font-display font-normal"
        style="font-size: clamp(1.75rem, 3vw, 2.25rem);">
        [HEADING]
      </h2>
    </div>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2 max-w-4xl mx-auto list-none">
      <li class="font-body" style="font-size: 0.9375rem; line-height: 1.6; color: color-mix(in srgb, var(--color-ink) 78%, transparent);">Bach — Air on the G String</li>
      <!-- … altri brani … -->
    </ul>
  </div>
</section>
```

- [ ] **Step 1: Sezione A — Classical & Baroque (bg-bg)**

  Eyebrow: `CLASSICAL & BAROQUE` — Heading: `Timeless music for processionals, ceremonies and receptions`
  18 brani: Bach×2, Pachelbel, Vivaldi×2, Mozart, Handel×2, Albinoni, Massenet, Boccherini, Schubert, Mascagni, Elgar×2, Mendelssohn, Wagner, Clarke.

- [ ] **Step 2: Sezione B — Sacred & Traditional Hymns (bg-alt)**

  Eyebrow: `SACRED & TRADITIONAL` — Heading: `Hymns and sacred music for ceremonies and services`
  15 brani: Schubert Ave Maria, Bach/Gounod Ave Maria, Fauré Pavane, Fauré Pie Jesu, Lloyd Webber Pie Jesu, + 10 inni (All Things Bright…, Abide With Me, Amazing Grace, Jerusalem, Lord's My Shepherd, How Great Thou Art, Be Thou My Vision, Morning Has Broken, Make Me a Channel…, Guide Me O Thou Great Redeemer).

---

### Task 3: Sezioni C, D, E

**Files:**
- Modify: `web/src/pages/repertoire.astro`

- [ ] **Step 1: Sezione C — Romantic & Cinematic (bg-bg)**

  Eyebrow: `ROMANTIC & CINEMATIC` — Heading: `Music from films, classical romantics and modern composers`
  13 brani: Yiruma, Einaudi×2, Hisaishi, Williams×2, Horner, Mancini, Zimmer, Disney×3, Piazzolla.

- [ ] **Step 2: Sezione D — Pop & Modern Arrangements (bg-alt)**

  Eyebrow: `POP & MODERN` — Heading: `Your favourite songs, arranged for strings`
  15 brani: Sheeran×2, Coldplay×2, Goulding, Perri, Adele×2, Beatles×2, Legend, Mars, Smith, Withers, Wonder.

- [ ] **Step 3: Sezione E — Folk, Celtic & Traditional (bg-bg)**

  Eyebrow: `FOLK & CELTIC` — Heading: `Traditional pieces from across the British Isles`
  10 brani: Skye Boat Song, Danny Boy, Greensleeves, Scarborough Fair, Water Is Wide, She Moved Through the Fair, Loch Lomond, Parting Glass, Carrickfergus, Wild Mountain Thyme.

---

### Task 4: Final CTA

**Files:**
- Modify: `web/src/pages/repertoire.astro`

- [ ] **Step 1: Aggiungi CTA finale (bg-alt)**

```astro
<!-- FINAL CTA -->
<section data-reveal class="py-24 md:py-32" style="background-color: var(--color-bg-alt);">
  <div class="max-w-3xl mx-auto px-6 text-center">
    <h2 class="font-display font-normal mb-6"
      style="font-size: clamp(2rem, 3.5vw, 2.5rem);">
      Looking for something specific?
    </h2>
    <p class="font-body mx-auto mb-10"
      style="font-size: 1.0625rem; line-height: 1.75; max-width: 52ch; color: color-mix(in srgb, var(--color-ink) 72%, transparent);">
      We're happy to learn a piece that matters to you. Get in touch and tell us what you have in mind.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Button href="/contact" variant="primary">Get in touch</Button>
      <Button href="/weddings" variant="ghost">Browse wedding packages →</Button>
    </div>
  </div>
</section>
```

---

### Task 5: Verifica + /code-review + screenshot + commit

**Files:**
- Read: browser a 1440×900 e 375×812
- Write: `web/screenshots/step-07-repertoire-desktop.png`
- Write: `web/screenshots/step-07-repertoire-mobile.png`

- [ ] **Step 1: Verifica browser desktop (1440×900)**

  Playwright: navigate `/repertoire`, resize 1440×900, scroll top→bottom visivo, screenshot fullPage.

- [ ] **Step 2: Verifica browser mobile (375×812)**

  Playwright: resize 375×812, screenshot fullPage.

- [ ] **Step 3: /code-review**

  Invoca code-review su `web/src/pages/repertoire.astro`. Applica fix se presenti.

- [ ] **Step 4: Commit**

  ```
  git add web/src/pages/repertoire.astro web/screenshots/step-07-*
  git commit -m "feat: pagina /repertoire con 5 sezioni di brani"
  ```
  NO push.
