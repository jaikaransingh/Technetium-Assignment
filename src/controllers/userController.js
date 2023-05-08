const { type } = require("express/lib/response")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let userData= await UserModel.create(data)
    res.send({msg: userData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData