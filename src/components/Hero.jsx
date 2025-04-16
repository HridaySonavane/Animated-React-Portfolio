import React, { useState } from "react";
import { motion } from "framer-motion";

const textVariant = {
	initial: {
		x: -500,
		opacity: 0,
	},
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChilden: 0.1,
		},
	},
	scrollButton: {
		opacity: 0,
		y: 10,
		transition: {
			duration: 2,
			repeat: Infinity,
			repeatType: "mirror",
		},
	},
	buttonChange: {
		backgroundColor: "rgba(255, 255, 255, 1)",
		color: "rgba(0, 0, 0, 1)",
		scale: 1.08,
		transition: {
			duration: 0.1,
		},
	},
};
const sliderVariant = {
	initial: {
		x: 0,
	},
	animate: {
		x: "-220%",
		transition: {
			duration: 20,
			repeat: Infinity,
			repeatType: "mirror",
		},
	},
};
const imageVariant = {
	hover: {
		scale: 1.03,
		transition: {
			duration: 0.3,
		},
	},
};

const profileBoxVariant = {
	profAnimate: {
		scale: 1,
		y: 0,
		opacity: 1,
		filter: "blur(0px)",
		transition: {
			duration: 5,
			ease: "easeOut",
			staggerChildren: 0.3,
			delayChildren: 0.3,
			type: "spring",
			stiffness: 350,
			damping: 20,
		},
	},
	profExit: {
		scale: 0,
		y: 10,
		opacity: 0,
		filter: "blur(5px)",
		transition: {
			duration: 1,
			delay: 0.5,
			staggerChildren: 0.08,
			staggerDirection: -1,
			type: "spring",
		},
	},
};

const childVariant = {
	profAnimate: {
		opacity: 1,
		y: 0,
	},
	profExit: {
		opacity: 0,
		y: 30,
	},
};

function Hero() {
	const [isTapped, setIsTapped] = useState(false);

	const profileInfo = {
		name: "Hriday Sonavane",
		age: 18,
		prof: "Fullstack Developer",
	};

	return (
		<div className="h-[calc(100vh-100px)] bg-gradient-to-b from-primary to-[#111132] overflow-hidden relative">
			<div className="wrapper max-w-5xl h-full m-auto z-10">
				<motion.div
					variants={textVariant}
					initial="initial"
					animate="animate"
					className="textContainer w-1/2 h-full flex flex-col justify-center gap-10 z-10"
				>
					<motion.h2 className="text-2xl text-[#663399] font-bold tracking-[8px] leading-3 z-10">
						HRIDAY SONAWANE
					</motion.h2>
					<motion.h1
						variants={textVariant}
						className="font-bold text-[66px] leading-tight z-10 "
					>
						Web developer & UI Designer
					</motion.h1>
					<motion.div variants={textVariant} className="buttons z-10">
						<motion.button
							variants={textVariant}
							whileHover={"buttonChange"}
							whileTap={{ scale: 0.9 }}
						>
							See my Latest work
						</motion.button>
						<motion.button
							variants={textVariant}
							whileHover={"buttonChange"}
							whileTap={{ scale: 0.9 }}
						>
							<a href="#Contact">Contact Me</a>
						</motion.button>
					</motion.div>
					<motion.img
						variants={textVariant}
						animate="scrollButton"
						className="w-[45px]"
						src="/scroll.png"
						alt=""
					/>
				</motion.div>
			</div>
			<motion.div
				variants={sliderVariant}
				initial="initial"
				animate="animate"
				className="slidingTextContainer absolute w-1/2 text-[45vh] bottom-[-103px] whitespace-nowrap text-[#ffffff09] font-bold"
			>
				Writer Content Creator Influencer
			</motion.div>

			{/* profile pic */}
			<motion.div className="imageContainer h-full absolute top-0 right-0 flex justify-center items-center">
				<motion.img
					className="h-full w-full"
					src="/hero.png"
					variants={imageVariant}
					whileHover={"hover"}
					onClick={() => setIsTapped(!isTapped)}
				/>

				<motion.div
					className="profileInfoBox absolute m-auto w-[calc(100%-280px)] h-[calc(100%-360px)] bg-black/70 backdrop-blur-xl border border-[#CCCCCC] rounded-lg flex flex-col gap-0 justify-evenly py-2 ps-2 text-sm font-semibold font-mono leading-3 z-30 overflow-hidden"
					variants={profileBoxVariant}
					initial="profExit"
					// whileTap={"animate"}
					animate={isTapped ? "profAnimate" : "profExit"}
				>
					<motion.p
						className="text-[#FF204E] "
						variants={childVariant}
					>
						Name: <q>{profileInfo.name}</q>
					</motion.p>
					<motion.p
						className="text-[#80B3FF] "
						variants={childVariant}
					>
						Age: <q>{profileInfo.age}</q>
					</motion.p>
					<motion.p
						className="text-[#FF8F00] "
						variants={childVariant}
					>
						Profession: <q>{profileInfo.prof}</q>
					</motion.p>
				</motion.div>

				{/* <div className="profileInfo absolute top-0 left-0 m-auto w-full h-full flex justify-center items-center"></div> */}
			</motion.div>
		</div>
	);
}

export default Hero;
