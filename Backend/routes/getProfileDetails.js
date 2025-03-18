const mongoose = require('mongoose');
const User = require('../model/user.model');

const getProfileDetails = async (req,res)=>
{
    const email = req.userEmail;
    try {
        const user = await User.findOne({email:email});
        if(!user)
        {
            res.status(404).send({"message":"User Details Not Founded"});
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({error:error.message})
    }
}

module.exports = {getProfileDetails};