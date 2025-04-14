"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ImageUpload() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null); // State to store the analysis result

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

  return (
    <div className="text-white grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <h1 className="text-3xl font-bold">Colourfully</h1>
        
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="mb-4">
              <label className="block mb-2">Upload an image for color analysis</label>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.svg"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
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
            <div className="mt-8 p-4 border rounded">
              <h2 className="text-xl font-bold mb-4">Analysis Result</h2>
              <img 
                src={analysisResult.imageUrl} 
                alt="Uploaded Image" 
                className="w-full max-w-xs mx-auto mb-4 rounded"
              />
              <pre className="text-sm whitespace-pre-wrap">
                {JSON.stringify(analysisResult, null, 2)}
              </pre>
            </div>
          )}

          <div className="text-center">
            <p className="mb-4">Sign in to analyze your images</p>
            <button 
              onClick={() => router.push('/login')}
              className="bg-blue-600 text-white py-2 px-4 rounded"
            >
              Log In
            </button>
          </div>
      </main>
    </div>
  );
}