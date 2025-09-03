// callback 

function hridoyVai(callMeBack, patro, patri){
    console.log(patro)
    console.log('call me back parameter--->', callMeBack)
    if(patri){
        // console.log(callMeBack)
        callSomeOne(patro)
    }

    else{
        console.log('tor kopale biye nai')
    }
}


function callSomeOne(person){
    console.log('calling-->', person)
}

// callSomeOne('Rahman')

hridoyVai(callSomeOne, 'Rahman', 'dua')