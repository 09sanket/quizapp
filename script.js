const questions = [
    {
      que: "Which of the following is a Markup language?",
      a: "HTML",
      b: "CSS",
      c: "JavaScript",
      d: "PHP",
      Correct: "a",
    },
    {
      que: "Which of the following is a Scripting language?",
      a: "HTML",
      b: "CSS",
      c: "JavaScript",
      d: "PHP",
      Correct: "c",
    },
      {
        que: "Which of the following is a Styling  language?",
        a: "HTML",
        b: "CSS",
        c: "JavaScript",
        d: "PHP",
        Correct: "b",
      },
      {
      que: "Which of the following is a Different language?",
      a: "HTML",
      b: "CSS",
      c: "JavaScript",
      d: "PHP",
      Correct: "d",
    },
    
    // Rest of the questions...
  ];
  
  let index = 0;
  let total = questions.length;
  let right = 0,
    wrong = 0;
  let data;
  
  const quesBox = document.getElementById("quesBox");
  const optionInputs = document.querySelectorAll(".Options");
  
  const loadQuestion = () => {
    if (index == total) {
      return endQuiz();
    }
    reset();
    data = questions[index];
    quesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
  };
  
  const submitQuiz = () => {
    const ans = getAnswer();
    if (ans === data.Correct) {
      right++;
    } else {
      wrong++;
    }
    index++;
    loadQuestion();
  };
  
  const getAnswer = () => {
    let answer;
    optionInputs.forEach((input) => {
      if (input.checked) {
        answer = input.value;
      }
    });
    return answer;
  };
  
  const reset = () => {
    optionInputs.forEach((input) => {
      input.checked = false;
    });
  };
  
  const endQuiz = () => {
    document.getElementById("box").innerHTML = `
      <h3> Thank you for playing the Quiz</h3>
      <h2> ${right} / ${total} are correct </h2>`;
  };
  
  loadQuestion();
  