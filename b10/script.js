window.addEventListener('DOMContentLoaded', function() {
    let visitorCount = localStorage.getItem('visitorCount');
  
    if (visitorCount === null) {
      visitorCount = 0;
    }
  
    visitorCount++;
    document.getElementById('visitorCount').textContent = visitorCount;
  
    localStorage.setItem('visitorCount', visitorCount);
  });
  