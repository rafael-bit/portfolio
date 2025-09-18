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
		<>
			<div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex-col items-center space-y-4">
				<Button
					variant="ghost"
					size="sm"
					onClick={onPrev}
					disabled={currentSection === 0}
					className="w-10 h-10 p-0 rounded-full backdrop-blur-glass border border-white/10 hover:border-blue-400 transition-all duration-300"
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
								? 'bg-blue-400 scale-125'
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
					className="w-10 h-10 p-0 rounded-full backdrop-blur-glass border border-white/10 hover:border-blue-400 transition-all duration-300"
				>
					<ChevronDown className="w-4 h-4" />
				</Button>
			</div>

			<div className="flex md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 items-center space-x-4">
				{/* Botão anterior */}
				<Button
					variant="ghost"
					size="sm"
					onClick={onPrev}
					disabled={currentSection === 0}
					className="w-12 h-12 p-0 rounded-full backdrop-blur-glass border border-white/10 hover:border-blue-400 transition-all duration-300"
				>
					<ChevronUp className="w-5 h-5" />
				</Button>

				{/* Indicadores - Mobile (centro) */}
				<div className="flex space-x-2">
					{Array.from({ length: totalSections }, (_, index) => (
						<button
							key={index}
							onClick={() => onNavigate(index)}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSection === index
								? 'bg-blue-400 scale-125'
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
					className="w-12 h-12 p-0 rounded-full backdrop-blur-glass border border-white/10 hover:border-blue-400 transition-all duration-300"
				>
					<ChevronDown className="w-5 h-5" />
				</Button>
			</div>
		</>
	);
}
