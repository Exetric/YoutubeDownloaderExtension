// Paste the Youtube downloader website of your choosing here

const downloadWebsite = "https://ytmp3.cc/";

// The rest of this code you can ignore

function waitForElm(selector) {
  return new Promise((resolve) => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver((mutations) => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm("ytd-download-button-renderer").then((elm) => {
  elm.addEventListener("click", function handleClick() {
    waitForElm("ytd-offline-promo-renderer").then((premiumPopup) => {
      premiumPopup.remove();
    });
    waitForElm("tp-yt-iron-overlay-backdrop").then((premiumBackdrop) => {
      premiumBackdrop.remove();
    });
    window.location.href = downloadWebsite + window.location.href;
  });
});
