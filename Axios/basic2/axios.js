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
