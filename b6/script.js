const convertWeight = () => {
    const weightInput = document.getElementById("weightInput");
    const weightKg = parseFloat(weightInput.value);
  
    const weightLbs = weightKg * 2.2;
  
    let message;
  
    if (weightLbs > 150) {
      message = "Obese";
    } else if (weightLbs >= 100 && weightLbs <= 150) {
      message = "You are ok";
    } else {
      message = "Underweight";
    }
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Weight: ${weightLbs} Lbs</p><p>Status: ${message}</p>`;
  };
  