
// =====================================
// WANDERLUX TRAVEL AGENCY
// Main JavaScript File
// =====================================

// Trip Cost Calculator

document.addEventListener("DOMContentLoaded", function () {

    const calculateButton = document.querySelector(
        "#calculateBtn, #calculate, .calculate-btn"
    );

    if (calculateButton) {
        calculateButton.addEventListener("click", calculateTrip);
    }

    function calculateTrip() {

        const destination = document.querySelector(
            "#destination, [name='destination']"
        );

        const travellers = document.querySelector(
            "#travelers, #travellers, [name='travelers'], [name='travellers']"
        );

        const days = document.querySelector(
            "#days, [name='days']"
        );

        const style = document.querySelector(
            "#travelStyle, #travel-style, [name='travelStyle']"
        );

        const result = document.querySelector(
            "#result, #totalCost, #total-cost, .calculator-result, .result"
        );

        if (!destination || !travellers || !days || !style || !result) {
            return;
        }

        const destinationRates = {
            dubai: 250,
            paris: 500,
            london: 450,
            turkey: 300,
            maldives: 600,
            switzerland: 650
        };

        const travelRates = {
            budget: 1,
            standard: 1.5,
            luxury: 2.5
        };

        const selectedDestination =
            destination.value.toLowerCase();

        const numberOfTravellers =
            Number(travellers.value);

        const numberOfDays =
            Number(days.value);

        const selectedStyle =
            style.value.toLowerCase();

        const destinationRate =
            destinationRates[selectedDestination] || 300;

        const styleRate =
            travelRates[selectedStyle] || 1;

        if (
            numberOfTravellers < 1 ||
            numberOfDays < 1 ||
            !Number.isFinite(numberOfTravellers) ||
            !Number.isFinite(numberOfDays)
        ) {
            result.textContent =
                "Please enter valid travellers and trip duration.";
            return;
        }

        const total =
            destinationRate *
            numberOfTravellers *
            numberOfDays *
            styleRate;

        result.textContent =
            "Estimated Trip Cost: $" + total.toLocaleString("en-US");
    }


    // Scroll Reveal Animation

    const revealElements =
        document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        observer.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("active");
        });

    }


    // Appointment Form Validation

    const appointmentForm = document.querySelector(
        "#appointmentForm, .appointment-form"
    );

    if (appointmentForm) {

        appointmentForm.addEventListener("submit", function (event) {

            if (!appointmentForm.checkValidity()) {
                event.preventDefault();
                appointmentForm.reportValidity();
                return;
            }

            event.preventDefault();

            alert(
                "Thank you! Your appointment request has been completed as a demo."
            );

            appointmentForm.reset();

        });

    }


    // Contact Form

    const contactForm = document.querySelector(
        "#contactForm, .contact-form"
    );

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            if (!contactForm.checkValidity()) {
                event.preventDefault();
                contactForm.reportValidity();
                return;
            }

            event.preventDefault();

            alert(
                "Thank you for contacting WanderLux! This is a demonstration form."
            );

            contactForm.reset();

        });

    }

});
