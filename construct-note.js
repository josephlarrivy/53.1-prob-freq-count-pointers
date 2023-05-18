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

  for (let noteKey in noteObj) {
    for (let lettersKey in lettersObj) {
      if (noteKey === lettersKey) {
        if (noteObj[noteKey] === lettersObj[lettersKey]) {
          console.log(true)
          return true
        } else {
          console.log(false)
          return false
        }
      }
    }
  }

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
console.log(false)
console.log('############')

// constructNote('abc', 'dcba') // true
constructNote('abc', 'abcd') // true
console.log(true)
console.log('############')

// constructNote('aabbcc', 'bcabcaddff') // true
constructNote('aabbcc', 'aabbccddff') // true
console.log(true)
console.log('############')




constructNote('aa', '') // false
console.log(false)
console.log('############')


constructNote('', 'abc') // true
console.log(true)
console.log('############')

constructNote('fp', 'kkftp') //true
console.log(true)
console.log('############')

constructNote('calksdjc', 'calc') //false
console.log(false)
console.log('############')
