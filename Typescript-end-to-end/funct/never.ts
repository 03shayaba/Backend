function loopfunction():never{
    // console.log("loop");
    while(true){                //never is only used when the condition is never reached to the end point of the function 
        console.log()
    }
}


console.log(loopfunction());


function normal(){          //here if we try to add never datatype then it will throws an error because the function will be reached to the end point
    console.log
}