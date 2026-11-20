/* The shared bits: header, nav, sidebar, footer, and the visit counter.
   To add or rename a page, edit PAGES. To change the LinkedIn link, edit LINKEDIN. */
(function () {
  var LINKEDIN = "https://www.linkedin.com/in/sharan-senthil-/";
  var PAGES = [
    ["index.html", "home"], ["about.html", "about"], ["projects.html", "projects"],
    ["blog.html", "blog"], ["reading.html", "reading"]
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
    var n = (parseInt(store("visits"), 10) || 0) + 1;
    store("visits", String(n));
    var digits = String(n); while (digits.length < 4) digits = "0" + digits;
    side.className = "side";
    side.innerHTML =
      '<section class="win"><div class="bar"><span>me</span></div><div class="in">' +
      '<img class="avatar" src="img/avatar.png" alt="Halftone close-up of a face in snow goggles" width="240" height="240">' +
      'Sharan Senthil<br>Student, Pennsylvania<br><a href="' + LINKEDIN + '" rel="me noopener">LinkedIn</a></div></section>' +
      '<section class="win"><div class="bar"><span>visits</span></div><div class="in">' +
      '<div class="counter" role="img" aria-label="' + n + ' visits">' +
      digits.split("").map(function (d) { return "<b>" + d + "</b>"; }).join("") + '</div>' +
      'Counted in your own browser only.</div></section>';
  }

  var foot = document.getElementById("foot");
  if (foot) foot.innerHTML = "No tracking, no cookies. Manga panels on this site belong to their original artists and are edited here as decoration.";

  document.querySelectorAll(".peaks input").forEach(function (cb) {
    cb.checked = store("peak-" + cb.id) === "1";
    cb.addEventListener("change", function () { store("peak-" + cb.id, cb.checked ? "1" : "0"); });
  });
})();
