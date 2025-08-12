//  Inch to feet convert 


// we Know: 12 inch = 1 feet 


// function inchToFeet(inch){
//     const feet = inch / 12 ;
//     return feet ;    
// }


// const hridoyHeight = inchToFeet(75);

// console.log(hridoyHeight)


// Ans: 6.25




//  আমরা এইভাবে না আরও একটু ডিটেলে চাই। মানে আমরা যদি ৭৫ কে ১২ ভাগ করি তাহলে ভাগফল = ৬         
// আর ভাগশেষ = ৩ 

// আমরা চাই উত্তর টা 6 inch  3inch  এভাবে দিতে



function inchToFeet2(inch){
    const feetFraction = inch / 12 ;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12 ;

    const result = feetNumber+' ft '+inchRemaining+' inch.';


    return result;
}


const hridoyHeight = inchToFeet2(75);

console.log(hridoyHeight)



//      6 ft 3 inch.

//  Wow 




// mile to kilometer process

function mileToKilometer(mile){
    const kilometer = mile * 1.60934 ;

    return kilometer;
}


const distance = mileToKilometer(34);

console.log (distance)