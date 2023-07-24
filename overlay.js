// ==UserScript==
// @name         r/placeTheWave (Based off the code from r/placeDE Template)
// @namespace    http://tampermonkey.net/
// @version      5
// @description  try to take over the canvas! Code based off https://github.com/PlaceDE-Official/place-overlay/raw/main/src/scripts/placeDE-overlay.user.js
// @author       placeDE Devs
// @match        https://garlic-bread.reddit.com/embed*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @updateURL    https://github.com/BSBMteam/r-place-GreatWave/raw/main/Wave%202023/GreatWave-Overlay.js
// @downloadURL  https://github.com/BSBMteam/r-place-GreatWave/raw/main/Wave%202023/GreatWave-Overlay.js
// ==/UserScript==

var overlayImage = null;
if (window.top !== window.self) {
    window.addEventListener('load', () => {
        const canvasContainer = document.getElementsByTagName("garlic-bread-embed")[0].shadowRoot.children[0].getElementsByTagName("garlic-bread-canvas")[0].shadowRoot.children[0];
        overlayImage = document.createElement("img");
        updateImage();
        overlayImage.style = `position: absolute;left: -500;top: 0;image-rendering: pixelated;width: 3000px;height: 3000px;`;
        canvasContainer.appendChild(overlayImage);
    }, false);
}

function updateImage() {
    overlayImage.src = "https://raw.githubusercontent.com/NerdKnight66/place_the_wave/main/template2023.png?" + Date.now()
}

setInterval(function () {overlayImage.src = "https://raw.githubusercontent.com/NerdKnight66/place_the_wave/main/template2023.png?" + Date.now()}, 30000);
