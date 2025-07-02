'use client';

import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

const experiences = [
  {
    company: 'Meu Nascimento',
    position: 'Front-End Engineer & Tech Lead',
    period: 'Abr 2025 - Present',
    description: [
      ' As a team leader, I am responsible for coordinating project demands, performing code reviews, managing deployments, conducting meetings, and guiding team members to ensure approval and quality of production deliveries.',
      ' Throughout the project, I participated in the implementation of several functionalities, creation of screens and components, definition of business rules, integration with APIs, testing, and deployments — always valuing the quality, performance and stability of the application.',
      ' Today, the platform has a base of 10, 384 users registered on the platform and 15, 832 events created.',
    ],
    technologies: [
      'TypeScript',
      'React.JS',
      'Next.JS',
      'Node.JS',
      'Express.JS'
    ],
  },
  {
    company: 'Wsouza Systems',
    position: 'Full-Stack Developer',
    period: 'Abr 2025 - Present',
    description: [
      'Throughout the project, I was involved in implementing key features, developing interfaces and components, defining business rules, integrating APIs, writing automated tests, and managing deployments — always prioritizing performance, stability, and alignment with the system’s specific educational requirements.',
      'Today, Bravo is a well - established school management platform, highly adaptable and used by various institutions — serving both public and private schools.Its modules cover enrollment, attendance, academic reporting, virtual learning environments, and the automation of administrative processes.',
    ],
    technologies: [
      'PHP',
      'MVC',
      'Laravel',
      'Bootstrap',
      'HTML',
      'CSS'
    ],
  },
  {
    company: 'City Council of Brumado - BA',
    position: 'Technical Support',
    period: 'May 2024 - Jun 2024',
    description: [
      ' Technical support in networking, configuration and maintenance of local area networks (LAN) and wireless networks (Wi-Fi), managing routers, switches and other network equipment.',
      ' Preventive and corrective maintenance of computers, servers, peripheral devices and replacement of defective components(HDDs, SSDs, memory, motherboards, power supplies, etc.).',
      ' I developed a web solution for support using HTML, CSS, JavaScript, Node.js, Express.js and MongoDB.This solution resulted in faster service and greater productivity for the people receiving support.',
    ],
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'Node.JS',
      'Express.JS',
      'MVC'
    ],
  },
  {
    company: 'Alan Pimenta Courses',
    position: 'Full-Stack Developer',
    period: 'May 2024 - Jun 2024',
    description: [
      ' Development of the institutional website that represents the company\'s identity and its services, improving SEO, security and responsive design.',
      ' The development of the checkout front - end for the company\'s courses was developed to offer an intuitive, responsive and secure experience. The payment data filling interface validates the information in real time and displays visual feedback at each stage of the purchase.',
      ' Direct interaction with the customer for testing, feedback and ensuring alignment and satisfaction of the project\'s requirements and needs.',
    ],
    technologies: [
      'TypeScript',
      'React.JS',
      'Next.JS',
      'PHP',
      'Kiwify'
    ],
  },
  {
    company: 'Brasil EcoEnergy',
    position: 'Frontend Developer',
    period: 'Jan 2024 - Jul 2024',
    description: [
      ' I collaborated in the review and improvement of the interface and integrations of the web system using Wordpress, ensuring a more fluid, efficient and functional experience for users.',
      ' Implementation of new features such as tools, optimization of plugins and integration with tools to improve the user experience such as React Query to cache operations, making them faster.',
      ' Development of new pages and sections, ensuring better organization of content and improvement of the site structure.',
    ],
    technologies: [
      'HTML',
      'CSS',
      'PHP',
      'WordPress',
      'React.JS'
    ],
  },
];

const stats = [
  { label: 'Lines of Code Written', value: '900K+' },
  { label: 'Projects Completed', value: '30+' },
  { label: 'Bugs Fixed', value: '∞' },
  { label: 'Cups of Coffee', value: '1000+' },
];

const values = [
  {
    icon: Code,
    title: 'Code Quality',
    description: 'I focus on writing clear, consistent, and maintainable code that’s easy to understand and extend.',
  },
  {
    icon: Palette,
    title: 'Interface Crafting',
    description: 'I care about building interfaces that not only look great, but also feel intuitive and polished.',
  },
  {
    icon: Zap,
    title: 'Fast & Fluid',
    description: 'I optimize every layer of the application to ensure a smooth, responsive, and reliable experience.',
  },
  {
    icon: Users,
    title: 'Team Work',
    description: 'I enjoy working with others — aligning ideas, sharing knowledge, and building products that truly deliver.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
              About Me
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="backdrop-blur-glass border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">My story</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I’ve worked across different teams, tools, and layers of development — turning ideas into real, usable products. My journey started with a simple curiosity: how code shapes what we see and interact with.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Today, I design and build applications end to end — from crafting user interfaces to writing the logic that powers them.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Outside of work, I’m usually exploring new technologies, contributing to open-source, or sharing what I learn with others.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="backdrop-blur-glass border border-white/10 rounded-xl p-6 text-center hover:glow-border transition-all duration-300"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-cyan-500/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">What I Value</h2>
            <p className="text-gray-400 text-lg">
              The principles that guide my work and approach to development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="backdrop-blur-glass border border-white/10 rounded-xl p-6 hover:glow-border transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold gradient-text mb-4">Experience</h2>
            <p className="text-gray-400 text-lg">
              My professional journey and key milestones
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="backdrop-blur-glass border border-white/10 rounded-xl p-8 hover:glow-border transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400">{exp.position}</h3>
                    <p className="text-white font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 leading-relaxed flex items-start">
                      <span className="text-cyan-400 mr-3 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ul className="flex items-center gap-5 mt-5">
                  {exp.technologies.map((technology, technologyIndex) => (
                    <li key={technologyIndex} className="text-gray-300 leading-relaxed flex items-baseline">
                      <span className="text-cyan-400 mr-3 mt-1.5">•</span>
                      <span>{technology}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}