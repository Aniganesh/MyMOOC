"use strict"

var signupForm = document.getElementById("signup");
var loginForm = document.getElementById("login");



function showLogin() {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    signup
}

function showSignup() {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})