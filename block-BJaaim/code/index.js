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



class Question{
    constructor(title,options,correctAns){
        this.title=title;
        this.options=options;
        this.correctAns=correctAns;
    }
  
    isCorrect(answer){
        return answer===this.correctAns;
    }
    getCorrectAnswer(){
        return this.correctAns;
    }
    clickHandler(event){
        let score=0;
        let state= event.target.checked;
        let value= event.target.nextElementSibling.innerText;
          
        console.log(value,getCorrectAnswer());
        if(state && value === question1.getCorrectAnswer()){
            score++;
            span.innerText=`Score:${score}`;
            console.log('ans is correct');
        }else{
            console.log('Answer is not correct');
        }
    
        }

    createUI(){
        console.log('it is one UI')
        let qBox=document.createElement('div');
        qBox.innerHTML="";
        qBox.classList.add('qbox');
        let h2=document.createElement('h2');
        h2.innerText=this.title;
        let ul=document.createElement('ul');
        let op1=document.createElement('div');
        op1.classList.add('q');
        let li1=document.createElement('li');
        li1.innerText=this.options[0];
        let check1=document.createElement('input');
        check1.setAttribute('type','checkbox');
        op1.append(check1,li1);

        let op2=document.createElement('div');
        op2.classList.add('q');
        let li2=document.createElement('li');
        li2.innerText=this.options[1];
        let check2=document.createElement('input');
        check2.setAttribute('type','checkbox');
        op2.append(check2,li2);

        let op3=document.createElement('div');
        op3.classList.add('q');
        let li3=document.createElement('li');
        li3.innerText=this.options[2];
        let check3=document.createElement('input');
        check3.setAttribute('type','checkbox');
        op3.append(check3,li3);

        let op4=document.createElement('div');
        op4.classList.add('q');
        let li4=document.createElement('li');
        li4.innerText=this.options[3];
        let check4=document.createElement('input');
        check4.setAttribute('type','checkbox');
        op4.append(check4,li4);
     
        ul.append(op1,op2,op3,op4);
        qBox.append(h2,ul);
        root.append(qBox);
        let ans=document.querySelectorAll('input');
        let span=document.querySelector('span');
        ans.forEach(checkbox=>{
            checkbox.addEventListener('click',this.clickHandler);
        })
    }
            
}

class Quiz{
    constructor(allQuestions=[],activeIndex=0,score=0){
        this.allQuestions=allQuestions;
        this.activeIndex=activeIndex;
        this.score=score;
    }
    nextQuestion(){

      (this.allQuestions[this.activeIndex+1]).createUI();
    }

    createUI(){
      
        console.log('its whole UI')
        let question1=new Question('What is capital of India?',['Delhi','Mumbai','Kolkata','Banglore'],'Delhi');
        let question2=new Question('What is capital of UP?',['Delhi','Mumbai','Kolkata','Lucknow'],'Lucknow');
        this.allQuestions.push(question1);
        this.allQuestions.push(question2);
        this.allQuestions.forEach(ques=>{

            
            ques.createUI();
        })
        let next=document.createElement('button');
         next.innerText='Next';
        
         root.append(next);


    }
    updateScore(){
      let updatedScore=0;
    
    }
}

let quiz=new Quiz()
quiz.createUI();
let nextBtn=document.querySelector('button');
function nextHandler(){

    root.innerHTML=""
    quiz.createUI();
    quiz.nextQuestion();
}
nextBtn.addEventListener('click',nextHandler);












