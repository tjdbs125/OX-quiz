const quizData = [
    {
        question: "크기만으로 나타낼 수 있는 물리량을 벡터량이라고 한다.",
        correct: false,
        explanation: "정답(X) 벡터량: 크기와 방향을 함께 나타내는 물리량"
      },
      {
        question: "물체의 회전 운동을 변화시키는 원인을 돌림힘 또는 토크라고 한다.",
        correct: true,
        explanation: "정답(O) 돌림힘: 물체의 회전 운동을 변화시키는 원인."
      },
      {
        question: "물체가 정지 상태에 있으면, 모든 힘의 합은 0이다.",
        correct: true,
        explanation: "정답(O) 정지 상태에서는 힘의 합이 0이어야 힘의 평형이 유지됩니다."
      },
      {
        question: "힘의 평형 상태에서 물체는 가속도를 가질 수 있다.",
        correct: false,
        explanation: "정답(X) 힘의 평형 상태에서는 모든 힘이 상쇄되므로 물체는 가속도를 가질 수 없습니다."
      },
      {
        question: "힘의 크기는 그것이 작용하는 물체의 질량에 비례한다.",
        correct: false,
        explanation: "정답(X) 힘의 크기는 물체의 질량과는 관련이 없으며, 힘의 크기는 단지 그 힘이 가하는 영향을 결정하는 데 사용됩니다."
      },
      {
        question: "물체가 등속 운동을 하면 가속도는 0이다.",
        correct: true,
        explanation: "정답(O) 일은 힘과 물체가 이동한 거리의 곱입니다."
      },
      {
        question: "힘과 거리의 곱은 에너지와 관련이 있다.",
        correct: true,
        explanation: "정답(O) 등속 운동을 하면 속도가 일정하게 유지되므로 가속도는 0이 됩니다."
      },
      {
        question: "가속도는 속도의 변화율이다.",
        correct: true,
        explanation: "정답(O) 가속도는 단위 시간당 속도의 변화를 의미합니다."
      },
      {
        question: "물체가 원형 운동을 하면서 속도는 일정하다.",
        correct: false,
        explanation: "정답(X) 원형 운동을 하면서 속도는 변할 수 있습니다. 예를 들어, 원운동에서 속도는 각도에 따라 변화하며, 이는 가속도가 존재하는 것을 의미합니다."
      },
      {
        question: "속도가 변하지 않으면, 그 물체는 가속이 없다.",
        correct: true,
        explanation: "정답(O) 가속은 속도의 변화율이므로, 속도가 일정하면 가속도는 0입니다."
      },
      {
        question: "질량이 큰 물체는 공간-시간을 더 많이 굽힌다.",
        correct: true,
        explanation: "정답(O) 질량이 클수록 물체는 공간-시간을 더 강하게 굽히며 중력을 형성합니다. 이는 일반 상대성 이론의 핵심 개념 중 하나입니다."
      },
      {
        question: "빛은 중력장에서 굴절된다.",
        correct: true,
        explanation: "정답(O) 일반 상대성 이론에서는 빛은 중력장에서 굴절되지 않습니다. 대신 빛의 경로는 중력장 주변의 공간-시간 곡률을 따라 변화할 수 있습니다."
      },
      {
        question: "일은 힘이 작용하는 방향과 같은 방향으로 발생한다.",
        correct: true,
        explanation: "정답(O) 일은 힘이 작용하는 방향과 같은 방향으로 발생합니다. 즉, 힘이 작용하는 방향으로 물체가 움직일 때 일이 발생합니다."
      },
      {
        question: "에너지는 생성되거나 소멸할 수 있다.",
        correct: false,
        explanation: "정답(X) 일반 상대성 이론에서는 빛은 중력장에서 굴절되지 않습니다. 대신 빛의 경로는 중력장 주변의 공간-시간 곡률을 따라 변화할 수 있습니다."
      },
];

let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    const questionElement = document.getElementById("question");
    const explanationElement = document.getElementById("explanation");
    const nextButton = document.getElementById("next-button");
    const resultContainer = document.getElementById("result-container");
    const resultMessage = document.getElementById("result-message");
    const restartButton = document.getElementById("restart-button");
    const btnTrue = document.getElementById("btn-true");
    const btnFalse = document.getElementById("btn-false");

    function loadQuestion() {
        if (currentQuestion >= quizData.length) {
            showResult();
            return;
        }
        const q = quizData[currentQuestion];
        questionElement.textContent = q.question;
        explanationElement.textContent = "";
        nextButton.classList.add("hidden");
        explanationElement.classList.add("hidden");
        btnTrue.src = "https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_O_blue-512.png"; // 기본 O 이미지 경로
        btnFalse.src = "https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_X_blue-512.png"; // 기본 X 이미지 경로
        btnTrue.classList.remove("correct-filter", "incorrect-filter", "disabled");
        btnFalse.classList.remove("correct-filter", "incorrect-filter", "disabled");
    }

    function showResult() {
        questionElement.classList.add("hidden");
        document.querySelector(".buttons").classList.add("hidden");
        explanationElement.classList.add("hidden"); // 마지막 문제의 부가 설명 숨기기
        nextButton.classList.add("hidden"); // 다음 버튼 숨기기
        resultContainer.classList.remove("hidden");
        resultMessage.textContent = `${quizData.length}문제중 ${score}문제를 맞추셨습니다`;
    }

    function checkAnswer(userAnswer) {
        const q = quizData[currentQuestion];
        const isCorrect = q.correct === userAnswer;
        explanationElement.textContent = q.explanation;
        explanationElement.classList.remove("hidden");

        if (isCorrect) {
            score++;
            if (userAnswer) {
                btnTrue.classList.add("correct-filter");
                btnFalse.classList.add("disabled");
            } else {
                btnFalse.classList.add("correct-filter");
                btnTrue.classList.add("disabled");
            }
        } else {
            if (userAnswer) {
                btnTrue.classList.add("incorrect-filter");
                btnFalse.classList.add("disabled");
            } else {
                btnFalse.classList.add("incorrect-filter");
                btnTrue.classList.add("disabled");
            }
        }
        nextButton.classList.remove("hidden");
        btnTrue.classList.add("disabled");
        btnFalse.classList.add("disabled");
    }

    btnTrue.addEventListener("click", () => checkAnswer(true));
    btnFalse.addEventListener("click", () => checkAnswer(false));

    nextButton.addEventListener("click", () => {
        currentQuestion++;
        loadQuestion();
    });

    restartButton.addEventListener("click", () => {
        currentQuestion = 0;
        score = 0;
        resultContainer.classList.add("hidden");
        questionElement.classList.remove("hidden");
        document.querySelector(".buttons").classList.remove("hidden");
        loadQuestion();
    });

    loadQuestion();
});
