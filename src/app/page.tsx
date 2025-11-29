"use client";
import {
  Cloud,
  Code,
  Database,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Server,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Dados dos projetos (você pode personalizar com seus projetos reais)
  const projects = [
    {
      id: 1,
      name: "BarberFlow - Sistema de Gestão para Barbearias",
      description:
        "O BarberFlow é um sistema de gestão completo, moderno e intuitivo, projetado especificamente para as necessidades de barbearias e profissionais autônomos. Desenvolvido para rodar 100% no seu navegador, ele oferece todas as ferramentas essenciais para organizar seu negócio sem a necessidade de instalações complexas, servidores ou mensalidades.",
      technologies: [
        "Nextjs",
        "Tailwind CSS",
        "Mobile First",
        "React Hooks",
        "SEO Techniques",
        "Performance Optimization",
        "React DevTools",
        "Vercel",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Git",
        "GitHub",
        "CI/CD",
        "Accessibility",
        "Image Optimization",
        "ESLint",
        "Prettier",
      ],
      githubUrl: "https://github.com/highlander08/barber-app",
      demoUrl: "https://barber-app-smoky.vercel.app/",
      gifUrl: "/BarberFlow - Gestão para Barbearias - Brave 2025-11-29 11-30-51.gif", // Substitua pela URL do seu GIF
    },
    {
      id: 2,
      name: "Sistema de Gestão para Galeterias e Restaurantes",
      description:
        "Uma solução moderna e intuitiva para otimizar a gestão do seu negócio, agilizar o atendimento e impulsionar suas vendas. Diga adeus às anotações em papel e ao controle manual!",
      technologies: [
        "TypeScript",
        "Node.js",
        "React",
        "NEXTJS",
        "Tailwind CSS",
        "lucide-react",
        "Git",
        "GitHub",
        "CI/CD",
        "Vercel",
      ],
      githubUrl:
        "https://github.com/highlander08/galeteria-system",
      demoUrl: "https://galeteria-system.vercel.app/dashboard",
      gifUrl: "/pdv.gif", // Substitua pela URL do seu GIF
    },
  ];

  const skills = [
    {
      category: "Backend",
      items: [
        "NestJS",
        "Node.js",
        "TypeScript",
        "Clean Architecture",
        "SOLID Principles",
      ],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "TypeORM", "Redis", "MongoDB"],
    },
    { category: "Messaging", items: ["Kafka", "RabbitMQ", "MQTT"] },
    {
      category: "APIs",
      items: ["REST", "GraphQL", "OpenAI/GPT-4 Integration"],
    },
    { category: "Authentication", items: ["JWT", "OAuth 2.0"] },
    {
      category: "DevOps",
      items: ["Docker", "Kubernetes", "CI/CD", "Prometheus", "Grafana"],
    },
    { category: "Cloud", items: ["AWS", "Azure", "GCP"] },
    { category: "Frontend", items: ["React", "Hooks", "Técnica de SEO"] },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-slate-900">Portfolio</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Início" },
                { id: "about", label: "Sobre" },
                { id: "projects", label: "Projetos" },
                { id: "contact", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-slate-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              {[
                { id: "home", label: "Início" },
                { id: "about", label: "Sobre" },
                { id: "projects", label: "Projetos" },
                { id: "contact", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-slate-600 hover:text-blue-600"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                <Code size={48} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                Software Developer
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
                Especialista em arquiteturas escaláveis, microserviços e
                sistemas de alta performance
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  "NestJS",
                  "TypeScript",
                  "Node.js",
                  "Microservices",
                  "Clean Architecture",
                  "React"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex justify-center space-x-4">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  Entre em Contato
                </a>
                <a
                  href="#projects"
                  className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
                >
                  Ver Projetos
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Sobre Mim
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Desenvolvedor de software apaixonado por criar soluções robustas
              e escaláveis. Especializado em arquiteturas de microserviços,
              desenvolvimento de APIs de alta performance e implementação de
              práticas DevOps modernas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Experiência & Foco
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Server className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Arquiteturas Escaláveis
                    </h4>
                    <p className="text-slate-600">
                      Desenvolvimento de sistemas distribuídos com
                      microserviços, implementando padrões como Clean
                      Architecture e princípios SOLID.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Database className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      Banco de Dados & Performance
                    </h4>
                    <p className="text-slate-600">
                      Otimização de consultas SQL, implementação de cache
                      distribuído com Redis e modelagem de dados eficiente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Cloud className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-slate-800">
                      DevOps & Cloud
                    </h4>
                    <p className="text-slate-600">
                      Containerização com Docker, orquestração com Kubernetes e
                      implementação de pipelines CI/CD em múltiplas clouds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Tecnologias
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                {skills.map((skillGroup) => (
                  <div
                    key={skillGroup.category}
                    className="bg-slate-50 p-4 rounded-lg"
                  >
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-white px-2 py-1 rounded text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Projetos
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Uma seleção dos meus principais projetos, demonstrando expertise
              em desenvolvimento de software, arquiteturas escaláveis e
              integração de tecnologias modernas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project) => {
              return (
                <a
                  key={project.id}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
                    <div className="aspect-video bg-slate-100 relative overflow-hidden">
                      <img
                        src={project.gifUrl}
                        alt={`${project.name} demo`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/10"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {project.name}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-slate-700 mb-2">
                          Tecnologias:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors"
                        >
                          <Github size={16} />
                          <span className="text-sm">Código</span>
                        </a>
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm">Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Vamos Conversar
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Interessado em colaborar ou discutir oportunidades? Estou sempre
              aberto a novos desafios e projetos interessantes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Entre em Contato
              </h3>

              <div className="space-y-4">
                <a
                  href="santosray62@gmail.com"
                  className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Mail className="text-blue-600" size={20} />
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <div className="text-slate-600">santosray62@gmail.com</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/highlandersantos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Linkedin className="text-blue-600" size={20} />
                  <div>
                    <div className="font-medium text-slate-900">LinkedIn</div>
                    <div className="text-slate-600">
                      linkedin.com/in/highlandersantos
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com/highlander08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <Github className="text-blue-600" size={20} />
                  <div>
                    <div className="font-medium text-slate-900">GitHub</div>
                    <div className="text-slate-600">
                      github.com/highlander08
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Áreas de Interesse
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-slate-800">
                      Arquitetura de Software
                    </div>
                    <div className="text-sm text-slate-600">
                      Microserviços, Clean Architecture, Domain-Driven Design
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-slate-800">
                      Performance & Escalabilidade
                    </div>
                    <div className="text-sm text-slate-600">
                      Otimização de sistemas, cache distribuído, load balancing
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-slate-800">
                      DevOps & Cloud
                    </div>
                    <div className="text-sm text-slate-600">
                      Containerização, orquestração, CI/CD, monitoramento
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <div className="font-medium text-slate-800">
                      Sistemas Embarcados
                    </div>
                    <div className="text-sm text-slate-600">
                      IoT, microcontroladores, sistemas em tempo real
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://github.com/highlander08"
                className="hover:text-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/highlandersantos"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:santosray62@gmail.com"
                className="hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-slate-400 text-sm">
              © 2025 Portfolio - software Developer. Construído com Next.js e
              Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
