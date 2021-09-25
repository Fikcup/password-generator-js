var chars = "";
var length = 12;
var randomString;

document.getElementById('generatedPassword').innerHTML = "Password";

// Evaluates uppercase check
function uppercase() {
    if (document.getElementById('uppercase').checked) {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
}

// Evaluates lowercase check
function lowercase()
{
    if (document.getElementById('lowercase').checked) {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
}


// Evaluates number check
function numbers()
{
    if (document.getElementById('numbers').checked) {
        chars += "0123456789";
    }
}

// Evaluates symbol check
function symbols()
{
    if (document.getElementById('symbols').checked) {
        chars += "!@#$%^&*()-_+=/?[]:;";
    }
}

// Evaluates password length slider
function passwordLen() {
    length = document.getElementById('passwordLen').value;
}

// Adds event listeners to execute functions
function passwordContains() {
    document.getElementById("uppercase").addEventListener("click", uppercase());
    document.getElementById("lowercase").addEventListener("click", lowercase());
    document.getElementById("numbers").addEventListener("click", numbers());
    document.getElementById("symbols").addEventListener("click", symbols())
}

// Generates password
function generatePassword() {
    // Resets chars and randomString
    function reset() {
        chars = "";
    }

    // Empty array for random password generation
    randomString = [];

    // Executes check for password contents and length
    passwordLen();
    passwordContains();

    // Iterates through array of possible content to produce password
    for (var i = 0; i < length; i++) {
        randomString.push(chars.charAt(Math.floor(Math.random() * chars.length)))
    }
    randomString = randomString.join('');

    // Outputs password to the screen
    var output = document.getElementById('generatedPassword')
    function displayPassword() {
        output.innerHTML = randomString;
        reset();
    }
    displayPassword();
}

// Add event listener to execute generatePassword
document.getElementById("submit").addEventListener("click", function() { generatePassword() });