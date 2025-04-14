import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";
import { v2 as cloudinary } from 'cloudinary';
import { detectColorScheme } from '../../utils/azure';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Initialize the Computer Vision client
const computerVisionKey = process.env.COMPUTER_VISION_KEY || "";
const computerVisionEndpoint = process.env.COMPUTER_VISION_ENDPOINT || "";
const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": computerVisionKey } }),
  computerVisionEndpoint
);

export async function POST(request: Request) {
  try {
    const { 'image-url': imageUrl } = await request.json();

    if (!imageUrl) {
      return Response.json(
        { error: 'No image URL provided' },
        { status: 400 }
      );
    }

    // Analyze the image with Computer Vision API
    const colorScheme = await detectColorScheme(imageUrl);

    // Return results
    return Response.json({
      success: true,
      imageUrl,
      colorScheme,
    });
  } catch (error) {
    console.error('Error processing image:', error);
    return Response.json(
      { error: 'Failed to process image' },
      { status: 500 }
    );
  }
}