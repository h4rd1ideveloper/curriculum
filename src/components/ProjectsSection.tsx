import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Star, GitFork } from 'lucide-react';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

const ProjectsSection = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<Repository[]>(
          'https://api.github.com/users/h4rd1ideveloper/repos',
        );

        // Ordenar por data de atualização (mais recente primeiro)
        const sortedRepos = response.data
          .sort(
            (a: Repository, b: Repository) =>
              new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
          )
          .filter(
            ({ name }) =>
              ![
                'blogamigo',
                'curriculum',
                'cursovue',
                'painel',
                'challenge-storybook',
                'apiAdonis5',
                'Jurema',
                'AnimaVita',
                'front_end_react',
                'auth_module',
                'Estudo',
                'back_end_node',
              ].includes(name),
          )
          .slice(0, 6); // Pegar apenas os 5 primeiros

        setRepositories(sortedRepos);
        console.log({ sortedRepos });
        setIsLoading(false);
      } catch (err) {
        console.error('Erro ao buscar repositórios:', err);
        setError('Não foi possível carregar os projetos. Por favor, tente novamente mais tarde.');
        setIsLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // Função para determinar a cor do badge de linguagem
  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-600',
      PHP: 'bg-purple-600',
      HTML: 'bg-orange-600',
      CSS: 'bg-blue-400',
      Python: 'bg-green-600',
      Java: 'bg-red-600',
      'C#': 'bg-green-700',
      Ruby: 'bg-red-700',
      Go: 'bg-blue-500',
      Rust: 'bg-orange-700',
      Swift: 'bg-orange-500',
      Kotlin: 'bg-purple-500',
      Dart: 'bg-blue-300',
    };

    return colors[language] || 'bg-gray-600';
  };

  // Função para formatar a data
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  };

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Projetos Recentes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            Confira meus projetos mais recentes no GitHub. Estes são os repositórios que tenho
            trabalhado ultimamente.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-t-4 border-b-4 border-blue-600 dark:border-blue-400 rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center py-10">
            <p className="text-red-600 dark:text-red-400">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.id}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                        <Github size={20} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white truncate">
                        {repo.name}
                      </h3>
                    </div>
                    {repo.language && (
                      <span
                        className={`px-2 py-1 text-xs font-medium text-white rounded-full ${getLanguageColor(repo.language)}`}
                      >
                        {repo.language}
                      </span>
                    )}
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                    {repo.description || 'Sem descrição disponível'}
                  </p>

                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <Star size={16} className="mr-1" />
                      <span>{repo.stargazers_count}</span>
                    </div>
                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                      <GitFork size={16} className="mr-1" />
                      <span>{repo.forks_count}</span>
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">
                      Atualizado em {formatDate(repo.updated_at)}
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-700 p-4 bg-slate-50 dark:bg-slate-800 flex justify-between">
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  >
                    <Code size={16} className="mr-1" />
                    <span>Ver código</span>
                  </a>

                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 transition-colors"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/h4rd1ideveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-emerald-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github size={20} className="mr-2" />
            Ver todos os projetos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
