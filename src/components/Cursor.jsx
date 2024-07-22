import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Cursor() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const mouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", mouseMove);

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
	}, []);

	return (
		<motion.div
			animate={{ x: position.x, y: position.y }}
			className="w-[50px] h-[50px] rounded-full border border-white bg-transparent fixed z-50 mobile:hidden"
		></motion.div>
	);
}

export default Cursor;
