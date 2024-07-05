const express = require("express");
const session = require("express-session");
const app = express();
const multer = require("multer");
const upload = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".JPG" && ext !== ".JPEG" && ext !== ".png" && ext !== ".svg") {
      cb(new Error("File type is not supported, Supported = .jpg, .jpeg, .png, .svg"), false);
      return;
    }
    cb(null, true);
  },
});

//MS Specific

const path = require("path");
const ComputerVisionClient = require("@azure/cognitiveservices-computervision").ComputerVisionClient;
const ApiKeyCredentials = require("@azure/ms-rest-js").ApiKeyCredentials;

require("dotenv").config({ path: "./config/.env" });
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const key = process.env.MS_COMPUTER_VISION_SUBSCRIPTION_KEY;
const endpoint = process.env.MS_COMPUTER_VISION_ENDPOINT;

const computerVisionClient = new ComputerVisionClient(
  new ApiKeyCredentials({ inHeader: { "Ocp-Apim-Subscription-Key": key } }),
  endpoint
);

// Set up session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Use true if using HTTPS
}));

//Server Setup
app.set("view engine", "ejs");
app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", upload.single("file-to-upload"), async (req, res) => {
  try {
    // Check if file was uploaded
    if (!req.file) {
      res.status(400).send("No file uploaded.");
      return;
    }

    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    const brandURLImage = result.secure_url;

    // save brandURLImage to session
    req.session.brandURLImage = brandURLImage;

    // Perform image analysis
    const colorScheme = await detectColorScheme(brandURLImage);

    // Render results page with detected data
    res.render("result.ejs", { img: brandURLImage, color:colorScheme,  });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error uploading file and processing.");
  }
});

async function detectColorScheme(imageUrl) {
  try {
    console.log(`Detecting color scheme in image..`);
    const color = (await computerVisionClient.analyzeImage(imageUrl, { visualFeatures: ['Color'] })).color;

    return color;

  } catch (error) {
    console.error("Error detecting color scheme:", error);
  }
}

app.listen(process.env.PORT || 3000);