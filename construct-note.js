// add whatever parameters you deem necessary


const createFrequencyObj = (string) => {
  const obj = {};
  for (let char of string) {
    obj[char]
      ? obj[char] = obj[char] + 1
      : obj[char] = 1
  }
  console.log(obj)
  return obj
}


function constructNote(note, letters) {
  if (letters == '' || note.length > letters.length) {
    console.log(false)
    return false
  }
  if (note == '') {
    console.log(true)
    return true
  }

  const noteObj = createFrequencyObj(note)
  const lettersObj = createFrequencyObj(letters)

}


// function constructNote(note, letters) {
//   if (letters == '' || note.length > letters.length) {
//     console.log(false)
//     return false
//   }
//   if (note == '') {
//     console.log(true)
//     return true
//   }


//   const sortedLetters = letters.split('').sort().join('')
//   const sortedNote = note.split('').sort().join('')

//   let noteIdx = 0;
//   let lettersIdx = 0;

//   while (noteIdx < note.length && lettersIdx < letters.length) {
//     if (sortedNote[noteIdx] == sortedLetters[lettersIdx]) {
//       noteIdx++
//       lettersIdx++
//     } else if (sortedNote[noteIdx] !== sortedLetters[lettersIdx]) {
//       lettersIdx++
//     }
//   }
// }


constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
constructNote('abc', 'abcd') // true
// constructNote('aabbcc', 'bcabcaddff') // true
constructNote('aabbcc', 'aabbccddff') // true


constructNote('aa', '') // false
constructNote('', 'abc') // true
constructNote('fp', 'kkftp') //true
constructNote('calksdjc', 'calc') //false