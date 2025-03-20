const User = require('../model/user.model')

const saveProfile = async (req, res) => {
    try {
        const { fullName, phone, dob, gender, city, state, country, skills } = req.body;

        // Check if required fields are provided
        if (!fullName || !phone || !dob || !gender || !city || !state || !country || !skills) {
            return res.status(400).json({ message: "All fields are required." });
        }
        const email = req.userEmail;
        const role= 'user';
        // Convert skills into an array if it's a string
        const skillsArray = Array.isArray(skills) ? skills : skills.split(",").map(skill => skill.trim());

        // Create new user
        const newUser = new User({
            fullName,
            email,
            phone,
            dob,
            role,
            gender,
            city,
            state,
            country,
            skills: skillsArray
        });

        // Save user to database
        await newUser.save();
        return res.status(201).json({ message: "Profile saved successfully!", user: newUser });
    } catch (error) {
        console.error("Error saving profile:", error);
        return res.status(500).json({ message: "Internal Server Error", error });
    }
};

module.exports = {saveProfile};