# Entwicklungs-Dokumentation

Diese Datei enthält technische Details für Entwickler, die am Projekt arbeiten oder es weiterentwickeln möchten.

## 📐 Architektur

### Projekt-Struktur

Das Projekt folgt einer einfachen, flachen Struktur ohne Build-Tools oder Frameworks:

```
├── HTML-Dateien (Root-Level)
│   ├── index.html              # Hauptseite
│   ├── vertikalliftsysteme.html # Produktseite
│   └── index_audit_pro.html    # Audit-Tool
│
├── Assets (Ordner-basiert)
│   ├── logos/                  # SVG & PNG Logos
│   ├── Produkte/              # Produktbilder (WebP)
│   └── Hintergrundbilder/     # Hero-Backgrounds
│
└── Dokumentation
    ├── README.md              # Haupt-Doku
    ├── DEVELOPMENT.md         # Diese Datei
    └── SEKTION_DOKUMENTATION.md
```

### Inline-Architektur

**Warum inline Styles & Scripts?**
- ✅ Keine externen HTTP-Requests
- ✅ Schnellere Ladezeiten
- ✅ Einfachere Deployment (single file)
- ✅ Keine Build-Tools nötig

**Struktur innerhalb der HTML-Dateien:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta>...</meta>
    <style>
        /* CSS hier */
    </style>
</head>
<body>
    <!-- HTML Content -->

    <script>
        // JavaScript hier
    </script>
</body>
</html>
```

## 🎨 CSS-Architektur

### CSS Custom Properties (Variablen)

Alle Farben und wichtige Werte als Variablen definiert:

```css
:root {
    /* Farben */
    --primary: #16A085;
    --secondary: #2C3E50;
    --background: #F8F9FA;
    --surface: #FFFFFF;
    --text-primary: #2C3E50;
    --text-secondary: #5A6C7D;
    --success: #27AE60;

    /* Abstände */
    --section-padding: 5rem 2rem;

    /* Transitions */
    --transition-smooth: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
```

### BEM-ähnliche Namenskonvention

```css
.video-scroll-wrapper { }          /* Block */
.video-scroll-container { }        /* Block */
.video-card { }                    /* Element */
.video-card:hover { }              /* Modifier */
```

### Mobile-First Ansatz

```css
/* Base Styles (Mobile) */
.element {
    width: 100%;
}

/* Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
    .element {
        width: 80%;
    }
}

/* Desktop */
@media (min-width: 1025px) {
    .element {
        width: 60%;
    }
}
```

## 💻 JavaScript-Architektur

### Vanilla JavaScript Pattern

Kein Framework, kein jQuery - pures JavaScript:

```javascript
// Event-basierte Architektur
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    initializeComponents();
}
```

### LocalStorage Pattern

Für Merkliste-Persistierung:

```javascript
// Speichern
function saveToWatchlist(product) {
    let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlist.push(product);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
}

// Laden
function loadWatchlist() {
    return JSON.parse(localStorage.getItem('watchlist')) || [];
}
```

### Smooth Scroll Pattern

```javascript
// Auto-Scroll mit Animation Frame
let scrollPosition = 0;
let scrollDirection = 1;

function autoScroll() {
    scrollPosition += scrollDirection * 1;

    if (scrollPosition >= maxScroll) {
        scrollDirection = -1;
    } else if (scrollPosition <= 0) {
        scrollDirection = 1;
    }

    element.scrollLeft = scrollPosition;
    requestAnimationFrame(autoScroll);
}
```

## 🔧 Komponenten-Übersicht

### 1. Video-Marquee (index.html)

**Location**: Zeile ~2700-2850

**Funktionsweise:**
```javascript
const videoWrapper = document.querySelector('.video-marquee-wrapper');
let videoScrollInterval = setInterval(autoScrollVideos, 30);

// Pause on Hover
videoWrapper.addEventListener('mouseenter', () => {
    clearInterval(videoScrollInterval);
});
```

**CSS:**
- `.video-marquee-wrapper`: Container mit `overflow-x: auto`
- `.video-marquee-container`: Flex-Container für Videos
- `.video-card`: Einzelne Video-Karten

### 2. Produktauswahl (vertikalliftsysteme.html)

**Komponenten:**

**a) Product Cards**
```html
<div class="product-card" data-product="lift">
    <img src="..." class="product-image">
    <h2 class="product-title">Modula Lift</h2>
    <button class="product-button">Mehr erfahren</button>
</div>
```

**b) Modal**
```javascript
function openModal(productId) {
    const product = products[productId];
    document.getElementById('modalTitle').textContent = product.title;
    // ... populate modal
    document.getElementById('productModal').classList.add('active');
}
```

**c) Watchlist**
```javascript
let watchlist = [];

function addToWatchlist() {
    const product = { id: currentProduct, title: products[currentProduct].title };
    watchlist.push(product);
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    updateWatchlistBadge();
}
```

### 3. PDF-Generierung

**Library**: jsPDF v2.5.1

**Struktur:**
```javascript
function generatePDF(formData) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Header
    doc.setFillColor(22, 160, 133);
    doc.rect(0, 0, 210, 40, 'F');
    doc.text('R. Pöppel GmbH & Co. KG', 20, 18);

    // Content
    formData.products.forEach((product, index) => {
        // Add product details
    });

    // Footer (on every page)
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        // Add footer
    }

    doc.save('filename.pdf');
}
```

### 4. Audit-Tool (index_audit_pro.html)

**Multi-Step Form:**
```javascript
const steps = [
    {
        title: "Schritt 1",
        fields: [
            { name: "field1", label: "Label", type: "select", options: [...] }
        ]
    }
];

let currentStep = 0;

function nextStep() {
    saveCurrentStep();
    currentStep++;
    renderStep(currentStep);
}
```

**Scoring-Algorithmus:**
```javascript
function calculateScore() {
    let score = 0;

    // Platzmangel (0-40 Punkte)
    if (formData.painpoints?.includes('Platzmangel')) {
        if (formData.platzmangel === 'Kritisch') score += 40;
        else if (formData.platzmangel === 'Hoch') score += 30;
        // ...
    }

    // Weitere Kriterien...

    return Math.min(score, 100);
}
```

## 🎯 Best Practices

### 1. CSS

**DO:**
```css
/* Verwende Custom Properties */
.button {
    background: var(--primary);
    transition: var(--transition-smooth);
}

/* Verwende Flexbox/Grid */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
```

**DON'T:**
```css
/* Vermeide !important */
.element {
    color: red !important; /* ❌ */
}

/* Vermeide Inline-Styles im HTML */
<div style="color: red"></div> /* ❌ */
```

### 2. JavaScript

**DO:**
```javascript
// Event-Delegation
document.addEventListener('click', (e) => {
    if (e.target.matches('.product-button')) {
        handleClick(e.target);
    }
});

// Const/Let statt var
const fixedValue = 10;
let variableValue = 20;
```

**DON'T:**
```javascript
// Vermeide globale Variablen
window.myGlobal = "bad"; // ❌

// Vermeide innerHTML mit user input
element.innerHTML = userInput; // ❌ XSS-Gefahr
```

### 3. Performance

**Optimierungen:**
- Lazy Loading für Bilder: `loading="lazy"`
- Defer für Scripts: `<script defer>`
- CSS Transitions statt JS Animations
- RequestAnimationFrame für Scroll-Animationen

**Messungen:**
```javascript
// Performance messen
console.time('operation');
// ... code
console.timeEnd('operation');
```

## 🐛 Debugging

### Console Logging

```javascript
// Entwicklungsmodus
const DEBUG = true;

function debug(message, data) {
    if (DEBUG) {
        console.log(`[DEBUG] ${message}`, data);
    }
}

// Verwendung
debug('Watchlist updated', watchlist);
```

### Common Issues

**Problem 1: Video scrollt nicht**
```javascript
// Check Element existiert
const wrapper = document.querySelector('.video-marquee-wrapper');
if (!wrapper) {
    console.error('Video wrapper not found!');
}

// Check Scroll-Properties
console.log('scrollWidth:', wrapper.scrollWidth);
console.log('clientWidth:', wrapper.clientWidth);
```

**Problem 2: LocalStorage funktioniert nicht**
```javascript
// Check LocalStorage verfügbar
if (typeof(Storage) !== "undefined") {
    // LocalStorage supported
} else {
    console.error('LocalStorage not supported');
}

// Check Quota
try {
    localStorage.setItem('test', 'test');
    localStorage.removeItem('test');
} catch (e) {
    console.error('LocalStorage quota exceeded', e);
}
```

## 🔄 Git Workflow

### Branch-Strategie

```bash
main            # Production-ready code
└── develop     # Development branch (optional)
    └── feature/neue-funktion
    └── fix/bug-name
```

### Commit-Konvention

```bash
# Format
<type>: <subject>

# Types
feat:     # Neue Feature
fix:      # Bug-Fix
docs:     # Dokumentation
style:    # Formatierung
refactor: # Code-Umstrukturierung
test:     # Tests
chore:    # Maintenance

# Beispiele
git commit -m "feat: Video Auto-Scroll implementiert"
git commit -m "fix: Mobile Navigation Überlauf behoben"
git commit -m "docs: README aktualisiert"
```

## 🚀 Deployment-Prozess

### Pre-Deployment Checklist

```markdown
- [ ] Alle Tests durchgeführt
- [ ] Cross-Browser Testing (Chrome, Firefox, Safari, Edge)
- [ ] Mobile Testing (iOS, Android)
- [ ] Lighthouse Audit (Score > 90)
- [ ] Broken Links Check
- [ ] Meta-Tags aktualisiert
- [ ] Console Errors behoben
- [ ] Git committed und gepusht
```

### Build-Prozess

Da keine Build-Tools verwendet werden:

```bash
# 1. Letzte Änderungen pullen
git pull origin main

# 2. Testen
# Öffne index.html im Browser und teste alle Funktionen

# 3. Committen
git add .
git commit -m "Release v2.0"
git push origin main

# 4. Deploy (automatisch bei GitHub Pages)
```

## 📊 Testing

### Manuelle Tests

**Checkliste pro Seite:**

**index.html:**
- [ ] Video Auto-Scroll läuft
- [ ] Pause on Hover funktioniert
- [ ] Scrollbar ist sichtbar und funktional
- [ ] Button "Systeme kennenlernen" ist grün
- [ ] Mobile: Über-uns Kacheln stapeln korrekt
- [ ] Links funktionieren

**vertikalliftsysteme.html:**
- [ ] Produktkarten öffnen Modal
- [ ] Merkliste-Badge zählt korrekt
- [ ] Produkte zur Merkliste hinzufügen
- [ ] PDF-Download funktioniert
- [ ] PDF enthält alle Daten
- [ ] Formular-Validierung funktioniert

**index_audit_pro.html:**
- [ ] Alle 7 Schritte durchlaufbar
- [ ] Score-Berechnung korrekt
- [ ] PDF-Export mit Ergebnissen
- [ ] Formular sendet Daten

### Browser Testing

```bash
# Tools
- BrowserStack (Cross-Browser)
- Chrome DevTools (Mobile Emulation)
- Firefox Responsive Design Mode
```

### Performance Testing

```bash
# Lighthouse
lighthouse https://your-site.com --view

# PageSpeed Insights
https://pagespeed.web.dev/
```

## 🔐 Sicherheit

### XSS-Prävention

```javascript
// BAD: innerHTML mit user input
element.innerHTML = userInput; // ❌

// GOOD: textContent
element.textContent = userInput; // ✅

// GOOD: Sanitize HTML (wenn nötig)
function sanitizeHTML(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}
```

### LocalStorage Sicherheit

```javascript
// Keine sensitiven Daten speichern
// ❌ Passwörter, Tokens, Kreditkarten
// ✅ UI-State, Preferences, Non-sensitive data
```

## 📝 Code-Kommentare

### Kommentar-Stil

```javascript
/**
 * Beschreibung der Funktion
 * @param {string} productId - Die Produkt-ID
 * @return {Object} Das Produkt-Objekt
 */
function getProduct(productId) {
    // Implementation
}

// Inline-Kommentare für komplexe Logik
if (score > 70) {
    // Sehr hohes Optimierungspotenzial
    // Zeige kritische Handlungsempfehlungen
}
```

## 🎓 Weitere Ressourcen

**HTML/CSS:**
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)

**JavaScript:**
- [JavaScript.info](https://javascript.info/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

**Tools:**
- [jsPDF Documentation](https://github.com/parallax/jsPDF)
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)

---

**Happy Coding! 🚀**

Bei Fragen: Dokumentation lesen oder Issue im Repository erstellen.
