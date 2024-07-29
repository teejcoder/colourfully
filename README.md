
# Colourfully

## Description

Colourfully is a web application that leverages Microsoft Azure's Cognitive Services to analyze and extract color schemes from uploaded images

Live(https://colourfully.vercel.app/)

## Screenshots

![Colourfully](https://i.postimg.cc/Y9Hn55DK/colourfully.png)

## Technologies Used

- HTML
- CSS (Flexbox)
- JavaScript
- Embedded JavaScript 
- Node.js
- Express
- Multer
- Vercel
- Cloudinary
- Microsoft Azure
- VS Code
- Canva, remove.bg, favicon.io

## Installation

Follow these steps to install and set up the project locally.

1. git clone https://github.com/teejcoder/colourfully.git
2. cd your-repository
3. npm install
4. npm start

# Things to add

- Create a config folder with a `.env` file and add the following as `key = value`
  - PORT = 2121 (can be any port example: 3000)
  - CLOUD_NAME = `your cloudinary cloud name`
  - CLOUD_API_KEY = `your cloudinary api key`
  - CLOUD_API_SECRET = `your cloudinary api secret`
  - MS_COMPUTER_VISION_SUBSCRIPTION_KEY = `your Microsoft Subscription Key`
  - MS_COMPUTER_VISION_ENDPOINT = `your Microsoft Computer Vision Endpoint`
  - MS_FACE_ENDPOINT = `your Microsoft Face Endpoint`
  - MS_FACE_SUB_KEY = `your Microsoft Face Key`

---

# Run

`npm start`

Image local on our machine, upload to cloudinary, cloudinary spits back a URL which we send to microsoft microsoft uses that hosted URL to do its machine learning tasks on.

# Install

`npm install`

---

# Acknowledgements

Thanks to Microsoft for providing the API.

# Contact

https://twitter.com/teejcoder
