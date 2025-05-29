import { Code, Briefcase, GraduationCap, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Sobre Mim
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Desenvolvedor de software Full Stack com mais de cinco anos de experiência comprovada
              na concepção, desenvolvimento e implementação de soluções web complexas e escaláveis.
              Possuo um histórico sólido em tecnologias front-end como React, Next.js e Redux, e
              expertise em back-end com Node.js, NestJS e APIs RESTful.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Minha trajetória inclui contribuições significativas em projetos de migração de
              sistemas legados para plataformas web modernas, otimização de performance e
              implementação de microserviços em empresas como Andra Sistemas e Beedoo Edtech.
            </p>

            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Sou um profissional proativo, apaixonado por tecnologia e aprendizado contínuo, com
              forte capacidade de colaboração em equipe e focado em entregar resultados de alto
              impacto e valor para o negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Desenvolvimento
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Especializado em React, Node.js, TypeScript e desenvolvimento de APIs RESTful.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400 mr-4">
                  <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  Experiência
                </h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Mais de 7 anos trabalhando em empresas de tecnologia com projetos complexos.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Educação</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Bacharelado em Ciência da Computação pela Universidade Federal de Juiz de Fora.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 mr-4">
                  <Heart size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Paixões</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                Novas tecnologias, desenvolvimento de soluções inovadoras e aprendizado contínuo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">7+</div>
            <p className="text-slate-700 dark:text-slate-300 text-lg">Anos de Experiência</p>
          </div>

          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
            <p className="text-slate-700 dark:text-slate-300 text-lg">Projetos Concluídos</p>
          </div>

          <div className="p-6">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
            <p className="text-slate-700 dark:text-slate-300 text-lg">Tecnologias Dominadas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
