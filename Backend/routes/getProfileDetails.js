const mongoose = require('mongoose');
const User = require('../model/user.model');

const getProfileDetails = async (req,res)=>
{
    const email = req.userEmail;
    const user = await getUserIdformEMail(email);
    return res.status(200).send(user);
}

const getUserIdformEMail = async(email)=>
{
    try {
        const user = await User.findOne({email});
        if(!user)
        {
            return {"message":"User Details Not Founded"};
        }
        return user;
    } catch (error) {
        return {error:error.message};
    }
}

module.exports = {getProfileDetails,getUserIdformEMail};