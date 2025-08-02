const identity = {
    name: 'Mizanur Rahman',
    age: 23,
    proffesion: 'developer',
    married: false,
    bloodGroup: 'B+'
}

// const identityKeys = Object.keys(identity);
// const keyName = identityKeys.includes('bloodGroup');

// console.log(keyName)


//  Ans:        True;







// Another ways


// if('proffesion' in identity) {
//     console.log('Ha, Proffesion key ase')
// }

// else{
//     console.log('na, Proffesion key nai')
// }


// Ans:         Ha, Proffesion key ase



// if (identity.hasOwnProperty('email')){
//     console.log('email niya boroloki dekhai')
// }

// else{
//     console.log('email chara jibon amar')
// }

// Ans:     email chara jibon amar



// এখন যদি এমন হয় যে, property এবং value দুইটাই ঠিক আছে কি না। তাহলে কিভাবে করা যায় 


if (identity.proffesion === 'developer'){
    console.log('you are asign the job')
}

else{
    console.log('get out, never come back')
}


// Ans:     you are asign the job