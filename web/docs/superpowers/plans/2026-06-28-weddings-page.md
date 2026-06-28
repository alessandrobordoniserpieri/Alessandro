# Weddings Page Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Creare `/weddings` duplicando `funerals.astro` e adattando tutti i contenuti/colori per il contesto wedding.

**Architecture:** Copia 1:1 di funerals.astro come base; le sezioni mantengono la stessa struttura HTML/CSS ma con testi, colori (funeral→wedding) e contenuti wedding-specifici. La sezione B2B viene rimossa. La strategia responsive hero (min-h-screen + pt-20 mobile / md:h-[80vh] + md:mt-auto desktop) è già nella base e viene ereditata senza modifiche.

**Tech Stack:** Astro, Tailwind v4, `--color-wedding` token (#6B2D2A), `weddings-hero.jpg` già presente in assets.

## Global Constraints

- Palette: usa `--color-wedding` ovunque c'era `--color-funeral`; token identici per tutto il resto
- Font: Cormorant Garamond (display) + Inter (body) — invariati
- Hero responsive: `min-h-screen md:h-[80vh]` + `pt-20 md:pt-0 md:mt-auto` — ereditato, non toccare
- Nessuna sezione B2B (#trade) in weddings
- No push al remote

---

### Task 1 — Copia base + frontmatter + import immagine (A + B)

**File:** `web/src/pages/weddings.astro` (CREATE da copia di funerals.astro)

- [ ] Copia funerals.astro → weddings.astro (PowerShell `Copy-Item`)
- [ ] Frontmatter `<Layout title>`: `"Wedding Music — Caterina Strings, Manchester"`
- [ ] Frontmatter `<Layout description>`: `"Live classical and pop string music for weddings across Greater Manchester. Quartet, trio, duo or solo violin for ceremony, drinks reception and beyond."`
- [ ] Import: `import funeralsHero` → `import weddingsHero from '../assets/images/weddings-hero.jpg'`
- [ ] `src={funeralsHero.src}` → `src={weddingsHero.src}`
- [ ] Alt text img: `"Wedding ceremony venue with floral decorations"`

---

### Task 2 — Hero: testi + colori (sezione C)

**File:** `web/src/pages/weddings.astro` (MODIFY, sezione 1. HERO)

- [ ] Eyebrow: `"For a Dignified Farewell"` → `"For Your Wedding Day"`, `color: var(--color-wedding)`
- [ ] H1: `"Music that says what words cannot"` → `"Live music for the day you'll always remember"`
- [ ] Subhead: → `"From the processional to the first dance — string quartet, trio, duo or solo violin for weddings across Greater Manchester and the North West."`
- [ ] CTA primary label: `"Request a callback"` → `"Request a quote"`
- [ ] CTA primary href subject: `Funeral%20enquiry` → `Wedding%20enquiry`
- [ ] CTA secondary: invariato (`"View pricing →"`)

---

### Task 3 — Intro + Repertoire (sezioni D + E)

**File:** `web/src/pages/weddings.astro` (MODIFY, sezioni 2. INTRO e 3. REPERTOIRE)

**Intro:**
- [ ] H2: `"Quiet, considered, present"` → `"Music that holds the moment"`
- [ ] Paragrafo 1: → `"Whether you're walking down the aisle, raising a glass with your guests, or sharing your first dance, live strings bring a warmth that no recording can. We work with you to build a setlist that fits your venue, your style, and the people you've gathered."`
- [ ] Paragrafo 2 (secondario): rimuovere o adattare (`"Same-week availability"` non è il punto di forza wedding)

**Repertoire:**
- [ ] Sottotitolo: → `"From classical processionals to your favourite pop song arranged for strings. We're happy to learn a special piece for your day — just ask."`
- [ ] Tutti i tre `color: var(--color-funeral)` sugli eyebrow → `color: var(--color-wedding)`
- [ ] Colonna 1 — eyebrow: `"Entrance & Exit"` → `"Ceremony"`, h3: `"Processionals"`, pezzi:
  - Pachelbel — Canon in D
  - Handel — Water Music (Air)
  - Vivaldi — Spring (The Four Seasons)
  - Wagner — Bridal Chorus
- [ ] Colonna 2 — eyebrow: `"During the Service"` → `"Drinks Reception"`, h3: `"Crowd favourites"`, pezzi:
  - Einaudi — Nuvole Bianche (arr. strings)
  - Ed Sheeran — Perfect (arr. strings)
  - Debussy — Clair de Lune
  - Chopin — Nocturne in E♭
- [ ] Colonna 3 — eyebrow: `"Hymns"` → `"First Dance & Beyond"`, h3: `"Modern classics"`, pezzi:
  - Beyoncé — Halo (arr. strings)
  - Elvis Presley — Can't Help Falling in Love (arr. strings)
  - Coldplay — The Scientist (arr. strings)
  - John Legend — All of Me (arr. strings)

---

### Task 4 — Pricing: adattamento wedding + rimozione callout B2B (sezione 4)

**File:** `web/src/pages/weddings.astro` (MODIFY, sezione 4. ENSEMBLE & PRICING)

- [ ] Testa intro pricing: `"Transparent pricing. All packages include arrival, set-up and performance time."`
- [ ] Righe pricing (colonna "Includes" + prezzi adattati wedding):
  - Solo violin | Ceremony (up to 45 min) | from £295
  - Duo (vln + cello) | Ceremony + drinks (up to 2 hrs) | from £495
  - Trio | Ceremony + drinks (up to 2.5 hrs) | from £645
  - String quartet | Full package (up to 3 hrs) | from £795
- [ ] Footnote: `"Prices from. Final quote tailored to your venue, timings and ensemble choice. Travel within Greater Manchester included."`
- [ ] Rimuovere il callout box (`border-left: 4px solid var(--color-funeral)`) — no B2B ref in weddings

---

### Task 5 — How it works + rimozione B2B + Contact CTA (sezioni 5-7)

**File:** `web/src/pages/weddings.astro` (MODIFY, sezioni 5, 6, 7)

**How it works — colori e testi:**
- [ ] Tutti i `color: var(--color-funeral)` sui numeri → `color: var(--color-wedding)`
- [ ] Step 1: titolo `"Get in touch"`, desc: `"Tell us your date, venue and roughly what you're imagining."`
- [ ] Step 2: titolo `"Bespoke chat"`, desc: `"We'll plan the setlist with you — ceremony pieces, drinks reception favourites, first dance if you'd like."`
- [ ] Step 3: titolo `"Confirmation"`, desc: `"Written quote and booking confirmation within 24 hours. We take a small deposit to hold your date."`
- [ ] Step 4: titolo `"On the day"`, desc: `"We arrive early, set up quietly, and play from the first note to the last."`

**Rimozione sezione B2B:**
- [ ] Eliminare intero blocco `<!-- 6. FOR FUNERAL DIRECTORS -->` (`<section id="trade" ...>`)

**Contact CTA finale:**
- [ ] `hover:text-funeral` → `hover:text-wedding` sui due link email/telefono

---

### Task 6 — Verifica browser (tutte e 3 le pagine)

- [ ] Desktop 1440px `/weddings`: hero text bottom-left, eyebrow burgundy, immagine caricata, NO sezione B2B, prezzi wedding
- [ ] Mobile 375px `/weddings`: hero text top (sotto header, no overlap), entrambi CTA visibili senza scroll
- [ ] Desktop 1440px `/funerals`: invariato rispetto a prima (regressione)
- [ ] Mobile 375px `/funerals`: responsive fix ancora attivo
- [ ] Desktop 1440px `/`: homepage invariata
- [ ] Mobile 375px `/`: homepage invariata

---

### Task 7 — /code-review → fix → Screenshot Playwright → commit

- [ ] Invocare skill `code-review` sulle modifiche
- [ ] Applicare tutti i fix CONFIRMED/PLAUSIBLE
- [ ] Screenshot Playwright (viewport reset tra ogni cambiamento):
  - `step-05-weddings-desktop.png` (1440×900)
  - `step-05-weddings-mobile.png` (375×812)
  - `step-05-funerals-mobile-v5.png` (375×812, verifica regressione)
  - `step-05-homepage-mobile-v5.png` (375×812, verifica regressione)
- [ ] Commit singolo: `"feat: pagina /weddings + fix responsive hero + gradient asimmetrico su tutte le hero"`
- [ ] NO push

---

## File creati / modificati

| File | Azione |
|------|--------|
| `web/src/pages/weddings.astro` | CREATE (da copia funerals.astro) |
| `web/docs/superpowers/plans/2026-06-28-weddings-page.md` | CREATE (questo file) |

Layout.astro, global.css, funerals.astro: nessuna modifica prevista.
