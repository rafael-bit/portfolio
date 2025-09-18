'use client';

import * as React from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
	language: Language;
	setLanguage: (language: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

const translations = {
	pt: {
		// Settings
		'settings.title': 'Configurações',
		'settings.theme': 'Tema',
		'settings.language': 'Idioma',
		'theme.light': 'Claro',
		'theme.dark': 'Escuro',
		'theme.system': 'Sistema',
		'language.portuguese': 'Português',
		'language.english': 'Inglês',
		'settings.tooltip': 'Abrir configurações',

		// Home Section
		'home.greeting': 'Olá, eu sou',
		'home.title': 'Rafael Áquila',
		'home.subtitle': 'Desenvolvedor de Software',
		'home.description': 'Desenvolvedor de software. O cara que mexe com programas.',
		'home.viewWork': 'Ver Meu Trabalho',
		'home.getInTouch': 'Entre em Contato',

		// About Section
		'about.title': 'Sobre Mim',
		'about.story': 'Minha história',
		'about.story1': 'Trabalhei com diferentes equipes, ferramentas e camadas de desenvolvimento — transformando ideias em produtos reais e utilizáveis. Minha jornada começou com uma simples curiosidade: como o código molda o que vemos e com o que interagimos.',
		'about.story2': 'Hoje, projeto e construo aplicações de ponta a ponta — desde a criação de interfaces de usuário até a escrita da lógica que as alimenta.',
		'about.story3': 'Fora do trabalho, geralmente estou explorando novas tecnologias, contribuindo para projetos open-source ou compartilhando o que aprendo com outros.',
		'about.stats.lines': 'Linhas de Código Escritas',
		'about.stats.projects': 'Projetos Concluídos',
		'about.stats.bugs': 'Bugs Corrigidos',
		'about.stats.coffee': 'Xícaras de Café',

		// Values Section
		'values.title': 'O Que Eu Valorizo',
		'values.subtitle': 'Os princípios que guiam meu trabalho e abordagem ao desenvolvimento',
		'values.codeQuality.title': 'Qualidade do Código',
		'values.codeQuality.description': 'Foco em escrever código claro, consistente e sustentável que seja fácil de entender e estender.',
		'values.interface.title': 'Criação de Interfaces',
		'values.interface.description': 'Me preocupo em construir interfaces que não apenas pareçam ótimas, mas também se sintam intuitivas e polidas.',
		'values.performance.title': 'Rápido e Fluido',
		'values.performance.description': 'Otimizo cada camada da aplicação para garantir uma experiência suave, responsiva e confiável.',
		'values.teamwork.title': 'Trabalho em Equipe',
		'values.teamwork.description': 'Gosto de trabalhar com outros — alinhando ideias, compartilhando conhecimento e construindo produtos que realmente entregam.',

		// Projects Section
		'projects.title': 'Meus Projetos',
		'projects.subtitle': 'Uma mostra do meu trabalho recente',
		'projects.view': 'Ver',

		// Contact Section
		'contact.title': 'Entre em Contato',
		'contact.subtitle': 'Tem um projeto em mente? Vamos discutir como podemos trabalhar juntos para dar vida às suas ideias.',
		'contact.sendMessage': 'Enviar Mensagem',
		'contact.formDescription': 'Preencha o formulário e clique em "Abrir Email" para abrir seu cliente de email com as informações que você preencheu.',
		'contact.name': 'Nome',
		'contact.namePlaceholder': 'Seu nome completo',
		'contact.email': 'Email',
		'contact.emailPlaceholder': 'seu@email.com',
		'contact.subject': 'Assunto',
		'contact.subjectPlaceholder': 'Sobre o que é isso?',
		'contact.message': 'Mensagem',
		'contact.messagePlaceholder': 'Me conte mais sobre seu projeto...',
		'contact.send': 'Enviar Mensagem',
		'contact.sending': 'Enviando...',
		'contact.info': 'Informações de Contato',
		'contact.phone': 'Telefone',
		'contact.location': 'Localização',
		'contact.buildSomething': 'Vamos Construir Algo Incrível',
		'contact.buildDescription': 'Sempre estou animado para trabalhar em novos projetos e colaborar com pessoas apaixonadas. Seja você tenha um projeto específico em mente ou apenas queira conversar sobre tecnologia, sinta-se à vontade para entrar em contato!',

		// Toast Messages
		'toast.emailOpened': 'Email aberto! Preencha as informações e envie.',
		'toast.emailError': 'Email não pôde ser aberto automaticamente.',
		'toast.contactSubject': 'Contato do Portfólio',
	},
	en: {
		// Settings
		'settings.title': 'Settings',
		'settings.theme': 'Theme',
		'settings.language': 'Language',
		'theme.light': 'Light',
		'theme.dark': 'Dark',
		'theme.system': 'System',
		'language.portuguese': 'Portuguese',
		'language.english': 'English',
		'settings.tooltip': 'Open settings',

		// Home Section
		'home.greeting': 'Hello, I\'m',
		'home.title': 'Rafael Áquila',
		'home.subtitle': 'Software Developer',
		'home.description': 'Software Developer. The guy who messes with programs.',
		'home.viewWork': 'View My Work',
		'home.getInTouch': 'Get In Touch',

		// About Section
		'about.title': 'About Me',
		'about.story': 'My story',
		'about.story1': 'I\'ve worked across different teams, tools, and layers of development — turning ideas into real, usable products. My journey started with a simple curiosity: how code shapes what we see and interact with.',
		'about.story2': 'Today, I design and build applications end to end — from crafting user interfaces to writing the logic that powers them.',
		'about.story3': 'Outside of work, I\'m usually exploring new technologies, contributing to open-source, or sharing what I learn with others.',
		'about.stats.lines': 'Lines of Code Written',
		'about.stats.projects': 'Projects Completed',
		'about.stats.bugs': 'Bugs Fixed',
		'about.stats.coffee': 'Cups of Coffee',

		// Values Section
		'values.title': 'What I Value',
		'values.subtitle': 'The principles that guide my work and approach to development',
		'values.codeQuality.title': 'Code Quality',
		'values.codeQuality.description': 'I focus on writing clear, consistent, and maintainable code that\'s easy to understand and extend.',
		'values.interface.title': 'Interface Crafting',
		'values.interface.description': 'I care about building interfaces that not only look great, but also feel intuitive and polished.',
		'values.performance.title': 'Fast & Fluid',
		'values.performance.description': 'I optimize every layer of the application to ensure a smooth, responsive, and reliable experience.',
		'values.teamwork.title': 'Team Work',
		'values.teamwork.description': 'I enjoy working with others — aligning ideas, sharing knowledge, and building products that truly deliver.',

		// Projects Section
		'projects.title': 'My Projects',
		'projects.subtitle': 'A showcase of my recent work',
		'projects.view': 'View',

		// Contact Section
		'contact.title': 'Get In Touch',
		'contact.subtitle': 'Have a project in mind? Let\'s discuss how we can work together to bring your ideas to life.',
		'contact.sendMessage': 'Send a Message',
		'contact.formDescription': 'Fill out the form and click "Open Email" to open your email client with the information you filled in.',
		'contact.name': 'Name',
		'contact.namePlaceholder': 'Your full name',
		'contact.email': 'Email',
		'contact.emailPlaceholder': 'your@email.com',
		'contact.subject': 'Subject',
		'contact.subjectPlaceholder': 'What\'s this about?',
		'contact.message': 'Message',
		'contact.messagePlaceholder': 'Tell me more about your project...',
		'contact.send': 'Send Message',
		'contact.sending': 'Sending...',
		'contact.info': 'Contact Information',
		'contact.phone': 'Phone',
		'contact.location': 'Location',
		'contact.buildSomething': 'Let\'s Build Something Amazing',
		'contact.buildDescription': 'I\'m always excited to work on new projects and collaborate with passionate people. Whether you have a specific project in mind or just want to chat about technology, feel free to reach out!',

		// Toast Messages
		'toast.emailOpened': 'Email opened! Fill in the information and send.',
		'toast.emailError': 'Email could not be opened automatically.',
		'toast.contactSubject': 'Portfolio Contact',
	},
};

interface LanguageProviderProps {
	children: React.ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
	const [language, setLanguage] = React.useState<Language>('pt');

	React.useEffect(() => {
		const savedLanguage = localStorage.getItem('language-preference') as Language;
		if (savedLanguage && (savedLanguage === 'pt' || savedLanguage === 'en')) {
			setLanguage(savedLanguage);
		}
	}, []);

	const handleSetLanguage = (newLanguage: Language) => {
		setLanguage(newLanguage);
		localStorage.setItem('language-preference', newLanguage);
	};

	const t = (key: string): string => {
		return translations[language][key as keyof typeof translations[typeof language]] || key;
	};

	const value = {
		language,
		setLanguage: handleSetLanguage,
		t,
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = React.useContext(LanguageContext);
	if (context === undefined) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
}
