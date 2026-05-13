const CACHE_NAME = 'driverflow-v1';

// Các file cần cache để chạy offline
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/background.jpg',
  '/logo.jpg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
];

// Cài đặt SW: cache các file tĩnh
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Kích hoạt SW: xóa cache cũ
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: trả về cache nếu có, không thì lấy từ mạng
self.addEventListener('fetch', (event) => {
  // Bỏ qua các request không phải GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;

      return fetch(event.request).then((response) => {
        // Chỉ cache response hợp lệ
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Offline fallback: trả về trang chủ
        return caches.match('/index.html');
      });
    })
  );
});