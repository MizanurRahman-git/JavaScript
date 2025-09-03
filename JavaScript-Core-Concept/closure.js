function counter(){
    let count = 0;
    function innerFunc(){
        console.log('inside the inner function, some one called me')
    }
    return innerFunc
}

const output = counter()

console.log(output())




function counter2(){
    let count = 10

    return function (user){

        count = count +1;
        console.log('inside the inner function2', user, count)
    }
}

const innerfunction = counter2()

innerfunction('inner')
innerfunction('inner')
innerfunction('inner')
innerfunction('inner')
console.log('------------------------------')

const hridoy = counter2()

hridoy('hridoy')
hridoy('hridoy')
innerfunction('inner')
console.log('------------------------------')


const mizanur = counter2()
mizanur('mizanur')
mizanur('mizanur')
hridoy('hridoy')