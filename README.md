# Sharan Senthil's site

Plain HTML, CSS and a little JavaScript, hosted free on GitHub Pages. The only "build" is GitHub Pages' built-in Jekyll, and it is used only for the blog.

## Files
- `index.html`, `about.html`, `projects.html`, `reading.html`: the pages. Edit them directly.
- `bucket-list.html`: the old peaks page. It is hidden (not in the menu, not indexed). Add `["bucket-list.html", "peaks"]` to `PAGES` in `site.js` to bring it back.
- `site.js`: header, menu, sidebar, footer. Your LinkedIn link and the menu list are at the top.
- `style.css`: the whole look. Colours are at the top.
- `img/`: the manga panels (edited), the avatar and the poster/report previews.
- `files/`: the past-year posters and reports (PDF).
- `blog.html`, `_layouts/post.html`, `_config.yml`, `_posts/`: the blog.

## Add a blog post
1. On github.com, open the repo, go to **Add file > Create new file**.
2. Name it `_posts/YYYY-MM-DD-my-title.md` (for example `_posts/2026-12-05-first-post.md`). The date in the name is the post date. The words after it become the web address.
3. Paste this at the top, then write the post below it in Markdown:

```
---
title: "My first post"
summary: "One line shown on the blog list (optional)"
---

Write here. A blank line starts a new paragraph. **bold**, *italic*, [a link](https://example.com).

![alt text](img/my-picture.jpg)
```

4. Click **Commit changes**. After about a minute the post appears on the blog page. Put any pictures in `img/`.

To remove a post, delete its file. A date in the future hides the post until that day.

## Add a past project
Put the PDF in `files/`, a preview image in `img/`, and copy one of the `<article class="work">` blocks in `projects.html`.

## Privacy
No analytics, cookies or trackers. The visit counter in the sidebar is stored only in each visitor's own browser. Fonts (Shippori Mincho, VT323) load from Google Fonts.
