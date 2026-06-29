# STROMWERK – Website

**SRW Solarenergie GmbH | Die Stromwerker**  
Schillerstraße 7, 4600 Wels, Österreich  
www.stromwerker.at

---

## Projektbeschreibung

Moderne B2B-Website für STROMWERK – Positionierung als professioneller Energiesystempartner für Gewerbe und Industrie. Design: Dark Navy / Anthrazit / Electric Green.

## Dateistruktur

```
/
├── index.html          → Startseite (Homepage)
├── leistungen.html     → Leistungsseite (5 Leistungsbereiche)
├── ueber-uns.html      → Über uns / Unternehmen
├── kontakt.html        → Kontakt & Anfrage
├── impressum.html      → Impressum (Pflichtangaben AT)
├── datenschutz.html    → Datenschutzerklärung (DSGVO)
├── css/
│   └── style.css       → Gemeinsames Stylesheet
├── js/
│   └── main.js         → Gemeinsames JavaScript
├── .gitignore
└── README.md
```

## Technologie

- **Reines HTML5 / CSS3 / Vanilla JS** – keine Frameworks, keine Build-Tools
- **GitHub Pages kompatibel** – einfach Repository anlegen, Pages aktivieren
- **Google Fonts** (Inter) via CDN
- Vollständig **responsiv** (Mobile First)
- **Keine Cookies / kein Tracking**

## GitHub Pages Deployment

1. Repository auf GitHub anlegen (z.B. `stromwerk-website`)
2. Alle Dateien pushen:
   ```bash
   git init
   git add .
   git commit -m "Initial commit – STROMWERK website"
   git remote add origin https://github.com/USERNAME/stromwerk-website.git
   git push -u origin main
   ```
3. Im Repository → **Settings → Pages** → Branch: `main` → `/` (root) → **Save**
4. Website ist verfügbar unter: `https://USERNAME.github.io/stromwerk-website/`
5. Custom Domain: In Pages-Einstellungen die Domain `stromwerker.at` eintragen + CNAME-Eintrag beim DNS-Provider setzen

## Custom Domain (stromwerker.at)

Beim DNS-Provider folgende Einträge setzen:

```
@ A  185.199.108.153
@ A  185.199.109.153
@ A  185.199.110.153
@ A  185.199.111.153
www CNAME USERNAME.github.io
```

Dann in GitHub Pages → Custom domain → `stromwerker.at` eintragen → **Enforce HTTPS** aktivieren.

## Kontakt / Änderungen

Georg Hetzmannseder – hetzmannseder@stromwerker.at – +43 664 1262848
