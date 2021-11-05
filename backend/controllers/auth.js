const authSchema = require('../model/authSchema')

const authAddUser = async (req,res) => {
    var findData = []
    try {
        findData = await authSchema.find({gid: req.body.gid})   
        if(findData.length > 0){
            res.status(200).json("Already exists")
            return
        }
        const data = new authSchema(req.body)
        await data.save()
        res.status(200).json("user added successfully")
    } catch (error) {
        console.log("error in authAddUser", error)
        res.status(400).json("error")
        return
    }
}

module.exports = {
    authAddUser
}