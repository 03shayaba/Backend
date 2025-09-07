let card1 = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let blog = document.querySelector(".trends");
let contact = document.querySelector(".contact");
let about1 = document.querySelector(".about");

let mainpage = document.querySelector(".main");
let carttext = document.querySelector(".cartText");
let cart = document.querySelector(".cart");
function homes(){
    mainpage.style.display="flex";
    card1.style.display="block"; 
    card2.style.display="block"; 
    blog.style.display="block";
    about1.style.display="none"
    contact.style.display="none";
    // carttext.style.display="none"
    cart.style.display="none";
    document.getElementById("blog").style.color="black";;
    document.getElementById("home").style.color="rgb(2,173,173)";
    document.getElementById("shop").style.color="black "
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color=" black";
}
function shops(){
    mainpage.style.display="none";
    blog.style.display="none"
    card1.style.display="block"; 
    card2.style.display="block";
    about1.style.display="none"; 
    document.getElementById("blog").style.color="black";;
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color=" rgb(2,173,173)"
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color=" black";
 
}

function blogs(){
    mainpage.style.display="none";
    card1.style.display="none"; 
    card2.style.display="none"; 
    blog.style.display="block";
    about1.style.display="none";

    document.getElementById("blog").style.color=" rgb(2,173,173)";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color=" black";
    
}

function about(){
    mainpage.style.display="none"
    blog.style.display="none";
    card1.style.display="none"; 
    card2.style.display="none"; 
    about1.style.display="block";
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color=" rgb(2,173,173)";

}
function contacts(){
    mainpage.style.display="none"
    blog.style.display="none";
    card1.style.display="none"; 
    card2.style.display="none"; 
    about1.style.display="none";
    contact.style.display="block";
    document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color=" black";
     document.getElementById("contact").style.color=" rgb(2,173,173)";
   
}

// cart
function show(img){
    let newImg = document.getElementById("newImg");
    console.log(img)
    newImg.src=img.src;
    document.querySelector(".cart").style.display="flex";
    mainpage.style.display="none"
    blog.style.display="none";
    card1.style.display="none"; 
    card2.style.display="none"; 
    about1.style.display="none";
    contact.style.display="none";
}

function addTocart(){
    alert("Added To Cart");
    location.reload();
}

function back(){
    location.reload();

   
}

// function Explore(){
//     card1.style.display="block"; 
//     card2.style.display="block";  
//     // about1.style.display="block";
// }
