document.getElementById("btn").addEventListener("click", makerequest);

// function makerequest(){
//     console.log("btn clicked")
//     config  = {
//         method:'get' ,
//         url:'data.txt'
//     }
//     const promise = axios(config)
//     promise.then((res) =>{
//         console.log(res)
//         console.log(res.data)
//     })
// }

// directly applying .then on the axios

//  function makerequest(){
//     console.log("btn clicked")
//     config  = {
//         method:'get' ,
//         url:'data.txt'
//     }
//     axios(config).then((res) =>{
//         console.log(res)
//         console.log(res.data)
//     })
// }

// defining config inside the axios
//  function makerequest(){
//     console.log("btn clicked")

// axios({
//     method:'get' ,
//     url:'data.txt'
// }).then((res) =>{
//     console.log(res)
//     console.log(res.data)
// })
// }

// function makerequest(){
//     console.log("btn clicked") ;
//     axios.get({
//         method:'get' ,
//         url:'data.txt'
//     }).then((res) =>{
//         console.log(res)
//         console.log(res.data)
//     })
// }

// function makerequest(){
//     console.log("btn clicked") ;
//     config  = {
//         method:'get'
//     }
//     axios.get(
//         'data.txt'
//     ,config).then((res) =>{
//         console.log(res)
//         console.log(res.data)
//     })
// }

//  Promise then | error handling

function makerequest() {
  console.log("btn clicked");
  axios.get("data.json")
    .then((res) => {
      console.log(res);
      console.log(res.data);
      console.log(res.data.name);
       console.log(res.data.email);
        console.log(res.data.age);
        document.getElementById('divdata1').innerText = res.data.name;
        document.getElementById("divdata2").innerText = res.data.email;
        
    })
    .catch((error)=>{
        console.log(error)
    })
}

// Async and Await
// async function makerequest(){
//     console.log("button Clicked");
//     config = {
//         method:'get' ,
//         url:'data.txt'
//     }
//     const res = await axios(config)
//     console.log(res);
//     console.log(res.data);
// }

// async function makerequest(){
//     console.log("button Clicked");
//     config = {
//         method:'get' ,
//     }
//     const res = await axios('data.txt', config)
//     console.log(res);
//     console.log(res.data);
// }

// async function makerequest(){
//     try{
//     console.log("button Clicked");
//     const res = await axios.get('data1.txt')
//     console.log(res);
//     console.log(res.data);
// }catch(error){
//     console.log(error)
// }
// }

// Async and await
// async function makerequest() {
//   try {
//     console.log("button Clicked");
//     const res = await axios.get("data.txt");
//     console.log(res);
//     console.log(res.data);
//     document.getElementById("divdata").innerHTML = res.data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function makerequest(){
//   try {
//      console.log("bitton clicked");
//      const res = await axios('data.json');
//      console.log(res);
//       ;
//     //  console.log(data.users);
//      console.log(res.data.users[0].email);
//   } catch (error) {
//     console.log(error.message);
//   }
// }


async function makerequest(){
  try {
     console.log("bitton clicked");

     const config ={
      method:'get',
      url:'data.json',
      headers:{
        'Content-Type':'application/json'
      },
      data:'{"name":"faizan" , "job":"web-dev"}'
     }
     const res = await axios(config);
     console.log(res);
     console.log(res.data);
     const new_data =JSON.parse(config.data)
     const main_data = JSON.stringify(new_data)
      console.log(JSON.parse(config.data));
     console.log("new data convert string to object :" , new_data);
     console.log("main data convert back to string :" + main_data);
    //  console.log(res.data.users[0].email);
  } catch (error) {
    console.log("the error is :" + error.message);
  }
}








