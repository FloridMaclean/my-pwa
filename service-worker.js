// Every time something comes from the web
self.addEventListener("fetch", function () {
  return;
});

// Called when the SW is installed
self.addEventListener("install", function (event) {
  console.log("Installed", event);
    self.skipWaiting();
});

// Called when the SW is activated
self.addEventListener("activate", function (event) {
  console.log("Activated", event);
    event.waitUntil(clients.claim());
});