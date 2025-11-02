# Intralogistik Landingpage

Eine moderne, responsive Landingpage für Intralogistik-Lösungen, entwickelt mit reinem HTML, CSS und JavaScript.

## Übersicht

Diese Webseite präsentiert Dienstleistungen im Bereich Intralogistik, einschließlich Lagerverwaltungssystemen, Materialflusssystemen, Automatisierung und Prozessoptimierung.

## Features

- **Responsive Design**: Vollständig angepasst für Desktop, Tablet und Mobile
- **Moderne UI**: Sauberes, professionelles Design mit Fokus auf Benutzerfreundlichkeit
- **Smooth Scrolling**: Sanfte Navigation zwischen den Sektionen
- **Animationen**: Dezente Scroll-Animationen für bessere UX
- **Kontaktformular**: Funktionales Formular mit Validierung
- **SEO-optimiert**: Semantisches HTML und Meta-Tags

## Sektionen

1. **Hero-Bereich**: Eindrucksvoller Header mit Call-to-Action
2. **Leistungen**: Übersicht über 6 Hauptdienstleistungen
3. **Vorteile**: 4 Hauptvorteile der angebotenen Lösungen
4. **Referenzen**: Erfolgreiche Projekte aus verschiedenen Branchen
5. **Kontakt**: Kontaktinformationen und Formular
6. **Footer**: Navigation und rechtliche Links

## Technologie-Stack

- **HTML5**: Semantisches Markup
- **CSS3**: Moderne Styling-Techniken
  - CSS Grid & Flexbox für Layout
  - CSS Custom Properties (Variablen)
  - Responsive Design mit Media Queries
  - Smooth Transitions & Animations
- **JavaScript (Vanilla)**: Keine Frameworks erforderlich
  - Smooth Scrolling
  - Formular-Handling
  - Scroll-Animationen
  - Navigation Highlighting

## Installation & Verwendung

### Lokal ausführen

1. Repository klonen:
```bash
git clone https://github.com/IHR-USERNAME/intralogistik-landingpage.git
```

2. In das Verzeichnis wechseln:
```bash
cd intralogistik-landingpage
```

3. Die `index.html` im Browser öffnen:
   - Einfach Doppelklick auf die Datei
   - Oder mit Live Server (VS Code Extension)
   - Oder mit Python:
     ```bash
     python -m http.server 8000
     ```
     Dann im Browser: `http://localhost:8000`

### Deployment

Die Webseite kann auf verschiedenen Plattformen gehostet werden:

- **GitHub Pages**: Kostenlos und einfach
- **Netlify**: Mit automatischen Deployments
- **Vercel**: Schnelles und kostenloses Hosting
- **Traditionelles Webhosting**: Via FTP hochladen

#### GitHub Pages Deployment

1. Im Repository zu Settings → Pages gehen
2. Branch auswählen (z.B. `main`)
3. Save klicken
4. Die Seite wird unter `https://IHR-USERNAME.github.io/intralogistik-landingpage/` verfügbar sein

## Dateistruktur

```
intralogistik-landingpage/
│
├── index.html          # Haupt-HTML-Datei
├── styles.css          # Alle CSS-Styles
├── script.js           # JavaScript-Funktionalität
└── README.md           # Diese Dokumentation
```

## Anpassung

### Farben ändern

Die Farbpalette kann in der `styles.css` im `:root` Selektor angepasst werden:

```css
:root {
    --primary-color: #2563eb;    /* Hauptfarbe */
    --secondary-color: #1e40af;  /* Sekundärfarbe */
    --accent-color: #3b82f6;     /* Akzentfarbe */
    /* ... weitere Farben */
}
```

### Inhalte ändern

- Texte direkt in der `index.html` bearbeiten
- Kontaktdaten im Kontakt-Bereich anpassen
- Leistungen und Referenzen nach Bedarf erweitern oder ändern

### Formular-Backend einbinden

Das Kontaktformular benötigt ein Backend für echte Funktionalität. Optionen:

1. **Formspree**: Einfache Integration ohne Backend
2. **EmailJS**: E-Mail direkt vom Client senden
3. **Eigenes Backend**: PHP, Node.js, Python etc.

Beispiel für Formspree-Integration:

```html
<form action="https://formspree.io/f/IHR-FORMULAR-ID" method="POST">
    <!-- Formularfelder -->
</form>
```

## Browser-Kompatibilität

Die Webseite ist kompatibel mit:

- Chrome (letzte 2 Versionen)
- Firefox (letzte 2 Versionen)
- Safari (letzte 2 Versionen)
- Edge (letzte 2 Versionen)
- Mobile Browser (iOS Safari, Chrome Android)

## Performance

- Keine externen Abhängigkeiten oder Bibliotheken
- Minimaler JavaScript-Code
- Optimierte CSS-Animationen
- Schnelle Ladezeiten

## Barrierefreiheit

- Semantisches HTML
- Keyboard-Navigation möglich
- Ausreichende Farbkontraste
- Beschriftete Formularfelder

## Zukünftige Erweiterungen

Mögliche Verbesserungen:

- [ ] Mehrsprachigkeit (Deutsch/Englisch)
- [ ] Dunkel-Modus
- [ ] Blog-Sektion
- [ ] Case Studies Detail-Seiten
- [ ] Cookie-Banner für DSGVO
- [ ] Bildergalerie/Slider
- [ ] Backend-Integration für Kontaktformular
- [ ] Newsletter-Anmeldung

## Lizenz

Dieses Projekt steht unter der MIT-Lizenz - siehe LICENSE Datei für Details.

## Kontakt

Bei Fragen oder Anregungen:

- E-Mail: info@intralogistik-pro.de
- Telefon: +49 (0) 123 456789

## Mitwirken

Contributions sind willkommen! Bitte erstellen Sie einen Fork und einen Pull Request mit Ihren Änderungen.

1. Fork erstellen
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

---

**Entwickelt mit ❤️ für moderne Intralogistik-Lösungen**
