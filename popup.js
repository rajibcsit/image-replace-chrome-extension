// popup.js
document.addEventListener("DOMContentLoaded", function () {
  var modifyButton = document.getElementById("modifyButton");

  modifyButton.addEventListener("click", function () {
    // Execute the content script to modify text or images on the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "modifyContent" });
    });
  });
});
