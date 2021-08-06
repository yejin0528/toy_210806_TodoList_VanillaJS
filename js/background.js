const images = [
    "jenna1.jpg",
    "jenna2.jpg",
    "jenna3.jpg"
]

const chosenImg = images[Math.floor(Math.random() * images.length)];
const backgroundImg = `img/${chosenImg}`;
document.body.style.backgroundImage = `url(${backgroundImg})`;