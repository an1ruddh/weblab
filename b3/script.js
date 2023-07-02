function add(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const sum = a + b;
        resolve(sum);
      }, 1000);
    });
  }
  
  function subtract(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const difference = a - b;
        resolve(difference);
      }, 1000);
    });
  }
  
  function multiply(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = a * b;
        resolve(product);
      }, 1000);
    });
  }
  
  function divide(a, b) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (b !== 0) {
          const quotient = a / b;
          resolve(quotient);
        } else {
          reject("Division by zero is not allowed.");
        }
      }, 1000);
    });
  }
  
  async function performOperations() {
    try {
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = "";
  
      const a = 10;
      const b = 5;
  
      const sum = await add(a, b);
      resultElement.innerHTML += `<p>Sum: ${sum}</p>`;
  
      const difference = await subtract(a, b);
      resultElement.innerHTML += `<p>Difference: ${difference}</p>`;
  
      const product = await multiply(a, b);
      resultElement.innerHTML += `<p>Product: ${product}</p>`;
  
      const quotient = await divide(a, b);
      resultElement.innerHTML += `<p>Quotient: ${quotient}</p>`;
    } catch (error) {
      console.error(error);
    }
  }
  
  performOperations();
  