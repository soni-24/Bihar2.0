const questions = [
    {
      question: "What is the capital of Bihar?",
      options: ["Gaya", "Patna", "Muzaffarpur", "Bhagalpur"],
      answer: "Patna",
      detail: "Patna, situated on the banks of the Ganges River, is the capital and largest city of Bihar."
    },
    {
      question: "Where is Mahabodhi Temple located?",
      options: ["Nalanda", "Gaya", "Patna", "Rajgir"],
      answer: "Gaya",
      detail: "The Mahabodhi Temple is a UNESCO World Heritage Site located in Bodh Gaya, Bihar, where Buddha attained enlightenment."
    },
    {
      question: "Which sweet is famously associated with Bihar?",
      options: ["Rasgulla", "Peda", "Thekua", "Jalebi"],
      answer: "Thekua",
      detail: "Thekua is a traditional Bihari sweet made during Chhath Puja using wheat flour, jaggery, and ghee."
    },
    {
      question: "Which festival is shown in the image?",
      options: ["Chhath Puja", "Holi", "Diwali", "Durga Puja"],
      answer: "Chhath Puja",
      image: "chhath.jpg",
      detail: "Chhath Puja is a significant Bihari festival dedicated to the Sun God, celebrated with fasting and offerings at riverbanks."
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let quizResults = [];
  
  function startQuiz() {
    questions.sort(() => Math.random() - 0.5);
    currentQuestion = 0;
    score = 0;
    quizResults = [];
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("quiz-box").classList.remove("hide");
    document.getElementById("answer-message").textContent = "";
    showQuestion();
  }
  
  function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    const quizImg = document.getElementById("quiz-img");
    document.getElementById("answer-message").textContent = "";
    optionsDiv.innerHTML = "";
  
    if (q.image) {
      quizImg.src = q.image;
      quizImg.style.display = "block";
    } else {
      quizImg.style.display = "none";
    }
  
    q.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(opt);
      optionsDiv.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const currentQ = questions[currentQuestion];
    const correct = currentQ.answer;
    const messageDiv = document.getElementById("answer-message");
  
    if (selected === correct) {
      score++;
      messageDiv.textContent = "✅ Correct!";
      messageDiv.style.color = "green";
    } else {
      messageDiv.textContent = `❌ Wrong! Correct answer is: ${correct}`;
      messageDiv.style.color = "red";
    }
  
    quizResults.push({
      question: currentQ.question,
      selected,
      correct,
      detail: currentQ.detail
    });
  
    disableOptions();
  }
  
  function disableOptions() {
    const allBtns = document.querySelectorAll("#options button");
    allBtns.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === questions[currentQuestion].answer) {
        btn.style.backgroundColor = "#4caf50";
      } else {
        btn.style.backgroundColor = "#e57373";
      }
    });
  }
  
  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    document.getElementById("quiz-box").classList.add("hide");
    document.getElementById("result-screen").classList.remove("hide");
    const finalScoreText = `You scored ${score} out of ${questions.length}`;
    document.getElementById("score").textContent = finalScoreText;

    alert(finalScoreText);

    
    const summaryDiv = document.getElementById("quiz-summary");
    summaryDiv.innerHTML = "<h3>Review:</h3>";
    
    quizResults.forEach((q, index) => {
      const block = document.createElement("div");
      block.style.marginBottom = "15px";
      block.innerHTML = `
        <strong>Q${index + 1}: ${q.question}</strong><br>
        Your answer: <span style="color: ${q.selected === q.correct ? 'green' : 'red'}">${q.selected}</span><br>
        Correct answer: <strong>${q.correct}</strong><br>
        <em>${q.detail}</em>
      `;
      summaryDiv.appendChild(block);
    });
  }
  
  function restartQuiz() {
    document.getElementById("result-screen").classList.add("hide");
    document.getElementById("start-screen").classList.remove("hide");
  }
  

  // Get modal elements
 
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImage');
  const logoImg = document.getElementById('logoImg');
  const closeBtn = document.querySelector('.close');

  logoImg.addEventListener('click', function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });

  closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });


  
