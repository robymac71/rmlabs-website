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

## SEO e motori di ricerca

Il sito include già `robots.txt`, `sitemap.xml`, meta Open Graph/Twitter, JSON-LD (Organization, WebSite, SoftwareApplication, FAQ).

### 1. Google Search Console (priorità)

1. Vai su [Google Search Console](https://search.google.com/search-console)
2. **Aggiungi proprietà** → prefisso URL → `https://rmlabs.dev`
3. Verifica con **tag HTML**: copia il meta `google-site-verification` e incollalo in `index.html` (c’è un commento segnaposto in `<head>`)
4. Dopo il push: **Sitemap** → invia `https://rmlabs.dev/sitemap.xml`
5. **Ispezione URL** → incolla la home → **Richiedi indicizzazione** (ripeti per `/dmicopilot/` e le altre landing principali)

### 2. Bing Webmaster Tools

1. [Bing Webmaster](https://www.bing.com/webmasters) → aggiungi sito
2. Puoi importare da Search Console se già verificato
3. Invia la stessa sitemap

### 3. Collegamenti esterni (autorità del dominio)

- In **App Store Connect** e **Play Console**: URL marketing / supporto → `https://rmlabs.dev/...` (non solo GitHub Pages)
- Profilo **GitHub** (`robymac71`): sito web → `https://rmlabs.dev`
- Post nei gruppi Facebook BYD / pagine app: link alla landing `https://rmlabs.dev/dmicopilot/`
- Nel tempo: migra le privacy da `robymac71.github.io` a `rmlabs.dev` per concentrare tutto su un dominio

### 4. Cosa aspettarsi

- Indicizzazione iniziale: da pochi giorni a 2–4 settimane
- Posizionamento su query generiche («app mobile»): difficile per siti piccoli
- Query specifiche («DMi Copilot BYD», «Cooklity Chef IA»): più realistiche se titoli e testi contengono quelle parole (già impostati nelle landing)

### 5. Dopo ogni aggiornamento importante

Aggiorna `lastmod` in `sitemap.xml` e richiedi nuova indicizzazione dalla Search Console.
