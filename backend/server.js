import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";

const app = express();
dotenv.config();

// Middleware to parse JSON request bodies
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    // Root route http://localhost:5000/
    res.send("Hello world!!");
});

// Use the auth routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// Connect to MongoDB and start the server
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});
