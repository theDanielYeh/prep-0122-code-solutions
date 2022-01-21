function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var convert = convertHoursToMinutes(2);
console.log('hour into minutes', convert);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('Tofu');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var result = addAndMultiplyBy5(10, 5);
console.log(result);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var answer = multiplyAndDivideBy5(35, 10);
console.log(answer);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var subtract = subtractTwoNumbers(22, 7);
console.log(subtract);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

var circumference = getCircleCircumference(5);
console.log('circumference =', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullname = getFullName('Elon', 'Musk');
console.log(fullname);

function cube(number) {
  return Math.pow(number, 3);
}

var cubed = cube(5);
console.log(cubed);
