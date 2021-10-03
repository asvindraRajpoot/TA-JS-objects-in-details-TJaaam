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
function createObj(){
let quiz={
    title:'what is capital of india',
    options:['Rath','Delhi','Kolkata','Mumbai'],
    correctOption:1,
    isAnswerCorrect:(index)=>{
        if(index===this.correctOption){
            return true;
        }else{
            return false;
        }
    },
    getCorrectAnswer:()=>{
       
            return options[correctOption];
    }
    
}
return quiz;
}
createObj();
const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };

