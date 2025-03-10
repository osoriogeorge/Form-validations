document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    let valid = true;

    if (!validateEmail()) valid = false;
    if (!validateCountry()) valid = false;
    if (!validatePostalCode()) valid = false;
    if (!validatePassword()) valid = false;

    if (valid) {
      showSuccessMessage();
      event.preventDefault();
    } else {
      event.preventDefault();
    }
  });

document.getElementById("email").addEventListener("input", validateEmail);
document.getElementById("country").addEventListener("change", validateCountry);
document
  .getElementById("postal_code")
  .addEventListener("input", validatePostalCode);
document.getElementById("password").addEventListener("input", validatePassword);
document
  .getElementById("confirm_password")
  .addEventListener("input", validatePassword);

function validateEmail() {
  const email = document.getElementById("email").value;
  const emailError = document.getElementById("emailError");

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailError.textContent = "Please enter a valid email.";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validateCountry() {
  const country = document.getElementById("country").value;
  const countryError = document.getElementById("countryError");

  if (country === "") {
    countryError.textContent = "Please select your country.";
    return false;
  } else {
    countryError.textContent = "";
    return true;
  }
}

function validatePostalCode() {
  const postalCode = document.getElementById("postal_code").value;
  const postalCodeError = document.getElementById("postalCodeError");

  if (!postalCode.match(/^[0-9]+$/)) {
    postalCodeError.textContent =
      "Please enter a valid postal code (numbers only).";
    return false;
  } else {
    postalCodeError.textContent = "";
    return true;
  }
}

function validatePassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

  let valid = true;

  if (
    password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    passwordError.textContent =
      "Password must be at least 8 characters and include uppercase, lowercase, and a number.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (password !== confirmPassword) {
    confirmPasswordError.textContent = "Passwords do not match.";
    valid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  return valid;
}

function showSuccessMessage() {
  const successMessage = document.createElement("div");
  successMessage.textContent = "Form submitted successfully!";
  successMessage.style.color = "green";
  successMessage.style.marginTop = "10px";
  successMessage.style.fontWeight = "bold";

  const form = document.getElementById("registrationForm");
  form.appendChild(successMessage);

  form.reset();

  setTimeout(() => {
    successMessage.remove();
  }, 5000);
}
