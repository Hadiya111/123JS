let numbers = [1, 2, 3, 4, 5];

let even = numbers.filter(num => num % 2 === 0);

console.log(even); // [2, 4]

// -----------------------------------------------------------------------------------------

let numbes = [1, 2, 3, 4, 5];

let found = numbes.find(num => num > 3);

console.log(found); // 4


// ---------------------------------------------------------------------------------------------------

let number = [1, 2, 3];

number.forEach(num => {
  console.log(num);
});