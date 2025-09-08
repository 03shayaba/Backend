const express = require('express') ;
const { handleCreate , getRequest1,loginUser,  getRequest2 } = require('../Controllers/userController.js');
const router = express.Router();
router.post('/signup' , handleCreate)

router.get('/signup',getRequest1)

router.post('/login', loginUser)
router.get('/login', getRequest2)

module.exports = router