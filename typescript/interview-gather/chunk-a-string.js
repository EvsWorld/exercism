// https://stackoverflow.com/questions/14007479/match-any-combination-of-a-group-of-strings
// https://stackoverflow.com/questions/14262770/javascript-replace-dash-hyphen-with-a-space
// https://stackoverflow.com/questions/7033639/split-large-string-in-n-size-chunks-in-javascript
// https://medium.com/@omergoldberg/algorithms-in-js-selling-stocks-84d24410d23a

// Problem, given renadom strings, convert them to a string seperated
// in groups of 3 or at the end, 2, and seperated by hiphens

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)

  let numbers = S.replace(/[- )(]/g, "")
  numbers = numbers.replace(/-/g, " ")

  console.log(numbers)

  if (numbers.length % 3 === 1) {
    // for 10

    let array2 = numbers.match(/.{1,3}/g)
    console.log(array2)
    let arrayOfThrees = array2.splice(0, array2.length - 2)
     console.log(arrayOfThrees)
    let arrayB = array2.splice(array2.length - 2)
     console.log(arrayB)
    let joinedArrayB = arrayB.join("")
     console.log(joinedArrayB)
    let arrayOfTwos = joinedArrayB.match(/.{1,2}/g)
    console.log(arrayOfTwos)
    let finalArray = [...arrayOfThrees, ...arrayOfTwos]
    console.log(finalArray)
    result = finalArray.join("-")
    console.log(`length ${numbers.length}: ${result}`)
  } else {
    // split it into
    // for 3,6, 12
    let arrayOf3 = numbers.match(/.{1,3}/g)
    console.log(arrayOf3)
    result = arrayOf3.join("-")
    console.log(`length ${numbers.length}: ${result}`)
  }

  console.log(result)
  console.log(`length ${numbers.length}: ${result}`)
  // console.log(typeof result)
  return result
}
const t1 = "4333- 2- 35 2"
const t2 = "03 -8 33 9-"
const t3 = "123456789"
const t4 = "1234567890"
const t5 = "12345678901"
const t6 = "123456789012"
const tests = [
  "1234567890123",
  "4333- 2- 35 2--",
  "033 -8 33 989-",
  "123456789",
  "1234567890",
  "12345678901",
  "123456789012",
]
tests.forEach((test) => solution(test))
//  solution(t1)
//  solution(t2)
// solution(t3)
// solution(t4)
// solution(t4)
// solution(t5)
// solution(t6)

console.log(8 % 3)
console.log(11 % 3)
console.log(10 % 3)
console.log(12 % 3)
console.log(13 % 3)
