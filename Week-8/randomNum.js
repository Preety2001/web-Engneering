const randomNumber = Math.random();
console.log(randomNumber);

function getData() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        console.log("Generated random number:", randomNumber);
        if (randomNumber > 0.5) {
            resolve(randomNumber);
        } else {
            reject(new Error("Random number is less than or equal to 0.5"));
        }
    });
}

// Consuming the Promise
getData();
    .then(data => {
        console.log('Data received:', data);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
    
console.log("i am after promise");