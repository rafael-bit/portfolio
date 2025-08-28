'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const [showTooltip, setShowTooltip] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	const getThemeIcon = () => {
		switch (theme) {
			case 'light':
				return <Sun className="w-5 h-5" />;
			case 'dark':
				return <Moon className="w-5 h-5" />;
			default:
				return <Monitor className="w-5 h-5" />;
		}
	};

	const getNextTheme = () => {
		switch (theme) {
			case 'light':
				return 'dark';
			case 'dark':
				return 'system';
			default:
				return 'light';
		}
	};

	const getThemeLabel = (themeName: string) => {
		switch (themeName) {
			case 'light':
				return 'Claro';
			case 'dark':
				return 'Escuro';
			case 'system':
				return 'Sistema';
			default:
				return 'Sistema';
		}
	};

	const handleToggle = () => {
		setTheme(getNextTheme());
	};

	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.3, delay: 0.5 }}
			className="fixed bottom-6 right-6 z-50"
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={() => setShowTooltip(false)}
		>
			<Button
				onClick={handleToggle}
				size="lg"
				variant="ghost"
				className="w-14 h-14 rounded-full theme-toggle-bubble shadow-lg hover:shadow-xl"
				aria-label={`Mudar para tema ${getThemeLabel(getNextTheme())}`}
			>
				<motion.div
					key={theme}
					initial={{ rotate: -180, opacity: 0 }}
					animate={{ rotate: 0, opacity: 1 }}
					transition={{ duration: 0.3 }}
				>
					{getThemeIcon()}
				</motion.div>
			</Button>

			{/* Tooltip */}
			<AnimatePresence>
				{showTooltip && (
					<motion.div
						initial={{ opacity: 0, y: 10, scale: 0.9 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 10, scale: 0.9 }}
						transition={{ duration: 0.2 }}
						className="absolute bottom-full right-0 mb-3 px-3 py-2 text-sm text-white theme-tooltip rounded-lg whitespace-nowrap"
					>
						Mudar para {getThemeLabel(getNextTheme())}
						<div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent tooltip-arrow"></div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
