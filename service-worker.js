self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin === location.origin) {
    event.respondWith(
      fetch(event.request).then(response => {
        const clonedResponse = response.clone();
        caches.open('my-cache').then(cache => {
          cache.put(event.request, clonedResponse);
        });
        return response;
      }).catch(() => {
        return caches.match(event.request);
      })
    );
  }
});
