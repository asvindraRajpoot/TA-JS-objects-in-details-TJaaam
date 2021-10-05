// # Inheritance

// Convert the below requirements into inheritance using:

// - Pseudoclassical Pattern
// - Class Pattern

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`






// - Pseudoclassical Pattern


CreateAnimal.prototype={

    eat:function(){
       return  `I live in ${this.location} and I can eat`
    },
    changeLocation: function(newLocation){
        this.location=newLocation;
        return this.location;

    },
    summary:function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs}`
    }



}

function CreateAnimal(location,noOfLegs){

    
    this.location=location;
    this.noOfLegs=noOfLegs;
    
}


///////////

//for dog

CreateAnimalDog.prototype={

    bark:function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function (newName){
        this.name=newName;
        return this.name;
    },
    changeColor:function(newColor){
        this.color=newColor;
        return this.color;
    },
    summary:function(){
        return  `I am ${this.name} and I am of ${this.color} color. I can also bark`
    }


}
function CreateAnimalDog(location,noOfLegs,name,color){

    CreateAnimal.call(this,location,noOfLegs);
    this.name=name;
    this.color=color;
    
}
Object.setPrototypeOf(CreateAnimalDog.prototype,CreateAnimal.prototype);


////////////////////////////////////////

//for Cat
CreateAnimalCat.prototype={

    meow:function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName: function(newName){
        this.name=newName;
        return this.name;
    },
    changeColorOfEyes:function(newColor){
        this.colorOfEyes=newColor;
        return this.colorOfEyes;
    },
    summary:function(){
        return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }


}

function CreateAnimalCat(location,noOfLegs,name,colorOfEyes){

   
  
    CreateAnimal.call(this,location,noOfLegs);
  
    this.name=name;
    this.colorOfEyes=colorOfEyes;
   
}

Object.setPrototypeOf(CreateAnimalCat.prototype,CreateAnimal.prototype);



let animal=new CreateAnimal('Rath',4);
let dog= new CreateAnimalDog('Delhi',4,'jacky','white');
let cat=new CreateAnimalCat('Mumbai',4,'lucy','blue');


///////////////////////

//Class 

// class Animal{

//     constructor(location,noOfLegs){
//         this.location=location;
//         this.noOfLegs=noOfLegs;
//     }
//      eat(){
//         return  `I live in ${this.location} and I can eat`
//        }
//      changeLocation(newLocation){
//          this.location=newLocation;
//          return this.location;
 
//      }
//      summary(){
//          returns `I live in ${this.location} and I have ${this.numberOfLegs}`
//      }
 
// }


// ///////////

// //for dog


// class AnimalDog extends Animal{

//     constructor(location,noOfLegs,name,color){
//         super(location,noOfLegs);
//         this.name=name;
//         this.color=color;
//     }
//     bark(){
//         alert(`I am ${this.name} and I can bark 🐶`)
//     }
//     changeName(newName){
//         this.name=newName;
//         return this.name;
//     }
//     changeColor(newColor){
//         this.color=newColor;
//         return this.color;
//     }
//     summary(){
//         return  `I am ${this.name} and I am of ${this.color} color. I can also bark`
//     }

    
// }

// ////////////////////////////////////////

// //for Cat
// class AnimalCat extends Animal{

//     constructor(location,noOfLegs,catName,colorOfEyes){
//         super(location,noOfLegs);
//         this.name=catName;
//         this.colorOfEyes=colorOfEyes;
//     }


//     meow(){
//         alert(`I am ${this.name} and I can do mewo meow 😹`)
//     }
//     changeName(newName){
//         this.name=newName;
//         return this.name;
//     }
//     changeColorOfEyes(newColor){
//         this.colorOfEyes=newColor;
//         return this.colorOfEyes;
//     }
//     summary(){
//         return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
//     }
   
  
   
   
// }



// let animal=new Animal('Rath',4);
// let dog= new AnimalDog('Delhi',4,'jacky','white');
// let cat=new AnimalCat('Mumbai',4,'lucy','blue');


// Test1 for animal
console.group(animal);
console.log(animal.location);
console.log(animal.noOfLegs);
console.log(animal.changeLocation('Rath: Rath-Hamirpur'));
console.log(animal.eat('Hamirpur'));
console.groupEnd();

// Test1 for dog
console.group(dog);
console.log(dog.location);
console.log(dog.noOfLegs);
dog.bark();
console.log(dog.changeName('jacky rajpoot'));
console.log(dog.changeColor('black'));
console.log(dog.summary());
console.log(dog.changeLocation('Delhi: New Delhi'));
console.log(dog.eat());
console.groupEnd();

// Test1 for cat
console.group(cat);
console.log(cat.location);
console.log(cat.noOfLegs);
cat.meow();
console.log(cat.changeName('Lucy rajpoot'));
console.log(cat.changeColorOfEyes('gray'));
console.log(cat.summary());
console.log(cat.changeLocation('Mumbai: Bombay'));
console.log(cat.eat());
console.groupEnd();