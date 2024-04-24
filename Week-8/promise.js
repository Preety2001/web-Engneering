function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    // Simulating successful completion
    // resolve(data);
    reject("there is no message");
    // Simulating failure
    // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    const data1=getData()
    .then(data => {
    console.log('Data received:', data);
    })
    .catch(error => {
       console.error('Error:', error.message);
       });
    console.log(data1);
    console.log("after promise");



