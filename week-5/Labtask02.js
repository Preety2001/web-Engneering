// Create the car object
let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
  };
  
  // Define the carInfo function
  function carInfo(carObject) {
    // Extract the properties from the car object
    let { brand, model, year } = carObject;
  
    // Construct the information string
    let infoString = `The ${brand} ${model} was manufactured in ${year}.`;
  
    // Return the information string
    return infoString;
  }
  
  // Example usage:
  console.log(carInfo(car)); // Output: 'The Toyota Camry was manufactured in 2022.'
  