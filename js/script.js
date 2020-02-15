// We listen to the resize event
window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    dots:false,
    nav: true,
    navText: [
      $(".owl-navigation .owl-nav-prev"),
      $(".owl-navigation .owl-nav-next")
    ]
  });
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-items");
  const nav2 = document.querySelector(".nav-social-icons");
  const navItems = document.querySelectorAll(".nav-items li");
  const navItems2 = document.querySelectorAll(".nav-social-icons a i");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    nav2.classList.toggle("nav-active");

    burger.classList.toggle("toggle");

    navItems.forEach((link, index) => {
      if (link.style.animation) link.style.animation = "";
      else
        link.style.animation = `navItemsFade 0.5s ease forwards ${index / 7 +
          0.3}s`;
    });

    navItems2.forEach((link, index) => {
      if (link.style.animation) link.style.animation = "";
      else
        link.style.animation = `navItemsFade 0.5s ease forwards ${index / 7}s`;
    });
  });
};

navSlide();
