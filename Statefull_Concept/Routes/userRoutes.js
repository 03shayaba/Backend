const express = require('express') ;
const { handleCreate ,loginUser} = require('../Controllers/userController.js');
const router = express.Router();
router.post('/' , handleCreate)
router.post('/login', loginUser)


module.exports = router