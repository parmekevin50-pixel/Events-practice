let form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  // Error elements
  let nameError = document.getElementById("nameError");
  let emailError = document.getElementById("emailError");
  let mobileError = document.getElementById("mobileError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let successMessage = document.getElementById("successMessage");

  // Clear previous messages
  nameError.innerText = "";
  emailError.innerText = "";
  mobileError.innerText = "";
  passwordError.innerText = "";
  confirmPasswordError.innerText = "";
  successMessage.innerText = "";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.innerText = "Name is required";
    isValid = false;
  }

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.innerText = "Email is required";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.innerText = "Enter a valid email";
    isValid = false;
  }

  // Mobile validation
  let mobilePattern = /^[0-9]{10}$/;

  if (!mobilePattern.test(mobile)) {
    mobileError.innerText = "Enter a valid 10-digit mobile number";
    isValid = false;
  }

  // Password validation
  if (password.length < 8) {
    passwordError.innerText = "Password must be at least 8 characters";
    isValid = false;
  }

  // Confirm password validation
  if (confirmPassword === "") {
    confirmPasswordError.innerText = "Please confirm your password";
    isValid = false;
  } else if (password !== confirmPassword) {
    confirmPasswordError.innerText = "Passwords do not match";
    isValid = false;
  }

  // Final result
  if (isValid) {
    successMessage.innerText = "Registration Successful!";

    form.reset();
  }
});
