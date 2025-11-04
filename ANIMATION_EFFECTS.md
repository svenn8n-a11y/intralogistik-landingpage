# Animation Effects Reference - Intralogistik Landingpage

**Projekt:** Intralogistik Landingpage
**Datum:** 4. November 2025
**Technologie:** CSS3 Keyframe Animations

Dieses Dokument listet alle implementierten SVG-Animationen mit vollständigen Code-Snippets auf.

---

## 1. Vertikallift-System Animationen

### 1.1 liftGreifer - Greifer Vertikalbewegung

**Beschreibung:** Der Greifer bewegt sich vertikal auf und ab, um das Heben und Senken von Materialien zu simulieren.

**Parameter:**
- Duration: 8s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes liftGreifer {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-80px); }
    50% { transform: translateY(-80px); }
    75% { transform: translateY(0); }
}

#greifer {
    animation: liftGreifer 8s ease-in-out infinite;
    transform-origin: center;
}
```

---

## 2. Ausgabeschränke (Tool Management) Animationen

### 2.1 ledPulse - Status-LED Pulsieren

**Beschreibung:** Die Status-LEDs pulsieren, um aktive Fächer anzuzeigen.

**Parameter:**
- Duration: 1.5s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes ledPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

#led1, #led2, #led3, #led4 {
    animation: ledPulse 1.5s ease-in-out infinite;
}
```

### 2.2 drawerHighlight - Aktives Fach Hervorhebung

**Beschreibung:** Das erste Fach wird hervorgehoben, um eine aktive Entnahme zu signalisieren.

**Parameter:**
- Duration: 2s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes drawerHighlight {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
}

#row1 {
    animation: drawerHighlight 2s ease-in-out infinite;
}
```

### 2.3 toolPulse - Werkzeug Pulsieren

**Beschreibung:** Werkzeuge im aktiven Fach pulsieren gestaffelt (nacheinander).

**Parameter:**
- Duration: 3s
- Timing: ease-in-out
- Iteration: infinite
- Delays: 0s, 0.3s, 0.6s, 0.9s (gestaffelt)

**Code:**
```css
@keyframes toolPulse {
    0%, 100% { opacity: 0.7; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.1); }
}

#row1 circle[fill="#E67E22"],
#row1 circle[fill="#16A085"],
#row1 circle[fill="#3498DB"] {
    animation: toolPulse 3s ease-in-out infinite;
    transform-origin: center;
}

#row1 circle:nth-child(5) { animation-delay: 0s; }
#row1 circle:nth-child(6) { animation-delay: 0.3s; }
#row1 circle:nth-child(7) { animation-delay: 0.6s; }
#row1 circle:nth-child(8) { animation-delay: 0.9s; }
```

### 2.4 notificationBounce - Benachrichtigungs-Bounce

**Beschreibung:** Benachrichtigungssymbol springt, um Aufmerksamkeit zu erregen.

**Parameter:**
- Duration: 2s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes notificationBounce {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.1); }
    50% { transform: scale(0.95); }
    75% { transform: scale(1.05); }
}

#notification {
    animation: notificationBounce 2s ease-in-out infinite;
    transform-origin: center;
}
```

### 2.5 rfidGlow - RFID Scanner Glow-Effekt

**Beschreibung:** Der RFID-Scanner leuchtet mit einem Glüh-Effekt auf.

**Parameter:**
- Duration: 2s
- Timing: ease-in-out
- Iteration: infinite
- Effect: drop-shadow filter

**Code:**
```css
@keyframes rfidGlow {
    0%, 100% { opacity: 0.2; filter: drop-shadow(0 0 0px #F39C12); }
    50% { opacity: 0.6; filter: drop-shadow(0 0 8px #F39C12); }
}

#reader rect[fill="#F39C12"] {
    animation: rfidGlow 2s ease-in-out infinite;
}
```

### 2.6 dataflowPulse - Datenfluss Animation

**Beschreibung:** Datenverbindungslinien pulsieren und zeigen Datenfluss.

**Parameter:**
- Duration: 2s
- Timing: linear
- Iteration: infinite
- Effect: stroke-dashoffset

**Code:**
```css
@keyframes dataflowPulse {
    0%, 100% { opacity: 0.5; stroke-dashoffset: 0; }
    50% { opacity: 1; stroke-dashoffset: 6; }
}

#dataflow path {
    animation: dataflowPulse 2s linear infinite;
}
```

### 2.7 displayBlink - Touchscreen Display Blinken

**Beschreibung:** Der Touchscreen-Bildschirm blinkt subtil.

**Parameter:**
- Duration: 4s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes displayBlink {
    0%, 90%, 100% { opacity: 0.8; }
    95% { opacity: 0.3; }
}

#ausgabeschrank rect[x="365"][y="65"] {
    animation: displayBlink 4s ease-in-out infinite;
}
```

---

## 3. Lagerverwaltung & ERP-Integration Animationen

### 3.1 cloudPulse - Cloud-System Pulsieren

**Beschreibung:** Das Cloud-Icon pulsiert leicht, um aktive Verbindung zu zeigen.

**Parameter:**
- Duration: 3s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes cloudPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.85; transform: scale(1.03); }
}

#cloud-system {
    animation: cloudPulse 3s ease-in-out infinite;
    transform-origin: center;
}
```

### 3.2 dataFlow - Datenfluss zwischen Cloud und Systemen

**Beschreibung:** Verbindungslinien zeigen Datenfluss durch Animation.

**Parameter:**
- Duration: 3s
- Timing: linear
- Iteration: infinite
- Effect: stroke-dashoffset

**Code:**
```css
@keyframes dataFlow {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 20; }
}

#connection-lines path {
    animation: dataFlow 3s linear infinite;
}
```

### 3.3 statusBlink - Status-LED Blinken

**Beschreibung:** Status-LEDs blinken in verschiedenen Takten.

**Parameter:**
- Duration: 2s
- Timing: step-end
- Iteration: infinite

**Code:**
```css
@keyframes statusBlink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.3; }
}

#status-led-1 {
    animation: statusBlink 2s step-end infinite;
}

#status-led-2 {
    animation: statusBlink 2s step-end infinite;
    animation-delay: 0.5s;
}
```

### 3.4 dashboardUpdate - Dashboard Gauge Rotation

**Beschreibung:** Dashboard-Messgeräte bewegen sich (rotieren leicht).

**Parameter:**
- Duration: 4s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes dashboardUpdate {
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(15deg); }
}

#dashboard-gauge {
    animation: dashboardUpdate 4s ease-in-out infinite;
    transform-origin: bottom center;
}
```

### 3.5 moduleHighlight - ERP-Module Sequenzielles Highlighting

**Beschreibung:** ERP-Module werden nacheinander hervorgehoben.

**Parameter:**
- Duration: 6s
- Timing: ease-in-out
- Iteration: infinite
- Delays: 0s, 1.5s, 3s, 4.5s (sequenziell)

**Code:**
```css
@keyframes moduleHighlight {
    0%, 100% { opacity: 0.2; }
    33% { opacity: 0.5; }
}

#erp-system rect[fill="#16A085"] {
    animation: moduleHighlight 6s ease-in-out infinite;
}

#erp-system rect:nth-child(3) { animation-delay: 0s; }
#erp-system rect:nth-child(5) { animation-delay: 1.5s; }
#erp-system rect:nth-child(7) { animation-delay: 3s; }
#erp-system rect:nth-child(9) { animation-delay: 4.5s; }
```

### 3.6 scannerActive - Scanner Animation

**Beschreibung:** Barcode-Scanner zeigt aktiven Scan-Vorgang.

**Parameter:**
- Duration: 2s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes scannerActive {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.6; }
}

#barcode-scanner line {
    animation: scannerActive 2s ease-in-out infinite;
}
```

### 3.7 connectionFlow - Verbindungslinien Flow

**Beschreibung:** Verbindungslinien zwischen Systemen zeigen Datenfluss.

**Parameter:**
- Duration: 4s
- Timing: linear
- Iteration: infinite

**Code:**
```css
@keyframes connectionFlow {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 30; }
}

.connection-line {
    stroke-dasharray: 5 5;
    animation: connectionFlow 4s linear infinite;
}
```

---

## 4. Fahrerlose Transportsysteme (AGV) Animationen

### 4.1 agv1Move - AGV Fahrzeug 1 Routenbewegung

**Beschreibung:** AGV #1 fährt entlang einer definierten Route (4 Wegpunkte).

**Parameter:**
- Duration: 12s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes agv1Move {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(30px, 0); }
    50% { transform: translate(30px, 100px); }
    75% { transform: translate(150px, 100px); }
}

#agv1 {
    animation: agv1Move 12s ease-in-out infinite;
}
```

### 4.2 agv2Move - AGV Fahrzeug 2 Routenbewegung

**Beschreibung:** AGV #2 fährt eine andere Route.

**Parameter:**
- Duration: 10s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes agv2Move {
    0%, 100% { transform: translate(0, 0); }
    25% { transform: translate(100px, 0); }
    50% { transform: translate(100px, 20px); }
    75% { transform: translate(180px, 20px); }
}

#agv2 {
    animation: agv2Move 10s ease-in-out infinite;
}
```

### 4.3 agv3Move - AGV Fahrzeug 3 Routenbewegung

**Beschreibung:** AGV #3 fährt eine kürzere Route.

**Parameter:**
- Duration: 8s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes agv3Move {
    0%, 100% { transform: translate(0, 0); }
    33% { transform: translate(-30px, -10px); }
    66% { transform: translate(-30px, 20px); }
}

#agv3 {
    animation: agv3Move 8s ease-in-out infinite;
}
```

### 4.4 sensorBlink - AGV Sensor Blinken

**Beschreibung:** Sensoren an den AGV-Fahrzeugen blinken.

**Parameter:**
- Duration: 1s
- Timing: ease-in-out
- Iteration: infinite

**Code:**
```css
@keyframes sensorBlink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}

.agv-sensor {
    animation: sensorBlink 1s ease-in-out infinite;
}
```

### 4.5 vehicleStatus - Fahrzeugstatus Updates

**Beschreibung:** Status-Indikatoren an Fahrzeugen wechseln.

**Parameter:**
- Duration: 3s
- Timing: step-end
- Iteration: infinite

**Code:**
```css
@keyframes vehicleStatus {
    0%, 33% { fill: #27AE60; }
    34%, 66% { fill: #F39C12; }
    67%, 100% { fill: #27AE60; }
}

.vehicle-status-indicator {
    animation: vehicleStatus 3s step-end infinite;
}
```

### 4.6 wirelessSignal - Wireless-Signal Pulsieren

**Beschreibung:** Wireless-Kommunikationssignale pulsieren konzentrisch.

**Parameter:**
- Duration: 2s
- Timing: ease-out
- Iteration: infinite

**Code:**
```css
@keyframes wirelessSignal {
    0% { opacity: 0.8; transform: scale(0.8); }
    100% { opacity: 0; transform: scale(1.5); }
}

.wireless-wave {
    animation: wirelessSignal 2s ease-out infinite;
}

.wireless-wave:nth-child(1) { animation-delay: 0s; }
.wireless-wave:nth-child(2) { animation-delay: 0.5s; }
.wireless-wave:nth-child(3) { animation-delay: 1s; }
```

### 4.7 trackFlow - Fahrspur Animation

**Beschreibung:** Fahrspuren zeigen Bewegungsrichtung durch Flow-Effekt.

**Parameter:**
- Duration: 3s
- Timing: linear
- Iteration: infinite

**Code:**
```css
@keyframes trackFlow {
    0% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 25; }
}

.track-line {
    stroke-dasharray: 10 5;
    animation: trackFlow 3s linear infinite;
}
```

---

## Technische Hinweise

### Performance-Optimierung

Alle Animationen verwenden **hardware-beschleunigte CSS-Properties**:
- `transform` (translate, scale, rotate)
- `opacity`

Diese Properties werden von der GPU verarbeitet und bieten optimale Performance.

### Browser-Kompatibilität

- **Chrome/Edge:** ✓ Volle Unterstützung
- **Firefox:** ✓ Volle Unterstützung
- **Safari:** ✓ Volle Unterstützung (inkl. iOS)
- **Opera:** ✓ Volle Unterstützung

Alle modernen Browser unterstützen CSS3 Keyframe-Animationen ohne Vendor-Prefixes.

### Animation-Timing Functions

**ease-in-out:** Verwendet für natürliche, fließende Bewegungen (Fahrzeuge, Greifer)

**linear:** Verwendet für kontinuierliche Flows (Datenströme, Fahrspuren)

**step-end:** Verwendet für abrupte Zustandswechsel (Status-LEDs)

**ease-out:** Verwendet für ausbreitende Effekte (Wireless-Signale)

### Transform-Origin

Wichtig für korrekte Skalierung und Rotation:
```css
transform-origin: center;        /* Standard für Skalierung */
transform-origin: bottom center; /* Für Gauge-Rotation */
```

### Filter-Effects

**drop-shadow:** Verwendet für Glow-Effekte (RFID-Scanner)
```css
filter: drop-shadow(0 0 8px #F39C12);
```

---

## Implementierungs-Dateien

Alle Animationen sind implementiert in:
- **Datei:** `/Users/sven/Documents/03 KI/Intralogistik Landingpage/index.html`
- **CSS-Bereich:** Zeilen 478-676 (ca.)
- **SVG-Elemente:** Zeilen 1462-1907 (Lösungs-Sektion)

---

**Letzte Aktualisierung:** 4. November 2025
**Gesamt-Animationen:** 20+ verschiedene Effekte
**Animierte Diagramme:** 4 (Vertikallift, Ausgabeschränke, Lagerverwaltung, AGV-Systeme)
