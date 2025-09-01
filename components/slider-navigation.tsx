'use client';

import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SliderNavigationProps {
	currentSection: number;
	totalSections: number;
	onNavigate: (section: number) => void;
	onNext: () => void;
	onPrev: () => void;
}

export function SliderNavigation({
	currentSection,
	totalSections,
	onNavigate,
	onNext,
	onPrev
}: SliderNavigationProps) {
	return (
		<div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col items-center space-y-4">
			{/* Botão anterior */}
			<Button
				variant="ghost"
				size="sm"
				onClick={onPrev}
				disabled={currentSection === 0}
				className="w-10 h-10 p-0 rounded-full backdrop-blur-glass border border-white/10 hover:border-cyan-400 transition-all duration-300"
			>
				<ChevronUp className="w-4 h-4" />
			</Button>

			{/* Indicadores */}
			<div className="flex flex-col space-y-2">
				{Array.from({ length: totalSections }, (_, index) => (
					<button
						key={index}
						onClick={() => onNavigate(index)}
						className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSection === index
							? 'bg-cyan-400 scale-125'
							: 'bg-white/30 hover:bg-white/50'
							}`}
					/>
				))}
			</div>

			{/* Botão próximo */}
			<Button
				variant="ghost"
				size="sm"
				onClick={onNext}
				disabled={currentSection === totalSections - 1}
				className="w-10 h-10 p-0 rounded-full backdrop-blur-glass border border-white/10 hover:border-cyan-400 transition-all duration-300"
			>
				<ChevronDown className="w-4 h-4" />
			</Button>
		</div>
	);
}
