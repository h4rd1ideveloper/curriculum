import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Líder Técnico',
      company: 'Diprosoft - Gestão Comercial',
      period: 'Fevereiro de 2025 - Presente',
      location: 'Juiz de Fora, MG',
      description:
        'Lidero tecnicamente as iniciativas de desenvolvimento, orientando a equipe na adoção de melhores práticas e arquiteturas eficientes para sistemas de gestão comercial. Sou responsável por definir diretrizes técnicas, revisar código e garantir a qualidade e a escalabilidade das soluções entregues.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Docker'],
    },
    {
      title: 'Desenvolvedor Full Stack',
      company: 'Andra Sistemas',
      period: 'Fevereiro de 2023 - Novembro de 2024',
      location: 'São Paulo, SP',
      description:
        'Participei da migração de um sistema ERP legado, desenvolvido em Delphi, para uma moderna solução web. Desenvolvi APIs robustas utilizando Node.js com NestJS, implementei interfaces com Next.js e criei uma biblioteca compartilhada em TypeScript.',
      technologies: [
        'Next.js',
        'NestJS',
        'TypeScript',
        'TypeORM',
        'Redux',
        'SWR',
        'Styled-Components',
        'Docker',
      ],
    },
    {
      title: 'Desenvolvedor de Back-end',
      company: 'Beedoo Edtech',
      period: 'Novembro de 2020 - Janeiro de 2023',
      location: 'São Paulo, SP',
      description:
        'Concentrei-me no desenvolvimento e manutenção de microserviços para a plataforma de Edtech da Beedoo. Trabalhei na evolução da arquitetura back-end, implementando novas funcionalidades e otimizando consultas a banco de dados.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'AWS'],
    },
    {
      title: 'Engenheiro Full Stack',
      company: 'Creative Dev & Design',
      period: 'Junho de 2020 - Outubro de 2020',
      location: 'Juiz de Fora, MG',
      description:
        'Atuei no desenvolvimento de sistemas e microserviços para internet, aplicando conhecimentos em diversas tecnologias front-end e back-end para entregar soluções completas aos clientes da agência.',
      technologies: ['React', 'Node.js', 'PHP', 'MySQL'],
    },
    {
      title: 'Desenvolvedor de Sistema',
      company: 'RBM Web',
      period: 'Junho de 2019 - Outubro de 2019',
      location: 'Maringa, PR',
      description: 'Atuei no desenvolvimento de sistema de gerenciamento de crédito para Fintech.',
      technologies: ['PHP', 'SQL', 'XML', 'Embarcadeiro'],
    },
    {
      title: 'Full-Stack Developer',
      company: 'VWP Agência Digital',
      period: 'Novembro de 2018 - Maio de 2019',
      location: 'Maringa, PR',
      description: 'Atuei no desenvolvimento de sistema de gerenciamento de crédito para Fintech.',
      technologies: ['Vue', 'React', 'WordPress', 'MySQL', 'Javascript', 'HTML5', 'CSS3', 'PHP'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-slate-800"></div>

                <div
                  className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'} bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300`}
                >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className="mt-2 md:mt-0 px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                      {exp.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
