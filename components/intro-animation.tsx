'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
	{ code: 'en', text: 'Hi, this is Rafael\'s portfolio' },
	{ code: 'pt-BR', text: 'Oi, este é o portfólio do Rafael' },
	{ code: 'fr', text: 'Salut, voici le portfolio de Rafael' },
];

export default function IntroAnimation() {
	const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(true);
	const [isFadingOut, setIsFadingOut] = useState(false);

	useEffect(() => {
		const languageInterval = setInterval(() => {
			setCurrentLanguageIndex((prev) => {
				if (prev < languages.length - 1) {
					return prev + 1;
				} else {
					clearInterval(languageInterval);
					// Inicia o fade out suave
					setIsFadingOut(true);
					// Remove o componente após a animação
					setTimeout(() => setIsVisible(false), 1000);
					return prev;
				}
			});
		}, 2000);

		return () => clearInterval(languageInterval);
	}, []);

	if (!isVisible) return null;

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: isFadingOut ? 0 : 1 }}
			transition={{
				duration: isFadingOut ? 1 : 0.5,
				ease: isFadingOut ? "easeInOut" : "easeOut"
			}}
			className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
		>
			<div className="text-center">
				<AnimatePresence mode="wait">
					<motion.div
						key={currentLanguageIndex}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
						className="text-4xl md:text-6xl font-light text-white"
					>
						{languages[currentLanguageIndex].text}
					</motion.div>
				</AnimatePresence>
			</div>
		</motion.div>
	);
}
