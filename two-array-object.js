// add whatever parameters you deem necessary
function twoArrayObject(arrOne, arrTwo) {

  const obj = {}
  for (let i=0; i<arrOne.length; i++) {
    if (i<arrTwo.length) {
      obj[arrOne[i]] = arrTwo[i] 
    } else {
      obj[arrOne[i]] = null
    }
  }
  console.log(obj)
  return obj
}













twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])
// {'a': 1, 'b': 2, 'c': 3, 'd': null}

twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])
// {'a': 1, 'b': 2, 'c': 3}

twoArrayObject(['x', 'y', 'z'], [1, 2])
// {'x': 1, 'y': 2, 'z': null}