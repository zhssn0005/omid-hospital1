// Omid Hospital PWA service worker.
const CACHE_NAME = 'omid-hospital-v3';
const OFFLINE_URL = '/offline.html';
const PRECACHE_URLS = [
  '/',
  '/booking.html',
  '/offline.html',
  '/manifest.json',
  '/pages/online-results.html',
  '/pages/telemedicine.html',
  '/pages/video-gallery.html',
  '/pages/news-events.html',
  '/pages/doctor-profile.html',
  '/pages/doctors-list.html',
  '/pages/virtual-tour.html',
  '/pages/virtual-tour-editor.html',
  '/about.html',
  '/js/site-shell.js',
  '/js/tour-scenes.js',
  '/pages/departments/nicu.html',
  '/pages/departments/royal.html',
  '/pages/departments/ipd.html',
  '/css/theme.css',
  '/css/style.css',
  '/js/api.js',
  '/js/booking.js',
  '/js/site-api-bridge.js',
  '/assets/logo-no-bg.png',
  '/assets/logo-main.png',
  '/assets/Logo-scaled-e1754348924179.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
      .catch(error => console.error('[ServiceWorker] Precache failed:', error))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(name => name !== CACHE_NAME).map(name => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);

  if (url.origin !== self.location.origin || request.method !== 'GET') return;

  // Never cache API responses: appointments and auth must remain server-authoritative.
  if (url.pathname.startsWith('/api/')) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match(request).then(cached => cached || caches.match(OFFLINE_URL)))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      const network = fetch(request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
        }
        return response;
      });
      return cached || network;
    })
  );
});

self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();
  if (event.data?.type === 'CLEAR_CACHE') {
    event.waitUntil(caches.delete(CACHE_NAME).then(() => self.clients.claim()));
  }
  if (event.data?.type === 'GET_VERSION' && event.ports?.[0]) {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});
