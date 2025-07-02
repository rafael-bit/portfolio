import Script from 'next/script';

interface StructuredDataProps {
	data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
	return (
		<Script
			id="structured-data"
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(data, null, 2),
			}}
		/>
	);
}

// Dados estruturados para a pessoa (Rafael Áquila)
export const personStructuredData = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Rafael Áquila',
	jobTitle: 'Full-Stack Developer',
	description: 'Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js and modern technologies.',
	url: 'https://rafaelaquila.com',
	sameAs: [
		'https://github.com/rafael-bit',
		'https://linkedin.com/in/rafael-aquila',
		'https://twitter.com/orafaelaquila',
		'https://bento.me/rafaelaquila'
	],
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Brumado',
		addressRegion: 'BA',
		addressCountry: 'BR'
	},
	email: 'raquila743@gmail.com',
	telephone: '+55-77-99966-0068',
	knowsAbout: [
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Node.js',
		'PHP',
		'Laravel',
		'Full-Stack Development',
		'Frontend Development',
		'Backend Development',
		'Web Development'
	],
	alumniOf: {
		'@type': 'Organization',
		name: 'Your University/School'
	}
};

// Dados estruturados para o website
export const websiteStructuredData = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'Rafael Áquila - Portfolio',
	description: 'Portfolio of Rafael Áquila, Full-Stack developer specializing in modern technologies.',
	url: 'https://rafaelaquila.com',
	author: {
		'@type': 'Person',
		name: 'Rafael Áquila'
	},
	inLanguage: 'en-US',
	copyrightYear: new Date().getFullYear(),
	genre: 'Technology',
	keywords: 'rafael áquila, developer, full-stack, react, next.js, typescript, portfolio'
};

// Dados estruturados para perfil profissional
export const professionalServiceStructuredData = {
	'@context': 'https://schema.org',
	'@type': 'ProfessionalService',
	name: 'Rafael Áquila - Web Development',
	description: 'Full-stack web development services, specializing in React, Next.js, TypeScript and Node.js.',
	provider: {
		'@type': 'Person',
		name: 'Rafael Áquila'
	},
	areaServed: {
		'@type': 'Country',
		name: 'Brazil'
	},
	serviceType: 'Web Development',
	url: 'https://rafaelaquila.com',
	priceRange: '$$'
}; 