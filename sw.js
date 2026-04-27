self.addEventListener('fetch', (event) => {
  // Este código permite que la app funcione como tal
  event.respondWith(fetch(event.request));
});
