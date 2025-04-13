document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carousel-inner");
    const cards = document.querySelectorAll(".carousel-card");
    const prev = document.getElementById("carousel-prev");
    const next = document.getElementById("carousel-next");
    const dotsContainer = document.getElementById("carousel-dots");
  
    let currentSlide = 0;
    const slideCount = cards.length;
  
    // Créer les dots si pas encore présents
    dotsContainer.innerHTML = "";
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement("button");
      dot.classList.add("w-3", "h-3", "rounded-full", "bg-white", "opacity-30", "hover:opacity-70");
      if (i === 0) dot.classList.add("opacity-100");
      dotsContainer.appendChild(dot);
      dot.addEventListener("click", () => goToSlide(i));
    }
  
    const dots = dotsContainer.querySelectorAll("button");
  
    function updateCarousel() {
      const offset = -currentSlide * 100;
      track.style.transform = `translateX(${offset}%)`;
      dots.forEach((d, i) => d.classList.toggle("opacity-100", i === currentSlide));
    }
  
    function goToSlide(index) {
      currentSlide = index;
      updateCarousel();
    }
  
    prev.addEventListener("click", () => {
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateCarousel();
    });
  
    next.addEventListener("click", () => {
      currentSlide = (currentSlide + 1) % slideCount;
      updateCarousel();
    });
  
    // Auto-scroll (optionnel)
    setInterval(() => {
      currentSlide = (currentSlide + 1) % slideCount;
      updateCarousel();
    }, 5000);
  });
  