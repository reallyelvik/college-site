var carousel = document.querySelector(".carousel");
var carouselImages = carousel.getElementsByTagName("img");
var currentIndex = 0;

// Main Carousel

function showCurrentImage() {
  for (var i = 0; i < carouselImages.length; i++) {
    if (i === currentIndex) {
      carouselImages[i].style.display = "block";
    } else {
      carouselImages[i].style.display = "none";
    }
  }
}

function nextImage() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  showCurrentImage();
}

setInterval(nextImage, 3000);

// Carousel End
