function generatePassword() {
console.log("Hi");
var length = parseInt(prompt("Choose your password length between 8-128 ?"));
// Number of characters
if (length < 8) {
    alert("Choose a more secure password length!");
    return generatePassword;

};
if (length > 128) {
    alert("No Way you will remember that.");
    return generatePassword;

}
if (isNaN(length)) {
    alert("Pick a number.")
};

var special = confirm("Would you like special characters?");

var numeric = confirm("Would you like numeric characters?");

var lowercase = confirm("Use lowercase letters (a, b, c, etc...)");

var upperCase = confirm("use UPPERCASE LETTERS?");

var passwordOptions = [];

if (special != true && numeric != true && lowercase != true && upper != true) {
    alert("Please choose at least one option.")
}

if (special) {
    passwordOptions = passwordOptions.concat("!", "(", ")", "-", ".", "?", "[", "]", "_", "'", "~", ";", ":", "@", "#", "$", "%", "^", "&", "*", "+", "+");
};

if (numeric) {
    passwordOptions = passwordOptions.concat("1", "2", "3", "4", "5", "6", "7", "8", "9", "0");
};

if (lowercase) {
    passwordOptions = passwordOptions.concat("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z");
}

if (upperCase) {
    passwordOptions = passwordOptions.concat("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z");
}

var buildPassword = [];

for (var i = 0; i < length; i++) {

    var currentOption = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    buildPassword = buildPassword.concat(currentOption);
}

var password = buildPassword.join("");
return password;


};

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener('click', writePassword);


function copyFunction() {
    console.log("Hi!");
    var copyText = document.getElementById("#password");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
};

