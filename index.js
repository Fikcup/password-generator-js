var chars = "";
var length = 12;
var randomString = [];

function uppercase()
{
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(chars);
}

function lowercase()
{
    chars += "abcdefghijklmnopqrstuvwxyz";
    console.log(chars);
}

function numbers()
{
    chars += "0123456789";
    console.log(chars);
}

function symbols()
{
    chars += "!@#$%^&*()-_+=/?[]:;";
    console.log(chars);
}

function passwordContains()
{
    document.getElementById("uppercase").addEventListener("click", uppercase());
    document.getElementById("lowercase").addEventListener("click", lowercase());
    document.getElementById("numbers").addEventListener("click", numbers());
    document.getElementById("symbols").addEventListener("click", symbols())
}

function generatePassword()
{
    passwordContains();
    for (var i = 0; i < length; i++)
    {
        randomString.push(chars.charAt(Math.floor(Math.random() * chars.length)))
    }
    randomString = randomString.join('');

    var output = document.getElementById('generatedPassword')
    function displayPassword()
    {
        output.innerHTML = randomString.value;
    }

    displayPassword();
    return randomString;
}

document.getElementById("submit").addEventListener("click", function() { generatePassword() });