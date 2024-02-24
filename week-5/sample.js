function toggleBulb() {
    var bulb = document.getElementById('bulb');
    if (bulb.style.backgroundColor === 'yellow') {
      // Turn off the bulb
      bulb.style.backgroundColor = 'gray';
    } else {
      // Turn on the bulb
      bulb.style.backgroundColor = 'yellow';
    }
  }
  