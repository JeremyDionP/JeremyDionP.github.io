self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('first-app')
        .then(function(cache) {
          cache.addAll([
            '/',
            '/about.html',
            '/blog.html',
            '/contact.html',
            '/index.html',
            '/portfolio-example01.html',
            '/src/js/app.js',
            '/style.css'
          ])
        })
    );
    return self.clients.claim();
  });
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(res) {
          return res;
        })
    );
  });
    