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

const titleCased = () => tutorials.map(tutorial =>
tutorial.split(" ").map(
 tutorial => tutorial[0].toUpperCase() + tutorial.slice(1)
).join(' '))

//const titleCased = tutorials.map(function titleCased(tutorial){
 // tutorial.toLowerCase().split(" ")
 // return (tutorial[0].toUpperCase() + tutorial.slice(1))
 // })

  //=> ["What does the this keyword mean?", "What is the Contutorialuctor OO pattern?", "Implementing Blockchain Web API", "The Test Driven Development Workflow", "What is NaN and how Can we Check for it", "What is the difference between stopPropagation and preventDefault?", "Immutable State and Pure Functions", "What is the difference between == and ===?", "What is the difference between event capturing and bubbling?", "What is JSONP?"]
//tutorials => tutorials[0].toUpperCase)
