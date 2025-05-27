import { ArrowDown } from 'lucide-react';
import Perfil from '@/assets/yan.jpg';
const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950"
    >
      <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-800 bg-[size:30px_30px] opacity-20"></div>

      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white">
              <span className="block">Yan Santos</span>
              <span className="block text-blue-600 dark:text-blue-400">Policarpo</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300">
              Desenvolvedor Full Stack | React | Node.js | TypeScript
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
              Desenvolvedor de software com mais de cinco anos de experiência em projetos de alta
              complexidade, contribuindo com soluções inovadoras e escaláveis.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Ver Projetos
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-600/10 transition-all duration-300"
              >
                Contato
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl">
              {/* Placeholder para foto de perfil - substituir com imagem real */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white text-4xl font-bold">
                <img src={Perfil} alt="Yan S. Policarpo" className="object-contain w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
