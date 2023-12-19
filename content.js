chrome.runtime.onMessage.addListener(function (request) {
  console.log("Content script received a message:", request);
  if (request.action === "modifyContent") {
    // Modify text on the website as needed
    document.body.innerHTML = document.body.innerHTML.replace(/Hello/g, "Hlw");

    // Modify images (add blur effect to the src attribute)
    var images = document.querySelectorAll("img");
    images.forEach(function (image) {
      image.src =
        "https://rajibmiarahid.vercel.app/_next/image?url=%2Fimages%2Frahid.png&w=256&q=75";
      console.log("Modifying content");
    });
  }
});
