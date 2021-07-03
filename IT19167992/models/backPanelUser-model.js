const mongoose = require('mongoose');

const BackPanelUserModel = new mongoose.Schema({
    name : { type: String, required : true, trim : true },
    userName : { type: String, required : true, trim : true},
    email : { type: String, required : true, trim : true},
    contactNumber : { type:String,required : true,trim : true},
    password : { type : String, required : true, trim : true},
    role : { type : String, required : false, trim : true}
});

const BackPanelUser = mongoose.model('backpanelusers',BackPanelUserModel);
module.exports = BackPanelUser;