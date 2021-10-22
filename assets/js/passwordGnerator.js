var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var str;
function formValidation() {
  var up = document.getElementById("uppercase").checked;
  var low = document.getElementById("lowercase").checked;
  var spl = document.getElementById("symbols").checked;
  var num = document.getElementById("numbers").checked;
  str = "";
  if (up) {
    str += uppercase;
  }
  if (low) {
    str += lowercase;
  }
  if (spl) {
    str += specialCharacters;
  }
  if (num) {
    str += numbers;
  }
}

function generatePassword() {
    var finalpassword = "";
  document.getElementById("generatedPassword").value = "";
  var passwordLength = document.getElementById("length").value;
  console.log("password length", passwordLength);
  formValidation();
  var len = str.length;
  console.log("str", len);
  for (i = 0; i < passwordLength; i++) {
    finalpassword += str.charAt(Math.random() * len);
  }
  document.getElementById("generatedPassword").value = finalpassword;
}
