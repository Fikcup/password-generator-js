var chars = "";
var length = 12;
var randomString;

document.getElementById('generatedPassword').innerHTML = "Password";

function uppercase()
{
    if (document.getElementById('uppercase').checked) 
    {
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
}

function lowercase()
{
    if (document.getElementById('lowercase').checked)
    {
        chars += "abcdefghijklmnopqrstuvwxyz";
    }
}

function numbers()
{
    if (document.getElementById('numbers').checked)
    {
        chars += "0123456789";
    }
}

function symbols()
{
    if (document.getElementById('symbols').checked)
    {
        chars += "!@#$%^&*()-_+=/?[]:;";
    }
}

function passwordLen()
{
    length = document.getElementById('passwordLen').value;
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
    randomString = [];

    passwordLen();
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
    chars = "";
    console.log(randomString);
    return randomString;
}

document.getElementById("submit").addEventListener("click", function() { generatePassword() });