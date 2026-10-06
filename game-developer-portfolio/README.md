# Game Developer Portfolio - Huynh Tuan Duong

Personal portfolio website built with plain HTML, CSS and JavaScript (no build step).

## Structure

```
game-developer-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── avata.jpg
│   │   ├── garden-rescue.jpg
│   │   ├── project-02.jpg
│   │   └── project-03.jpg
│   ├── videos/
│   │   └── garden-rescue.mp4
│   └── cv/
│       └── Huynh-Tuan-Duong-CV.pdf
└── README.md
```

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
npx serve .
# or
python -m http.server 8000
```

## Customize

- **Projects**: edit the `PROJECTS` array at the top of `js/main.js` (title, category `mobile` / `html5` / `playable`, image, optional logo, link, optional trailer video). Tabs, counters and pagination update automatically.
- **Text / links**: edit `index.html` (email, GitHub, LinkedIn, itch.io).
- **Images**: put files into `assets/images/` with the names above. Missing images show a placeholder.
- **Trailer**: put `garden-rescue.mp4` into `assets/videos/`.
- **Playable games**: copy a web build into `games/<name>/` and set `play: "games/<name>/index.html"` (or an itch.io embed URL) on the project, plus `orientation: "portrait"` for vertical games. A "Play now" button opens it in a popup. Test with a local server (e.g. Live Server or `npx serve`), not `file://`. For Unity WebGL on GitHub Pages, set Compression Format to Disabled or enable Decompression Fallback.
- **CV**: put `Huynh-Tuan-Duong-CV.pdf` into `assets/cv/`.
- **Colors**: change CSS variables at the top of `css/style.css`.

## Deploy

Works out of the box on GitHub Pages, Netlify or Vercel (static hosting).
