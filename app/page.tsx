'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ExternalLink, Mail, Phone, MapPin, Send, Code, Palette, Zap, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SliderNavigation } from '@/components/slider-navigation';
import { useSlider } from '@/hooks/use-slider';
import Image from 'next/image';
import { toast } from 'sonner';
import IntroAnimation from '@/components/intro-animation';
import { useLanguage } from '@/components/language-provider';

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

const getContactInfo = (t: (key: string) => string) => [
  {
    icon: Mail,
    label: t('contact.email'),
    value: 'raquila743@gmail.com',
    href: 'mailto:raquila743@gmail.com',
  },
  {
    icon: Phone,
    label: t('contact.phone'),
    value: '+55 (77) 99966-0068',
    href: 'tel:+5577999660068',
  },
  {
    icon: MapPin,
    label: t('contact.location'),
    value: 'Brumado, BA',
    href: 'https://maps.google.com/maps?q=Brumado,+BA',
  },
];

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const totalSections = 5; // Home, About, Values, Projects, Contact
  const { currentSection, navigateToSection, nextSection, prevSection } = useSlider(totalSections);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const emailSubject = encodeURIComponent(formData.subject || t('toast.contactSubject'));
      const emailBody = encodeURIComponent(
        `${t('contact.name')}: ${formData.name}\n` +
        `${t('contact.email')}: ${formData.email}\n` +
        `${t('contact.subject')}: ${formData.subject}\n\n` +
        `${t('contact.message')}:\n${formData.message}`
      );

      const mailtoLink = `mailto:raquila743@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      try {
        window.open(mailtoLink);
      } catch (error) {
        try {
          const link = document.createElement('a');
          link.href = mailtoLink;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (error2) {
          window.location.href = mailtoLink;
        }
      }

      toast.success(t('toast.emailOpened'));

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Erro ao abrir email:', error);

      const emailSubject = encodeURIComponent(formData.subject || t('toast.contactSubject'));
      const emailBody = encodeURIComponent(
        `${t('contact.name')}: ${formData.name}\n` +
        `${t('contact.email')}: ${formData.email}\n` +
        `${t('contact.subject')}: ${formData.subject}\n\n` +
        `${t('contact.message')}:\n${formData.message}`
      );
      const mailtoLink = `mailto:raquila743@gmail.com?subject=${emailSubject}&body=${emailBody}`;

      toast.error(
        <div>
          <p>{t('toast.emailError')}</p>
          <p className="text-xs mt-1">Link: {mailtoLink}</p>
        </div>,
        { duration: 10000 }
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

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

        <section id="section-0" className="relative md:h-screen flex items-center justify-center px-4 section-content">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-slate-500/10 to-gray-500/10 animate-pulse" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
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
                className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6"
              >
                {t('home.title')}
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 mb-8"
                role="banner"
              >
                <span className="typewriter">{t('home.subtitle')}</span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                {t('home.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
              >
                <Button
                  size="lg"
                  className="glow-button bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                  onClick={() => navigateToSection(3)} // Projects section
                >
                  {t('home.viewWork')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="glow-border px-8 py-3 text-lg hover:opacity-80"
                  onClick={() => navigateToSection(4)} // Contact section
                >
                  {t('home.getInTouch')}
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="flex items-center justify-center space-x-6 mt-12"
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
        <section id="section-1" className="md:h-screen flex items-center justify-center px-4 section-content">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {t('about.title')}
              </h1>
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
                  <h2 className="text-xl font-bold text-blue-400 mb-3">{t('about.story')}</h2>
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
        <section id="section-2" className="md:h-screen flex items-center justify-center px-4 section-content">
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
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Seção 3: Projects */}
        <section id="section-3" className="md:h-screen flex items-center justify-center px-4 section-content">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {t('projects.title')}
              </h1>
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

        {/* Seção 4: Contact */}
        <section id="section-4" className="md:h-screen flex items-center justify-center px-4 section-content">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                {t('contact.title')}
              </h1>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-glass border border-white/10 rounded-xl p-6"
              >
                <h2 className="text-xl font-bold text-blue-400 mb-4">{t('contact.sendMessage')}</h2>
                <p className="text-gray-400 text-sm mb-4">
                  {t('contact.formDescription')}
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.name')}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="backdrop-blur-sm border-white/20 focus:border-blue-400"
                        placeholder={t('contact.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        {t('contact.email')}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="backdrop-blur-sm border-white/20 focus:border-blue-400"
                        placeholder={t('contact.emailPlaceholder')}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.subject')}
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="backdrop-blur-sm border-white/20 focus:border-blue-400"
                      placeholder={t('contact.subjectPlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      {t('contact.message')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="backdrop-blur-sm border-white/20 focus:border-blue-400 resize-none"
                      placeholder={t('contact.messagePlaceholder')}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full glow-button bg-gradient-to-r from-blue-600 to-slate-600 hover:from-blue-700 hover:to-slate-700 text-white py-3"
                  >
                    {isSubmitting ? t('contact.sending') : t('contact.send')}
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="backdrop-blur-glass border border-white/10 rounded-xl p-6">
                  <h2 className="text-xl font-bold text-blue-400 mb-4">{t('contact.info')}</h2>
                  <div className="space-y-4">
                    {getContactInfo(t).map((info, index) => {
                      const Icon = info.icon;
                      return (
                        <motion.a
                          key={info.label}
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-slate-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-gray-400 text-sm">{info.label}</p>
                            <p className="text-white font-medium">{info.value}</p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                <div className="backdrop-blur-glass border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3">{t('contact.buildSomething')}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t('contact.buildDescription')}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}