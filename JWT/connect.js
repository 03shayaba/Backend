import mongoose from 'mongoose' ;
const  connectdb = async()=>{
    const url = 'mongodb://127.0.0.1:27017/jwt-db'
    try{
    await mongoose.connect(url);
    console.log('Database connected successfully');
    }catch(error){
        console.log("DB not connected")
    }
}

export default connectdb;