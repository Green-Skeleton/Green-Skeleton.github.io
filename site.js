/* The shared bits: marquee, banner, nav, sidebar, footer, a visit counter, the peak ticks.
   Edit PAGES to add or rename a page. Edit LINKEDIN / the marquee text below. */
(function () {
  var LINKEDIN = "https://www.linkedin.com/in/sharan-senthil-/";
  var MARQUEE = "*** welcome to my homepage *** I build things *** I want to climb mountains *** summits so far: 0 *** best viewed with the lights off *** sign the guestbook *** ";
  var PAGES = [
    ["index.html", "home"], ["about.html", "about"], ["projects.html", "projects"],
    ["blog.html", "blog"], ["now.html", "now"], ["uses.html", "uses"],
    ["reading.html", "reading"], ["bucket-list.html", "peaks"],
    ["guestbook.html", "guestbook"], ["friends.html", "friends"]
  ];
  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }
  var here = location.pathname.split("/").pop() || "index.html";
  if (!/\.html$/.test(here)) here = "index.html";

  var top = document.getElementById("top");
  if (top) {
    top.innerHTML =
      '<div class="marq" aria-hidden="true"><span>' + MARQUEE + MARQUEE + '</span></div>' +
      '<div class="banner"><img src="img/goggles-vhs.jpg" alt="" width="1080" height="783">' +
      '<small>~ trailhead ~</small><h2><a href="index.html" style="color:inherit;text-decoration:none;background:none">Sharan Senthil</a></h2></div>' +
      '<nav class="nav" aria-label="Pages">' + PAGES.map(function (p) {
        var cur = (p[0] === here || (here.indexOf("post-") === 0 && p[0] === "blog.html")) ? ' aria-current="page"' : "";
        return '<a href="' + p[0] + '"' + cur + ">" + p[1] + "</a>";
      }).join("") + "</nav>";
  }

  var side = document.getElementById("side");
  if (side) {
    var n = (parseInt(store("visits"), 10) || 0) + 1;
    store("visits", String(n));
    var digits = String(n); while (digits.length < 5) digits = "0" + digits;
    side.className = "side";
    side.innerHTML =
      '<section class="win"><div class="bar"><span>me.exe</span></div><div class="in">' +
      '<img class="avatar" src="img/avatar.png" alt="Halftone close-up of a climber in goggles">' +
      'Sharan Senthil<br>CS + comp bio<br>summits: 0<br><a href="' + LINKEDIN + '" rel="me noopener">LinkedIn &rarr;</a></div></section>' +
      '<section class="win"><div class="bar"><span>visits</span></div><div class="in">' +
      'You have been here:<div class="counter" aria-label="' + n + ' visits" role="img">' +
      digits.split("").map(function (d) { return "<b>" + d + "</b>"; }).join("") + '</div>' +
      '<span class="meta" style="font-size:1rem">times. Counted in your own browser only.</span></div></section>' +
      '<section class="win"><div class="bar"><span>links</span></div><div class="in"><div class="btns">' +
      '<a class="b88" href="' + LINKEDIN + '" rel="me noopener">LinkedIn</a>' +
      '<a class="b88" href="guestbook.html" style="background-image:url(img/btn-stars.png)">guestbook</a>' +
      '<a class="b88" href="bucket-list.html" style="background-image:url(img/btn-sunrise.png)">peaks</a>' +
      '<a class="b88" href="now.html" style="background-image:url(img/btn-tent.png)">now</a>' +
      '<a class="b88" href="https://isak.me/" style="background-image:url(img/btn-goggles.png)">isak.me</a>' +
      '</div></div></section>';
  }

  var foot = document.getElementById("foot");
  if (foot) foot.innerHTML = "summits so far: 0. No tracking, no cookies.<br>Made by hand, best at a desk, late at night. Pictures: panels from <i>The Climber</i> (Sakamoto), chopped and warped as a fan tribute.";

  function toast(msg) {
    var t = document.createElement("div");
    t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 2800);
  }
  var buf = "";
  addEventListener("keydown", function (e) {
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    buf = (buf + e.key.toLowerCase()).slice(-6);
    if (buf === "summit") toast("Not yet.");
  });

  document.querySelectorAll(".peaks input").forEach(function (cb) {
    cb.checked = store("peak-" + cb.id) === "1";
    cb.addEventListener("change", function () {
      store("peak-" + cb.id, cb.checked ? "1" : "0");
      var el = document.getElementById("peaks-done");
      if (el) el.textContent = document.querySelectorAll(".peaks input:checked").length;
    });
  });
  var dn = document.getElementById("peaks-done");
  if (dn) dn.textContent = document.querySelectorAll(".peaks input:checked").length;
})();
