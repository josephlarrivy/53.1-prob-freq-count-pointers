// add whatever parameters you deem necessary
function isSubsequence(letters, string) {

  let array = []

  for (let char of letters) {
    // console.log(string.indexOf(char))
    array.push(string.indexOf(char))
  }
  
  if (array.length !== letters.length) {
    // console.log('different length')
    console.log(false)
    return false
  }

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      console.log(false)
      return false;
    }
  }
  console.log(true)
  return true;

}












isSubsequence('hello', 'hello world'); 
console.log(true)
console.log('#################')
// true

isSubsequence('sing', 'sting');
console.log(true)
console.log('#################') 
// true

isSubsequence('abc', 'abracadabra');
console.log(true)
console.log('#################') 
// true

isSubsequence('abc', 'acb');
console.log(false)
console.log('#################') 
// false (order matters)

isSubsequence("notasubstring", "banana")
console.log(false)
console.log('#################')
// false

isSubsequence("almost", "almossssss")
console.log(false)
console.log('#################')
// false