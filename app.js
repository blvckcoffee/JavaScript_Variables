console.log('Hello World!\n==========\n')
console.log(
  'Follow the steps in the README.md file to complete the exercises:\n==========\n'
)

// Exercise 1

const FIRST_NAME = 'Joe'
let lastName = 'Johnson'
var age = 31

// Exercise 2

//let fullName = FIRST_NAME + ' ' + lastName
//console.log(fullName)
let fullName = `${FIRST_NAME} ${lastName}`
console.log(fullName)

// Exercise 3

let city = 'Birmingham, AL'
let pastime = 'long distance running'
let myStory = `Hello, everyone. My name is ${fullName}. I live in ${city}. I enjoy ${pastime}, reading, and spending time with my wife.`
console.log(myStory)
