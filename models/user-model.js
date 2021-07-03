const mongo = require('mongoose')

const UserModel = mongo.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    }
})

module.exports = mongo.model("UserModel", UserModel);