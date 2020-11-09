/* *****global variables***** */
const bodyEl = document.querySelector("body");
const mobileNav = document.querySelector(".nav-links-wrapper");
const mobileNavToggle = document.getElementById("mobile-nav");

/* *****functions***** */
/* *****event listeners***** */
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
