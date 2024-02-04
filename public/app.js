// <!------------------ NAVBAR SCROLL ANIMATION -------------------->

window.addEventListener("scroll", function() {
    var header = document.getElementById("navbar");
    if (window.scrollY > 200) {
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

// <!------------------ FORM SUBMISSION -------------------->

var form = document.getElementById('form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var message = document.getElementById('message').value;

//   const msgToMail = `mail.to:pritambose099@gmail.com?subject=Form Submission&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`;

//   // Opens the default email client with the mailto link
//   window.location.href = msgToMail;
// })