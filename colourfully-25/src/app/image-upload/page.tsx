"use client";

import { useState, useEffect } from 'react';

export default function ImageUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isClient, setIsClient] = useState(false); // Track if the component is running on the client

  useEffect(() => {
    // Ensure this code only runs on the client
    setIsClient(true);

    // Retrieve persisted data from localStorage
    const savedData = localStorage.getItem("analysisResult");
    if (savedData) {
      setAnalysisResult(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    // Persist analysisResult to localStorage whenever it changes
    if (analysisResult) {
      localStorage.setItem("analysisResult", JSON.stringify(analysisResult));
    }
  }, [analysisResult]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('file-to-upload', file);

      // First, upload the image to Cloudinary
      const uploadResponse = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const uploadData = await uploadResponse.json();
      if (!uploadResponse.ok) {
        throw new Error(uploadData.error);
      }

      // Use the uploaded image URL to analyze the image
      const analyseResponse = await fetch('/api/analyse', {
        method: 'POST',
        body: JSON.stringify({ 'image-url': uploadData.imageUrl }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const analyseData = await analyseResponse.json();
      if (analyseResponse.ok) {
        setAnalysisResult(analyseData); // Store the analysis result
      } else {
        throw new Error(analyseData.error);
      }
    } catch (error) {
      console.error('Processing failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
      const maxSize = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(selectedFile.type)) {
        alert('Invalid file type. Please upload a JPG, PNG, or SVG image.');
        return;
      }

      if (selectedFile.size > maxSize) {
        alert('File size exceeds the 5MB limit.');
        return;
      }

      setFile(selectedFile);
    }
  };

  return (
    <div className="text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-7xl font-bold rainbow-highlight">Colourfully</h1>
        <span>Here we go!</span>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block mb-2">Upload an image.</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.svg"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            disabled={!file || loading}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded disabled:bg-gray-400"
          >
            {loading ? 'Processing...' : 'Analyze Image'}
          </button>
        </form>

        {analysisResult && (
          <div className="mt-8 p-4 w-full rounded-xl max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Analysis Result</h2>
            <img
              src={analysisResult.imageUrl}
              alt="Uploaded Image"
              className="w-full max-w-xs mx-auto mb-4 rounded-xl"
            />
            <div className="space-y-4 ">
              <h3 className="text-lg font-semibold">Dominant Colors</h3>
              <div className="flex items-center gap-4">
                <span className="block w-8 h-8 rounded" style={{ backgroundColor: analysisResult.colorScheme.dominantColorForeground }}></span>
                <p>Foreground: {analysisResult.colorScheme.dominantColorForeground}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="block w-8 h-8 rounded" style={{ backgroundColor: analysisResult.colorScheme.dominantColorBackground }}></span>
                <p>Background: {analysisResult.colorScheme.dominantColorBackground}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="block w-8 h-8 rounded" style={{ backgroundColor: `#${analysisResult.colorScheme.accentColor}` }}></span>
                <p>Accent: #{analysisResult.colorScheme.accentColor}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold my-4">Palette</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {Object.entries(analysisResult.palette).map(([key, value]: any) => (
                  <div key={key} className="flex items-center gap-4">
                    <span
                      className="block w-8 h-8 rounded"
                      style={{ backgroundColor: `rgb(${value.rgb.join(",")})` }}
                    ></span>
                    <div>
                      <p className="font-medium">{key}</p>
                      <p className="text-sm text-gray-600">Population: {value.population}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}