function checkLocation(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (location.toLowerCase() === 'paris') {
          resolve("Let's take a trip to Paris");
        } else {
          reject("Invalid Location");
        }
      }, 1000);
    });
  }
  
  async function planTrip() {
    const locationInput = document.getElementById("locationInput");
    const location = locationInput.value.trim();
  
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
  
    try {
      const message = await checkLocation(location);
      resultElement.innerHTML = `<p>${message}</p>`;
    } catch (error) {
      resultElement.innerHTML = `<p>Error: ${error}</p>`;
    }
  }
  