/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
  // add code here
  let obj={}
  obj.name=name;
  obj.age=age;
  return obj;
}

var vicky = makePerson('Vicky', 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
  greet:function(){
    console.log('hello');
  }
};

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
  // add code here
  let obj=Object.create(greetMethod);
  obj.name=name;
  obj.age=age;
  return obj;
}
let greetMethod={
  greet:function(){
 
  console.log('hello');
},
  introduce:function(){
    console.log('Hi, my name is Sandra')
  }
}


var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/

// add code here


// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
PersonConstructor.prototype={
  greet:function(){
    console.log('hello');
  }
}


function PersonConstructor() {
  // add code here
  
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/
PersonFromConstructor.prototype={
  greet:function(){
    console.log('hello');
  },
  introduce:function(){
    console.log('Hi, my name is Sandra')
  }

}

function PersonFromConstructor(name, age) {
  // 
  this.name=name;
  this.age=age;
}

var mike = new PersonFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
// add code here

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
  constructor() {
    // add code here
  }

   greet(){
     console.log('hello');
   }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

// add code here
class DeveloperClass {
  constructor(name,num) {
    // add code here
    this.name=name;
    this.num=num;
  }

  introduce(){
     console.log(`Hello World, my name is ${this.name}`);
   }
}

// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/



class UserFactory {
  constructor(name, score){
  
  this.type = 'User';
  this.name = name;
  this.score = score;
  
  } 
  sayType () {
    console.log('I am a ' + this.type);
  }

}

// var adminFunctionStore ={
//   sayType: function () {
//     console.log('I am a ' + this.type);
//   },
//   sharePublicMessage:function(){
//     console.log(`Welcome users`)
//   }

// }
/* Put code here */;

class AdminFactory extends UserFactory {
  constructor(name, score){
    super(name,score);
    this.type = 'Admin';

  }sharePublicMessage(){
    console.log( `Welcome users`);
  } 

  
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"
