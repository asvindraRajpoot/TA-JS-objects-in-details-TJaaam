//- Without Object

let title='what is capital of india';
let options=['Rath','Delhi','Kolkata','Mumbai'];
let correctOption=1;


function isAnswerCorrect(index){

    if(index===correctOption){
        return true;
    }else{
        return false;
    }
}

function getCorrectAnswer(){
    return options[correctOption];
}



//Organize using object
function createObj(title,options,correctAnswerIndex){
let quiz={};
    quiz.title=title;
    quiz.options=options;
    quiz.correctOption=correctAnswerIndex,
    quiz.isAnswerCorrect=(index)=>{
        if(index===quiz.correctOption){
            return true;
        }else{
            return false;
        }
    };
    quiz.getCorrectAnswer=()=>{
       
            return this.options[this.correctOption];
    };
    

return quiz;
}
createObj('Where is the capital of Jordan',['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);
const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };

