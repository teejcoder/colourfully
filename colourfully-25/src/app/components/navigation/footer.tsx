

export default function Footer(){
    return (
        <footer className="bg-black text-white py-4 flex gap-[24px] flex-wrap items-center justify-center bg-black text-white h-40">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Colourfully.</p>
                <p>Made with ❤️ by <a href="https://tjmb.dev"><span className="hover:underline">tjmb.dev</span></a></p>
            </div>
        </footer>
    )
}