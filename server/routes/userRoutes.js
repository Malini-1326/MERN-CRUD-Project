const express = require('express');
const router = express.Router();

const{createUser,getUser,getUserById,updateUser,deleteUser} = require('../controller/userController')

router.post('/createUser',createUser)
router.get('/getUser',getUser)
router.get('/getUserById/:id',getUserById)
router.put('/updateUser/:id',updateUser)
router.delete('/deleteUser/:id',deleteUser)

module.exports = router;