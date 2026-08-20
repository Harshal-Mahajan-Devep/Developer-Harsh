document.addEventListener("DOMContentLoaded", function () {
  // =========================================================
  // 1. iOS HIGH-PRECISION SCROLL OBSERVER (Animations)
  // =========================================================
  const revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.requestAnimationFrame(() => {
              entry.target.classList.add("active");
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -20px 0px",
      },
    );

    revealElements.forEach((el) => revealObserver.observe(el));
  }

  // =========================================================
  // 2. MOBILE MENU TOGGLE LOGIC
  // =========================================================
  const menuToggle = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu-list");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      const icon = menuToggle.querySelector("i");
      if (icon) {
        if (navMenu.classList.contains("active")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });

    document.querySelectorAll(".nav-item").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        const icon = menuToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  // =========================================================
  // 3. SCROLL TO TOP BUTTON ENGINE
  // =========================================================
  const scrollTopBtn = document.getElementById("scrollToTopBtn");

  if (scrollTopBtn) {
    window.addEventListener(
      "scroll",
      function () {
        if (
          window.pageYOffset > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          scrollTopBtn.classList.add("show-btn");
        } else {
          scrollTopBtn.classList.remove("show-btn");
        }
      },
      { passive: true },
    );

    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // =========================================================
  // 4. PROJECT DETAIL 4-IMAGE SLIDER
  // =========================================================
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const sliderTrack = document.getElementById("slider-track");

  if (nextBtn && prevBtn && sliderTrack) {
    let currentSlide = 0;
    const totalSlides = 4;
    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
      sliderTrack.style.transform = `translateX(-${currentSlide * 25}%)`;
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlider();
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    let autoSlideInterval = setInterval(nextSlide, 4000);

    const sliderWrapper = document.querySelector(".slider-wrapper");
    if (sliderWrapper) {
      sliderWrapper.addEventListener("mouseenter", () =>
        clearInterval(autoSlideInterval),
      );
      sliderWrapper.addEventListener("mouseleave", () => {
        autoSlideInterval = setInterval(nextSlide, 4000);
      });
    }
  }

  // =========================================================
  // 5. DARK / LIGHT MODE TOGGLE ENGINE
  // =========================================================
  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  // Load Saved Theme
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  // Toggle Theme Event
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");

      let theme = "light";
      if (document.body.classList.contains("dark-mode")) {
        theme = "dark";
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
      }

      localStorage.setItem("theme", theme);
    });
  }

  // =========================================================
  // 6. CUSTOM CURSOR TRAIL (Optional Effect)
  // =========================================================
  const cursor = document.querySelector(".cursor-circle");
  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }
});

// =========================================================
// 7. CAPTCHA REFRESH FUNCTION
// =========================================================
function refreshCaptcha() {
  const captchaElem = document.getElementById("captcha-code");
  if (captchaElem) {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    captchaElem.innerText = randomNum;
  }
}
