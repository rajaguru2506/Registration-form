const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

function validateForm() {

    let valid = true;

    // Name Validation
    if (nameInput.value.trim() === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        document.getElementById("emailError").textContent = "Enter a valid email address";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password Validation
    if (passwordInput.value.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Enable/Disable Button
    submitBtn.disabled = !valid;
}

// Real-time Validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// Form Submission
document.getElementById("registerForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("You have successfully registered! Thank you for registering. We will contact you soon.");
});