// ================= MOBILE MENU =================

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");

}


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const business = document.getElementById("business").value;

    const message = document.getElementById("message").value;


    if (name === "" || email === "" || business === "" || message === "") {

        alert("Please fill all fields.");

        return;

    }


    alert(

        "Thank you " + name +

        "! Your project request has been received."

    );


    contactForm.reset();

});


// ================= NAV LINK CLOSE =================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document

            .getElementById("navLinks")

            .classList.remove("active");

    });

});