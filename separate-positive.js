// add whatever parameters you deem necessary
function separatePositive(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    console.log(arr[left], arr[right])
    if (arr[left] < 0 && arr[right] > 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    if (arr[left] >= 0) {
      left++;
    }

    if (arr[right] <= 0) {
      right--;
    }
  }
  console.log(arr)
  return arr;
}





// let left = 0;
// let right = arr.length - 1;

// if (arr[left] > 0) {

// }

// left++
      // arr[0] = arr[right + 1]
      // console.log(arr)







separatePositive([2, -1, -3, 6, -8, 10])
console.log([2, 10, 6, -3, -1, -8])
console.log('##################')
// [2, 10, 6, -3, -1, -8]











separatePositive([5, 10, -15, 20, 25])
console.log([5, 10, 25, 20, -15])
console.log('##################')
// [5, 10, 25, 20, -15]









separatePositive([-5, 5])
console.log([5, -5])
console.log('##################')
// [5, -5]









separatePositive([1, 2, 3])
console.log([1, 2, 3])
console.log('##################')
// [1, 2, 3]



separatePositive([-3, 10, -40, 7, -25, 1, 2, 3])