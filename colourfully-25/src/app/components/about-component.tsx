import { Button } from "./ui/moving-border";

export default function AboutComponent() {
    return (
        <section id="about">
            <div className="container mx-auto text-center py-8">
                <h2 className="text-4xl sm:text-6xl py-4">About</h2>
                <div className="text-2xl sm:text-4xl px-4 my-6">
                    <p>
                        Colourfully is a web application that lets users upload an image and returns a comprehensive breakdown of the colour palette in the image.
                    </p> <br/>
                    <p>
                        Colourfully uses Microsoft's Azure Image Analysis which is built on advanced computer vision models and is a powerful AI-powered service that extracts rich visual information from images.
                    </p> <br/>
                    <p>
                        This app is designed to be simple and easy to use. Users can upload an image by clicking the "Upload" button, and Colourfully will automatically analyze the image and display the colour palette.
                    </p> <br/>
                    <p>
                        Colourfully is built using Next.js, React, TypeScript and Tailwind CSS.
                    </p>
                </div>
                <a href='/image-upload'>
                    <Button
                        className="dark:bg-slate-900 text-black text-white border-neutral-200 dark:border-slate-800"
                        borderRadius="1.75rem"
                    >
                      Get Started!
                    </Button>
                </a>
            </div>
        </section>
    )
}