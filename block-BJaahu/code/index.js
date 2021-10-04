// ### Create the object using the following ways

// For each different ways of creating object write different solutions.

// - Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
// - Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
// - Create using class
// - Write test by creating two objects also test both methods.



// - Data:
//   - `title` (title of the question)
//   - `options` (array of options)
//   - `correctAnswerIndex` (index of the correct option)
// - Methods:
//   - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
//   - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

//Factory  pattern 

// function createQuiz(title,options,correctAnswerIndex){

//     let quiz={};
//     quiz.title=title;
//     quiz.options=options;
//     quiz.correctAnswerIndex=correctAnswerIndex;

//     quiz.isAnswerCorrect=function(index){
//         return index===quiz.correctAnswerIndex;
//     };
//     quiz.getCorrectAnswer=function(){
//         return quiz.options[quiz.correctAnswerIndex];
//     }

//     return quiz;
// }

// let firstQuestion =  createQuiz(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion =  createQuiz(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );


//Prototyple pattern
// let quizMethods={

//     isAnswerCorrect:function(index){
//         return index===this.correctAnswerIndex;
//     },
//     getCorrectAnswer:function(){
//         return this.options[this.correctAnswerIndex];
//     }

// }

// function createQuiz(title,options,correctAnswerIndex){

//     let quiz=Object.create(quizMethods);
//     quiz.title=title;
//     quiz.options=options;
//     quiz.correctAnswerIndex=correctAnswerIndex;

 

//     return quiz;
// }


//Pseudoclassical Pattern


// function CreateQuiz(title,options,correctAnswerIndex){

  
//     this.title=title;
//     this.options=options;
//     this.correctAnswerIndex=correctAnswerIndex;

 

 
// }
//  CreateQuiz.prototype={
//         isAnswerCorrect:function(index){
//             return index===this.correctAnswerIndex;
//         },
//         getCorrectAnswer:function(){
//             return this.options[this.correctAnswerIndex];
//         }
//     }


//class pattern
class Quiz{


    constructor(title,options,correctAnswerIndex){

  
        this.title=title;
        this.options=options;
        this.correctAnswerIndex=correctAnswerIndex;
    }
    isAnswerCorrect(index){
        return index===this.correctAnswerIndex;
    }
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex];
    }


}
 

 


let firstQuestion = new Quiz(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion =  new Quiz(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );



  //Test for Book1
  console.group(firstQuestion.title);
  console.log(firstQuestion.title);
  console.log(firstQuestion.options);
  console.log(firstQuestion.correctAnswerIndex);
  console.log(firstQuestion.isAnswerCorrect(1));
  console.log(firstQuestion.getCorrectAnswer());
  console.groupEnd();

    //Test for Book2
    console.group(secondQuestion.title);
    console.log(secondQuestion.title);
    console.log(secondQuestion.options);
    console.log(secondQuestion.correctAnswerIndex);
    console.log(secondQuestion.isAnswerCorrect(1));
    console.log(secondQuestion.getCorrectAnswer());
    console.groupEnd();