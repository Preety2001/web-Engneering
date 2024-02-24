console.log("hello javascript")
var age = 22;
let name="Preety";
console.log(name , age)

let fruits=[];
//push
fruits.push("kiwi");
fruits.push("Strawberry");
fruits.push("watermelon")
fruits.push("chiku")
console.log(fruits)

fruits.push("apple")
console.log(fruits)

//pop -------> removing last element
fruits.pop(fruits);
console.log(fruits)

//shift ----> for removing first element 

fruits.shift();
console.log(fruits)

//unshift ----> add element on zero index
fruits.unshift("Banana");
console.log(fruits)

//concat for combining two arrays as a sum

let a1=["primer","foundation","compact"];
let a2=["eyeliner","Mascara","eyeshadow"];

let combination  = a1.concat(a2);
console.log(combination)

//slice it will add or remove element from an array
let makeup=["foundation","primer","mascara","liner","compact"];
let m2=makeup.slice(1,4);
console.log(m2)

// splice
let m3=makeup.splice(2,3);
console.log(m3)

let findingAnIndex=makeup.indexOf("mascara");
console.log(findingAnIndex)

// class task

function countOccurrences(arr) {
    // Create an empty object to store the counts
    let counts = {};
  
    // Iterate through the array
    for (let num of arr) {
      // If the number is already in the counts object, increment its count
      if (counts[num]) {
        counts[num]++;
      } else {
        // If the number is not in the counts object, initialize its count to 1
        counts[num] = 1;
      }
    }
  
    // Display the counts for each number
    for (let num in counts) {
      console.log(`Number ${num} occurs ${counts[num]} times.`);
    }
  }
  
  // Example array with repeated numbers
  let numbers = [1, 2, 3, 1, 4, 2, 5, 1, 3, 2, 4, 1, 5];
  
  // Call the function with the array
  countOccurrences(numbers);

  //object define

  const person = new Object();
  person[1]=1;
  person[2]=2;
  person[3]=3;
  person[4]=100;
  person[1]++;

 

//object

let obj = {
    name: 'John',
    age: 30,
    gender: 'male'
  };
  
  console.log(Object.keys(obj));
  console.log(Object.values(obj));
  console.log(Object.entries(obj));

  
  
  let newObj = {};
  Object.assign(newObj, obj, { location: 'USA' });
  console.log(newObj); 




