function makeProblem() {
  var firstNumber = Math.floor((Math.random() * 10) + 1);
  var secondNumber = Math.floor((Math.random() * 10) + 1);
  var chooseSign = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  var problemElement = document.getElementById('problem');
  problemElement.textContent = firstNumber + ' ' + chooseSign + ' ' + secondNumber;
}

window.onload = function() {
  makeProblem();

  var form = document.getElementById('form1');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    makeProblem(); // Call makeProblem() when the form is submitted
  });
};
