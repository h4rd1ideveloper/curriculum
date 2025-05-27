import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Entre em Contato
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Estou disponível para novos projetos, oportunidades de trabalho ou simplesmente para
            trocar ideias sobre tecnologia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Informações de Contato
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:h4rd1i@gmail.com"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    h4rd1i@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                    Localização
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Juiz de Fora, Minas Gerais, Brasil
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                    LinkedIn
                  </h4>
                  <a
                    href="https://www.linkedin.com/in/yanpolicarpo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    linkedin.com/in/yanpolicarpo
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <Github size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                    GitHub
                  </h4>
                  <a
                    href="https://github.com/h4rd1ideveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    github.com/h4rd1ideveloper
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                Redes Sociais
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/yanpolicarpo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/h4rd1ideveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-white hover:bg-slate-900 transition-colors duration-300"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-lg p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Envie uma Mensagem
            </h3>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    placeholder="seu.email@exemplo.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Assunto da mensagem"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  rows={6}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  placeholder="Sua mensagem..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
