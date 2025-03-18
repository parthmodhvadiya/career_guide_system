const mongoose = require("mongoose");
// require("dotenv").config(); // Load environment variables from .env file
const uri = "mongodb+srv://parthmodhvadiya15:VIFgrhlAhPbsz0WQ@cluster0.str14.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const connectDB = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
