'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const skillsCategories = {
  'Frontend': [
    'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Vue', 'Angular',
    'HTML', 'CSS', 'Tailwind', 'Figma'
  ],
  'Backend': [
    'Node.js', 'Express', 'NestJS', 'PHP', 'Laravel', 'REST API',
    'GraphQL', 'Composition Pattern'
  ],
  'Database': [
    'MySQL', 'PostgreSQL', 'Prisma', 'TypeORM'
  ],
  'DevOps & Cloud': [
    'AWS', 'Azure'
  ],
  'Tools': [
    'Postman', 'SEO', 'Figma'
  ]
};

const getCategoryColorClass = (category: string) => {
  switch (category) {
    case 'Frontend':
      return 'from-blue-500 to-cyan-400';
    case 'Backend':
      return 'from-purple-500 to-pink-500';
    case 'Database':
      return 'from-green-500 to-emerald-400';
    case 'DevOps & Cloud':
      return 'from-orange-500 to-amber-400';
    case 'Tools':
      return 'from-red-500 to-rose-400';
    default:
      return 'from-gray-500 to-slate-400';
  }
};

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-green-500/10 animate-pulse" />

        <div className="max-w-4xl mx-auto text-center relative z-10 pt-10">
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
              className="text-cyan-400 text-lg md:text-xl font-medium"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-6"
            >
              Rafael Áquila
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 mb-8"
              role="banner"
            >
              <span className="typewriter">Full-Stack Developer</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              I design and build applications from scratch — shaping interfaces, structuring logic, and making sure everything fits together naturally.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            >
              <Link href="/projects">
                <Button size="lg" className="glow-button bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 text-lg">
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link href="/contact">
                <Button size="lg" variant="outline" className="glow-border px-8 py-3 text-lg">
                  Get In Touch
                </Button>
              </Link>
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
                className="p-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:glow-border transition-all duration-300"
              >
                <Github className="w-6 h-6" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/in/rafael-aquila"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rafael Áquila's LinkedIn Profile"
                className="p-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:glow-border transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" aria-hidden="true" />
              </a>
              <a
                href="https://bento.me/rafaelaquila"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rafael Áquila's Bento Profile"
                className="p-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:glow-border transition-all duration-300"
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
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
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

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Technologies I Work With
            </h2>
            <p className="text-gray-400 text-lg">
              Here are some of the technologies I use to bring ideas to life
            </p>
          </motion.div>

          <div className="space-y-16">
            {Object.entries(skillsCategories).map(([category, skills], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="relative p-6 border-l-2 border-gradient rounded-r-lg"
                style={{
                  borderImageSource: `linear-gradient(to bottom, ${category === 'Frontend' ? '#3b82f6' :
                    category === 'Backend' ? '#8b5cf6' :
                      category === 'Database' ? '#10b981' :
                        category === 'DevOps & Cloud' ? '#f59e0b' :
                          '#ef4444'}, transparent)`,
                  borderImageSlice: 1
                }}
              >
                <div className="flex items-center mb-6">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-4 bg-gradient-to-r ${getCategoryColorClass(category)}`}>
                    <span className="text-sm font-bold text-white">0{categoryIndex + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 ml-14">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: (categoryIndex * 0.05) + (index * 0.03),
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                      whileHover={{
                        y: -3,
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                      }}
                      className="relative group"
                    >
                      <Badge
                        className={`px-4 py-2 text-base bg-gradient-to-br ${getCategoryColorClass(category)} bg-opacity-10
                                    border-none shadow-lg hover:shadow-xl transition-all duration-300 font-medium`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center backdrop-blur-glass rounded-2xl p-12 border border-white/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            I'm always excited to work on new projects and collaborate with passionate people.
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="glow-button bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 glow-border px-8 py-3 text-lg">
              <ExternalLink className="mr-2 w-5 h-5" />
              View Resume
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}