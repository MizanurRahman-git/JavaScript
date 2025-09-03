if(true){
    const data = 98;
    // console.log(data)
}

// console.log(data)        // uporer data baire output asbe na. etake return ba or vitore console.log korte hobe .



for(const num of [1,2,3,4,5,6]){

}



// function scope ba normal scope

function doMath(a , b){
    console.log(a, b)

    const sum = a+b
    const total = sum +10

    console.log(doubleIt(12))

    function doubleIt(x){
        return x *2 
    }
}

doMath(2,5)

// console.log(a , b)