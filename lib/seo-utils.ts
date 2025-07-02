export const generateProjectStructuredData = (projects: any[]) => {
	return {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		name: 'Rafael Áquila Projects',
		description: 'List of projects developed by Rafael Áquila',
		numberOfItems: projects.length,
		itemListElement: projects.map((project, index) => ({
			'@type': 'CreativeWork',
			position: index + 1,
			name: project.title,
			description: project.description,
			url: project.demo,
			author: {
				'@type': 'Person',
				name: 'Rafael Áquila'
			},
			programmingLanguage: project.technologies,
			dateCreated: new Date().getFullYear().toString(),
			keywords: project.technologies.join(', ')
		}))
	};
};

export const contactPageStructuredData = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	name: 'Contact - Rafael Áquila',
	description: 'Contact Rafael Áquila for web development projects',
	mainEntity: {
		'@type': 'Person',
		name: 'Rafael Áquila',
		jobTitle: 'Full-Stack Developer',
		email: 'raquila743@gmail.com',
		telephone: '+55-77-99966-0068',
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Brumado',
			addressRegion: 'BA',
			addressCountry: 'BR'
		}
	}
};

export const generateBreadcrumbStructuredData = (items: Array<{ name: string, url: string }>) => {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.name,
			item: item.url
		}))
	};
};

export const defaultMetaTags = {
	home: {
		title: 'Rafael Áquila - Full-Stack Developer | React, Next.js, TypeScript',
		description: 'Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js. See my portfolio with innovative projects and get in touch.',
		keywords: ['rafael áquila', 'full-stack developer', 'react', 'next.js', 'typescript', 'node.js', 'portfolio']
	},
	about: {
		title: 'About Me - Rafael Áquila | Experience and Values',
		description: 'Learn about my journey as a Full-Stack developer, professional experiences and values. Over 900K lines of code and 30+ projects.',
		keywords: ['about rafael áquila', 'developer experience', 'programmer career', 'full-stack developer']
	},
	projects: {
		title: 'Projects - Rafael Áquila | Development Portfolio',
		description: 'See my web development projects, including Nossa Vaquinha, Meu Nascimento, WSouza Sistemas and other innovative works.',
		keywords: ['rafael áquila projects', 'developer portfolio', 'nossa vaquinha', 'meu nascimento', 'wsouza sistemas']
	},
	contact: {
		title: 'Contact - Rafael Áquila | Let\'s Work Together',
		description: 'Get in touch to discuss your next project. Full-Stack developer available for freelance and collaborations.',
		keywords: ['contact rafael áquila', 'freelance developer', 'development quote', 'project collaboration']
	}
};

export const generateOpenGraphTags = (page: keyof typeof defaultMetaTags, customData?: Partial<typeof defaultMetaTags.home>) => {
	const defaultData = defaultMetaTags[page];
	const data = { ...defaultData, ...customData };

	return {
		title: data.title,
		description: data.description,
		url: `https://rafaelaquila.com${page === 'home' ? '' : `/${page}`}`,
	};
}; 