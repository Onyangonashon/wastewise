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

}