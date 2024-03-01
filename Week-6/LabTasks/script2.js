function guessNumber() {
    var randomNumber = Math.floor(Math.random() * 10) + 1;
    
    var userInput = document.getElementById("inp");

    
    var userNumber = parseInt(userInput);
       
    if (userNumber === randomNumber) {
        alert("You are right! The number was " + randomNumber);
      } else {
        alert("You are wrong! The correct number was " + randomNumber);
      }

    
  }
  

  