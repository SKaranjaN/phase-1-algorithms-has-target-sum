function hasTargetSum(array, target) {
  // Write your algorithm here
  const newArray = new Set();
  for (const num of array) {
    const newNumber = target - num;
    if (newArray.has(newNumber)) {
      return true;
    } else {
      newArray.add(num);
    }
  }
  return false;
}
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));
console.log(hasTargetSum([1, 2, 5], 4));
console.log(hasTargetSum([-7, 10, 4, 8], 3));
console.log(hasTargetSum([1, 2, 3, 4], 5));
console.log(hasTargetSum([2, 2, 3, 3], 4));
console.log(hasTargetSum([4], 4));
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  Write a function that takes two arguments, that is, an array of integers and a target integer.
  If a pair of numbers are the same in the array, then the function should return as true.
  Inside the function we'll create an iteration and a loop statement
  that will return whether true or false depending on our condition.


*/

/*
  Add written explanation of your solution here
  hasTargetSum function takes the two arguments.
Inside the function we declare and assign a new variable "newArray" the .set() method that will store in the new value.

We then create an iteration condition that will check through the array to check whether there's a number in the array that will match the target.
Inside the iterator we declare and assign a variable "newNumber" the value of the target minus the argument of the number.
Inside the iterator we have a loop condition that has the has() method which checks whether the newNumber matches any number in the set array and return true if it finds the condition as true and false if it finds the statement as false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
