function oddAverage(numbers){
    const odds =[]
    let sum = 0;
    for (const number of numbers){
        if(number % 2 === 1){
            odds.push(number);
            sum = sum + number;
        }
    }
    const count = odds.length;
    const ave = sum / count
    return ave;
}


const num = [42, 13, 58, 65, 81, 96, 7]
console.log(oddAverage(num))