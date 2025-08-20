function woodQuantity(chair, table, bed){

    const perChairWood = 3 ;
    const perTableWood = 10 ;
    const perBedWood = 50 ;


    const totalChairWood = chair * perChairWood;
    const totalTableWood = table * perTableWood;
    const totalbedWood = bed * perBedWood;


    const result = totalChairWood + totalTableWood + totalbedWood ;

    return result
}

const result = woodQuantity(6 , 2 , 1)
console.log('Wood Needed:',result)