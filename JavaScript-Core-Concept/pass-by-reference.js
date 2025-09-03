function multiplication(x , y){
    x = x + 5
    y = y + 5

    const mult = x * y;

    return mult;
}


a = 5
b = 8

console.log('before the function call-->', a ,b)

const multi = multiplication(a , b)
console.log(multi)

console.log('after the function call-->', a ,b)


// tar mane ami Primitive er khetre kono function er arguments ke pathale sei man poriborton korar pore oi man poriborton hobe na. 


// kintu Non-Primitive er khetre ki hobe (array & objects)


const hridoy = {name: 'Hridoy', balance: 40000}
const rahman = {name: 'Rahman', balance: 50000}

console.log('before the call-->', hridoy, rahman)


function totalMoney(person1, person2){
    person1.balance = 0
    person2.balance = person2.balance / 2
    const total = person1.balance + person2.balance

    return total;
}

const balance = totalMoney(hridoy , rahman)

console.log('balance-->', balance)

console.log('after the call-->', hridoy, rahman)