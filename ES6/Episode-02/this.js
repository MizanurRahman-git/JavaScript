class Vehicle {
    constructor (name, brand, price){
        this.name = name
        this.brand = brand
        this.price = price
    }

    getThis(){
        console.log(this)
    }

    getPrice(){
        return this.price;
    }
}


const car1 = new Vehicle('Car' ,'Honda' , 500000)
console.log(car1.getPrice())

car1.getThis()
console.log(car1)



const car2 = new Vehicle('Car' ,'Toyota' , 900000)
console.log(car2.getPrice())

car2.getThis()
console.log(car2)