
let counts = {};


let numbers = [1, 2, 3, 1, 4, 2, 5, 1, 3, 2, 4, 1, 5];
//let numbers=["kiwi","kiwi","apple","mango","apple"];

for (let num of numbers) {

  if (counts[num]) {
    counts[num]++;
  } else {
    
    counts[num] = 1;
  }
}
for (let num in counts) {
  console.log(`${num} is ${counts[num]} times.`);
}


let counts = {};

let numbers = [1, 2, 3, 1, 4, 2, 5, 1, 3, 2, 4, 1, 5];
//let numbers=["kiwi","kiwi","apple","mango","apple"];

for (let id of numbers) {
  // If the ID is already in the counts object, increment its count
  if (counts[id]) {
    counts[id]++;
  } else {
    // If the ID is not in the counts object, initialize its count to 1
    counts[id] = 1;
  }
}

for (let id in counts) {
  console.log(`ID ${id} is ${counts[id]} times.`);
}
