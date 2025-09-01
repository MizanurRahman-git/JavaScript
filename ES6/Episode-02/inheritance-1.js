class Dog {
    constructor(name , breed , age){
        this.name = name;
        this.age = age
        this.breed = breed;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    bark(){
        console.log(`${this.name} is barking`)
    }
}


class Cat {
    constructor(name , breed , age){
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    eat(){
        console.log(`${this.name} is eating`);
    }

    meow(){
        console.log(`${this.name} is meowing`)
    }
}


class Bird{
    constructor(name , breed , age){
        this.name = name;
        this.age = age
        this.breed = breed;
    }

    eat(){
        console.log(`${this.name} is eating`);
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