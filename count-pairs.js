// add whatever parameters you deem necessary
function countPairs(array, num) {

  let numPairs = 0

  // for (let i=0; i<array.length; i++) {
  //   for (let k=1; k<array.length; k++) {
  //     if ((array[i] + array[k]) === num) {
  //       // console.log(array[i], array[k], (array[i] + array[k]))
  //       numPairs++
  //       console.log(`Match: ${array[i]} + ${array[k]} = ${num}`)
  //     }
  //   }
    
  // }
  // console.log(numPairs)
  // return numPairs



  for (let i=0; i<array.length; i++) {
    for (let k=i+1; k<array.length; k++) {
      if ((array[i] + array[k]) === num) {
        // console.log(array[i], array[k], (array[i] + array[k]))
        numPairs++
        console.log(`Match: ${array[i]} + ${array[k]} = ${num}`)
      }
    }
    
  }
  console.log(numPairs)
  return numPairs



}











countPairs([3, 1, 5, 4, 2], 6) // 2 (1,5 and 2,4)
console.log(2)
console.log('##############')

countPairs([10, 4, 8, 2, 6, 0], 10) // 3 (2,8, 4,6, 10,0)
console.log(3)
console.log('##############')

countPairs([4, 6, 2, 7], 10) // 1 (4,6)
console.log(1)
console.log('##############')

countPairs([1, 2, 3, 4, 5], 10) // 0
console.log(0)
console.log('##############')

countPairs([1, 2, 3, 4, 5], -3) // 0
console.log(0)
console.log('##############')

countPairs([0, -4], -4) // 1
console.log(1)
console.log('##############')

countPairs([1, 2, 3, 0, -1, -2], 0) // 2
console.log(2)
console.log('##############')
