"use strict"

var signupRadio = document.getElementById("signupRadio");
var loginRadio = document.getElementById("loginRadio");
var signupForm = document.getElementById("signup");
var loginForm = document.getElementById("login");
var loginLabel = document.getElementById("loginLabel");
var signupLabel = document.getElementById("signupLabel");
var choice = document.getElementById("login-signup-choice");

loginLabel.addEventListener("click", showLogin());

function showLogin() {
    signupRadio.checked = false;
    loginRadio.checked = true;
    loginForm.style.display = "block";
    signupForm.style.display = "none";
}

signupLabel.addEventListener("click", showSignup());

function showSignup() {
    loginRadio.checked = false;
    signupRadio.checked = true;
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    signupLabel.style['border-bottom'] = "3px solid gray";
    signupLabel.style['border-right'] = "1px solid gray";
    loginLabel.style["border"] = "none";
}
if (signupRadio.checked) {
    showSignup();
} else {
    showLogin();
}