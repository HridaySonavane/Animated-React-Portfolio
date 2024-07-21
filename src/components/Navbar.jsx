import { motion } from "framer-motion";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import {
	FaSquareGithub,
	FaSquareInstagram,
	FaLinkedin,
	FaSquareXTwitter,
} from "react-icons/fa6";

const variant = {
	initial: {
		y: -100,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			staggerChildren: 0.05,
			staggerDirection: -1,
			type: "spring",
			mass: 3,
			stiffness: 420,
			damping: 30,
		},
	},
};

const itemVariant = {
	initial: {
		y: -100,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
	},
	// buttonChange: {
	// 	backgroundColor: "rgba(255, 255, 255, 1)",
	// 	color: "rgba(0, 0, 0, 1)",
	// 	scale: 1.12,
	// 	transition: {
	// 		duration: 0.1,
	// 	},
	// },
	// instaChange: {
	// 	backgroundColor: "rgba(255, 255, 255, 1)",
	// 	color: "rgba(0, 0, 0, 1)",
	// 	scale: 1.12,
	// 	transition: {
	// 		duration: 0.1,
	// 	},
	// },
	// linkedinChange: {
	// 	backgroundColor: "rgba(255, 255, 255, 1)",
	// 	color: "rgba(0, 0, 0, 1)",
	// 	scale: 1.12,
	// 	transition: {
	// 		duration: 0.1,
	// 	},
	// },
	// twitterChange: {
	// 	backgroundColor: "rgba(255, 255, 255, 1)",
	// 	color: "rgba(0, 0, 0, 1)",
	// 	scale: 1.12,
	// 	transition: {
	// 		duration: 0.1,
	// 	},
	// },
};

function Navbar() {
	return (
		<div className="h-[100px]">
			{/* Sidebar */}
			<Sidebar />
			<div className="max-w-5xl m-auto flex items-center justify-between h-full ">
				<motion.span
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
				>
					Lama Dev
				</motion.span>
				<motion.div
					className="social flex gap-5"
					variants={variant}
					initial="initial"
					animate="animate"
				>
					<motion.a
						href="#"
						variants={itemVariant}
						whileHover={{ scale: 1.12, y: -7 }}
					>
						{/* <img src="/facebook.png" alt="" /> */}
						<FaSquareGithub className="" />
					</motion.a>
					<motion.a
						href="#"
						variants={itemVariant}
						whileHover={{ scale: 1.12, y: -7 }}
					>
						{/* <img src="/instagram.png" alt="" /> */}
						<FaLinkedin className="" />
					</motion.a>
					<motion.a
						href="#"
						variants={itemVariant}
						whileHover={{ scale: 1.12, y: -7 }}
					>
						{/* <img src="/youtube.png" alt="" /> */}
						<FaSquareXTwitter className="" />
					</motion.a>
					<motion.a
						href="#"
						variants={itemVariant}
						whileHover={{ scale: 1.12, y: -7 }}
					>
						{/* <img src="/dribbble.png" alt="" /> */}
						<FaSquareInstagram className="" />
					</motion.a>
				</motion.div>
			</div>
		</div>
	);
}

export default Navbar;
