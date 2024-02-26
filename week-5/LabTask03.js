
function applyFunction(array, func) {
    
    let resultArray = array.map(func);
  
   
    return resultArray;
  }
  
  
  let numbers = [1, 2, 3];
  let doubleFunction = (x) => x * 2;
  
  console.log(applyFunction(numbers, doubleFunction)); 