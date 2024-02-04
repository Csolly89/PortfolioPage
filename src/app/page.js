import Image from "next/image";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import ProjectSection from './Components/ProjectsSections'

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#000b0d]">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<AboutSection />
				<ProjectSection />
			</div>
		</main>
	);
}

// left off at 54.1 of Nextjs portfolio tutorial by webdecoded
