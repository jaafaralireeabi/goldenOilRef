// Scroll to Top Script
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show the button when scrolled down 100px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToTopBtn.style.display = "flex";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Scroll to top when button is clicked
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
