function makeRandomProblem() {
  var firstNumber, secondNumber;
  var mode = document.getElementById('mode');

  if (mode.value.includes('Basic')) {
    firstNumber = Math.floor((Math.random() * 10) + 1);
    secondNumber = Math.floor((Math.random() * 10) + 1);
    
    if (mode.value.includes('Basic') && mode.value.includes('Subtraction') && firstNumber < secondNumber) {
      var tempnumber = firstNumber;
      firstNumber = secondNumber;
      secondNumber = tempnumber;
    }
  } else {
    firstNumber = Math.floor((Math.random() * 90) + 10);
    secondNumber = Math.floor((Math.random() * 90) + 10);
  }

  var chooseSign;
  if (mode.value.includes('Addition')) {
    chooseSign = '+';
  } else if (mode.value.includes('Subtraction')) {
    chooseSign = '-';
  } else {
    chooseSign = '*'
  }

  var problemElement = document.getElementById('problem');
  problemElement.textContent = firstNumber + ' ' + chooseSign + ' ' + secondNumber;
}

function generateProblem() {
  var customProblem = document.getElementById('customProblem').value.trim();
  if (customProblem) {
    var problemElement = document.getElementById('problem');
    problemElement.textContent = customProblem;
  } else {
    makeRandomProblem();
  }
}

window.onload = function() {
  makeRandomProblem();
  document.getElementById('generateButton').addEventListener('click', generateProblem);

  var form = document.getElementById('form1');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    makeRandomProblem();
  });
  var modeSelect = document.getElementById('mode');
  var customProblemInput = document.getElementById('customProblem');
  
  modeSelect.addEventListener('change', function() {
    if (modeSelect.value === 'Custom') {
      customProblemInput.style.display = 'block';
    } else {
      customProblemInput.style.display = 'none';
      customProblemInput.value = '';
      makeRandomProblem();
    }
  });
};

function checkAnswer() {
  var answer = document.getElementById('answer').value;
  var result = eval(problem);
  var resultMessage = document.getElementById('resultMessage');
  if (parseInt(answer) === result) {
    message('Correct!');
  } else {
    message('Incorrect! The correct answer is ' + result);
  }
  resultText.innerHTML = message + <br><button onclick='revealAnswer()'>Reveal Answer</button>
}

function reavealAnswer() {
  var result = eval(problem);
  var resultMessage = document.getElementById('resultMessage');
  resultMessage.innerHTML = 'The correct Answer was ' + result;
