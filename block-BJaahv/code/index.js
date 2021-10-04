
// ## Create in all 4 formats

// - [ ] Using function to create object
// - [ ] Using Object.create (prototypal pattern)
// - [ ] Using Pseudoclassical Way
// - [ ] Using Class

// ## Requirements

// Create User (class/function) with the following properties.

// - [ ] properties (data):
//   - [ ] name
//   - [ ] id
//   - [ ] noOfProjects
// - [ ] methods:
//   - [ ] getProjects -> return number of project
//   - [ ] changeName -> accepts one parameter (newName)returns old user name
//   - [ ] incrementProject -> returns updated number of projects
//   - [ ] decrementProject -> returns updated number of projects

//  Using function to create object or Factory Pattern

// function createUser(name,id,noOfProjects){
 
//     let user={};
//     user.name=name;
//     user.id=id;
//     user.noOfProjects=noOfProjects;

//     user.getProjects=function(){
//         return this.noOfProjects;
//     }
//     user.changeName=function(newName){
//         this.name=newName;
//         return this.name;
//     }
//     user.incrementProject=function(value=1){
//       this.noOfProjects=  this.noOfProjects+value;
//         return this.noOfProjects;
//     }   
//     user.decrementProject=function(value=1){
//         this.noOfProjects=  this.noOfProjects-value;
//         return this.noOfProjects;
//     }
//     return user;
    

// }

//Using Object.create (prototypal pattern)

// let userMethods={
//     getProjects:function(){
//         return this.noOfProjects;
//     },
//     changeName:function(newName){
//         this.name=newName;
//         return this.name;
//     },
//     incrementProject:function(value=1){
//       this.noOfProjects=  this.noOfProjects+value;
//         return this.noOfProjects;
//     },   
//     decrementProject:function(value=1){
//         this.noOfProjects=  this.noOfProjects-value;
//         return this.noOfProjects;
//     }
// }

// function createUser(name,id,noOfProjects){
 
//     let user=Object.create(userMethods);
//     user.name=name;
//     user.id=id;
//     user.noOfProjects=noOfProjects;


//     return user;
    

// }
// Using Pseudoclassical Way


// CreateUser.prototype= { 
    
//         getProjects(){
//             return this.noOfProjects;
//         },
//         changeName(newName){
//             this.name=newName;
//             return this.name;
//         },
//         incrementProject(value=1){
//         this.noOfProjects=  this.noOfProjects+value;
//             return this.noOfProjects;
//         },
//         decrementProject(value=1){
//             this.noOfProjects=  this.noOfProjects-value;
//             return this.noOfProjects;
//         }
// }

// function CreateUser(name,id,noOfProjects){
 
   
//     this.name=name;
//     this.id=id;
//     this.noOfProjects=noOfProjects;

    
  
    

// }

// Using Class



class user{
    constructor(name,id,noOfProjects){

        this.name=name;
        this.id=id;
        this.noOfProjects=noOfProjects;

    }
    getProjects(){
        return this.noOfProjects;
    }
    changeName(newName){
        this.name=newName;
        return this.name;
    }
    incrementProject(value=1){
    this.noOfProjects=  this.noOfProjects+value;
        return this.noOfProjects;
    }
    decrementProject(value=1){
        this.noOfProjects=  this.noOfProjects-value;
        return this.noOfProjects;
    }






}

// to create the individual user;

let user1=new user('asvindra',1,40);
let user2= new user('arti',2,50);


//Test for user1
console.group(user1.name);
console.log('name:',user1.name);
console.log('id:',user1.id);
console.log('nOfProjects:',user1.noOfProjects);
console.log('changed Name:',user1.changeName('Asvindra Rajpoot'));
console.log('increment no of Projects:',user1.incrementProject(1));
console.log('increment no of Projects:',user1.decrementProject(1));
console.groupEnd();

//Test for user1
console.group(user2.name);
console.log('name:',user2.name);
console.log('id:',user2.id);
console.log('nOfProjects:',user2.noOfProjects);
console.log('changed Name:',user2.changeName('Arti Rajpoot'));
console.log('increment no of Project:',user2.incrementProject(1));
console.log('increment no of Project:',user2.decrementProject(1));
console.groupEnd();