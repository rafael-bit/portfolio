import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { StructuredData } from '@/components/structured-data';
import { generateBreadcrumbStructuredData } from '@/lib/seo-utils';

interface BreadcrumbItem {
	name: string;
	href: string;
}

interface BreadcrumbsProps {
	items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
	const breadcrumbItems = [
		{ name: 'Home', url: 'https://rafaelaquila.com' },
		...items.map(item => ({ name: item.name, url: `https://rafaelaquila.com${item.href}` }))
	];

	const structuredData = generateBreadcrumbStructuredData(breadcrumbItems);

	return (
		<>
			<StructuredData data={structuredData} />
			<nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
				<Link
					href="/"
					className="flex items-center hover:text-cyan-400 transition-colors"
					aria-label="Back to homepage"
				>
					<Home className="w-4 h-4" />
				</Link>

				{items.map((item, index) => (
					<div key={item.href} className="flex items-center space-x-2">
						<ChevronRight className="w-4 h-4" />
						{index === items.length - 1 ? (
							<span className="text-white font-medium" aria-current="page">
								{item.name}
							</span>
						) : (
							<Link
								href={item.href}
								className="hover:text-cyan-400 transition-colors"
							>
								{item.name}
							</Link>
						)}
					</div>
				))}
			</nav>
		</>
	);
} 