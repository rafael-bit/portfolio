'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Sun, Moon, Monitor, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/language-provider';

export function SettingsToggle() {
	const [mounted, setMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [showSettingsTooltip, setShowSettingsTooltip] = useState(false);
	const [showThemeTooltip, setShowThemeTooltip] = useState(false);
	const [showLanguageTooltip, setShowLanguageTooltip] = useState(false);
	const { theme, setTheme } = useTheme();
	const { language, setLanguage, t } = useLanguage();

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
				return t('theme.light');
			case 'dark':
				return t('theme.dark');
			case 'system':
				return t('theme.system');
			default:
				return t('theme.system');
		}
	};

	const getLanguageLabel = (lang: string) => {
		switch (lang) {
			case 'pt':
				return t('language.portuguese');
			case 'en':
				return t('language.english');
			default:
				return t('language.portuguese');
		}
	};

	const handleThemeToggle = () => {
		setTheme(getNextTheme());
	};

	const handleLanguageToggle = () => {
		setLanguage(language === 'pt' ? 'en' : 'pt');
	};

	return (
		<motion.div
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ duration: 0.3, delay: 0.5 }}
			className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
		>
			{/* Botão de Settings */}
			<motion.div
				className="relative"
				onMouseEnter={() => setShowSettingsTooltip(true)}
				onMouseLeave={() => setShowSettingsTooltip(false)}
			>
				<Button
					onClick={() => setIsOpen(!isOpen)}
					size="lg"
					variant="ghost"
					className="w-14 h-14 rounded-full theme-toggle-bubble shadow-lg hover:shadow-xl"
					aria-label={t('settings.tooltip')}
				>
					<motion.div
						animate={{ rotate: isOpen ? 180 : 0 }}
						transition={{ duration: 0.3 }}
					>
						<Settings className="w-5 h-5" />
					</motion.div>
				</Button>

				{/* Tooltip do Settings */}
				<AnimatePresence>
					{showSettingsTooltip && !isOpen && (
						<motion.div
							initial={{ opacity: 0, y: 10, scale: 0.9 }}
							animate={{ opacity: 1, y: 0, scale: 1 }}
							exit={{ opacity: 0, y: 10, scale: 0.9 }}
							transition={{ duration: 0.2 }}
							className="absolute bottom-full right-0 mb-3 px-3 py-2 text-sm text-white theme-tooltip rounded-lg whitespace-nowrap"
						>
							{t('settings.tooltip')}
							<div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent tooltip-arrow"></div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>

			{/* Toggles que aparecem quando settings está aberto */}
			<AnimatePresence>
				{isOpen && (
					<>
						{/* Toggle de Idioma */}
						<motion.div
							initial={{ scale: 0, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0, opacity: 0, y: 20 }}
							transition={{ duration: 0.3, delay: 0.1 }}
							className="relative"
							onMouseEnter={() => setShowLanguageTooltip(true)}
							onMouseLeave={() => setShowLanguageTooltip(false)}
						>
							<Button
								onClick={handleLanguageToggle}
								size="lg"
								variant="ghost"
								className="w-14 h-14 rounded-full theme-toggle-bubble shadow-lg hover:shadow-xl"
								aria-label={`Mudar para ${getLanguageLabel(language === 'pt' ? 'en' : 'pt')}`}
							>
								<motion.div
									key={language}
									initial={{ rotate: -180, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<Globe className="w-5 h-5" />
								</motion.div>
							</Button>

							{/* Tooltip do Idioma */}
							<AnimatePresence>
								{showLanguageTooltip && (
									<motion.div
										initial={{ opacity: 0, y: 10, scale: 0.9 }}
										animate={{ opacity: 1, y: 0, scale: 1 }}
										exit={{ opacity: 0, y: 10, scale: 0.9 }}
										transition={{ duration: 0.2 }}
										className="absolute bottom-full right-0 mb-3 px-3 py-2 text-sm text-white theme-tooltip rounded-lg whitespace-nowrap"
									>
										Mudar para {getLanguageLabel(language === 'pt' ? 'en' : 'pt')}
										<div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent tooltip-arrow"></div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>

						{/* Toggle de Tema */}
						<motion.div
							initial={{ scale: 0, opacity: 0, y: 20 }}
							animate={{ scale: 1, opacity: 1, y: 0 }}
							exit={{ scale: 0, opacity: 0, y: 20 }}
							transition={{ duration: 0.3, delay: 0.2 }}
							className="relative"
							onMouseEnter={() => setShowThemeTooltip(true)}
							onMouseLeave={() => setShowThemeTooltip(false)}
						>
							<Button
								onClick={handleThemeToggle}
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

							{/* Tooltip do Tema */}
							<AnimatePresence>
								{showThemeTooltip && (
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
					</>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
