// We will be creating a quiz app in this section step-by-step. Follow the steps below and complete on by one

// 1. Quiz is a collection of Questions.
// 2. Question will need `Title`, `Options` and `Correct Answer`

// ### Make a Question class with these data and methods:

// DATA:

// - Title of the question
// - Options of the question
// - Correct answer

// METHODS:

// - isCorrect(answer)

// Check if the given answer is correct or not. It will accept one answer and return `true` is the answer is correct otherwise false.

// - getCorrectAnswer()
//   This method will return the correct answer of the question.

// - createUI (this will create the layout of a single question)

// This method will decide how the UI of a question look like. Calling this function should add the UI in the DOM.

// ### Make quiz class with these data and properties

// DATA:

// - allQuestions
//   Collection of Questions. An array with multiple question.
// - activeIndex
//   Index of the active visible question
// - score
//   Total number of correct answer

// METHOD:

// - nextQuestion()
//   This method should get the next question.
// - createUI
//   This will create the ui of the whole app.
// - updateScore
//   This method will update the score.

let root=document.querySelector('.box');
let next=document.querySelector('.next');
let prev=document.querySelector('.prev');
let res=document.querySelector('.res-btn');
let span=document.querySelector('span');

class Question{
    constructor(title,options,correctAnsIndex){
        this.title=title;
        this.options=options;
        this.correctAnsIndex=correctAnsIndex;
    }
  
    isCorrect(answer){
        console.log(this.options[this.correctAnsIndex])
        return answer===this.options[this.correctAnsIndex];
    }
    getCorrectAnswer(){
        return this.options[this.correctAnsIndex];
    }
   
     
}

class Quiz{
    constructor(Questions=[],score=0){
        this.Questions=Questions;
        this.score=score;
        this.activeIndex=0;
    }
    incrementScore(){
        this.score=this.score+1;
    }


    nextQuestion(){
        this.activeIndex=this.activeIndex+1
        this.createUI();    
    }
    prevQuestion(){
        this.activeIndex=this.activeIndex-1
        this.createUI();    
    }
    addQuestion(title,options,correctAnsIndex){
        let question=new Question(title,options,correctAnsIndex);
        this.Questions.push(question);
        console.log(this.Questions);
    }
    handleButton(){
     
        console.log(this.activeIndex,this.Questions.length);
       if(this.activeIndex===0){
           prev.style.display='none'
           next.style.display='flex'
           res.style.display="none"
       }
       else if(this.activeIndex===this.Questions.length-1){
              next.style.display='none'
              prev.style.display='flex'
              res.style.display="flex"
        }
        else{
            next.style.display='flex'
            prev.style.display='flex'
        }
       


    }
    updateScore(){
        let score=0;
        //
        this.score=score+1;
        return this.score;
    }
    createUI(){
        root.innerHTML="";
        console.log(this.activeIndex,this.Questions[0]);
        let activeQuestion=this.Questions[this.activeIndex];
        console.log(activeQuestion.title);
        let qBox=document.createElement('div');
        qBox.classList.add('qbox');
        let h2=document.createElement('h2');
        h2.innerText=activeQuestion.title;
        let ul=document.createElement('ul');
        let op1=document.createElement('div');
        op1.classList.add('q');
        let li1=document.createElement('li');
        li1.innerText=activeQuestion.options[0];
        let check1=document.createElement('input');
        check1.setAttribute('type','checkbox');
        op1.append(check1,li1);

        let op2=document.createElement('div');
        op2.classList.add('q');
        let li2=document.createElement('li');
        li2.innerText=activeQuestion.options[1];
        let check2=document.createElement('input');
        check2.setAttribute('type','checkbox');
        op2.append(check2,li2);

        let op3=document.createElement('div');
        op3.classList.add('q');
        let li3=document.createElement('li');
        li3.innerText=activeQuestion.options[2];
        let check3=document.createElement('input');
        check3.setAttribute('type','checkbox');
        op3.append(check3,li3);

        let op4=document.createElement('div');
        op4.classList.add('q');
        let li4=document.createElement('li');
        li4.innerText=activeQuestion.options[3];
        let check4=document.createElement('input');
        check4.setAttribute('type','checkbox');
        op4.append(check4,li4);
     
        ul.append(op1,op2,op3,op4);
        qBox.append(h2,ul);
        root.append(qBox);
       
        let ans=document.querySelectorAll('input');
      
        this.handleButton();
        ans.forEach(checkbox=>{
            checkbox.addEventListener('click',(event=>{
                console.log(activeQuestion.getCorrectAnswer(),event.target.nextElementSibling.innerText );

                if(checkbox.checked && activeQuestion.options[activeQuestion.correctAnsIndex]===event.target.nextElementSibling.innerText){
                      this.updateScore();
                }else{
                    console.log('ans is not correct');
                }
            }))
        })
     
    }

          
}

let quiz=new Quiz()

quizCollection.forEach((question)=>{
    quiz.addQuestion(
        question.title,question.options,question.correctAnsIndex
    )
})

quiz.createUI();

next.addEventListener('click',quiz.nextQuestion.bind(quiz))
prev.addEventListener('click',quiz.prevQuestion.bind(quiz))
res.addEventListener('click',(event)=>{
    span.innerText=`Score:${quiz.score}`});












