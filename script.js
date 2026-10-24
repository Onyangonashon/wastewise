// ========================================
// WASTEWISE JAVASCRIPT
// ========================================


// CONTACT FORM
// ========================================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.querySelector("#name").value;

        alert(
            "Thank you, " +
            name +
            "! ♻️ Your message has been received."
        );

        contactForm.reset();

    });

}


// INTERACTIVE ACTION BUTTONS
// ========================================

const actionButtons = document.querySelectorAll(".action-button");

actionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const message = button.dataset.message;

        alert(message);

    });

});


// WASTE-SORTING QUIZ
// ========================================

const quizForm = document.querySelector("#wasteQuiz");

if (quizForm) {

    quizForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let score = 0;

        const answers = {
            question1: "organic",
            question2: "paper",
            question3: "electronic",
            question4: "plastic",
            question5: "glass"
        };


        for (let question in answers) {

            const selectedAnswer =
                quizForm.querySelector(
                    `input[name="${question}"]:checked`
                );

            if (
                selectedAnswer &&
                selectedAnswer.value === answers[question]
            ) {
                score++;
            }

        }


        const result = document.querySelector("#quizResult");

        result.textContent =
            "You scored " +
            score +
            " out of 5! ♻️";


        if (score === 5) {

            result.textContent +=
                " Excellent! You are a WasteWise expert! 🌍";

        } else if (score >= 3) {

            result.textContent +=
                " Good job! Keep learning about waste management. 🌱";

        } else {

            result.textContent +=
                " Keep practicing. Every bit of knowledge helps! 💚";

        }

    });
const learnButtons = document.querySelectorAll(".learn-btn");

learnButtons.forEach(button => {
    button.addEventListener("click", () => {
        const info = button.nextElementSibling;

        if (info.textContent === "") {
            info.textContent = button.dataset.info;
            button.textContent = "Hide Information";
        } else {
            info.textContent = "";
            button.textContent = "Learn More";
        }
    });

}
/* ===== WASTEWISE CONTACT FORM ===== */

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("wastewiseContactForm");

    if (!contactForm) {
        return;
    }

    const feedback = document.getElementById("contactFeedback");
    const nameInput = document.getElementById("contactName");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        const visitorName = nameInput.value.trim();

        feedback.textContent =
            `Thank you, ${visitorName}! 🌿 Your message has been checked successfully. This demonstration form does not send emails yet.`;

        feedback.style.color = "#1b5e20";
        feedback.style.backgroundColor = "#e8f5e9";
        feedback.style.padding = "12px";
        feedback.style.borderRadius = "8px";

        contactForm.reset();
    });
});
