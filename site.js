/* The shared bits: header, nav, sidebar, footer, and the visit counter.
   To add or rename a page, edit PAGES. To change the links or email, edit LINKEDIN, GITHUB, EMAIL. */
(function () {
  var LINKEDIN = "https://www.linkedin.com/in/sharan-senthil-/";
  var GITHUB = "https://github.com/Green-Skeleton";
  var EMAIL = "montage.kolash@gmail.com";
  var PAGES = [
    ["index.html", "home"], ["about.html", "about"], ["projects.html", "projects"],
    ["blog.html", "blog"], ["reading.html", "reading"], ["pinboard.html", "pinboard"]
  ];
  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }
  var here = location.pathname.split("/").pop() || "index.html";
  if (!/\.html$/.test(here)) here = "index.html";

  var top = document.getElementById("top");
  if (top) {
    top.className = "head";
    top.innerHTML =
      '<a class="name" href="index.html">Sharan Senthil</a>' +
      '<p class="tagline">computer science / biology / finance</p>' +
      '<nav class="nav" aria-label="Pages">' + PAGES.map(function (p) {
        var cur = (p[0] === here || (here.indexOf("post-") === 0 && p[0] === "blog.html")) ? ' aria-current="page"' : "";
        return '<a href="' + p[0] + '"' + cur + ">" + p[1] + "</a>";
      }).join("") + "</nav>";
  }

  var side = document.getElementById("side");
  if (side) {
    side.className = "side";
    side.innerHTML =
      '<section class="win"><div class="bar"><span>me</span></div><div class="in">' +
      '<img class="avatar" src="img/avatar.png" alt="Pixelated close-up of an eye from a manga panel" width="60" height="60">' +
      'Sharan Senthil<br>Student, Pennsylvania</div></section>' +
      '<section class="win"><div class="bar"><span>find me</span></div><div class="in"><ul>' +
      '<li><a href="' + GITHUB + '" rel="me noopener">GitHub</a></li>' +
      '<li><a href="' + LINKEDIN + '" rel="me noopener">LinkedIn</a></li>' +
      '<li><a href="mailto:' + EMAIL + '">Email</a></li></ul></div></section>';
  }

  var foot = document.getElementById("foot");
  if (foot) foot.innerHTML = "&copy; 2026 Sharan Senthil. Manga art belongs to its artists.";

  document.querySelectorAll(".peaks input").forEach(function (cb) {
    cb.checked = store("peak-" + cb.id) === "1";
    cb.addEventListener("change", function () { store("peak-" + cb.id, cb.checked ? "1" : "0"); });
  });
})();
