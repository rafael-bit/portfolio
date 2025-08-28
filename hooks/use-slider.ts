'use client';

import { useState, useEffect, useCallback } from 'react';

export function useSlider(totalSections: number) {
	const [currentSection, setCurrentSection] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);

	const navigateToSection = useCallback((section: number) => {
		if (section >= 0 && section < totalSections) {
			setCurrentSection(section);

			// Scroll para a seção com posicionamento exato
			const targetSection = document.getElementById(`section-${section}`);
			if (targetSection) {
				const targetPosition = targetSection.offsetTop;

				// Scroll suave como no site do Guilherme Sella
				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				});
			}
		}
	}, [totalSections]);

	const nextSection = useCallback(() => {
		navigateToSection(currentSection + 1);
	}, [currentSection, navigateToSection]);

	const prevSection = useCallback(() => {
		navigateToSection(currentSection - 1);
	}, [currentSection, navigateToSection]);

	// Função para forçar o scroll para o início da seção atual se necessário
	const ensureSectionAlignment = useCallback(() => {
		const currentSectionElement = document.getElementById(`section-${currentSection}`);
		if (currentSectionElement) {
			const sectionTop = currentSectionElement.offsetTop;
			const currentScroll = window.scrollY;
			const tolerance = 100; // Tolerância maior para fluidez

			// Se não está alinhado com a seção atual, forçar o alinhamento
			if (Math.abs(currentScroll - sectionTop) > tolerance) {
				window.scrollTo({
					top: sectionTop,
					behavior: 'smooth'
				});
			}
		}
	}, [currentSection]);

	// Detectar mudança de seção baseado no scroll
	useEffect(() => {
		const handleScroll = () => {
			const sections = Array.from({ length: totalSections }, (_, i) =>
				document.getElementById(`section-${i}`)
			).filter(Boolean);

			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;
			const centerPosition = scrollPosition + (windowHeight / 2);

			// Encontrar a seção mais próxima do centro da tela
			let closestSection = 0;
			let minDistance = Infinity;

			sections.forEach((section, index) => {
				if (section) {
					const sectionTop = section.offsetTop;
					const sectionCenter = sectionTop + (section.offsetHeight / 2);
					const distance = Math.abs(centerPosition - sectionCenter);

					if (distance < minDistance) {
						minDistance = distance;
						closestSection = index;
					}
				}
			});

			if (currentSection !== closestSection) {
				setCurrentSection(closestSection);
			}
		};

		// Throttle suave para performance
		let ticking = false;
		const throttledHandleScroll = () => {
			if (!ticking) {
				requestAnimationFrame(() => {
					handleScroll();
					ticking = false;
				});
				ticking = true;
			}
		};

		window.addEventListener('scroll', throttledHandleScroll, { passive: true });
		return () => window.removeEventListener('scroll', throttledHandleScroll);
	}, [currentSection, totalSections]);

	// Verificar alinhamento quando a seção muda (removido para fluidez)
	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		ensureSectionAlignment();
	// 	}, 50);

	// 	return () => clearTimeout(timer);
	// }, [currentSection, ensureSectionAlignment]);

	// Inicializar na primeira seção
	useEffect(() => {
		const firstSection = document.getElementById('section-0');
		if (firstSection && window.scrollY === 0) {
			window.scrollTo({
				top: 0,
				behavior: 'instant'
			});
		}
	}, []);

	// Navegação por teclado
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowDown':
				case 'PageDown':
					e.preventDefault();
					nextSection();
					break;
				case 'ArrowUp':
				case 'PageUp':
					e.preventDefault();
					prevSection();
					break;
				case 'Home':
					e.preventDefault();
					navigateToSection(0);
					break;
				case 'End':
					e.preventDefault();
					navigateToSection(totalSections - 1);
					break;
			}
		};

		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [nextSection, prevSection, navigateToSection, totalSections]);

	return {
		currentSection,
		navigateToSection,
		nextSection,
		prevSection,
		ensureSectionAlignment
	};
}
