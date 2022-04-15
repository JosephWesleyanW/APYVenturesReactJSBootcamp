const imgContainer = document.querySelector(".img-container");
const imgURL = "https://source.unsplash.com/random/";



function newNumber() {
  const images = document.getElementById("number1").value;
  count = images <= 1 ? "image" : "images";
  alert("You will see " + images + " " + count + ".");
  for (let i = 0; i < images; i++) {
    const img = document.createElement("img");
    img.src = `${imgURL}${getRandomSize()}`; // source.unsplash.com/random/406x405
    imgContainer.appendChild(img);
  }
}


function changeButtonText() {
  document.getElementById("buttonText").innerHTML = "Click for MORE IMAGES.";
}


function getRandomNum() {
  return Math.floor(Math.random() * 10) + 400;
}

// Sürekli farklı fotoğrafların gelmesi için
// farklı boyutlarda fotoğraf isteği gönderiyoruz
function getRandomSize() {
  return `${getRandomNum()}x${getRandomNum()}`;
}

function noFilter() {
  document.getElementById("filterChange").style.filter = "none";
}

function blurFilter() {
  document.getElementById("filterChange").style.filter = "blur(5px)";
}

function contrast() {
  document.getElementById("filterChange").style.filter = "contrast(400%)";
}

function grayscale() {
  document.getElementById("filterChange").style.filter = "grayscale(100%)";
}

function hueRotate() {
  document.getElementById("filterChange").style.filter = "hue-rotate(120deg)";
}
