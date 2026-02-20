const questions = {
    science: [
        {
            question: "What planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "What gas do plants absorb?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            answer: "Carbon Dioxide"
        }
    ],
    history: [
        {
            question: "Who was the first President of India?",
            options: ["Nehru", "Rajendra Prasad", "Gandhi", "Patel"],
            answer: "Rajendra Prasad"
        },
        {
            question: "In which year did India get independence?",
            options: ["1945", "1947", "1950", "1930"],
            answer: "1947"
        }
    ],
    sports: [
        {
            question: "How many players in a football team?",
            options: ["9", "10", "11", "12"],
            answer: "11"
        },
        {
            question: "Which country hosts IPL?",
            options: ["Australia", "India", "England", "USA"],
            answer: "India"
        }
    ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedAnswer = "";

function startQuiz() {
    const domain = document.getElementById("domainSelect").value;
    currentQuestions = questions[domain];
    currentIndex = 0;
    score = 0;

    document.getElementById("domainSection").classList.add("hidden");
    document.getElementById("quizSection").classList.remove("hidden");

    loadQuestion();
}

function loadQuestion() {
    const questionObj = currentQuestions[currentIndex];
    document.getElementById("question").textContent = questionObj.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    questionObj.options.forEach(option => {
        const btn = document.createElement("div");
        btn.textContent = option;
        btn.classList.add("option-btn");
        btn.onclick = () => {
            selectedAnswer = option;
        };
        optionsDiv.appendChild(btn);
    });
}

function nextQuestion() {
    if (selectedAnswer === currentQuestions[currentIndex].answer) {
        score++;
    }

    selectedAnswer = "";
    currentIndex++;

    if (currentIndex < currentQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quizSection").classList.add("hidden");
    document.getElementById("resultSection").classList.remove("hidden");

    document.getElementById("scoreText").textContent =
        "Your Score: " + score + " / " + currentQuestions.length;
}

function restartQuiz() {
    document.getElementById("resultSection").classList.add("hidden");
    document.getElementById("domainSection").classList.remove("hidden");
}
