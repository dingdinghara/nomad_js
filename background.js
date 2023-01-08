const background = document.querySelector("#background");
const images = ["black.jpg", "black2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `${chosenImage}`;
background.appendChild(bgImage);