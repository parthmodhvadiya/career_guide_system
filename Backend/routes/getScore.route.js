const UserQuiz = require('../model/userQuiz.model');
const User = require('../model/user.model');

async function getScore(req,res) {
    const email = req.userEmail;
    try {
        const user = await User.findOne({email:email});
        console.log(user);
        const userScore = await UserQuiz.findOne({userID:user._id});
        if(!userScore)
        {
            return res.send({message:"User Score Not Found"});
        }
        return res.status(200).send(userScore);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports = {getScore};