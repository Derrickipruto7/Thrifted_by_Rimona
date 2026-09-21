# Thriftly — Thrifted Clothing Shop Website

A static website for a secondhand/thrift clothing business: home page, shop page with category filtering, about/story page, and a contact page. Pure HTML/CSS/JS — no build step, no dependencies, so it runs straight on GitHub Pages.

## What's inside

```
thriftly/
├── index.html      Home page (hero, featured items, process, testimonials)
├── shop.html       Full product grid with category filters
├── about.html      Brand story and sourcing process
├── contact.html    Contact form + shop info
├── css/
│   └── style.css   All styling (single stylesheet, CSS variables at the top)
├── js/
│   └── script.js   Mobile nav, filters, "Add" button feedback, form handling
└── images/         Empty — currently all product visuals are inline SVG "tags",
                     so there's no external image hosting to break. Drop real
                     product photos in here when you're ready (see below).
```

## Running it locally

No build tools needed. Just open `index.html` in a browser, or serve it locally:

```bash
cd thriftly
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing with GitHub Pages

1. Create a new repository on GitHub (e.g. `thriftly-shop`).
2. Push this folder's contents to it:
   ```bash
   cd thriftly
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub: go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", pick the **main** branch and **/ (root)** folder, then Save.
5. GitHub will give you a live URL, usually `https://YOUR-USERNAME.github.io/YOUR-REPO/`, within a minute or two.

## Things you'll likely want to customize

- **Branding**: the shop name "Thriftly" and tagline copy appear in the `<title>`, `.logo`, and hero text of each page — search and replace.
- **Products**: each item is a `<article class="tag-card">` block in `index.html` and `shop.html`. Duplicate a block, change the name/size/price/category, and swap the inline SVG shape or its `fill` color.
- **Photos instead of icons**: the product cards currently use simple SVG shapes so the site works immediately with zero setup. To use real photos, put images in `images/`, then inside a `.swatch` div replace the `<svg>` with `<img src="images/your-photo.jpg" alt="...">`.
- **Contact form & newsletter**: both currently just show a confirmation message in the browser (no email is actually sent). To make them functional without writing backend code, connect them to a free service like [Formspree](https://formspree.io) or [Netlify Forms](https://docs.netlify.com/forms/setup/) — you mainly just point the `<form>` tag's `action` at their endpoint.
- **Currency**: prices are shown in KSh (Kenyan Shillings) — change the symbol in `index.html` / `shop.html` if needed.
- **Fonts/colors**: all defined as CSS variables at the top of `css/style.css` under `:root`.

## Notes

- Fully responsive (mobile nav collapses into a menu button below ~780px).
- No frameworks, no npm install — just static files, so it's about as low-maintenance as a website gets.
- If you outgrow "add a few `<article>` blocks by hand" for managing inventory, the natural next step is a small headless CMS (e.g. Netlify CMS) or moving the product data into a JSON file that `script.js` reads and renders.
