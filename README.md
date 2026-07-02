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

Il sito include `robots.txt`, `sitemap.xml`, meta Open Graph/Twitter, JSON-LD (Organization, Person, ProfessionalService, FAQPage, SoftwareApplication) e la landing dedicata **`/sviluppo-app/`** per le ricerche su sviluppo applicazioni mobile.

### Query target (Italia)

- sviluppo app / sviluppo applicazioni mobile
- sviluppatore app / programmatore app
- sviluppo app iOS / sviluppo app Android
- creazione app mobile / app su misura
- sviluppo app Nettuno / sviluppatore app Roma / sviluppo app Lazio
- Roberto Maricchiolo sviluppatore app
- RMLABS Developer (priorità)

1. Vai su [Google Search Console](https://search.google.com/search-console)
2. **Aggiungi proprietà** → prefisso URL → `https://rmlabs.dev`
3. Verifica: file `googled6271098b7835290.html` già presente in root
4. Dopo il push: **Sitemap** → invia `https://rmlabs.dev/sitemap.xml`
5. **Ispezione URL** → richiedi indicizzazione per:
   - `https://rmlabs.dev/`
   - `https://rmlabs.dev/sviluppo-app/`
   - landing app principali

### 2. Bing Webmaster Tools

1. [Bing Webmaster](https://www.bing.com/webmasters) → aggiungi sito
2. File `BingSiteAuth.xml` già presente
3. Invia la stessa sitemap

### 3. Collegamenti esterni (autorità del dominio)

- **App Store Connect** e **Play Console**: URL marketing → `https://rmlabs.dev/`
- Profilo **GitHub** (`robymac71`): sito web → `https://rmlabs.dev`
- **LinkedIn** / portfolio: link a `/sviluppo-app/`
- Schede store: descrizione sviluppatore con link al sito
- Nel tempo: migra le privacy da `robymac71.github.io` a `rmlabs.dev`

### 4. Google Business Profile (consigliato)

Crea una scheda “RMLABS Developer” o “Roberto Maricchiolo — Sviluppo app” con:
- Categoria: Sviluppatore di software / Servizi informatici
- Sito: `https://rmlabs.dev/sviluppo-app/`
- Area servita: Nettuno, Roma, Lazio, Italia
- Foto portfolio e link agli store

### 5. Cosa aspettarsi

- Indicizzazione iniziale: da pochi giorni a 2–4 settimane
- Query generiche («sviluppo app»): molta concorrenza — servono tempo, backlink e contenuti
- Query specifiche («Roberto Maricchiolo app», «RMLABS Developer», «DMi Copilot BYD»): più realistiche
- La pagina `/sviluppo-app/` è il fulcro per conversioni da ricerca

### 6. Dopo ogni aggiornamento importante

Aggiorna `lastmod` in `sitemap.xml` e richiedi nuova indicizzazione dalla Search Console.
