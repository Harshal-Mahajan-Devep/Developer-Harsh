const projectsData = {
  jobportal: {
    title: "NexusJobs – Premium Job Portal",
    liveUrl: "https://job-portal-nu-mauve.vercel.app/",
    views: "2,850 Views",
    purchases: "145 Purchases",
    rating: "4.9 Rating",
    price: "7,499",
    originalPrice: "₹14,999",
    overview:
      "A modern premium job portal designed to connect job seekers with top technology companies. The platform provides advanced job discovery, detailed job listings, application tracking, saved opportunities, recruiter notifications, secure authentication, OTP verification, and a personalized candidate profile experience.",
    highlights: [
      "Advanced job search with role, technology, location, and remote-work filters.",
      "Detailed job pages with salary, experience, workplace policy, deadline, responsibilities, requirements, and application actions.",
      "Complete application tracking system with Applied, Screening, Interview, and Offer stages.",
      "Secure authentication flow with Sign In, account registration, password recovery, and Email/Mobile OTP verification.",
      "Save and manage favorite job opportunities with bookmark functionality.",
      "Real-time-style notification center for recruiter messages, interviews, offers, and application updates.",
      "Personalized candidate profile with skills, experience, profile strength, resume, and recruiter activity.",
      "Responsive dark and light theme interface with modern glassmorphism and gradient-based UI.",
      "Interactive UI components including filters, dropdowns, bookmarks, theme switching, modals, and smooth transitions.",
      "Built as a multi-page responsive career platform for desktop, tablet, and mobile users.",
    ],
    images: [
      "Image/jobmain.png",
      "Image/jobprofile.png",
      "Image/joblogin.png",
      "Image/jobdarklight.png",
    ],
  },
  healthcare: {
    title: "Healthcare Mobile Application (React Native)",
    liveUrl: "https://your-healthcare-demo.com",
    views: "2,120 Views",
    purchases: "110 Purchases",
    rating: "4.8 Rating",
    price: "5,499",
    originalPrice: "₹9,999",
    overview:
      "A patient-doctor appointment management mobile application with real-time video consultation support, digital prescription management, and medical record synchronization.",
    highlights: [
      "Real-time appointment booking with doctor calendar sync.",
      "Telemedicine video call integration with WebRTC.",
      "Prescription upload and secure patient report storage.",
      "Cross-platform support for both Android and iOS devices.",
    ],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  pharma: {
    title: "Pharma Web Portal & Inventory System",
    liveUrl: "https://your-pharma-demo.com",
    views: "980 Views",
    purchases: "45 Purchases",
    rating: "5.0 Rating",
    price: "3,999",
    originalPrice: "₹6,999",
    overview:
      "Custom Pharmaceutical Web Portal created for stock distribution, batch tracking, supplier invoices, and regulatory compliance reporting.",
    highlights: [
      "Real-time Medicine Inventory & Expiry alerts.",
      "Multi-vendor invoice generation and billing system.",
      "Role-based access control (Admin, Supplier, Pharmacist).",
      "Automated stock low-level notifications.",
    ],
    images: [
      "https://images.unsplash.com/photo-1580281658223-9b93f18ae9ae?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  recruitment: {
    title: "Recruitment Job Portal (SaaS Application)",
    liveUrl: "https://your-recruitment-demo.com",
    views: "3,400 Views",
    purchases: "140 Purchases",
    rating: "4.9 Rating",
    price: "5,999",
    originalPrice: "₹10,999",
    overview:
      "A comprehensive SaaS-ready job portal platform for recruiters, candidates, and job seekers with instant resume parsing and automated application tracking.",
    highlights: [
      "Automated Applicant Tracking System (ATS).",
      "Resume Builder and instant PDF export.",
      "Employer membership packages & job listing boost feature.",
      "Direct chat between HR recruiters and candidates.",
    ],
    images: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    ],
  },
};

function refreshCaptcha() {
  const captchaElem = document.getElementById("captcha-code");
  if (captchaElem) {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    captchaElem.innerText = String(randomNum);
  }
}

let goToSlide = () => {};

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-menu .nav-item");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const isIndex = currentPage === "index.html" || currentPage === "";
  const sections = document.querySelectorAll("header[id], section[id]");

  function updateNavbarActive() {
    if (isIndex && sections.length > 0) {
      let currentSectionId = "";
      const scrollPosition = window.pageYOffset + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionId = section.getAttribute("id");
        }
      });

      if (!currentSectionId && window.pageYOffset < 150) {
        currentSectionId = "home";
      }

      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (href.includes("#" + currentSectionId)) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    } else {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        const linkPage = href.split("#")[0];

        if (linkPage === currentPage) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  updateNavbarActive();
  window.addEventListener("scroll", updateNavbarActive, { passive: true });

  const filterButtons = document.querySelectorAll(".filter-tabs .tab-btn");
  if (filterButtons.length > 0) {
    filterButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }

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

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get("id") || "jobportal";
  const project = projectsData[projectId];

  if (project && document.getElementById("detail-title")) {
    document.title = `${project.title} | Details`;
    document.getElementById("detail-title").textContent = project.title;

    const liveLink = document.getElementById("detail-live-link");
    if (liveLink) liveLink.href = project.liveUrl;

    const viewsEl = document.getElementById("detail-views");
    if (viewsEl)
      viewsEl.innerHTML = `<i class="fas fa-eye"></i> ${project.views}`;

    const purchasesEl = document.getElementById("detail-purchases");
    if (purchasesEl)
      purchasesEl.innerHTML = `<i class="fas fa-shopping-bag"></i> ${project.purchases}`;

    const ratingEl = document.getElementById("detail-rating");
    if (ratingEl)
      ratingEl.innerHTML = `<i class="fas fa-star"></i> ${project.rating}`;

    const overviewEl = document.getElementById("detail-overview");
    if (overviewEl) overviewEl.textContent = project.overview;

    const priceEl = document.getElementById("detail-price");
    if (priceEl) {
      priceEl.innerHTML = `<span class="currency">₹</span>${project.price} <span class="original-price">${project.originalPrice}</span>`;
    }

    const highlightsList = document.getElementById("detail-highlights");
    if (highlightsList) {
      highlightsList.innerHTML = project.highlights
        .map((item) => `<li><i class="fas fa-check-circle"></i> ${item}</li>`)
        .join("");
    }

    const sliderTrack = document.getElementById("slider-track");
    if (sliderTrack && project.images && project.images.length > 0) {
      sliderTrack.innerHTML = project.images
        .map(
          (imgUrl) => `
          <div class="slide">
            <img src="${imgUrl}" alt="${project.title}" class="main-project-img" />
          </div>
        `,
        )
        .join("");
    }
  }

  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");
  const sliderTrack = document.getElementById("slider-track");
  const dotsContainer = document.getElementById("slider-dots");

  if (sliderTrack) {
    let currentSlide = 0;
    const slides = sliderTrack.querySelectorAll(".slide");
    const totalSlides = slides.length || 4;

    if (dotsContainer && slides.length > 0) {
      dotsContainer.innerHTML = Array.from(
        { length: totalSlides },
        (_, i) =>
          `<span class="dot ${i === 0 ? "active" : ""}" data-slide="${i}"></span>`,
      ).join("");
    }

    const dots = document.querySelectorAll(".dot");

    function updateSlider() {
      sliderTrack.style.transform = `translateX(-${currentSlide * (100 / totalSlides)}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentSlide);
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

    goToSlide = function (index) {
      currentSlide = index;
      updateSlider();
    };

    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const slideIndex = parseInt(dot.getAttribute("data-slide"), 10);
        goToSlide(slideIndex);
      });
    });

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

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

  const themeToggleBtn = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggleBtn.innerHTML = isDark
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
  }

  const cursor = document.querySelector(".cursor-circle");
  if (cursor) {
    window.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }
});
