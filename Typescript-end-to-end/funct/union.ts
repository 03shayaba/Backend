function fruitsData():string|string[]|number{       //here | is treated as a union
    let item=1;
    if(item>=1){
        return ['apple' , 'banana'];
    }else if(item >=5){
        return 10;
    }else{
        return"shayaba";
    }

}


console.log(fruitsData());




function studentData(name: string|number|boolean){
    if(typeof name=='string'){
        return"student name is " + name
    }
    if(typeof name=='number'){
        return"student name is " + name
    }

    else{
        "student name is " + name
    }
}

console.log(studentData(10));