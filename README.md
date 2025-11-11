# Pöppel Intralogistik Landingpage

Eine moderne, professionelle Landingpage für R. Pöppel GmbH & Co. KG - Spezialist für Intralogistik-Lösungen mit Fokus auf Modula Vertikalliftsysteme.

![Version](https://img.shields.io/badge/version-2.0-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 📋 Inhaltsverzeichnis

- [Übersicht](#übersicht)
- [Features](#features)
- [Dateistruktur](#dateistruktur)
- [Seitenübersicht](#seitenübersicht)
- [Installation & Verwendung](#installation--verwendung)
- [Technologie-Stack](#technologie-stack)
- [Anpassung](#anpassung)
- [Browser-Kompatibilität](#browser-kompatibilität)
- [Performance](#performance)
- [Deployment](#deployment)
- [Changelog](#changelog)

## 🎯 Übersicht

Diese moderne Webseite präsentiert die Intralogistik-Lösungen von R. Pöppel GmbH & Co. KG mit Schwerpunkt auf automatischen Lagersystemen, insbesondere Modula Vertikalliftsysteme. Die Webseite wurde mit reinem HTML, CSS und JavaScript entwickelt und bietet eine professionelle, responsive Präsenz ohne externe Abhängigkeiten.

**Kontaktdaten:**
- Firma: R. Pöppel GmbH & Co. KG
- Adresse: Alpenstraße 45, Industriegebiet Süd, D-87700 Memmingen
- Tel: 08331 9559-0
- E-Mail: info@poeppel-wkz.de
- Web: www.poeppel-wkz.de

## ✨ Features

### Design & UX
- ✅ **Fully Responsive**: Optimiert für Desktop, Tablet und Mobile (768px Breakpoint)
- ✅ **Modernes UI**: Professionelles Design mit Firmenfarben (Pöppel Grün #16A085)
- ✅ **Smooth Scrolling**: Sanfte Navigation und automatische Video-Animation
- ✅ **Animationen**: Dezente Scroll-Animationen und Hover-Effekte
- ✅ **Sticky Header**: Transparenter Header mit Logo und Navigation

### Funktionalität
- ✅ **Video-Marquee**: Automatisches Scrollen mit Pause-on-Hover
- ✅ **Produktauswahl**: Interaktive Modula-Produktseite mit Merkliste
- ✅ **PDF-Generierung**: Automatische PDF-Erstellung für Produktauswahl und Audit
- ✅ **Interaktives Audit**: Mehrstufiges Intralogistik-Audit mit Ergebnisanalyse
- ✅ **Kontaktformular**: Mit Validierung und Datenschutz-Checkbox

### Technisch
- ✅ **Zero Dependencies**: Kein jQuery, keine Frameworks
- ✅ **SEO-optimiert**: Semantisches HTML5, Meta-Tags, strukturierte Daten
- ✅ **Performance**: Lazy Loading für Bilder und Videos
- ✅ **Accessibility**: WCAG-konform, keyboard-navigierbar

## 📁 Dateistruktur

```
intralogistik-landingpage/
│
├── index.html                          # Hauptseite (Landingpage)
├── vertikalliftsysteme.html            # Modula Produktübersicht & Merkliste
├── index_audit_pro.html                # Intralogistik-Audit Tool
│
├── logos/                              # Firmenlogos (hell/dunkel)
│   ├── 100_Poeppel_Logo_HELL.png
│   ├── 100_Poeppel_Logo_DARK.png
│   └── ... (weitere Logo-Varianten)
│
├── Produkte/                           # Modula Produktbilder
│   ├── modula-lift.webp
│   ├── modula-slim.webp
│   ├── modula-next.webp
│   ├── modula-pallet.webp
│   └── modula-climatecontrol.webp
│
├── Hintergrundbilder Intralogistik/   # Hero-Hintergrundbilder
│   └── ... (Industriebilder)
│
├── Videos /                            # Video-Ressourcen
│   └── ... (Produktvideos)
│
├── README.md                           # Haupt-Dokumentation (diese Datei)
├── SEKTION_DOKUMENTATION.md            # Detaillierte Sektion-Dokumentation
├── ANIMATION_EFFECTS.md                # Animation & Effekte Dokumentation
├── CHAT_ZUSAMMENFASSUNG.md             # Entwicklungs-Historie
│
├── styles.css                          # Legacy CSS (nicht mehr verwendet)
├── script.js                           # Legacy JS (nicht mehr verwendet)
│
└── .gitignore                          # Git Ignore Datei
```

## 🌐 Seitenübersicht

### 1. Hauptseite (index.html)

Die zentrale Landingpage mit folgenden Sektionen:

#### Hero-Bereich
- **Dual-Logo-System**: Weißes Logo im Hero, grünes im Header
- **Call-to-Action**: Grüner Button "Systeme kennenlernen"
- **Hintergrundbild**: Professionelles Industriebild

#### Problemdarstellung
- 4 Haupt-Schmerzpunkte visualisiert mit Icons
- Responsive Grid-Layout

#### Lösungen
- **Vertikallift-Systeme**: Detaillierte Vorstellung mit SVG-Grafik
- **Digitale Vernetzung**: ERP-Integration & IoT
- **Button-Position**: Unter Text mit optimiertem Spacing

#### Video-Sektion
- **Auto-Scroll**: Automatisches Scrollen von links nach rechts
- **Pause on Hover**: Animation stoppt bei Mausover
- **Horizontal Scrollbar**: Manuelle Navigation mit Scrollbar
- YouTube-Video eingebettet mit Autoplay

#### Über uns
- **Grid-Layout**: 2-Spalten Desktop, 1-Spalte Mobile
- **Statistik-Kacheln**: 3 Key-Facts (20+ Jahre, 100+ Branchenexpertise, etc.)
- **Mobile-optimiert**: Stack-Layout unter 768px

#### Footer
- Firmeninformationen und Links

### 2. Produktseite (vertikalliftsysteme.html)

Interaktive Produktauswahl für Modula Systeme:

#### Features
- **5 Modula-Produkte**: Lift, Slim, Next, Pallet, Climate & Clean Room
- **Modal-Ansicht**: Detaillierte Produktinformationen
- **Merkliste-Funktion**:
  - Floating Badge mit Counter
  - Sidebar mit ausgewählten Produkten
  - Persistierung im LocalStorage
- **PDF-Generierung**:
  - Professionelles Layout mit jsPDF
  - Firmenkopf und -footer
  - Technische Details pro Produkt
  - Kundendaten-Integration
- **Video-Sektion**: Zentriertes Modula-Video (max-width: 1200px)
- **Kontaktformular**: Mit Checkboxen für Beratung/Info
- **Analyse-Button**: Link zum Audit-Tool (gelb, auffällig)

#### Technische Highlights
- **LocalStorage**: Merkliste bleibt erhalten
- **jsPDF**: Client-seitige PDF-Generierung
- **Responsive**: Grid zu 1-Spalte auf Mobile

### 3. Audit-Tool (index_audit_pro.html)

Mehrstufiges Intralogistik-Audit:

#### Funktion
- **7 Schritte**: Unternehmensdaten, Lagerinformationen, etc.
- **Scoring-System**: Berechnung des Optimierungspotenzials (0-100)
- **Visualisierung**:
  - Kreisförmiger Score-Indikator
  - Farbcodierte Problemfelder (Kritisch/Warnung)
  - Metriken-Boxen (Flächeneinsparung, Kosten, Zeit)
- **PDF-Export**:
  - Vollständige Audit-Ergebnisse
  - Identifizierte Problemfelder
  - Handlungsempfehlungen
  - Firmenkopf/-footer auf jeder Seite
- **Kontaktformular**: Für Detailanalyse-Anfrage

#### Berechnung
```javascript
// Scoring basiert auf:
- Platzmangel-Schweregrad (0-40 Punkte)
- Fehlende Digitalisierung (0-30 Punkte)
- Ineffiziente Prozesse (0-15 Punkte)
- Manuelle Nachbestellung (0-15 Punkte)
// Max: 100 Punkte = Sehr hohes Optimierungspotenzial
```

## 🚀 Installation & Verwendung

### Voraussetzungen
- Moderner Webbrowser (Chrome, Firefox, Safari, Edge)
- Optional: Web-Server für lokale Entwicklung

### Lokal ausführen

**Option 1: Direkt im Browser**
```bash
# Repository klonen
git clone https://github.com/svenn8n-a11y/intralogistik-landingpage.git

# In Verzeichnis wechseln
cd intralogistik-landingpage

# index.html im Browser öffnen (Doppelklick)
```

**Option 2: Mit Python Server**
```bash
python -m http.server 8000
# Öffne: http://localhost:8000
```

**Option 3: Mit VS Code Live Server**
1. VS Code Extension "Live Server" installieren
2. Rechtsklick auf index.html
3. "Open with Live Server" wählen

### Entwicklung

```bash
# Änderungen tracken
git status

# Änderungen committen
git add .
git commit -m "Beschreibung der Änderung"

# Pushen
git push origin main
```

## 🛠 Technologie-Stack

### Core Technologies
- **HTML5**: Semantisches Markup, strukturierte Daten
- **CSS3**:
  - CSS Custom Properties (`:root` Variablen)
  - Flexbox & Grid Layout
  - Media Queries für Responsive Design
  - Smooth Transitions & Animations
  - Pseudo-Elemente für Effekte
- **Vanilla JavaScript**:
  - ES6+ Features
  - DOM-Manipulation
  - Event-Handling
  - LocalStorage API
  - Smooth Scrolling

### Bibliotheken (nur wo nötig)
- **jsPDF** (v2.5.1): PDF-Generierung für Produktauswahl und Audit
  - CDN: `https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js`

### Farbschema

```css
:root {
    --primary: #16A085;          /* Pöppel Grün */
    --secondary: #2C3E50;        /* Dunkelblau */
    --background: #F8F9FA;       /* Hellgrau */
    --surface: #FFFFFF;          /* Weiß */
    --text-primary: #2C3E50;     /* Dunkel */
    --text-secondary: #5A6C7D;   /* Mittelgrau */
    --success: #27AE60;          /* Grün */
}
```

### Responsive Breakpoints

```css
/* Mobile First Ansatz */
@media (max-width: 768px) {
    /* Mobile Styles */
}

@media (min-width: 769px) and (max-width: 1024px) {
    /* Tablet Styles */
}

@media (min-width: 1401px) {
    /* Large Desktop Styles */
}
```

## 🎨 Anpassung

### Farben ändern

Firmenfarben in der CSS anpassen (`:root` Selektor in jeder HTML-Datei):

```css
:root {
    --primary: #IHRE-FARBE;
    --secondary: #IHRE-FARBE;
    /* ... */
}
```

### Inhalte aktualisieren

**Texte**: Direkt in HTML-Dateien bearbeiten
**Bilder**:
- Logos: `logos/` Verzeichnis
- Produkte: `Produkte/` Verzeichnis
- Hintergründe: `Hintergrundbilder Intralogistik/` Verzeichnis

**Videos**: YouTube-Video-IDs in iframe `src` ändern

### Kontaktdaten

Suchen und ersetzen in allen HTML-Dateien:
- Firma: "R. Pöppel GmbH & Co. KG"
- Adresse: "Alpenstraße 45..."
- Tel: "08331 9559-0"
- E-Mail: "info@poeppel-wkz.de"
- Web: "www.poeppel-wkz.de"

### Formular-Backend

Aktuell: Client-seitige PDF-Generierung ohne Backend

**Optionen für E-Mail-Versand:**

1. **Formspree** (Empfohlen)
```html
<form action="https://formspree.io/f/YOUR-ID" method="POST">
```

2. **EmailJS**
```javascript
emailjs.send("service_id", "template_id", formData);
```

3. **Eigenes Backend** (PHP, Node.js, Python)

## 🌍 Browser-Kompatibilität

Getestet und kompatibel mit:

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Vollständig |
| Firefox | 88+ | ✅ Vollständig |
| Safari | 14+ | ✅ Vollständig |
| Edge | 90+ | ✅ Vollständig |
| iOS Safari | 14+ | ✅ Vollständig |
| Chrome Android | 90+ | ✅ Vollständig |

**Hinweis**: IE11 wird nicht unterstützt (End of Life)

## ⚡ Performance

### Optimierungen
- ✅ **Zero Dependencies**: Außer jsPDF für PDF-Generierung
- ✅ **Inline CSS/JS**: Kein Extra HTTP-Request
- ✅ **Lazy Loading**: Für Bilder und Videos
- ✅ **Optimierte Animationen**: CSS statt JavaScript wo möglich
- ✅ **Minimale DOM-Manipulation**: Event-Delegation

### Lighthouse Scores (Ziel)
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 📦 Deployment

### GitHub Pages

1. In Repository Settings → Pages gehen
2. Branch "main" auswählen
3. Save klicken
4. URL: `https://svenn8n-a11y.github.io/intralogistik-landingpage/`

### Netlify

1. Netlify Account erstellen
2. "New site from Git" wählen
3. Repository verbinden
4. Deploy settings:
   - Build command: (leer)
   - Publish directory: `/`
5. Deploy klicken

### Vercel

```bash
npm i -g vercel
vercel
# Folge den Anweisungen
```

### Traditionelles Hosting

Per FTP alle Dateien auf Webserver hochladen:
- index.html (Root)
- vertikalliftsysteme.html
- index_audit_pro.html
- logos/
- Produkte/
- Alle anderen Assets

## 📝 Changelog

### Version 2.0 (November 2025)
- ✨ Video Auto-Scroll Animation implementiert
- ✨ Merkliste-Funktion mit PDF-Export
- ✨ Intralogistik-Audit Tool erstellt
- 🎨 Button "Systeme kennenlernen" grün gestaltet
- 📱 Mobile Optimierung "Über uns" Sektion
- 🐛 Navigation-Buttons entfernt (Scrollbar vorhanden)
- 🐛 Partnernamen aus Text entfernt
- 📦 Alle Styles inline für bessere Performance

### Version 1.0 (November 2025)
- 🎉 Initial Release
- ✨ Responsive Landingpage
- ✨ Produktseite mit Modals
- 🎨 Firmendesign implementiert

## 🤝 Mitwirken

Contributions willkommen! Bitte:

1. Fork erstellen
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add: AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📄 Lizenz

Copyright © 2025 R. Pöppel GmbH & Co. KG. Alle Rechte vorbehalten.

## 📞 Support & Kontakt

Bei Fragen zur Webseite oder den Intralogistik-Lösungen:

**R. Pöppel GmbH & Co. KG**
- 📍 Alpenstraße 45, Industriegebiet Süd, D-87700 Memmingen
- 📞 Tel: 08331 9559-0
- 📧 E-Mail: info@poeppel-wkz.de
- 🌐 Web: www.poeppel-wkz.de

---

**Entwickelt mit ❤️ für moderne Intralogistik-Lösungen**

🤖 *Diese Dokumentation wurde mit Unterstützung von Claude Code erstellt*
