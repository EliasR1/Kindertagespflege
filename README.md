# Villa Gänseblümchen – Website

Statische Website für die Kindertagespflege Villa Gänseblümchen.

## Dateien
- `index.html` – Hauptseite
- `style.css` – Alle Styles
- `script.js` – Interaktivität (Navigation, Animationen, Formular)
- `LogoGaensebluemchen.jpg` – Logo (muss im gleichen Ordner liegen!)

## GitHub Pages hosten

1. Repository auf GitHub erstellen (z.B. `villa-gaensebluemchen`)
2. Alle Dateien inkl. Logo hochladen
3. Unter **Settings → Pages → Source**: Branch `main`, Ordner `/root` auswählen
4. Speichern – die Seite ist unter `https://[username].github.io/villa-gaensebluemchen` erreichbar

## Anpassen

### Namen der Tagesmütter ändern
In `index.html` die Platzhalter "Tagesmutter 1" und "Tagesmutter 2" ersetzen.

### Kontaktdaten ergänzen
Im Abschnitt `#kontakt` Telefonnummer / E-Mail-Adresse einfügen.

### Eigene Fotos verwenden
Die Bilder-URLs von Unsplash in `index.html` durch eigene Bilddateien ersetzen:
```html
<img src="mein-bild.jpg" alt="Beschreibung" />
```

### Formular wirklich versenden
Das Kontaktformular zeigt aktuell nur eine Erfolgsmeldung.
Für echten E-Mail-Versand: [Formspree.io](https://formspree.io) kostenlos nutzen –
`action`-Attribut am `<form>` setzen und `method="POST"` hinzufügen.

### Farben anpassen
In `style.css` ganz oben unter `:root {}` die CSS-Variablen ändern.

## Bilder
Die Website nutzt Unsplash-Bilder (kostenlos, keine Lizenzprobleme für Websites).
Für professionelleren Auftritt: eigene Fotos der Einrichtung/Kinder einfügen.
