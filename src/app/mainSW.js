const cache1 = 'Cv1'

// Install
self.addEventListener('install', (event) => {
  console.log('SW installed')
  event.waitUntil(
    caches.open(cache1)
      .then((cache) => {
        return cache.addAll([
          '/',
          '/views/home.tsx',
          '/views/aboutUs.tsx',
          '/views/contactUs.tsx',
          '/index.html'
        ])
      })
  )
})

//
self.addEventListener('activate', (event) => {
    console.log('SW Activated')
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((res) => {
        if(res) {
          return res
        } else {
          return fetch(event.request)
        }
      })
  )
})