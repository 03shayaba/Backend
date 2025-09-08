const { getUser } = require('../services/auth.js')

const restrictTologgedInUserOnly = async(req, res)=> {
    const userUid = req.cookies.uid ;

    if(!userUid){
        return res.redirect('/login');
    }

    const user = getUser(userUid);
    if(!user){
        return res.redirect("/login");
    }
    req.user = user ;
    next();
}


module.exports = {
    restrictTologgedInUserOnly 
}