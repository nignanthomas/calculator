//function for addition
var add = function(number1, number2) {
  return number1 + number2;
};

//function for subtraction
var subtract = function(number1, number2) {
  return number1 - number2;
};

//function for multiplication
var multiply = function(number1, number2) {
  return number1 * number2;
};

//function for division
var divide = function(number1, number2) {
  return number1 / number2;
};


var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));
var result = divide(number1, number2);
alert(result);
