function makeProblem() {
  var firstNumber, secondNumber;

  if (mode.value.includes('Basic')) {
    firstNumber = Math.floor((Math.random() * 10) + 1);
    secondNumber = Math.floor((Math.random() * 10) + 1);
  } else {
    firstNumber = Math.floor((Math.random() * 90) + 10);
    secondNumber = Math.floor((Math.random() * 90) + 10);
  }
  
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

window.onload = function() {
  makeProblem();

  var form = document.getElementById('form1');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    makeProblem();
  });
};

function checkAnswer() {
  var problem = document.getElementById('problem').textContent;
  var answer = document.getElementById('answer').value;
  var result = eval(problem);
  if (parseInt(answer) === result) {
    alert('Correct!');
  } else {
    alert('Incorrect! The correct answer is ' + result);
  }
}
