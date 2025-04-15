import { Button } from "./ui/moving-border";

export default function AboutComponent() {
    return (
        <section id="about">
            <div className="container mx-auto text-center py-8">
                <h2 className="text-4xl sm:text-6xl py-4">About</h2>
                <div className="text-2xl sm:text-4xl px-4 my-6 space-y-6">
                    <p>
                        Colourfully is an app that lets users upload an image and returns a comprehensive breakdown of the colour palette in the image.
                    </p>
                    <p>
                        Colourfully uses Microsoft's Azure Image Analysis, built on advanced computer vision models. It is a powerful AI-powered service that extracts rich visual information from images.
                    </p>
                    <p>
                        This app is designed to be simple and easy to use. Users can upload an image by clicking the "Upload" button, and Colourfully will automatically analyze the image and display the colour palette.
                    </p>
                    <p>
                        Colourfully is built using Next.js, React, TypeScript, Tailwind CSS, Shadcn/ui and Aceternity.
                    </p>
                </div>
                <div className="space-x-4">
                    <a href='/image-upload'>
                        <Button
                            className="text-black text-white border-neutral-200 dark:border-slate-800"
                            borderRadius="1.75rem"
                        >
                            Get Started!
                        </Button>
                    </a>
                    <a href='https://tjmb.dev'>
                        <Button
                            className="rainbow-highlight text-black text-white border-neutral-200 dark:border-slate-800"
                            borderRadius="1.75rem"
                        >
                            Contact
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    )
}