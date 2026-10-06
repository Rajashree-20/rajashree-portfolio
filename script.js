/* ================================
   MOBILE MENU
================================ */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


/* ================================
   CLOSE MENU
================================ */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });

});


/* ================================
   CURRENT YEAR
================================ */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".section, .skill-card, .project-card, .certification-card, .contact-card, .about-card, .education-card"
    );


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});


/* ================================
   MOUSE GLOW
================================ */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "280px";
glow.style.height = "280px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";

glow.style.background =
    "radial-gradient(circle, rgba(155,108,255,.12), transparent 70%)";

glow.style.transform =
    "translate(-50%, -50%)";

glow.style.zIndex = "-1";

glow.style.transition =
    "left .15s ease, top .15s ease";

document.body.appendChild(glow);


document.addEventListener("mousemove", event => {

    glow.style.left =
        event.clientX + "px";

    glow.style.top =
        event.clientY + "px";

});


/* ================================
   PHOTO TILT
================================ */

const photo =
    document.querySelector(".profile-photo");


if (photo) {

    photo.addEventListener("mousemove", event => {

        const rect =
            photo.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        photo.style.transform =
            `perspective(600px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.04)`;

    });


    photo.addEventListener("mouseleave", () => {

        photo.style.transform = "";

    });

}