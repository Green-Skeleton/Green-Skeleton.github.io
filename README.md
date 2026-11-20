# Sharan Senthil's site

A plain HTML/CSS/JS personal site. No build step, no framework, nothing to install.

## Files
- `index.html`, `about.html`, `projects.html`, `blog.html`, `now.html`, `uses.html`, `reading.html`, `bucket-list.html` (peaks), `guestbook.html`, `friends.html`
- `post-*.html`: blog posts. Copy one to make a new post, then link it from `blog.html` and `index.html`.
- `style.css`: the whole look (classic-Mac windows, marquee, scanlines). Colours are at the top.
- `img/`: the manga panels after effects (halftone, 1-bit dither, tape glitch, negative), the avatar, the 88x31 buttons and two background tiles.
- `site.js`: the marquee, banner, nav, sidebar, footer, visit counter (stored only in the visitor's browser) and the peak ticks. Your LinkedIn link and the marquee text are the first lines of the file.
- `404.html`: shown for missing pages on GitHub Pages.

## Fill in before publishing
- Your email in `about.html` (currently `you@example.com`)
- The "fill this in" lines in `uses.html`
- Project details and links in `projects.html`
- Friends in `friends.html`
- The "On the list" lines in `reading.html`
- Delete anything you don't want public. Read every page once before you publish.

## Put it online for free (GitHub Pages)
1. Make a free account at github.com.
2. Click **New repository**. Name it `YOUR-USERNAME.github.io` (exactly), set it to **Public**, and create it.
3. Click **uploading an existing file**, drag in every file from this folder, and commit.
4. Go to **Settings > Pages**, set Source to **Deploy from a branch**, branch **main**, folder **/ (root)**, and save.
5. After a minute it's live at `https://YOUR-USERNAME.github.io`.

Later you can buy a domain (about $10 to $15 a year) and point it at the same site under Settings > Pages > Custom domain.

## Turn on the guestbook (free, uses GitHub Discussions)
1. In your repo: **Settings > General > Features**, tick **Discussions**.
2. Install the giscus app on the repo: https://github.com/apps/giscus
3. Open https://giscus.app, enter `YOUR-USERNAME/YOUR-USERNAME.github.io`, make a category called "Guestbook" (type Announcements), and copy the `data-repo-id` and `data-category-id` values.
4. Put them in the `GISCUS` block at the bottom of `guestbook.html`.

## Privacy
No analytics, cookies or trackers. Ticks on the peaks page and the flag click count are stored only in each visitor's own browser. The fonts (Shippori Mincho, VT323) load from Google Fonts; to avoid that, download it and host it in the repo.
