const questions = [
    {question: "What does HTML stand for?", answers: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Markup Language"], correct: 0},
    {question: "What is the correct tag for the largest heading in HTML?", answers: ["&lt;h6&gt;", "&lt;h1&gt;", "&lt;head&gt;"], correct: 1},
    {question: "Which tag is used to create a hyperlink?", answers: ["&lt;link&gt;", "&lt;a&gt;", "&lt;href&gt;"], correct: 1},
    {question: "What is the correct file extension for an HTML file?", answers: [".htm", ".html", "Both .htm and .html"], correct: 2},
    {question: "Which HTML tag is used to define an unordered list?", answers: ["&lt;ol&gt;", "&lt;ul&gt;", "&lt;li&gt;"], correct: 1},
    {question: "What attribute specifies an image source in HTML?", answers: ["href", "src", "alt"], correct: 1},
    {question: "What does the &lt;br&gt; tag do?", answers: ["Makes text bold", "Inserts a line break", "Creates a button"], correct: 1},
    {question: "Which tag is used to define a table row?", answers: ["&lt;td&gt;", "&lt;tr&gt;", "&lt;th&gt;"], correct: 1},
    {question: "Which tag is used to create a dropdown list?", answers: ["&lt;select&gt;", "&lt;dropdown&gt;", "&lt;option&gt;"], correct: 0},
    {question: "Which tag is used to insert a line break in HTML?", answers: ["&lt;br&gt;", "&lt;lb&gt;", "&lt;break&gt;"], correct: 0}
  ];

  let currentQuestionIndex = 0;

  function loadQuestion() {
    let container = document.getElementById("question-container");
    let question = questions[currentQuestionIndex];
    container.innerHTML = `<div class='question'>${currentQuestionIndex + 1}. ${question.question}</div>`;
    question.answers.forEach((answer, index) => {
      container.innerHTML += `<label class="answer-label">
        <input type='radio' name='answer' value='${index}' onclick='checkAnswer(${index})'> ${answer}
      </label><br>`;
    });
  }
  

  function checkAnswer(selectedIndex) {
    let correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
      document.getElementById("feedback").style.display = "none";
      document.getElementById("correct-feedback").style.display = "block";
      // Chama a próxima pergunta automaticamente após 1 segundo (1000ms)
      setTimeout(nextQuestion, 1000);
    } else {
      document.getElementById("feedback").style.display = "block";
    }
  }

  function nextQuestion() {
    currentQuestionIndex++;

    // Esconde os feedbacks antes de carregar a próxima pergunta
    document.getElementById("correct-feedback").style.display = "none";
    document.getElementById("feedback").style.display = "none";

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      document.getElementById("question-container").innerHTML = "<h2>Quiz Complete! 🎉</h2>";
    }
  }

  loadQuestion();