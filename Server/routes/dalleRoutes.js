import express from "express";
import { OpenAI } from "openai";
import * as dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// Test route first
router.get("/test", (req, res) => {
  res.json({ message: "DALL-E routes are working" });
});

// Health check
router.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "DALL-E Image Generation",
    timestamp: new Date().toISOString(),
    hasApiKey: !!process.env.OPENAI_API_KEY
  });
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/generate-image", async (req, res) => {
  const { prompt, size = "1024x1024" } = req.body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({ 
      error: "Valid prompt is required"
    });
  }

  try {
    console.log("🎨 Generating image with prompt:", prompt);

    const response = await openai.images.generate({
      model: "dall-e-2",
      prompt: prompt.trim(),
      n: 1,
      size: size,
    });

    const imageUrl = response?.data?.[0]?.url;

    if (!imageUrl) {
      return res.status(500).json({ 
        error: "No image URL returned from OpenAI"
      });
    }

    res.status(200).json({ 
      success: true,
      imageUrl: imageUrl,
      prompt: prompt
    });

  } catch (error) {
    console.error("❌ FULL OpenAI Error Object:");
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    console.error("Error type:", error.type);
    console.error("Error status:", error.status);
    
    // Log the complete error response
    if (error.response) {
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
      console.error("Response data:", JSON.stringify(error.response.data, null, 2));
    }
    
    // Log the original error object
    console.error("Full error object:", JSON.stringify(error, null, 2));
    
    // Handle specific OpenAI errors
    if (error.status === 400 || error.response?.status === 400) {
      return res.status(400).json({ 
        error: "Bad request - likely prompt issue",
        message: error.message,
        prompt: prompt,
        promptLength: prompt.length,
        details: error.response?.data || error
      });
    }
    
    res.status(500).json({ 
      error: "Image generation failed",
      message: error.message,
      status: error.status || error.response?.status,
      prompt: prompt
    });
  }
});

export default router;