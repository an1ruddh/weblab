function getUserLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          displayLocation(latitude, longitude);
        },
        function (error) {
          console.log(error);
          displayError('Error retrieving location.');
        }
      );
    } else {
      displayError('Geolocation is not supported by your browser.');
    }
  }
  
  function displayLocation(latitude, longitude) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>Latitude: ${latitude}</p><p>Longitude: ${longitude}</p>`;
  }
  
  function displayError(message) {
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<p>${message}</p>`;
  }
  