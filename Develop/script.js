// Assignment code here
var generateBtn = document.querySelector("#generate");

// Function that will provide random integer
function randomInteger (min, max) {
  if(!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

// Function will provide random item from our lists
function randomItem(list) {
  return list[randomInteger(list.length)]
}

function generatePassword() {
  // User clicks "Generate Password" button and sees the pop up window with input line
  var userInput = window.prompt("Please provide desired password length")

  var passLength = parseInt(userInput)
  
  // If user adds not a number pop up window with the message appers. We accept number only
  if (isNaN(passLength)) {
    window.alert("Please provide a number")
    return
  }
  
  // We define password length not less than 8 and not more than 128 chars
  if (passLength < 8 || passLength > 128){
    window.alert("Password should be between 8 and 128 characters")
    return
  }
  
  // Password generator asks user if they want to add numbers, symbols, lowercase and uppercase letters
  var userNumber = window.confirm("Do you want numbers in your password?")
  var userSymbol = window.confirm("Do you want symbols in your password?")
  var userLowerCase = window.confirm("Do you want lowercase letters in your password?")
  var userUpperCase = window.confirm("Do you want uppercase letters in your password?")

  // Lists of numbers, symbols, lower and uppercase letters password generator will use to create passwords
  var listOfNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",]
  var listOfSymbols = ["!", "@", "#", "$", "%",]
  var listOfLowerCase = ["a", "b", "c", "d", "e"]
  var listOfUpperCase = []

  // lowercase letters will be transform to uppercase letters 
  for (var i = 0; i < listOfLowerCase.length; i++) {
    listOfUpperCase[i] = listOfLowerCase[i].toLocaleUpperCase()
  }

  var passwordCollector = []

  // User make a choice. If clicks Ok, number or symbol will be added, if Cancel, will be skipped
  if (userNumber === true) {
    passwordCollector.push(listOfNumbers)
  }

  if (userSymbol === true) {
    passwordCollector.push(listOfSymbols)
  }

  if (userLowerCase === true) {
    passwordCollector.push(listOfLowerCase)
  }

  if (userUpperCase === true) {
    passwordCollector.push(listOfUpperCase)
  }

  var generatePassword = ""

  // for loop will print chars, length will be the same as user asked to provide in pass lenght input
  for(var i = 0; i < passLength; i++) {
    var randomList = randomItem(passwordCollector)
    var randomCharacter = randomItem(randomList)
    generatePassword += randomCharacter
  }

  // Return of the result
  return generatePassword
  
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  // Generated password provided in the text area
  if (password) {
    passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
