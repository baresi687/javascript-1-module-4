// Filter method

// If you want to filter the data displayed to a user,
// you can use the filter method.
// The filter method is used to create a new array from an existing
// array that the filter method is called on.
//


// The filter method takes a function as an argument. This function receives each item in the array as an argument.
// If the function returns true, the item is added to the new array.

const numbers = [3, 4, 6, 77, 75];
console.log("Before:", numbers);
const filteredNumbers = numbers.filter(filterNumbers);

function filterNumbers (numbers) {
  if (numbers > 5) {
    return true
  }
}

console.log("After:", filteredNumbers);

// Example 2
// get even numbers

const filteredNumbersTwo = numbers.filter((numbers) => {
  if (numbers % 2 === 0) {
    return true
  }
});

/*function filterNumberTwo (numbers) {
  if (numbers % 2 === 0) {
    return true
  }
}*/

console.log(filteredNumbersTwo)