/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");


const words = [
    "Java & Web Development Learner",
    "JavaScript Learner",
    "Future Developer"
];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingEffect() {

    const currentWord = words[wordIndex];


    if (deleting === false) {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (characterIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    }

    else {

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typingEffect,
        deleting ? 50 : 90
    );

}


typingEffect();


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener(
    "submit",
    function (event) {

        // Stop page refresh
        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        const nameError =
            document.getElementById("nameError");

        const emailError =
            document.getElementById("emailError");

        const messageError =
            document.getElementById("messageError");

        const successMessage =
            document.getElementById("successMessage");


        // Clear old messages

        nameError.textContent = "";

        emailError.textContent = "";

        messageError.textContent = "";

        successMessage.textContent = "";


        let valid = true;


        /* Name validation */

        if (name === "") {

            nameError.textContent =
                "Please enter your name.";

            valid = false;

        }


        /* Email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            emailError.textContent =
                "Please enter a valid email.";

            valid = false;

        }


        /* Message validation */

        if (message.length < 10) {

            messageError.textContent =
                "Message must contain at least 10 characters.";

            valid = false;

        }


        /* If everything is correct */

        if (valid) {

            successMessage.textContent =
                "Message submitted successfully!";

            contactForm.reset();

        }

    }
);


/* =========================
   BACK TO TOP
========================= */

const topButton =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 400) {

            topButton.classList.add("show");

        }

        else {

            topButton.classList.remove("show");

        }

    }
);


topButton.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =========================
   CURRENT YEAR
========================= */

const year =
    document.getElementById("year");


year.textContent =
    new Date().getFullYear();