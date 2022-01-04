var email = document.getElementById("emailInput");
var error = document.getElementById("error");
var button = document.getElementById("submit");
button.addEventListener("click", () => {
    if (email.value == "") {
        email.style.border = "2px solid #FF2965";
        error.textContent = "Oops! Please add your email";
    } else if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
        email.style.border = "2px solid #FF2965";
        error.textContent = "Oops! That doesn't look like an email address";
    }
    else{
        email.style.border = "none";
        error.textContent = "";
    }
});
