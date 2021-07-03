const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../../IT19136134/models/user-model.js');


//user login
//the email and password is received in the request body.
const login = async( req, res) => {
    const {email,password} = req.body;

    try{

        //checking if the user exists as a registered user
        const existingUser = await User.findOne({email})


        if(!existingUser){
            return res.status(404).json({message:"User is not Registered."})
        }

        //bcrypt is used to compare the password.for some reason it returns false for all correct or incorrect passwords
        const correctPassword = await bcrypt.compare(password, existingUser.password);

        // if(!correctPassword){
        //     return res.status(400).json({message: "Incorrect Password."})
        // }


        //if user (email) exists in db, the password corresponding to the validated email will be checked with the provided password
        //comparison of password the user entered nd the saved password to verify the login
        if(password != existingUser.password){
            return res.status(400).json({message: "Incorrect Password."})
        }


        //when the user is validated for the login, a jwt token is created for the login
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'test',{expiresIn:"1h"});

        //sending response with status, user details and token
        res.status(200).json({message:"Login Success", result:existingUser, token});



    } catch (error){
        res.status(500).json({message:"Something went wrong."});
    }
}

module.exports = {
    login
}