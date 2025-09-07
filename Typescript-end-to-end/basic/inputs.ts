function getInfo(){
    // console.log("get info function called");
    const nameInput = document.getElementById('username') as HTMLInputElement
    const name:string = nameInput.value;

    const emaiInput = document.getElementById('email') as HTMLInputElement;
     const email:string = nameInput.value;

      const ageInput = document.getElementById('age') as HTMLInputElement;
     const age:string = nameInput.value;
     console.log(name , age , email);

}