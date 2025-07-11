import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState('');

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    {
      name: 'Experiência',
      href: '#experience',
    },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Projetos', href: '#projects' },
    {
      name: 'Freelancer',
      href: '#freelance',
    },
    { name: 'Contato', href: '#contact' },
  ];

  // Atualiza bg do nav ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver para detectar seção ativa
  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1)); // ['home','about',...]
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0,
      },
    );

    sections.forEach((sec) => {
      if (sec) {
        observer.observe(sec);
      }
    });
    return () =>
      sections.forEach((sec) => {
        if (sec) {
          observer.unobserve(sec);
        }
      });
  }, []);

  return (
    <nav
      className={`
        fixed z-50 transition-all duration-300 w-screen
        ${scrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}
      `}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400 flex items-center mr-2"
          >
            <span className="mr-2">S&P</span>
            <span className="text-slate-800 dark:text-white md:hidden lg:block">
              Digital Service
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`
                  transition-colors duration-300
                  ${activeHref === link.href ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400'}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-slate-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  transition-colors duration-300 py-2
                  ${activeHref === link.href ? 'text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400'}
                `}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
