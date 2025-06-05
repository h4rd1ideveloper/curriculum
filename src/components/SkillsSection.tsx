import { Code, Database, Globe, Server, Cpu, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Front-End',
      icon: <Globe size={24} />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        {
          name: 'TypeScript',
          level: 85,
        },
        { name: 'Redux', level: 80 },
        { name: 'Styled Components', level: 85 },
        {
          name: 'Tailwind CSS',
          level: 80,
        },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'Vue.js', level: 70 },
      ],
    },
    {
      title: 'Back-End',
      icon: <Server size={24} />,
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'NestJS', level: 85 },
        {
          name: 'Express',
          level: 90,
        },
        { name: 'TypeORM', level: 80 },
        { name: 'RESTful APIs', level: 95 },
        {
          name: 'Microserviços',
          level: 85,
        },
        { name: 'PHP', level: 75 },
        { name: 'Java', level: 65 },
      ],
    },
    {
      title: 'Bancos de Dados',
      icon: <Database size={24} />,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        {
          name: 'MongoDB',
          level: 75,
        },
        { name: 'Redis', level: 70 },
      ],
    },
    {
      title: 'DevOps & Ferramentas',
      icon: <Cpu size={24} />,
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 75 },
        {
          name: 'AWS',
          level: 70,
        },
        { name: 'Linux', level: 85 },
      ],
    },
    {
      title: 'UI/UX & Design',
      icon: <Palette size={24} />,
      skills: [
        { name: 'Figma', level: 70 },
        { name: 'Responsive Design', level: 90 },
        {
          name: 'Acessibilidade',
          level: 80,
        },
        { name: 'Design Systems', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Habilidades Técnicas
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const level = skill.level; // Ex.: 75
                  const startColor = { r: 134, g: 239, b: 172 }; // Verde claro
                  const endColor = { r: 59, g: 130, b: 246 }; // Azul

                  // Interpolação linear
                  const r = Math.round(startColor.r + (endColor.r - startColor.r) * (level / 100));
                  const g = Math.round(startColor.g + (endColor.g - startColor.g) * (level / 100));
                  const b = Math.round(startColor.b + (endColor.b - startColor.b) * (level / 100));

                  const barColor = `rgb(${r}, ${g}, ${b})`;

                  return (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full"
                          style={{ width: `${level}%`, backgroundColor: barColor }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
            Certificações e Cursos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Front End Development Libraries - (300h)',
                issuer: 'FreeCodeCamp',
                link: 'https://www.freecodecamp.org/certification/yansantosp/front-end-development-libraries',
              },
              {
                name: 'Java',
                issuer: 'SoloLearn',
                link: 'https://www.sololearn.com/Certificate/CT-VTJFPIS7/pdf',
              },
              {
                name: 'C++',
                issuer: 'SoloLearn',
                link: 'https://www.sololearn.com/Certificate/CT-JNERPTDV/pdf',
              },
              {
                name: 'PHP Tutorial course',
                issuer: 'SoloLearn',
                link: 'https://www.sololearn.com/Certificate/CT-BB7KZQW3/pdf',
              },
              {
                name: 'SQL Fundamentals course',
                issuer: 'SoloLearn',
                link: 'https://www.sololearn.com/Certificate/CT-LOBVYCF9/pdf',
              },
              {
                name: 'React + Redux',
                issuer: 'SoloLearn',
                link: 'https://www.sololearn.com/Certificate/CT-CGKABYAA/pdf',
              },
              {
                name: 'jQuery Tutorial',
                issuer: 'SoloLearn',
                link: 'https://www.sololearn.com/Certificate/CT-JNCLLMJC/pdf',
              },
              {
                name: 'CSS Fundamentals',
                issuer: 'SoloLearn',
                link: 'https://www.sololearn.com/Certificate/CT-HBV3F6WM/pdf',
              },
              {
                name: 'HTML Fundamentals course',
                issuer: 'SoloLearn',
                link: 'https://www.sololearn.com/pt/certificates/CT-FS3GSXYP',
              },
              {
                name: 'JavaScript Tutorial',
                issuer: 'SoloLearn',
                link: 'https://www.sololearn.com/Certificate/CT-MFGJMNHU/pdf',
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 flex items-center"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-500"
                    title={'Ver certificado de ' + cert.name + ''}
                  >
                    <Code size={20}></Code>
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white">{cert.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
