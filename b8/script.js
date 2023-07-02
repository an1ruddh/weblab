function validateEmail() {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();
  
    const resultElement = document.getElementById("result");
  
    if (isValidEmail(email)) {
      resultElement.innerHTML = "<p>Email is valid</p>";
    } else {
      resultElement.innerHTML = "<p>Email is invalid</p>";
    }
  }
  
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  