(function () {
  "use strict";
  var C = window.INVITACION;
  var $ = function (id) { return document.getElementById(id); };

  // Textos desde la configuración
  $("fecha").textContent = C.fechaTexto;
  $("horario").textContent = C.horarioTexto;
  $("lugar-nombre").textContent = C.lugar.nombre;
  $("lugar-dir").textContent = C.lugar.direccion;
  $("btn-mapa").href = C.lugar.mapa;
  $("dress").textContent = C.dressCode;
  $("dress-evitar").textContent = "(Evitar colores: " + C.dressCodeEvitar + ")";
  $("btn-alias").textContent = C.alias;

  // Cuenta regresiva
  var target = new Date(C.inicio).getTime();
  var pad = function (n) { return String(n).padStart(2, "0"); };
  function tick() {
    var diff = Math.max(0, target - Date.now());
    var s = Math.floor(diff / 1000);
    $("cd-d").textContent = pad(Math.floor(s / 86400));
    $("cd-h").textContent = pad(Math.floor((s % 86400) / 3600));
    $("cd-m").textContent = pad(Math.floor((s % 3600) / 60));
    $("cd-s").textContent = pad(s % 60);
  }
  tick();
  setInterval(tick, 1000);

  // Copiar alias
  $("btn-alias").addEventListener("click", function () {
    var done = function (ok) {
      $("alias-hint").textContent = ok ? "Alias copiado ✓" : "Alias: " + C.alias;
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(C.alias).then(function () { done(true); }, function () { done(false); });
    } else { done(false); }
  });

  // WhatsApp: abre un selector con los contactos (todos reciben lo mismo)
  var picker = $("picker"), list = $("picker-list");
  function openPicker(tipo) {
    var texto = encodeURIComponent(C.mensajes[tipo] || "");
    list.innerHTML = "";
    C.contactos.forEach(function (c) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "https://wa.me/" + c.telefono + "?text=" + texto;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = c.nombre;
      li.appendChild(a);
      list.appendChild(li);
    });
    if (typeof picker.showModal === "function") picker.showModal();
    else picker.setAttribute("open", "");
  }
  document.querySelectorAll("[data-wa]").forEach(function (b) {
    b.addEventListener("click", function () {
      if (C.contactos.length === 1) {
        window.open("https://wa.me/" + C.contactos[0].telefono + "?text=" + encodeURIComponent(C.mensajes[b.dataset.wa]), "_blank", "noopener");
      } else { openPicker(b.dataset.wa); }
    });
  });
  picker.addEventListener("click", function (e) { if (e.target === picker) picker.close(); });

  // Música de fondo (solo si hay audio configurado)
  var play = $("play"), icon = $("play-icon");
  if (C.musica && C.musica.youtube) {
    play.hidden = false;
    var PLAY = "M19 15l16 9-16 9z", PAUSE = "M17 15h5v18h-5zM26 15h5v18h-5z";
    var frame = null, sonando = false;
    var cmd = function (fn) {
      if (frame && frame.contentWindow) {
        frame.contentWindow.postMessage(JSON.stringify({ event: "command", func: fn, args: "" }), "*");
      }
    };
    play.addEventListener("click", function () {
      if (!frame) {
        var id = C.musica.youtube;
        frame = document.createElement("iframe");
        frame.className = "yt";
        frame.title = "Música de fondo";
        frame.allow = "autoplay";
        frame.src = "https://www.youtube-nocookie.com/embed/" + id +
          "?autoplay=1&loop=1&playlist=" + id + "&start=" + (C.musica.inicio || 0) +
          "&controls=0&enablejsapi=1&playsinline=1";
        document.body.appendChild(frame);
        sonando = true;
      } else if (sonando) { cmd("pauseVideo"); sonando = false; }
      else { cmd("playVideo"); sonando = true; }
      icon.setAttribute("d", sonando ? PAUSE : PLAY);
      play.setAttribute("aria-label", sonando ? "Pausar música" : "Reproducir música");
    });
  }
})();
