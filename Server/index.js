import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./database/connect.js";

dotenv.config(); // Load environment variables

const app = express();

app.get("/", (req, res) => {
  res.send("Api is working");
});

// Start the server
const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URL); // Don't forget the await
    app.listen(process.env.PORT, () =>
      console.log(`Server started on port ${process.env.PORT}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
