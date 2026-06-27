const CACHE_NAME = "AI-MOTION-BETA";

const urlsToCache = [
  "./",
  "./AIMOTION.html",
  "./manifest.json",
  "./video1.mp4"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
    .then(response => response || fetch(event.request))
  );
});