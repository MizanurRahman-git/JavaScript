class Animal {
    constructor(name , age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }
}




class Dog extends Animal {
    constructor(name , breed , age){
        super(name , age)
        this.breed = breed;
    }

    bark(){
        console.log(`${this.name} is barking`)
    }
}


class Cat extends Animal {
    constructor(name , breed , age){
        super(name , age)
        this.breed = breed;
    }

    meow(){
        console.log(`${this.name} is meowing`)
    }
}


class Bird extends Animal{
    constructor(name , breed , age){
        super(name,age)
        this.breed = breed;
    }

    fly(){
        console.log(`${this.name} is flying`)
    }
}


const dog1 = new Dog('cooper', 'desi' , 10)
console.log(dog1)

const cat1 = new Cat('Leo', 'desi' , 7)
console.log(cat1)

const bird1 = new Bird('Peacock', 'desi' , 5)
console.log(bird1)

dog1.eat()
dog1.bark()

cat1.eat()
cat1.meow()

bird1.eat()
bird1.fly()