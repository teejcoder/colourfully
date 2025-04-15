import React from 'react';
import { Vortex } from './components/ui/vortex';
import { Button } from './components/ui/moving-border';
import AboutComponent from './components/about-component';

export default function Home() {
  return (
    <div className="relative min-h-screen text-white">
      <header className="relative flex flex-col items-center justify-center h-screen text-center">
        <Vortex
          particleCount={1000}
          baseHue={123412}
        >
          <h1 className="text-7xl font-bold">Welcome to Colourfully</h1>
          <p className="mt-4 text-lg text-balance">Use our AI-driven tools to return a comprehensive colour palette of your images.</p>
          <a href='/image-upload'>
            <Button
              borderRadius="1.75rem"
              className="rainbow-highlight dark:bg-slate-900 text-black text-white border-neutral-200 dark:border-slate-800"
            >
              Get Started!
            </Button>
          </a>
        </Vortex>
      </header>
      <AboutComponent/>
    </div>
  );
}

