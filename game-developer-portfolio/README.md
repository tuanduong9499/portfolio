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
│   │   ├── profile.jpg
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

- **Text / links**: edit `index.html` (email, GitHub, LinkedIn, itch.io, project descriptions).
- **Images**: put files into `assets/images/` with the names above. Missing images show a placeholder.
- **Trailer**: put `garden-rescue.mp4` into `assets/videos/`.
- **CV**: put `Huynh-Tuan-Duong-CV.pdf` into `assets/cv/`.
- **Colors**: change CSS variables at the top of `css/style.css`.
- **Typing roles**: edit the `roles` array in `js/main.js`.

## Deploy

Works out of the box on GitHub Pages, Netlify or Vercel (static hosting).
