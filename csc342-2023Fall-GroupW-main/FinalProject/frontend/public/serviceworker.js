function log(...data) {
    console.log("SWv1.0", ...data);
  }
  
log("SW Script executing - adding event listeners");
  

const CACHE_NAME = 'foodfolio-app-cache';
const urlsToCache = [
    '/',
    '/offline',
    '/login',
    './favicon.io',
    './index.html',
    './logo192.png',
    './logo512.png',
    './manifest.json',
    './robots.txt',
    '../src/static/images/gear.png',
    '../src/static/images/hamburger-menu.png',
    '../src/static/images/home.png',
    '../src/static/images/map.png',
    '../src/static/images/notes.png',
    '../src/static/images/pretzel.png',
    '../src/static/images/search.png',
    '../src/App.js',
    '../src/index.js',
    '../src/static/css/colors.css',
    '../src/static/css/drawer.css',
    '../src/static/css/header.css',
    '../src/static/css/home.css',
    '../src/static/css/index.css',
    '../src/static/css/modal.css',
    '../src/static/css/settings.css',
    '../src/static/css/sidebar-menu.css',
    '../src/pages/appSkeleton.js',
    '../src/pages/home.js',
    '../src/pages/index.js',
    '../src/pages/login.js',
    '../src/pages/offline.js',
    '../src/pages/settings.js',
    '../src/components/drawer.js',
    '../src/components/header.js',
    '../src/components/index.js',
    '../src/components/modal.js',
    '../src/components/sidebarMenu.js',
    '../src/components/map/restaurantMarker.js',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
    '/static/js/bundles.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
        return response || fetch(event.request);
        }).catch(() => {
            return caches.match('/offline'); 
        })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((cacheNames) => {
        return Promise.all(
            cacheNames.map((cacheName) => {
            if (!cacheWhitelist.includes(cacheName)) {
                return caches.delete(cacheName);
            }
            return null;
            })
        );
        })
    );
});

self.addEventListener('message', (event) => {
    if (event.data === 'submitFormData') {
        submitFormDataWhenOnline();

    }
});

const submitFormDataWhenOnline = () => {
    if (navigator.onLine) {
        // User is online, submit the form data to the API
        const formData = getFormData(); // Implement your form data retrieval logic
        if (formData) {
        // Assuming there's an API endpoint to submit the form data
        fetch('https://api.example.com/submit', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
            console.log('Form data submitted successfully:', data);
            })
            .catch((error) => {
            console.error('Error submitting form data:', error);
            });
        }
    } else {
        console.log('User is offline. Storing form data locally for later submission.');
    }
};

const getFormData = () => {
    const storedFormData = localStorage.getItem('formData');
    if (storedFormData) {
        return JSON.parse(storedFormData);
    }
    return null;
};