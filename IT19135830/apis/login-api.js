const express= require('express')
const router = express.Router();
const clientlogin = require('../controllers/login/client-login-controller');
const adminLogin = require('../controllers/login/admin-login-controller');


//exporting function  api to connect to main endpoint
module.exports = function (){
    //client login
    router.post('/client-login', clientlogin.login);

    //admin login
    router.post('/admin-login', adminLogin.adminLogin);

    return router;
}