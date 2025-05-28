import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import FreelanceSection from './components/FreelanceSection';
import ContactSection from './components/ContactSection';
import './App.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento inicial
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Variantes de animação para o carregamento inicial
  const loadingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Variantes de animação para o conteúdo principal
  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      {isLoading ? (
        <motion.div
          className="h-screen flex items-center justify-center bg-white dark:bg-slate-900"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={loadingVariants}
        >
          <div className="text-center">
            <motion.div
              className="w-24 h-24 border-t-4 border-b-4 border-blue-600 dark:border-blue-400 rounded-full mx-auto mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            ></motion.div>
            <motion.h1
              className="text-3xl font-bold text-blue-600 dark:text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Yan Policarpo
            </motion.h1>
            <motion.p
              className="text-slate-600 dark:text-slate-400 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Carregando portfólio...
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <motion.div initial="hidden" animate="visible" variants={contentVariants}>
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <FreelanceSection />
          <ContactSection />

          <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                  <h2 className="text-2xl font-bold text-blue-400">
                    YP<span className="text-white">Policarpo</span>
                  </h2>
                  <p className="text-slate-400 mt-2">Desenvolvedor Full Stack</p>
                </div>

                <div className="flex space-x-8">
                  <a
                    href="#home"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Início
                  </a>
                  <a
                    href="#about"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Sobre
                  </a>
                  <a
                    href="#experience"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Experiência
                  </a>
                  <a
                    href="#skills"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Habilidades
                  </a>
                  <a
                    href="#projects"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Projetos
                  </a>
                  <a
                    href="#freelance"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Freelancer
                  </a>
                  <a
                    href="#contact"
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    Contato
                  </a>
                </div>
              </div>

              <div className="border-t border-slate-800 mt-8 pt-8 text-center">
                <p className="text-slate-400">
                  &copy; {new Date().getFullYear()} Yan Santos Policarpo. Todos os direitos
                  reservados.
                </p>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
};

export default App;
