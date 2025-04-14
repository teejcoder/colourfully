"use client";

import { useSearchParams } from "next/navigation";

export default function Results() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("imageUrl");

  if (!imageUrl) {
    return <p>Error: No image URL provided.</p>;
  }

  return (
    <div>
      <h1>Upload Successful</h1>
      <p>Your uploaded image:</p>
      <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
    </div>
  );
}