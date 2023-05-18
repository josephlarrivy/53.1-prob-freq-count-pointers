// add whatever parameters you deem necessary

const createFrequencyObj = (string) => {
  const obj = {};
  for (let char of string) {
    obj[char]
      ? obj[char] = obj[char] + 1
      : obj[char] = 1
  }
  // console.log(obj)
  return obj
}




function sameFrequency(numOne, numTwo) {
  const numStringOne = String(numOne)
  const numStringTwo = String(numTwo)

  const numObjOne = createFrequencyObj(numStringOne)
  const numObjTwo = createFrequencyObj(numStringTwo)

  console.log(numObjOne)
  console.log(numObjTwo)


  for (let key in numObjOne) {
    if (!numObjTwo[key]) {
      console.log(false)
      return false
    } else if (numObjOne[key] !== numObjTwo[key]) {
      console.log(false)
      return false
    } else {
      console.log(true)
      return true
    }


    // console.log(key)
    // console.log(numObjTwo[key])
  }


}
















sameFrequency(182, 281)
console.log(true)
console.log('################')
// true

sameFrequency(34, 14)
console.log(false)
console.log('################') 
// false

sameFrequency(3589578, 5879385)
console.log(true)
console.log('################') 
// true

sameFrequency(22, 222)
console.log(false)
console.log('################') 
// false
