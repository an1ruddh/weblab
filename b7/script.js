function detectInfection() {
    const virusInput = document.getElementById("virusInput");
    const bloodInput = document.getElementById("bloodInput");
  
    const virusComposition = virusInput.value.toLowerCase();
    const bloodComposition = bloodInput.value.toLowerCase();
  
    const resultElement = document.getElementById("result");
  
    if (isSubsequence(bloodComposition, virusComposition)) {
      resultElement.innerHTML = "<p>POSITIVE</p>";
    } else {
      resultElement.innerHTML = "<p>NEGATIVE</p>";
    }
  }
  
  function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
  
    while (i < str1.length && j < str2.length) {
      if (str1[i] === str2[j]) {
        i++;
        j++;
      } else {
        i++;
      }
    }
  
    return j === str2.length;
  }
  