import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax({ type }) {
	const ref = useRef();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"],
	});

	const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
	const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
	const xStar = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
	return (
		<motion.div
			className={`parallax w-full h-full relative flex justify-center items-center overflow-hidden ${
				type === "services"
					? "bg-gradient-to-b from-[#111132] to-primary"
					: "bg-gradient-to-b from-[#111132] to-[#505064]"
			}`}
			ref={ref}
		>
			<motion.h1
				style={{ y: yText }}
				className="text-7xl font-semibold z-20 text-white"
			>
				{type === "services" ? "What We Do?" : "What We Did"}
			</motion.h1>
			<motion.div className="mountains bg-[url('/mountains.png')] bg-cover bg-bottom absolute w-full h-full z-20"></motion.div>
			<motion.div
				style={{ y: yBg }}
				className={`planets ${
					type === "services"
						? "bg-[url('/planets.png')]"
						: "bg-[url('/sun.png')]"
				} bg-cover bg-bottom absolute w-full h-full z-10`}
			></motion.div>
			<motion.div
				style={{
					x: xStar,
				}}
				className="stars bg-[url('/stars.png')] bg-cover bg-bottom absolute w-full h-full"
			></motion.div>
		</motion.div>
	);
}

export default Parallax;
