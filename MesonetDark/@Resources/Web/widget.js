'use strict';
(() => {
  const sizes = Object.freeze({
    local: [780, 560],
    local_612px: [612, 498],
    local_small: [235, 377],
    local_small_no_forecast: [235, 231],
    local_fire: [235, 521]
  });
  const params = new URLSearchParams(location.search);
  const requestedType = params.get('widget');
  const type = Object.hasOwn(sizes, requestedType) ? requestedType : 'local_small';
  const requestedStation = (params.get('station') || 'NRMN').trim().toUpperCase();
  const station = /^[A-Z0-9]{4}$/.test(requestedStation) ? requestedStation : 'NRMN';
  const interval = Number(params.get('refresh') ?? '300');
  const refreshSeconds = Number.isFinite(interval) && interval > 0
    ? Math.min(3600, Math.max(60, interval)) : 0;
  const [width, height] = sizes[type];
  const frame = document.getElementById('widget');
  const status = document.getElementById('status');
  const theme = document.getElementById('theme');
  const url = `https://www.mesonet.org/index.php/widget/${type}/${station.toLowerCase()}`;
  let dark = params.get('dark') !== '0';
  let slowTimer;
  let requestedAt = '';
  document.getElementById('station').textContent = station;
  document.getElementById('viewport').style.height = `${height}px`;
  frame.width = String(width);
  frame.height = String(height);
  frame.style.height = `${height}px`;
  frame.title = `Oklahoma Mesonet ${type.replaceAll('_', ' ')} for ${station}`;

  function applyTheme() {
    document.body.classList.toggle('dark', dark);
    theme.setAttribute('aria-pressed', String(dark));
    theme.textContent = dark ? 'Dark' : 'Original';
  }
  function load() {
    clearTimeout(slowTimer);
    if (!navigator.onLine) {
      status.textContent = 'Offline · Check observation time';
      return;
    }
    requestedAt = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    status.textContent = `Requested ${requestedAt} · Loading...`;
    // Reassigning src reloads the cross-origin iframe without needing DOM access.
    frame.src = url;
    slowTimer = setTimeout(() => {
      status.textContent = 'If blank, open source via skin menu';
    }, 20000);
  }
  frame.addEventListener('load', () => {
    clearTimeout(slowTimer);
    // An iframe load event cannot establish that weather data arrived or is fresh.
    status.textContent = navigator.onLine
      ? `Requested ${requestedAt} · Verify widget time`
      : 'Offline · Check observation time';
  });
  theme.addEventListener('click', () => { dark = !dark; applyTheme(); });
  document.getElementById('reload').addEventListener('click', load);
  window.addEventListener('online', load);
  window.addEventListener('offline', () => {
    clearTimeout(slowTimer);
    status.textContent = 'Offline · Check observation time';
  });
  applyTheme();
  load();
  if (refreshSeconds) setInterval(load, refreshSeconds * 1000);
})();
