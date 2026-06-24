# Sito rmlabs.dev

Sito statico **RMLABS Developer** con landing DMi Copilot, supporto e SEO base.

## Struttura

```
Sito rmlabs.dev/
├── index.html              Home studio
├── dmicopilot/
│   ├── index.html          Landing app
│   └── supporto.html       FAQ e contatti
├── css/style.css
├── js/main.js
├── assets/
│   ├── logo.svg            Logo temporaneo (sostituire)
│   ├── dmicopilot-icon.jpg       (App Store 512px)
│   ├── dmicopilot-icon-android.png
│   └── dmicopilot-hero.png       (screenshot iPhone)
├── CNAME                   rmlabs.dev (GitHub Pages)
├── robots.txt
└── sitemap.xml
```

## Immagini da aggiungere

Copia nella cartella `assets/`:

| File | Uso |
|------|-----|
| `logo.png` o `logo.svg` | Logo RMLABS (sostituisce `logo.svg` provvisorio) |
| `assets/apps/dmicopilot-icon.jpg` | Icona ufficiale App Store |
| `assets/apps/dmicopilot-icon-android.png` | Icona Android (launcher) |
| `assets/dmicopilot-hero.png` | Screenshot hero |

Poi aggiorna i riferimenti in `index.html` se usi nomi diversi.

## Anteprima locale

```bash
cd "/Users/roby/Desktop/Sito rmlabs.dev"
python3 -m http.server 8080
```

Apri http://localhost:8080

## Pubblicazione su GitHub Pages (consigliata)

1. Crea repo GitHub `rmlabs-dev` (o simile), **pubblico**
2. Carica tutti i file di questa cartella
3. **Settings → Pages → Source:** branch `main`, cartella `/ (root)`
4. Attendi qualche minuto; GitHub assegna `username.github.io`

## Collegare rmlabs.dev (DNS Aruba)

Nel pannello DNS Aruba per `rmlabs.dev`:

| Tipo | Nome | Valore |
|------|------|--------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `TUO-USERNAME.github.io` |

In GitHub repo → **Settings → Pages → Custom domain:** `rmlabs.dev`  
Abilita **Enforce HTTPS** quando disponibile.

## URL da aggiornare negli store

Dopo il go-live, aggiorna in App Store Connect e Play Console:

- URL supporto: `https://rmlabs.dev/dmicopilot/supporto.html`
- (Opzionale) Sito marketing: `https://rmlabs.dev/dmicopilot/`

Le privacy possono restare su GitHub Pages finché non le migri sotto `rmlabs.dev`.

## Contatti

rmlabs.dev@gmail.com · Roberto Maricchiolo
