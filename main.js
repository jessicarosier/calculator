let calcButtons = $(".num-button");
let operatorButtons = $(".op-button");
let clearButton = $("#clear");
let equalButton = $("#equal");
let buttonValue = "";
let leftValue = "";
let rightValue = "";
let leftOperand = "";
let operator = "";
let rightOperand = "";
let windowOne = $("#window1");
let windowTwo = $("#window2");
let windowThree = $("#window3");
let answerWindow = $("h1");

//displays the operand and operators in their proper windows on the screen
function renderOperations() {
  windowOne.html(leftOperand);
  windowTwo.html(operator);
  windowThree.html(rightOperand);
}

//when calcbuttons are clicked, appends numbers and stores in a variable to be displayed in calc windows
//appends and displays left number unless the operatorButton has been clicked, then appends and displays right number
calcButtons.on(`click`, function (event) {
  event.preventDefault();
  if (operator === "") {
    leftValue = parseFloat(this.innerText);
    leftOperand += leftValue;
  } else if (operator !== "") {
    rightValue = parseFloat(this.innerText);
    rightOperand += rightValue;
  }
  renderOperations();
});

operatorButtons.on(`click`, function (event) {
  event.preventDefault();
  buttonValue = $(this).text();
  operator = buttonValue;
  renderOperations();
});

//reload the page (clears the input from calculator windows to restart operations)
clearButton.on(`click`, function (event) {
  location.reload();
});

//performs the math operations when the equals sign is clicked
equalButton.on(`click`, function (event) {
  let results = "";

  if (operator === "+") {
    results = parseFloat(leftOperand) + parseFloat(rightOperand);
  }
  if (operator === "-") {
    results = parseFloat(leftOperand) - parseFloat(rightOperand);
  }
  if (operator === "*") {
    results = parseFloat(leftOperand) * parseFloat(rightOperand);
  }
  if (operator === "/") {
    results = parseFloat(leftOperand) / parseFloat(rightOperand);
  }

  answerWindow.html(parseFloat(results)).css("color", "blue");
});
