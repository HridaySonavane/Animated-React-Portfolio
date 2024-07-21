import React from "react";
import { motion } from "framer-motion";

function ToggleButton({ setOpen }) {
	return (
		<button
			className="h-[50px] w-[50px] rounded-full fixed top-[25px] left-[25px] bg-transparent border-none cursor-pointer flex items-center justify-center z-30"
			onClick={() => setOpen((prev) => !prev)}
			// onMouseOver={() => setHovered((prev) => !prev)}
		>
			<svg
				width="30px"
				height="30px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<motion.path
					stroke="#000000"
					strokeWidth="2"
					strokeLinecap="round"
					variants={{
						closed: { d: "M4 6L20 6" },
						open: { d: "M5 18L17 5.5" },
					}}
				/>
				<motion.path
					d="M4 12L20 12"
					stroke="#000000"
					strokeWidth="2"
					strokeLinecap="round"
					variants={{
						closed: { opacity: 1 },
						open: { opacity: 0 },
					}}
				/>
				<motion.path
					stroke="#000000"
					strokeWidth="2"
					strokeLinecap="round"
					variants={{
						closed: { d: "M4 18L20 18" },
						open: { d: "M5 5.5L17 18" },
					}}
				/>
			</svg>
		</button>
	);
}

export default ToggleButton;
