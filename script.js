/* *****global variables***** */
const bodyEl = document.querySelector("body");
const mobileNav = document.querySelector(".nav-links-wrapper");
const mobileNavToggle = document.getElementById("mobile-nav");
const testimonialsEl = document.querySelector(".testimonials");
let testimonialIndex = 1;
const emailInput = document.getElementById("get-updates");

/* *****on load***** */
if (window.innerWidth < 1050) {
  showTestimonials(testimonialIndex);
}

/* *****functions***** */
function plusTestimonial(n) {
  showTestimonials((testimonialIndex += n));
}

function currentTestimonial(n) {
  showTestimonials((testimonialIndex = n));
}

function showTestimonials(n) {
  let i;
  let testimonials = document.getElementsByClassName("testimonial");
  let dots = document.getElementsByClassName("dot");

  if (n > testimonials.length) {
    testimonialIndex = 1;
  }

  if (n < 1) {
    testimonialIndex = testimonials.length;
  }

  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  testimonials[testimonialIndex - 1].style.display = "block";
  dots[testimonialIndex - 1].className += " active";
}

// validate email
function emailIsValid(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(String(email).toLowerCase());
}

/* *****event listeners***** */
// resize window
window.addEventListener("resize", function () {
  if (window.innerWidth < 1050) {
    showTestimonials(testimonialIndex);
  }
});

// mobile navigation
mobileNavToggle.addEventListener("click", () => {
  if (mobileNavToggle.className === "fas fa-bars mobile-nav") {
    // change icon to 'close icon'
    mobileNavToggle.className = "fas fa-times mobile-nav elevate-element";
    // display mobile navigation
    mobileNav.classList.add("show-mobile-nav");
    // disable scroll on body
    bodyEl.classList.add("no-scroll");
  } else {
    // change icon to hamburger menu
    mobileNavToggle.className = "fas fa-bars mobile-nav";
    // hide mobile navigation
    mobileNav.classList.remove("show-mobile-nav");
    // enable scroll on body
    bodyEl.classList.remove("no-scroll");
  }
});

// testimonials slideshow
testimonialsEl.addEventListener("click", (e) => {
  let clickedDotId = Number(e.target.id);
  if (
    clickedDotId === 1 ||
    clickedDotId === 2 ||
    clickedDotId === 3 ||
    clickedDotId === 4
  ) {
    currentTestimonial(clickedDotId);
  }
});

// validate email input
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailIsValid(emailInput.value) === false) {
    document.querySelector(".warning").style.display = "block";
  } else {
    document.querySelector(".warning").style.display = "none";
  }
});
