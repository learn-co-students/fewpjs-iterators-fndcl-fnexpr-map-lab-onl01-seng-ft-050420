const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {return tutorials}
function titleCased() {
 return tutorials.map( title => {
    const splitTitle = title.split(' ')
    const newTitle = []
    for(const word of splitTitle) {
      let splitWord = word.split('')
      splitWord[0] = splitWord[0].toUpperCase() 
      const newWord = splitWord.join('')
      newTitle.push(newWord)
    }
    
    return newTitle.join(' ')
  })
}

// function titleCased(array) {
//   return array.map( title => {
//      const splitTitle = title.split(' ')
//      splitTitle.map ( word => {
//       let splitWord = word.split('')
//       splitWord[0] = splitWord[0].toUpperCase() 
//       const newWord = splitWord.join('')
//       newWord
//       })
     
//    })
//  }