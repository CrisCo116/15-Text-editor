const butInstall = document.getElementById("buttonInstall");

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();

  deferredPrompt = event;
  butInstall.style.display = "block";

  // Implement a click event handler on the `butInstall` element
  butInstall.addEventListener("click", async () => {
    deferredPrompt.prompt();

    const choiceResult = await deferredPrompt.userChoice;

    butInstall.style.display = "none";

    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    } else {
      console.log("User dismissed the A2HS prompt");
    }

    deferredPrompt = null;
  });
});

// Add a handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("App successfully installed!", event);
});
