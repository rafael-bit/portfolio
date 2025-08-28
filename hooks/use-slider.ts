'use client';

import { useState, useEffect, useCallback } from 'react';

export function useSlider(totalSections: number) {
	const [currentSection, setCurrentSection] = useState(0);
	const [isScrolling, setIsScrolling] = useState(false);

	const navigateToSection = useCallback((section: number) => {
		if (section >= 0 && section < totalSections && !isScrolling) {
			setIsScrolling(true);
			setCurrentSection(section);

			// Scroll para a seção com posicionamento exato
			const targetSection = document.getElementById(`section-${section}`);
			if (targetSection) {
				const targetPosition = targetSection.offsetTop;

				// Scroll instantâneo
				window.scrollTo({
					top: targetPosition,
					behavior: 'smooth'
				});
			}

			// Reset do estado de scrolling após a animação
			setTimeout(() => setIsScrolling(false), 800);
		}
	}, [totalSections, isScrolling]);

	const nextSection = useCallback(() => {
		navigateToSection(currentSection + 1);
	}, [currentSection, navigateToSection]);

	const prevSection = useCallback(() => {
		navigateToSection(currentSection - 1);
	}, [currentSection, navigateToSection]);

	// Função para forçar o scroll para o início da seção atual se necessário
	const ensureSectionAlignment = useCallback(() => {
		if (isScrolling) return;

		const currentSectionElement = document.getElementById(`section-${currentSection}`);
		if (currentSectionElement) {
			const sectionTop = currentSectionElement.offsetTop;
			const currentScroll = window.scrollY;
			const tolerance = 50; // Tolerância fixa de 50px

			// Se não está alinhado com a seção atual, forçar o alinhamento
			if (Math.abs(currentScroll - sectionTop) > tolerance) {
				setIsScrolling(true);
				window.scrollTo({
					top: sectionTop,
					behavior: 'smooth'
				});
				setTimeout(() => setIsScrolling(false), 600);
			}
		}
	}, [currentSection, isScrolling]);

	// Detectar mudança de seção baseado no scroll
	useEffect(() => {
		const handleScroll = () => {
			if (isScrolling) return;

			const sections = Array.from({ length: totalSections }, (_, i) =>
				document.getElementById(`section-${i}`)
			).filter(Boolean);

			const scrollPosition = window.scrollY;
			const windowHeight = window.innerHeight;
			const threshold = windowHeight * 0.4; // 40% da altura da tela

			sections.forEach((section, index) => {
				if (section) {
					const sectionTop = section.offsetTop;
					const sectionBottom = sectionTop + section.offsetHeight;

					// Se o scroll está dentro da seção
					if (scrollPosition >= sectionTop - threshold && scrollPosition < sectionBottom - threshold) {
						if (currentSection !== index) {
							setCurrentSection(index);
						}
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, [currentSection, totalSections, isScrolling]);

	// Verificar alinhamento quando a seção muda
	useEffect(() => {
		const timer = setTimeout(() => {
			ensureSectionAlignment();
		}, 50);

		return () => clearTimeout(timer);
	}, [currentSection, ensureSectionAlignment]);

	// Inicializar na primeira seção
	useEffect(() => {
		const timer = setTimeout(() => {
			const firstSection = document.getElementById('section-0');
			if (firstSection && window.scrollY === 0) {
				window.scrollTo({
					top: 0,
					behavior: 'instant'
				});
			}
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	// Navegação por teclado
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (isScrolling) return;

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
	}, [nextSection, prevSection, navigateToSection, totalSections, isScrolling]);

	return {
		currentSection,
		navigateToSection,
		nextSection,
		prevSection,
		isScrolling,
		ensureSectionAlignment
	};
}
