import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";

// Get __dirname equivalent in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Firebase Admin SDK (if not already initialized)
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert(path.join(__dirname, "../config/serviceAccountKey.json")),
    });
}


export const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        const token = authHeader.split("Bearer ")[1];
        console.log(token);        // 🔹 Verify Firebase Token
        const decodedToken = await admin.auth().verifyIdToken(token);

        if (!decodedToken.email) {
            return res.status(403).json({ error: "No email found in token" });
        }

        req.userEmail = decodedToken.email; // Attach email to request
        req.userId = decodedToken.uid; // Attach UID to request

        console.log("Authenticated User:", req.userEmail);

        next(); // Proceed to next middleware or route

    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(403).json({ error: "Invalid or expired token" });
    }
};
