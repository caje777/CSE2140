function makeRandomProblem() {
  var firstNumber, secondNumber;
  var mode = document.getElementById('mode');

  var resultText = document.getElementById('resultText'); 
  var revealedAnswer = document.getElementById('revealedAnswer');
  var revealButton = document.getElementById('revealButton');

  resultText.innerHTML = ''; 
  revealedAnswer.innerHTML = '';
  revealButton.style.display = 'none';
  
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
    chooseSign = '*';
  }

  var problemElement = document.getElementById('problem');
  problemElement.textContent = firstNumber + ' ' + chooseSign + ' ' + secondNumber;
}

function generateProblem() {
  var customProblem = document.getElementById('customProblem').value.trim();
  var resultText = document.getElementById('resultText'); 
  var revealedAnswer = document.getElementById('revealedAnswer');

  resultText.innerHTML = ''; 
  revealedAnswer.innerHTML = '';
  revealButton.style.display = 'none';

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
  var problem = document.getElementById('problem').textContent;
  var answer = document.getElementById('answer').value;
  var result = eval(problem);
  var resultText = document.getElementById('resultText');
  if (parseInt(answer) === result) {
    resultText.innerHTML = 'Correct!';
  } else {
    resultText.innerHTML = 'Incorrect!';
    var revealButton = document.getElementById('revealButton');
    revealButton.style.display = 'block';
    revealButton.addEventListener('click', revealAnswer);
    revealButton.innerHTML = '<br><button style="display: block; margin: 0 auto;">Reveal Answer</button>';
  }
}

function revealAnswer() {
  var problem = document.getElementById('problem').textContent;
  var result = eval(problem);
  var resultText = document.getElementById('resultText');
  var revealedAnswer = document.getElementById('revealedAnswer');
  revealedAnswer.innerHTML = 'The correct Answer was ' + result;
  var revealButton = document.getElementById('revealButton'); 
  revealButton.style.display = 'none';
}
