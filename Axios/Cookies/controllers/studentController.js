


export  const  set_cookie =async(req,res) =>{
    // res.cookie('username' , "Shayaba")
    res.cookie('cart' , 5 ,{maxAge :30000})
    res.send("cookie set")
}


export  const  get_cookie =async(req,res) =>{
    // console.log(req.cookies)
    res.send("cookie get")
}
export const  delete_cookie =async(req,res) =>{
    res.clearCookie('username')
    res.clearCookie('cart')
    res.send("cookie delete")
}