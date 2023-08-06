document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.querySelector(".search-bar button");

  searchButton.addEventListener("click", function () {
    const searchInput = document.querySelector(
      ".search-bar input[type='text']"
    );
    if (searchInput.value.trim() !== "") {
      // You can implement your search functionality here
      alert(`Searching for: ${searchInput.value}`);
    }
  });
});

// crousal
const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".carousel-prev");
const nextBtn = document.querySelector(".carousel-next");
const slides = document.querySelectorAll(".carousel-slide");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Automatically slide the carousel every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 3000);
