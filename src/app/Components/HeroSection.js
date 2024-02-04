"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
	return (
		<section style={{height: '80svh'}}>
			{/* first container with Header and buttons */}
			<div className="grid grid-cols-1 sm:grid-cols-12 mt-8">
				<div className="col-span-7 place-self-center text-center sm:text-left">
					<h1 className="text-white mb-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-950 via-green-800 to-green-500">
							Hello, I'm{" "}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								"Cjay",
								1000,
								"a Front-end Dev",
								1000,
								"a Web Designer",
								1000,
								// 1000 is duration.. enter any other titles I want for myself here
							]}
							wrapper="span"
							speed={20}
							repeat={Infinity}
						/>
					</h1>
					<p className=" text-[#568203] text-base mg-6 sm:text-lg lg:text-xl">
						I am a Jr Developer looking to make my mark with Responsive and Fun designs across the industry and internet!
					</p>
					<div>
						<button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-black via-green-800 to-green-500 text-white">
							<span className="block px-5 py-2">
								Hire Me
							</span>
						</button>
						<button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-black via-green-800 to-green-500 hover:bg-slate-800 text-white mt-3 ">
							<span className="block bg-[#051113] hover:bg-slate-900 rounded-full px-5 py-2">
								Download Cv
							</span>
						</button>
					</div>
				</div>
				{/* 2nd container with Logo/img  */}
				<div className="col-span-5 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-gradient-to-br from-black to-green-700 w-[250px] h-[250px] relative lg:w-[375px] lg:h-[305px] mt-4">
						<Image
							src="/images/Logo.jpg"
							alt="main logo"
							style={{ borderRadius: "225px" }}
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default HeroSection;

// stopped at 11:22 of Next.js tutorial video on Youtube by webdecoded.
