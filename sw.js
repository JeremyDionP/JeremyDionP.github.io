self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
          '/',
          '/styles.css',
          'https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en',
          'https://code.getmdl.io/1.3.0/material.grey-pink.min.css',
          'https://fonts.googleapis.com/icon?family=Material+Icons',
          '/src/js/app.js',
          '/about.html',
          '/blog.html',
          '/contact.html',
          '/index.html',
          '/portfolio-example01.html',
          "/manifest.json",
          "/src/images/icons/app-icon-48x48.png",
          "/src/images/icons/app-icon-96x96.png",
          "/src/images/icons/app-icon-144x144.png",
          "/src/images/icons/app-icon-192x192.png",
          "/src/images/icons/app-icon-256x256.png",
          "/src/images/icons/app-icon-384x384.png",
          "/src/images/icons/app-icon-512x512.png",
          '/images/about-header.jpg',
          '/images/contact-image.jpg',
          '/images/example-blog01.jpg',
          '/images/example-blog02.jpg',
          '/images/example-blog03.jpg',
          '/images/example-blog04.jpg',
          '/images/example-blog05.jpg',
          '/images/example-blog06.jpg',
          '/images/example-blog07.jpg',
          '/images/example-work01.jpg',
          '/images/example-work02.jpg',
          '/images/example-work03.jpg',
          '/images/example-work04.jpg',
          '/images/example-work05.jpg',
          '/images/example-work06.jpg',
          '/images/example-work07.jpg',
          '/images/example-work08.jpg',
          '/images/example-work09.jpg',
          '/images/footer-background.png',
          '/images/header-bg.jpg',
          '/images/logo.png',
          '/images/photo-wide.jpg',
          '/images/photo.jpg',
          '/images/portfolio-example-01.jpg',
          '/images/portfolio-example-02.jpg',
          '/images/portfolio-example-03.jpg',
          '/images/portfolio-example-04.jpg',
          '/images/portfolio-example-05.jpg',
          '/images/portfolio-example-06.jpg',
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
