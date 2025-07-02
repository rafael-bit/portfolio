'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raquila743@gmail.com',
    href: 'mailto:raquila743@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+55 (77) 99966-0068',
    href: 'tel:+5577999660068',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Brumado, BA',
    href: 'https://maps.google.com/maps?q=Brumado,+BA',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/rafael-bit',
    color: 'hover:text-gray-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/rafael-aquila',
    color: 'hover:text-blue-400',
  },
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/orafaelaquila',
    color: 'hover:text-sky-400',
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast.success('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-glass border border-white/10 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="backdrop-blur-sm border-white/20 focus:border-cyan-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="backdrop-blur-sm border-white/20 focus:border-cyan-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="backdrop-blur-sm border-white/20 focus:border-cyan-400"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="backdrop-blur-sm border-white/20 focus:border-cyan-400 resize-none"
                    placeholder="Tell me more about your project..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glow-button bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white py-3"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="backdrop-blur-glass border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-white" />
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

              <div className="backdrop-blur-glass border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Follow Me</h2>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                        className={`w-12 h-12 border border-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:border-cyan-400 hover:glow-border ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="backdrop-blur-glass border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
                <p className="text-gray-400 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with passionate people. 
                  Whether you have a specific project in mind or just want to chat about technology, 
                  feel free to reach out!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}