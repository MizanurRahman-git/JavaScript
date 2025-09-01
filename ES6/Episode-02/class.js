/**
 * class ---------->  template
 * Properties
 * Method (A special type of function inside a class without the function keyword )
 * 
 * 
 * object
 */ 


class Player {
    constructor(name, age){

        this.name = name
        this.age = age
        this.location = 'Bangladesh'
        // console.log('calling the constractor' , name)
    }

    gaol(){
        console.log('Goal koro')
    }

    ourTeam (){
        console.log('Argentina')
    }
}


const player1 = new Player('Mizanur Rahman' , 12)        //evabe console.log kora jay shudhu 'constructor' er khetre
const player2 = new Player('Hridoy',23)
const player3 = new Player('Ryan', 21)
const player4 = new Player('Emon', 11)
player1.gaol()
player1.ourTeam()
console.log(player1)
console.log(player2)
console.log(player3)
console.log(player4)