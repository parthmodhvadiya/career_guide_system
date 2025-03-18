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


const db = admin.firestore(); // ✅ Initialize Firestore

export { admin, db };
