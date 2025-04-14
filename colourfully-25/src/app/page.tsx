import React from 'react';
import ImageUpload from './image-upload/page';
import { Vortex } from './components/ui/vortex';
import { Button } from './components/ui/moving-border';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <header className="flex flex-col items-center justify-center h-screen text-center">
        <Vortex
          particleCount={1000}
        >
          <h1 className="text-5xl font-bold">Welcome to Colourfully</h1>
          <p className="mt-4 text-lg">Use our AI-driven tools to return a comprehensive colour palette of your images.</p>
          <Button
            borderRadius="1.75rem"
            className="dark:bg-slate-900 text-black text-white border-neutral-200 dark:border-slate-800"
          >
            Get Started!
          </Button>
        </Vortex>
      </header>
    </div>
  );
}

