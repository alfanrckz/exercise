class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    eat(){
        return `${this.name} is eating`
    }

    makeSound(){
        return "Rawrrrr"
    }

}

//ex instansi objec
const cat = new Animal('whiskers', 'cat')
const dog = new Animal('Buddy', 'dog')

console.log(cat.eat())
console.log(dog.makeSound())


//inheritance
class Cat extends Animal {
constructor(name, breed){
    super(name, 'cat'); 
    this.breed = breed;
}
    meow(){
        return "meoww ummsdmdfd"
    }
}

const fluffy = new Cat("Fluffy", "Persian");
console.log(fluffy.eat())
console.log(fluffy.meow())

//polimorfisme
class Dog extends Animal {
    constructor(name, breed){
        super(name, 'dog');
        this.breed = breed;
    }
    makeSound() {
        return "woof"
    }
}

//ex instansiasi object
const goldenRetriever = new Dog("Max", "GOlden Retriever")
console.log(goldenRetriever.makeSound());