import { ComputerVisionClient } from "@azure/cognitiveservices-computervision";
import { ApiKeyCredentials } from "@azure/ms-rest-js";
import { v2 as cloudinary } from 'cloudinary';
import { detectColorScheme } from '../../utils/azure';
import { Vibrant } from 'node-vibrant/node';
import { NextResponse } from 'next/server';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Initialize the Computer Vision client
const computerVisionKey = process.env.COMPUTER_VISION_KEY || "";
const computerVisionEndpoint = process.env.COMPUTER_VISION_ENDPOINT || "";

export async function POST(request: Request) {
  try {
    const { 'image-url': imageUrl } = await request.json();

    if (!imageUrl) {
      return NextResponse.redirect('/error');
    }

    const colorScheme = await detectColorScheme(imageUrl);
    const palette = await Vibrant.from(imageUrl).getPalette();

    return NextResponse.json({
      success: true,
      imageUrl,
      colorScheme,
      palette,
    });
  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.redirect('/error');
  }
}