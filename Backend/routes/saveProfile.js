const User = require('../model/user.model')

const saveProfile = async (req, res) => {
    try {
        console.log(req.body.formData);
        const { fullName, phone, dob, gender, city, state, country, skills } = req.body.formData;

        // Check if required fields are provided
        if (!fullName || !phone || !dob || !gender || !city || !state || !country || !skills) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const email = req.userEmail;
        const role = 'user';
        // Convert skills into an array if it's a string
        const skillsArray = Array.isArray(skills) ? skills : skills.split(",").map(skill => skill.trim());

        // Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            // Update existing user
            existingUser.fullName = fullName;
            existingUser.phone = phone;
            existingUser.dob = dob;
            existingUser.gender = gender;
            existingUser.city = city;
            existingUser.state = state;
            existingUser.country = country;
            existingUser.skills = skillsArray;

            // Save updated user
            const updatedUser = await existingUser.save();
            return res.status(200).json({ 
                message: "Profile updated successfully!", 
                user: updatedUser 
            });
        } else {
            // Create new user if doesn't exist
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

            // Save new user
            const savedUser = await newUser.save();
            return res.status(201).json({ 
                message: "Profile created successfully!", 
                user: savedUser 
            });
        }
    } catch (error) {
        console.error("Error saving profile:", error);
        return res.status(500).json({ 
            message: "Internal Server Error", 
            error: error.message 
        });
    }
};

module.exports = { saveProfile };