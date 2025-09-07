function fruits(){
    return "apple"          //it is implecit type inferefnce means autodetect and return the value
}

console.log(fruits());



// function simple():boolean{
//     return true;
// }


function complex():number|string{
    let data = 10;
    let type ="age";
    let name="shayaba"

    if(type=="age "){
        return data;
    }else{
        return name;
    }

}

console.log(complex());