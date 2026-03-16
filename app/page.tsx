'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ExternalLink, Code, Palette, Zap, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { SliderNavigation } from '@/components/slider-navigation';
import { useSlider } from '@/hooks/use-slider';
import Image from 'next/image';
import IntroAnimation from '@/components/intro-animation';
import { useLanguage } from '@/components/language-provider';
import { PhotoWall } from '@/components/photo-wall';

const projects = [
  {
    id: 1,
    title: 'Nossa Vaquinha',
    description: 'Nossa Vaquinha is a platform that allows you to create online collective fundraising campaigns through donations. All funds raised are securely transferred to a bank account registered under the same CPF or CNPJ used when creating the beneficiary account.',
    image: '/nossavaquinha.png',
    technologies: ['TypeScript', 'React.JS', 'Next.JS', 'Node.JS', 'Express.JS'],
    category: 'Full-Stack',
    demo: 'https://www.nossavaquinha.com.br',
    featured: true,
  },
  {
    id: 2,
    title: 'Meu Nascimento',
    description: 'As team lead, I coordinated tasks, led code reviews and deployments, and supported the team throughout the project. I contributed to key features, UI development, and API integrations. The platform now supports over 12,000 users and 17,000 events, reflecting its growth and impact.',
    image: '/meunascimento.png',
    technologies: ['TypeScript', 'React.JS', 'Next.JS', 'Node.JS', 'Express.JS'],
    category: 'Front-End Engineer',
    demo: 'https://meunascimento.com.br',
    featured: true,
  },
  {
    id: 3,
    title: 'WSouza Sistemas',
    description: 'I contributed to the development of key features, interfaces, and integrations for Bravo, always focusing on performance, stability, and the platform\'s educational goals. Today, it\'s a flexible school management system used by both public and private institutions, offering modules for enrollment, attendance, reporting, virtual learning, and administrative automation.',
    image: '/wsouza.png',
    technologies: ['PHP', 'MVC', 'Laravel', 'Bootstrap', 'HTML', 'CSS'],
    category: 'Full-Stack',
    demo: 'https://ws.dev.br/ws4',
    featured: true,
  },
];

const getStats = (t: (key: string) => string) => [
  { label: t('about.stats.lines'), value: '900K+' },
  { label: t('about.stats.projects'), value: '30+' },
  { label: t('about.stats.bugs'), value: '∞' },
  { label: t('about.stats.coffee'), value: '1000+' },
];

const getValues = (t: (key: string) => string) => [
  {
    icon: Code,
    title: t('values.codeQuality.title'),
    description: t('values.codeQuality.description'),
  },
  {
    icon: Palette,
    title: t('values.interface.title'),
    description: t('values.interface.description'),
  },
  {
    icon: Zap,
    title: t('values.performance.title'),
    description: t('values.performance.description'),
  },
  {
    icon: Users,
    title: t('values.teamwork.title'),
    description: t('values.teamwork.description'),
  },
];

// Galeria: loop para imagens profile1, profile2, ... em public/
// Aumente PROFILE_IMAGE_MAX se adicionar mais imagens (ex.: profile8, profile9)
const PROFILE_IMAGE_MAX = 20;
const PROFILE_IMAGE_EXT = 'jpg';

function getProfileImageSources(): { id: number; src: string }[] {
  return Array.from({ length: PROFILE_IMAGE_MAX }, (_, i) => ({
    id: i + 1,
    src: `/profile${i + 1}.${PROFILE_IMAGE_EXT}`,
  }));
}

const getCategoryColorClass = (category: string) => {
  switch (category) {
    case 'Frontend':
      return 'from-blue-500 to-blue-400';
    case 'Backend':
      return 'from-slate-500 to-slate-400';
    case 'Database':
      return 'from-gray-500 to-gray-400';
    case 'DevOps & Cloud':
      return 'from-blue-600 to-slate-500';
    case 'Tools':
      return 'from-slate-600 to-gray-500';
    default:
      return 'from-gray-500 to-slate-400';
  }
};

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [profileImages] = useState(() => getProfileImageSources());
  const { t } = useLanguage();

  const totalSections = 5; // Home, About, Values, Projects, PhotoWall
  const { currentSection, navigateToSection, nextSection, prevSection } = useSlider(totalSections);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <IntroAnimation />
      <div className={`relative section-slider section-base-bg ${currentSection === 0 ? 'section-bg-home' :
        currentSection === 1 ? 'section-bg-about' :
          currentSection === 2 ? 'section-bg-values' :
            currentSection === 3 ? 'section-bg-skills' :
              currentSection === 4 ? 'section-bg-projects' :
                'section-bg-contact'}`}>
        {/* Overlay suave para transições */}
        <div className="section-overlay" />
        <SliderNavigation
          currentSection={currentSection}
          totalSections={totalSections}
          onNavigate={navigateToSection}
          onNext={nextSection}
          onPrev={prevSection}
        />

        <section id="section-0" className="relative min-h-screen md:h-screen flex items-center justify-center px-4 section-content py-8 md:py-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-slate-500/10 to-gray-500/10 animate-pulse" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Content - Mobile First */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:hidden order-1"
              >
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                    <Image
                      src="/rafaelaquila.jpg"
                      alt="Rafael Áquila - Full-Stack Developer"
                      fill
                      className="object-cover rounded-2xl shadow-2xl border-4 border-blue-500/20"
                      priority
                      sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                      quality={85}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-transparent" />
                  </div>
                  {/* Floating elements around the image */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-500 rounded-full opacity-60"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 text-center lg:text-left order-2"
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-blue-400 text-lg md:text-xl font-medium"
                >
                  {t('home.greeting')}
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6"
                >
                  {t('home.title')}
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-8"
                  role="banner"
                >
                  <span className="typewriter">{t('home.subtitle')}</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8"
                >
                  {t('home.description')}
                </motion.p>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="flex items-center justify-center lg:justify-start space-x-6"
                >
                  <a
                    href="https://github.com/rafael-bit"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rafael Áquila's GitHub Profile"
                    className="p-3 rounded-full border border-gray-700 hover:border-blue-400 hover:glow-border transition-all duration-300"
                  >
                    <Github className="w-6 h-6" aria-hidden="true" />
                  </a>
                  <a
                    href="https://linkedin.com/in/rafael-aquila"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rafael Áquila's LinkedIn Profile"
                    className="p-3 rounded-full border border-gray-700 hover:border-blue-400 hover:glow-border transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6" aria-hidden="true" />
                  </a>
                  <a
                    href="https://bento.me/rafaelaquila"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rafael Áquila's Bento Profile"
                    className="p-3 rounded-full border border-gray-700 hover:border-blue-400 hover:glow-border transition-all duration-300"
                  >
                    <Image src="/bento.svg" className="w-6 h-6" width={24} height={24} alt="Bento Profile" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Image Content - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex justify-end order-3"
              >
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] relative">
                    <Image
                      src="/rafaelaquila.jpg"
                      alt="Rafael Áquila - Full-Stack Developer"
                      fill
                      className="object-cover rounded-2xl shadow-2xl border-4 border-blue-500/20"
                      priority
                      sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 448px"
                      quality={85}
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-transparent" />
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-slate-500 rounded-full opacity-60"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                animate={{
                  x: [0, Math.random() * 100, 0],
                  y: [0, Math.random() * 100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </section>

        {/* Seção 2: About */}
        <section id="section-1" className="min-h-screen md:h-screen flex items-center justify-center px-4 section-content py-8 md:py-0">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {t('about.title')}
              </h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="backdrop-blur-glass border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-blue-400 mb-3">{t('about.story')}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {t('about.story1')}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {t('about.story2')}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('about.story3')}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {getStats(t).map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-glass border border-white/10 rounded-lg p-4 text-center hover:glow-border transition-all duration-300"
                  >
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-gray-400 text-xs">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Seção 3: Values */}
        <section id="section-2" className="min-h-screen md:h-screen flex items-center justify-center px-4 section-content py-8 md:py-0">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl font-bold gradient-text mb-3">{t('values.title')}</h2>
              <p className="text-gray-400 text-base">
                {t('values.subtitle')}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {getValues(t).map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="backdrop-blur-glass border border-white/10 rounded-xl p-4 hover:glow-border transition-all duration-300 group"
                  >
                    <Icon className="w-10 h-10 text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção 3: Projects */}
        <section id="section-3" className="min-h-screen md:h-screen flex items-center justify-center px-4 section-content py-8 md:py-0">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {t('projects.title')}
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {t('projects.subtitle')}</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group backdrop-blur-glass border border-white/10 rounded-xl overflow-hidden hover:glow-border transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={80}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-3 leading-relaxed line-clamp-3 hover:line-clamp-none text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="backdrop-blur-sm">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>{t('projects.view')}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção 4: Photo Wall */}
        <section id="section-4" className="min-h-screen md:h-screen flex flex-col items-center justify-center px-4 section-content py-8 md:py-0 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-8 left-0 right-0 z-10 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              {t('photoWall.title')}
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('photoWall.subtitle')}
            </p>
          </motion.div>
          
          <div className="w-full h-full mt-20">
            <PhotoWall profileImages={profileImages} />
          </div>
        </section>
      </div>
    </>
  );
}