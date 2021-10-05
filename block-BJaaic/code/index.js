// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

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


let animalMethod={

    eat:function(){
       return  `I live in ${this.location} and I can eat`
    },
    changeLocation: function changeLocation(newLocation){
        this.location=newLocation;
        return this.location;

    },
    summary:function(){
        returns `I live in ${this.location} and I have ${this.numberOfLegs}`
    }



}


function createAnimal(location,noOfLegs){

    let animal=Object.create(animalMethod);
    animal.location=location;
    animal.noOfLegs=noOfLegs;
    return animal;
}


let animalDogMethod={

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

Object.setPrototypeOf(animalDogMethod,animalMethod);


function createAnimalDog(location,noOfLegs,name,color){

    let animal=Object.create(animalDogMethod);
    animal.location=location;
    animal.noOfLegs=noOfLegs;
    animal.name=name;
    animal.color=color;
    return animal;
}

let animalCatMethod={

    meow:function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName: function(newName){
        this.name=newName;
        return this.name;
    },
    changeColorOfEyes:function(newColor){
        this.color=newColor;
        return this.color;
    },
    summary:function(){
        return  `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    }


}

Object.setPrototypeOf(animalCatMethod,animalMethod);

function createAnimalCat(location,noOfLegs,name,colorOfEyes){

    let animal=Object.create(animalCatMethod);
    animal.location=location;
    animal.noOfLegs=noOfLegs;
    animal.name=name;
    animal.colorOfEyes=colorOfEyes;
    return animal;
}

let animal=createAnimal('Rath',4);
let dog=createAnimalDog('Delhi',4,'jacky','white');
let cat=createAnimalCat('Mumbai',4,'lucy','blue');


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


