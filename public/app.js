// <!------------------ NAVBAR SCROLL ANIMATION -------------------->

window.addEventListener("scroll", function() {
    var header = document.getElementById("navbar");
    if (window.scrollY > 100) {
      header.classList.add("bg-dark");
      header.classList.add("shadow-lg");
      header.classList.remove("bg-transparent");
    } else {
      header.classList.remove("bg-dark");
      header.classList.remove("shadow-lg");
      header.classList.add("bg-transparent");
    }
  });
  

// <!------------------ MOBILE MENU -------------------->
function toggleMenu(){
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeBtn = document.getElementById("close-btn");

    mobileMenu.classList.toggle("right-[0%]");
    hamburger.classList.toggle("hidden");
    closeBtn.classList.toggle("hidden");
}

// <!------------------ HEADER TYPEWRITER -------------------->
var typed = new Typed(".auto-type",{
    strings:["Tells a Story.","Unveils a Story.","Shares a Story."],
    typeSpeed:70,
    backSpeed:20,
    loop:true
})

document.addEventListener('DOMContentLoaded', () => {
  new WOW().init();
})

// <!------------------ SCROLL ANIMATION -------------------->
function scrollToSection(sectionId){
  const section = document.getElementById(sectionId);
  section.scrollIntoView({behavior:'smooth'})
}

// <!------------------ RIGHT CLICK DISABLE -------------------->

document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
}, false)