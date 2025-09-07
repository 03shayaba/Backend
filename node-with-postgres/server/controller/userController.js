import { UserModal } from "../postgers/postgres.js";

export const getALLEmp = async (req, res) => {
  try {
    const users = await UserModal.findAll();
    if (users.length == 0) {
      return res.status(200).json({ message: "Users not found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addEmp = async (req, res) => {
  const { name, email, designation, empid } = req.body;
  try {
    const emp = await UserModal.findOne({ where: { empid:empid } });
    if (emp == null) {
      await UserModal.create(req.body);
      return res.json({
        massage: "Emp successfully added",
      });
    }
    return res.status(200).json({ message: "emp already exist" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateEmp = async (req , res) =>{
    let empid = req.params.empid;
    
    try {
        console.log(req.body);
      const emp =await UserModal.update(req.body ,{where:{empid}}) 
      if(emp[0] == 0){
        return res.status(404).json({message :"not found"})
      }
      return res.status(200).json({
        message:"succesfully updated"
      }) 

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" }); 
    }
}

export const DeleteEmp = async (req,res) =>{
     let empid = req.params.empid;
    try {
        const emp =await UserModal.findOne({where:{empid:empid}}) 
      if(emp == null){
        return res.status(404).json({message :"not found"})
      }
      await emp.destroy();
      return res.status(200).json({
        message:"successfully deleted"
      })
    
    } catch (error) {
               return res.status(500).json({ message: "Internal server error" }); 
 
    }
}
