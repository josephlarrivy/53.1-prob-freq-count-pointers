// add whatever parameters you deem necessary
function averagePair(array, target) {
  if (array.length === 0) {
    console.log(false)
    return false
  }

  let left = 0;
  let right = array.length - 1;

  // console.log(array)
  // console.log(array[left])
  // console.log(array[right])
  // console.log((array[left] + array[right])/2)
  // console.log(target)

  let average = (array[left] + array[right]) / 2

  while (left < right) {
    if (average === target) {
      console.log(true);
      return true;
    } else if (average > target) {
      right--;
    } else if (average < target) {
      left++;
    }
    average = (array[left] + array[right]) / 2;
  }

  console.log(false)
  return false
}






averagePair([2, 3], 2.5); // true
console.log(true)
console.log('##########')

averagePair([1, 2, 3], 2.5); // true
console.log(true)
console.log('##########')

averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
console.log(true)
console.log('##########')

averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
console.log(false)
console.log('##########')

averagePair([], 4); // false
console.log(false)
console.log('##########')

averagePair([1, 2, 5, 6, 7], 6.5); // true
console.log(true)
console.log('##########')


averagePair([1, 2, 5, 6, 7, 9, 11, 99], 6.5); // true
console.log(true)
console.log('##########')