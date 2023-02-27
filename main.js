/*first problem -- 8*/
function DollarsToTenge(dollars) {
  const rate = 449.95;
  const tenge = dollars * rate;
  return tenge;
}

var dollars = prompt("The amount of dollar you would like to convert:")
const tenge = DollarsToTenge(dollars);

console.log(dollars + " USD is equivalent to " + tenge + " KZT")
alert(dollars + " USD is equivalent to " + tenge + " KZT");

/*second problem -- 9*/
function checkNumberSign(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

var number = prompt("Please enter a number to check it's sign:")

console.log(checkNumberSign(number))
alert(checkNumberSign(number))

/*third problem -- 1*/
console.log("Hello, World!\n".repeat(3))
alert("Hello, World!\n".repeat(3))