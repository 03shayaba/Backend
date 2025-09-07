let express = require("express");
const { dbConnection } = require("./dbConnection");
const {ObjectId} = require("mongodb");

let app = express();
app.use(express.json());
app.get("/student-read", (req, res) => {
  res.send("student view ApI");
});
app.post("/student-insert", async (req, res) => {
  let MyDB = await dbConnection();
  let StudentCollection = MyDB.collection("students");
  // let obj = {
  //     sname:req.body.sname,
  //     semail:req.body.semail
  // }
  let { sname, semail } = req.body;
  let obj = { sname, semail };
  let insertResponse = await StudentCollection.insertOne(obj);
  res.send({
    status: 1,
    msg: "Data Insert",
    insertResponse,
  });
});

app.delete("/student-delete/:id",async (req,res)=>{
    // let paramsData = req.params;
    // console.log(paramsData);
    let {id} = req.params;
    let myDB = await dbConnection();
    let StudentCollection = myDB.collection("students")
    let delRes = await StudentCollection.deleteOne({_id:new ObjectId(id)})
    res.send({
        status: 1,
        msg: " Delete Data ",
        delRes,
      });
})


app.put("/student-update/:id" , async(req ,res)=>{
  let {id} = req.params;
  let{sname,semail} = req.body;
  let obj = {}  //data
  if(sname !=="" && sname !== undefined &&  sname !== null ){
      obj['sname'] = sname
  }
  if(semail !=="" && semail !== undefined &&  semail !== null ){
    obj['semail']= semail
  }
  console.log(obj);


  let myDB = await dbConnection();
  let StudentCollection = myDB.collection("students")
  let updateRes = await StudentCollection.updateOne({_id:new ObjectId(id)},{$set:obj}) 
  res.send({
    status: 1,
    msg: " Update Data ",
    updateRes,
  });
})

app.listen(8000, () => {
  console.log("🚀 Server running on port 8000");
});
