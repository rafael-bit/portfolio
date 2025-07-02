'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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
    description: 'I contributed to the development of key features, interfaces, and integrations for Bravo, always focusing on performance, stability, and the platform’s educational goals. Today, it’s a flexible school management system used by both public and private institutions, offering modules for enrollment, attendance, reporting, virtual learning, and administrative automation.',
    image: '/wsouza.png',
    technologies: ['PHP', 'MVC', 'Laravel', 'Bootstrap', 'HTML', 'CSS'],
    category: 'Full-Stack',
    demo: 'https://ws.dev.br/ws4',
    featured: true,
  },
  {
    id: 4,
    title: 'Craftly',
    description: 'Craftly is a website offering ready-made components, color tools, and customizable icons for developers and designers.',
    image: '/craftly.png',
    technologies: ['Next.JS', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'Front-End',
    github: 'https://github.com/rafael-bit/craftly',
    demo: 'https://craftlys.vercel.app/',
    featured: false,
  },
  {
    id: 5,
    title: 'ImgFill',
    description: 'ImgFill is an AI tool for image editing, offering background removal, resizing, resolution enhancement, and color adjustments.',
    image: '/imgfill.png',
    technologies: ['Next.JS', 'TypeScript', 'Tailwind CSS', 'Clerk', 'Cloudinary', 'Prisma', 'Stripe'],
    category: 'Front-End',
    github: 'https://github.com/rafael-bit/ImgFill',
    demo: 'https://imgfill.vercel.app',
    featured: false,
  },
  {
    id: 6,
    title: 'CloudSpace',
    description: 'CloudSpace is an application of media management, offering features as storage management. Built with Next.js, Shadcn UI, Zod and Appwrite.',
    image: '/cloud.png',
    technologies: ['Next.JS', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Zod', 'Appwrite'],
    category: 'Full-Stack',
    github: 'https://github.com/rafael-bit/cloudspace',
    demo: 'https://thecloudspace.vercel.app',
    featured: false,
  },
];

const categories = ['All', 'Full-Stack', 'Front-End'];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4 bg-gradient-to-b from-transparent to-purple-500/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Companies & Work I have done
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group backdrop-blur-glass border border-white/10 rounded-2xl overflow-hidden hover:glow-border transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed line-clamp-5 hover:line-clamp-none">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="backdrop-blur-sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
              My Projects
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work, from full-stack applications to creative frontend experiments
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4 md:mb-0">
              All Projects
            </h2>
            <div className="flex items-center space-x-4">
              <Filter className="w-5 h-5 text-gray-400" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 backdrop-blur-glass border-white/20">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}