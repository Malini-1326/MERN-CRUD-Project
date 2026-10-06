const UserModel = require('.././model/userModel')


//create user
const createUser = async (req, res) =>{
    try{
        const userObj={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            age:req.body.age,
            gender:req.body.gender,
        }
        const user = new UserModel(userObj)
        const result = await user.save()
        res.send({status:1, message: "user added successfully",data:result })
    }
    catch(error){
        res.send({status:0, error:error.message })
    }
}

//getUser
const getUser=async(req,res) =>{
    try{
        const result = await UserModel.find({})
        res.send({status:1, count: result.length ,data:result })
    }
    catch(error){
        res.send({status:0, error:error.message })
    }
}

//getUserById
const getUserById=async(req,res) =>{
    try{
        const result = await UserModel.findById(req.params.id)
        if(!result){
            return res.send({status:1, message: "user not found" })
        }
        res.send({status:1, data:result })
    }
    catch(error){
        res.send({status:0, error:error.message })
    }
}

//updateUser
const updateUser=async(req,res) =>{
    try{
        const updateData={
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            age:req.body.age,
            gender:req.body.gender,
        }
        const result = await UserModel.findByIdAndUpdate(
            req.params.id,
            updateData,{
                new: true,
                runValidators:true,
            }
        )
        if(!result){
            return res.send({status:1, message: "user not found" })
        }
        res.send({status:1, count: result.length ,data:result })
    }
    catch(error){
        res.send({status:0, error:error.message })
    }
}

//deleteUser
const deleteUser=async(req,res) =>{
    try{
        const result = await UserModel.findByIdAndDelete(req.params.id)
        if(!result){
            return res.send({status:1, message: "user not found" })
        }
        res.send({status:1, count: result.length,message:"user deleted successfully",data:result })
    }
    catch(error){
        res.send({status:0, error:error.message })
    }
}

module.exports ={createUser,getUser,getUserById,updateUser,deleteUser}
