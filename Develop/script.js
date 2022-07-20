// Assignment code here
var generateBtn = document.querySelector("#generate");

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
