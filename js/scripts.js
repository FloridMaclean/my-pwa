if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/my-pwa/service-worker.js", { scope: "/my-pwa/" })
    .then(function (registration) {
      console.log("Registration successful. Scope is:", registration.scope);
    })
    .catch(function (error) {
      console.log("Registration failed. Error:", error);
    });
}