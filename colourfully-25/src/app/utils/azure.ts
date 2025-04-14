import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";

// Initialize the Computer Vision client
const computerVisionKey = process.env.COMPUTER_VISION_KEY || "";
const computerVisionEndpoint = process.env.COMPUTER_VISION_ENDPOINT || "";

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": computerVisionKey } }),
  computerVisionEndpoint
);

export async function detectColorScheme(imageUrl: string) {
  try {
    if (!imageUrl.startsWith('https')) {
      throw new Error('Invalid image URL. It must be an absolute URL.');
    }

    console.log(`Detecting color scheme in image: ${imageUrl}`);

    // Use the Azure SDK's analyzeImage method
    const analysisResult = await computerVisionClient.analyzeImage(imageUrl, { visualFeatures: ['Color'] });

    console.log('Azure API response:', analysisResult);

    const color = analysisResult.color;
    console.log('Detected color scheme:', color);
    return color;
  } catch (error) {
    console.error('Error detecting color scheme:', error);
    throw error; // Rethrow the error to be caught by the calling function
  }
}