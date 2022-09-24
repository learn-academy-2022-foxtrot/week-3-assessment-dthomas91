// ASSESSMENT 3: Coding Practical Questions with Jest

// const { objectExpression, objectTypeAnnotation } = require("@babel/types")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibSequence", () => {
  it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
    expect(fibSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

  
// ReferenceError: fibSequence is not defined
const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

/* Psuedo Code
   1. Create a new const with the name fibSequence
   2. pass (number) into fibSequence
   3.create a new empty array named fib1
   4. create two new variables num1 and num2, give them each a value of 1
   5. create an iteration
   6. create a variable for num3 which is the sum of num1 + num2
   7. push the iteration into the empty array (fib1)
   8. at the end of each iteration, change the value of num1 to become num 2 && 
      num2 to become num3
   9. return the name of the created array
*/



const fibSequence = (number) => {
  let fib1 = []
  let num1 = 1
  let num2 = 1
  
  for (let i = 0; i < number; i++) {
    
    let num3 = num1 + num2
    fib1.push(num1)
    num1 = num2 
    num2 = num3
  }
  return fib1
}



// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

describe("totalStudyTime", () => {
  it("returns an array of the numbers sorted from least to greatest", () => {
    expect(totalStudyTime(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(totalStudyTime(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// ReferenceError: totalStudyTime is not defined

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

/* Psuedo Code
    1. Create a new variable named totalStudyTime
    2. Pass and object into that variable
    3. return the object values from the object and sort from lowest to greatest using .sort((a, b) => a - b)
*/

const totalStudyTime = (object) => {
  return Object.values(object).sort((a, b) => a - b)
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("totalSum", () => {
  it("returns an array of the accumulating sum.", () => {
    expect(totalSum(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(totalSum(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(totalSum(accountTransactions3)).toEqual([])
  })
})


// ReferenceError: totalSum is not defined

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

/* Psuedocode
    1. Create a new function with an array in the parameters
    2. define sum
    3. create an empty array
    4. set up an iteration to go through the length of the array
    5. redefine sum with every iteration to update to sum + the index of the array for that iteration
    6. push the sum of each iteration into the empty array.

*/

const totalSum = (array) => {
  let sum = 0
  let emptyArr = []; 
  
  for (let i = 0; i < array.length; i++) {
    
    sum = sum + array[i]
    emptyArr.push(sum)
      
    
  }
  return emptyArr
}
console.log(totalSum(accountTransactions1))