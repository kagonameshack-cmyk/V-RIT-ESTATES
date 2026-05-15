const reveals =
document.querySelectorAll(".reveal");

window.addEventListener(
"scroll",
() => {

    reveals.forEach(reveal => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        if(revealTop < windowHeight - 120){

            reveal.classList.add("active");

        }

    });

});


const menuToggle =
document.querySelector(".menu-toggle");

const mobileMenu =
document.querySelector(".mobile-menu");

menuToggle.addEventListener(
"click",
() => {

    menuToggle.classList.toggle("active");

    mobileMenu.classList.toggle("active");

});
