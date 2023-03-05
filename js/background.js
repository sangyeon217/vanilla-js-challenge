const images = [
    "unsplash1.jpg",
    "unsplash2.jpg",
    "unsplash3.jpg",
    "unsplash4.jpg",
    "unsplash5.jpg",
    "unsplash6.jpg",
    "unsplash7.jpg",
    "unsplash8.jpg",
    "unsplash9.jpg",
    "unsplash10.jpg"
]

function setBackgroundImage() {
    document.body.style.backgroundImage = `url(img/${images[Math.floor(Math.random() * images.length)]})`;
}

setBackgroundImage();