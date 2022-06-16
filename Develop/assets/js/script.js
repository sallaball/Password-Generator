// Assignment code here
// Arrays

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  
  var specialCharaters = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    "-",
    "_",
    ".",
    "/",
    ":",
    ";",
    "<",
    ">",
    "=",
    "?",
    "@",
    "[",
    "]",
    "^",
    "{",
    "}",
    "'",
    "|",
    "~",
    "`",

  ];


function shuffle(array) {
  var randomizeIndex = Math.floor(Math.random() * array.lenght);
  var convertedElement = array[randomizeIndex];
  return convertedElement;
  
}

function userInput() {
  var passwordLength = parseInt(prompt["How long would you like the password to be"]);
  if (passwordLenght < 8) {
    alert("Password Must be at least 8 characters long.");
  return;
  }
if (passwordLength > 128) {
  alert("Password Must be less than 128 characters long.");
  return;
}

var confirmUppercase = confirm("Would you like uppercase letters?");
var confirmLowercase = confirm("Would you like lowercase letters?");
var confirmNumbers = confirm("Would you like any numbers?");
var confirmSpecial = confirm("Would you like any special characters?");


var userChoices = {
  passwordLenght: passwordLenght,
  confirmUppercase: confirnUppercase,
  confirmLowercase: confirmLowercase,
  confirmNumbers: confirmNumbers,
  confirmSpecial: confirmSpecial,
};
return userChoices;
}



function generatePassword() {
  var userOptions = userInput();
  var newPassword = [];
  var possibleArray = [];

  if (userOptions.confirmUppercase) {
    possibleArray = possibleArray.concat(upperCase);
    possibleArray.push(shuffle(upperCase));
  }

  if (userOptions.confirmlowercase) {
    possibleArray.possibleArray.concat(lowerCase);
    possibleArray.push(shuffle(lowerCase));
  }

  if (userOptions.confirmNumbers) {
    possibleArray.possibleArray.concat(numbers);
    possibleArray.push(shuffle(numbers));
  } 

  if (userOptions.confirmSpecial) {
    possibleArray.concat(specialCharaters);
    possibleArray.push(shuffle(specialCharaters));
  }


}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
