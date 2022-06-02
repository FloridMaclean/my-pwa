// Calle when the SW is installed
self.addEventListener("install", function (event) {
  console.log("Installed!", event);
  self.skipWaiting();
});

// called when the SW is activated
self.addEventListener("activate", function (event) {
  console.log("Activated", event);
  event.waitUntil(clients.claim());
});

// Every time something comes from the web
self.addEventListener("fetch", function () {
  return;
});