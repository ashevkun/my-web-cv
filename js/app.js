// *** PARALLAX ***

// Smooth Scroll for Parallax

window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
let smoother = ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.wrapper-content',
});


// Smooth scroll to navigate to anchor links

gsap.utils.toArray(".navbar a").forEach(function (button, i) {
  button.addEventListener("click", (e) => {
    var id = e.target.getAttribute("href");
    smoother.scrollTo(id, true, "top top");
    e.preventDefault();
  });
});

window.onload = (event) => {
  let urlHash = window.location.href.split("#")[1];

  let scrollElem = document.querySelector("#" + urlHash);

  if (urlHash && scrollElem) {
    gsap.to(smoother, {
      scrollTop: smoother.offset(scrollElem, "top top"),
      duration: 1,
      delay: 0.5
    });
  }
};

// *** TEXT ANIMATION ***

// Typing Effect for Main Header

typingEffect = new Typed(".multitext", {
    strings: ["Machine Learning", "Data Engineering Student"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})



// *** PROJECTS SECTION ***

// Swiper for Projects Section

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


// *** TOGGLE ICON NAVBAR ***

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');

}