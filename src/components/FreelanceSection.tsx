import { Code, Briefcase, MessageSquare, Clock, CheckCircle, Users, Server } from 'lucide-react';

const FreelanceSection = () => {
  const services = [
    {
      title: 'Desenvolvimento Front-end',
      icon: <Code size={24} />,
      description:
        'Criação de interfaces modernas e responsivas utilizando React, Next.js, TypeScript e outras tecnologias de ponta.',
      features: ['Websites responsivos', 'SPAs', 'PWAs', 'Otimização de performance'],
    },
    {
      title: 'Desenvolvimento Back-end',
      icon: <Server size={24} />,
      description:
        'Construção de APIs robustas e escaláveis com Node.js, NestJS e bancos de dados relacionais ou NoSQL.',
      features: [
        'APIs RESTful',
        'Microserviços',
        'Autenticação e autorização',
        'Integração com serviços externos',
      ],
    },
    {
      title: 'Desenvolvimento Full Stack',
      icon: <Briefcase size={24} />,
      description:
        'Soluções completas do front-end ao back-end, garantindo integração perfeita e experiência de usuário consistente.',
      features: [
        'Arquitetura completa',
        'Desenvolvimento ágil',
        'Manutenção e suporte',
        'Documentação detalhada',
      ],
    },
    {
      title: 'Consultoria Técnica',
      icon: <MessageSquare size={24} />,
      description:
        'Orientação especializada para projetos existentes, revisão de código e recomendações de melhores práticas.',
      features: [
        'Code review',
        'Otimização de performance',
        'Arquitetura de software',
        'Melhores práticas',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Hicharles De Oliveira Rocha',
      role: 'Gerente de Projetos',
      content:
        'Trabalho com Yan diretamente e posso afirmar que é um profissional excelente e faz toda a diferença no projeto.',
      avatar: 'H',
    },
    {
      name: 'Cliente Satisfeito',
      role: 'Startup de Tecnologia',
      content:
        'O Yan entregou nosso projeto antes do prazo e com qualidade excepcional. Sua comunicação clara e atenção aos detalhes foram diferenciais importantes.',
      avatar: 'C',
    },
    {
      name: 'Empresa Parceira',
      role: 'Agência Digital',
      content:
        'Contratamos o Yan para um projeto complexo que exigia conhecimento em várias tecnologias. Ele superou nossas expectativas e já estamos planejando novos projetos juntos.',
      avatar: 'E',
    },
  ];

  const workProcess = [
    {
      step: 1,
      title: 'Descoberta',
      description:
        'Entendimento detalhado do projeto, objetivos e requisitos através de reuniões e documentação.',
      icon: <Users size={24} />,
    },
    {
      step: 2,
      title: 'Planejamento',
      description:
        'Definição de escopo, cronograma, tecnologias e arquitetura para atender às necessidades do projeto.',
      icon: <Clock size={24} />,
    },
    {
      step: 3,
      title: 'Desenvolvimento',
      description:
        'Implementação da solução com comunicação constante e entregas incrementais para feedback.',
      icon: <Code size={24} />,
    },
    {
      step: 4,
      title: 'Entrega e Suporte',
      description:
        'Finalização do projeto, documentação, treinamento e suporte contínuo conforme necessário.',
      icon: <CheckCircle size={24} />,
    },
  ];

  return (
    <section id="freelance" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Serviços Freelancer
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Ofereço soluções personalizadas para transformar suas ideias em realidade. Com foco em
            qualidade, prazos e comunicação clara, garanto resultados que superam expectativas.
          </p>
        </div>

        {/* Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {service.title}
              </h3>

              <p className="text-slate-700 dark:text-slate-300 mb-4">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle size={18} className="text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Processo de Trabalho */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Meu Processo de Trabalho
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workProcess.map((process, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < workProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-blue-200 dark:bg-blue-800 z-0"></div>
                )}

                <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-6 relative z-10">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 mx-auto">
                    <span className="text-xl font-bold">{process.step}</span>
                  </div>

                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white text-center mb-2">
                    {process.title}
                  </h4>

                  <p className="text-slate-600 dark:text-slate-400 text-center">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            O que Dizem Sobre Mim
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="bg-white dark:bg-slate-900 rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-6">
            Vamos Trabalhar Juntos?
          </h3>

          <p className="text-slate-700 dark:text-slate-300 text-center mb-8 max-w-2xl mx-auto">
            Preencha o formulário abaixo com detalhes do seu projeto e entrarei em contato em até 24
            horas para discutirmos as melhores soluções para suas necessidades.
          </p>

          <form className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="seu.email@exemplo.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Assunto
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                placeholder="Assunto da mensagem"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                placeholder="Descreva seu projeto ou necessidade..."
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreelanceSection;
