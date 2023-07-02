function bookFlight() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
     
        const bookingRef = "FL123456";
        resolve(bookingRef);
      
      }, 2000);
    });
  }
  
  function bookHotel(bookingRef) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (bookingRef) {
         
          const confirmationCode = "HOTEL789";
          resolve(confirmationCode);
        } else {
          reject("Invalid flight booking reference");
        }
      }, 2000);
    });
  }
  
  async function book() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
  
    try {
      const flightBookingRef = await bookFlight();
      resultElement.innerHTML += "<p>Flight booked successfully. Booking reference: " + flightBookingRef + "</p>";
  
      const hotelConfirmationCode = await bookHotel(flightBookingRef);
      resultElement.innerHTML += "<p>Hotel booked successfully. Confirmation code: " + hotelConfirmationCode + "</p>";
    } catch (error) {
      resultElement.innerHTML = "<p>Error: " + error + "</p>";
    }
  }
  