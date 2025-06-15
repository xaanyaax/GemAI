// import express from "express";
// import * as dotenv from "dotenv";
// import connectDB from "./database/connect.js";
// import dalleRoutes from "./routes/dalleRoutes.js";

// dotenv.config(); // Load environment variables

// const app = express();
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Api is working");
// });

// app.use('/api', dalleRoutes);

// // Start the server
// const startServer = async () => {
//   try {
//     await connectDB(process.env.MONGODB_URL); // Don't forget the await
//     app.listen(process.env.PORT, () =>
//       console.log(`Server started on port ${process.env.PORT}`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// startServer();

import express from "express";
import * as dotenv from "dotenv";
// Temporarily comment out the database connection to isolate the issue
// import connectDB from "./database/connect.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Basic route
app.get("/", (req, res) => {
  res.json({
    message: "DALL-E API is working",
    endpoints: {
      health: "/api/health",
      generateImage: "POST /api/generate-image"
    }
  });
});

// Routes - this is where the error might be
console.log("Setting up routes...");
app.use('/api', dalleRoutes);
console.log("Routes set up successfully");

// Start the server WITHOUT database connection first
const startServer = async () => {
  try {
    // Validate environment variables
    if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not set in environment variables");
    }
    
    const PORT = process.env.PORT || 3000;
    
    // Temporarily skip database connection
    // await connectDB(process.env.MONGODB_URL);
    // console.log("✅ Connected to MongoDB");
    
    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server started on port ${PORT}`);
      console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
      console.log(`🎨 Generate image: POST http://localhost:${PORT}/api/generate-image`);
    });
    
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();