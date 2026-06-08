const CACHE_NAME = "parcheggi-pdf-v4-anno-intuitivo";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./mobile_override.css",
  "./app.js",
  "./mappa-posti-numeri.webp",
  "./mappa-pdf-base.png",
  "./via.webp",
  "./icon.svg",
  "./manifest.webmanifest"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS).catch(() => null))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }))
    ).then(() => self.clients.claim())
  );
});

/*
  Network first:
  serve sempre i file aggiornati quando c'è connessione.
  Se il telefono è offline, usa la cache.
*/

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request, { cache: "no-store" })
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => cache.put(event.request, clone))
          .catch(() => null);
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
