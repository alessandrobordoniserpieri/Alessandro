# Step 6 – Audit completo + hero gradient potenziato

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fotografare lo stato attuale del sito con screenshot fullpage di tutte le pagine, eseguire un code-review formale, identificare i top 5 issue visivi/strutturali (senza applicarli), potenziare il gradient hero su tutte e 3 le pagine con immagine, poi applicare i fix approvati dall'utente e committare.

**Architecture:** Astro static site in `web/`. Tailwind con colori custom (`ink`, `cream`, `wedding`, `funeral`). Hero sezioni con doppio overlay CSS (verticale + orizzontale). Screenshot via Playwright MCP. Dev server su porta 4321.

**Tech Stack:** Astro, Tailwind CSS, Playwright MCP, /code-review skill, /frontend-design skill.

## Global Constraints

- NON applicare fix della Fase A prima del via dell'utente
- FASE B va applicata comunque, indipendentemente da A
- Commit singolo finale: `"fix: hero gradient potenziato + audit corrections"`
- NO push al remote
- Screenshot salvati in `web/screenshots/` con naming esatto come da spec
- Dev server: `npm run dev` dalla directory `web/`

---

### Task 1: Screenshot audit – tutte le pagine (Fase A)

**Files:**
- Write: `web/screenshots/step-06-audit-home-desktop.png`
- Write: `web/screenshots/step-06-audit-home-mobile.png`
- Write: `web/screenshots/step-06-audit-funerals-desktop.png`
- Write: `web/screenshots/step-06-audit-funerals-mobile.png`
- Write: `web/screenshots/step-06-audit-weddings-desktop.png`
- Write: `web/screenshots/step-06-audit-weddings-mobile.png`
- Write: `web/screenshots/step-06-audit-contact-desktop.png`
- Write: `web/screenshots/step-06-audit-contact-mobile.png`

- [ ] **Step 1: Verifica dev server**
  Controlla se `http://localhost:4321` risponde. Se no, avvia `npm run dev` in background dalla dir `web/`.

- [ ] **Step 2: Screenshot desktop 1440×900 – home**
  Playwright: navigate `http://localhost:4321`, resize 1440×900, screenshot fullPage → `web/screenshots/step-06-audit-home-desktop.png`

- [ ] **Step 3: Screenshot mobile 375×812 – home**
  Playwright: resize 375×812, screenshot fullPage → `web/screenshots/step-06-audit-home-mobile.png`

- [ ] **Step 4: Screenshot desktop + mobile – funerals**
  URL: `http://localhost:4321/funerals` — stessa procedura, nomi `step-06-audit-funerals-*`

- [ ] **Step 5: Screenshot desktop + mobile – weddings**
  URL: `http://localhost:4321/weddings` — nomi `step-06-audit-weddings-*`

- [ ] **Step 6: Screenshot desktop + mobile – contact**
  URL: `http://localhost:4321/contact` — nomi `step-06-audit-contact-*`

---

### Task 2: Code-review formale (Fase A)

**Files da revisionare:**
- `web/src/layouts/Layout.astro`
- `web/src/components/Button.astro`
- `web/src/pages/index.astro`
- `web/src/pages/funerals.astro`
- `web/src/pages/weddings.astro`
- `web/src/pages/contact.astro`
- `web/src/styles/global.css`

- [ ] **Step 1: Invoca /code-review**
  Usa la skill `code-review` a effort `high` sui file elencati.

- [ ] **Step 2: Analisi visiva screenshot**
  Esamina i 8 screenshot del Task 1. Cerca: testo che sborda, immagini non caricate, overlap, sezioni invisibili, spaziature sbagliate, errori di copy.

- [ ] **Step 3: Componi report sintetico**
  Formato:
  - Findings code-review per file
  - Findings visivi (screenshot)
  - TOP 5 issue prioritizzati

  **NON applicare ancora nessun fix. Attendere approvazione utente.**

---

### Task 3: Hero gradient potenziato – Fase B (applicare subito)

**Files:**
- Modify: `web/src/pages/index.astro`
- Modify: `web/src/pages/funerals.astro`
- Modify: `web/src/pages/weddings.astro`

Sostituire i due overlay esistenti in ogni hero con:

```html
<!-- Overlay 1: verticale, leggibilità testo bottom -->
<div class="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/20 md:from-ink/85 md:via-ink/40 md:to-ink/10 pointer-events-none"></div>
<!-- Overlay 2: orizzontale, dark left → light right -->
<div class="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-ink/15 md:from-ink/70 md:via-ink/20 md:to-transparent pointer-events-none"></div>
```

- [ ] **Step 1: Modifica `index.astro`**
  Individua il blocco dei due overlay nella sezione hero. Sostituisci con i due div sopra.

- [ ] **Step 2: Modifica `funerals.astro`**
  Stessa sostituzione.

- [ ] **Step 3: Modifica `weddings.astro`**
  Stessa sostituzione.

- [ ] **Step 4: Verifica browser**
  Screenshot Playwright di index, funerals, weddings in desktop 1440×900 e mobile 375×812. Verificare che:
  - Mobile: testo cream leggibile, immagine visibile ma "controllata"
  - Desktop: sinistra scura per testo, destra immagine pulita

---

### Task 4: Apply fix approvati (Fase C)

- [ ] **Step 1: Attendere input utente**
  L'utente risponderà con "applica i seguenti fix: X, Y, Z". Non procedere finché non arriva questo messaggio.

- [ ] **Step 2: Single pass**
  Applicare tutti i fix approvati in un singolo pass (un file alla volta, nessuna modifica ridondante).

- [ ] **Step 3: /code-review post-fix**
  Ri-eseguire `/code-review` sui file modificati in Fase B + Fase C. Segnalare nuovi problemi se emergono.

---

### Task 5: Screenshot finali + commit

**Files:**
- Write: `web/screenshots/step-06-final-home-desktop.png`
- Write: `web/screenshots/step-06-final-home-mobile.png`
- Write: `web/screenshots/step-06-final-funerals-desktop.png`
- Write: `web/screenshots/step-06-final-funerals-mobile.png`
- Write: `web/screenshots/step-06-final-weddings-desktop.png`
- Write: `web/screenshots/step-06-final-weddings-mobile.png`
- Write: `web/screenshots/step-06-final-contact-desktop.png`
- Write: `web/screenshots/step-06-final-contact-mobile.png`

- [ ] **Step 1: 8 screenshot finali fullPage**
  Stessa procedura del Task 1 ma con nomi `step-06-final-*`.

- [ ] **Step 2: Commit singolo**
  ```
  git add web/src/pages/index.astro web/src/pages/funerals.astro web/src/pages/weddings.astro \
          web/src/styles/global.css web/src/layouts/Layout.astro web/src/components/Button.astro \
          web/screenshots/
  git commit -m "fix: hero gradient potenziato + audit corrections"
  ```
  NO push.
