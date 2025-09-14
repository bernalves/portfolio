import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.href && target.href.includes('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add active state to navigation based on scroll position
    const updateActiveNav = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('nav a[href^="#"]');
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        const linkElement = link as HTMLAnchorElement;
        linkElement.classList.remove('text-primary');
        linkElement.classList.add('text-foreground');
        if (linkElement.getAttribute('href')?.substring(1) === current) {
          linkElement.classList.remove('text-foreground');
          linkElement.classList.add('text-primary');
        }
      });
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', updateActiveNav);
    };
  }, []);

  const skills = [
    'HTML5', 'CSS', 'JavaScript', 'PHP', 'Java', 'React', 'Next.js', 'Angular',
    'WordPress', 'MariaDB', 'Git', 'GitHub', 'VS Code', 'Google Cloud', 'Spring', 'Go'
  ];

  return (
    <div className="bg-background text-foreground font-mono antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50" data-testid="navigation">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">
              <span className="text-primary">matheus</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-foreground">misumoto</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-home">início</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-about">sobre</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-skills">skills</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-projects">projetos</a>
              <a href="#culture" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-culture">cultura</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-contact">contato</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg" data-testid="text-greeting">Olá, meu nome é</p>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-name">
                  <span className="text-primary">Matheus</span><br />
                  <span className="text-foreground">Misumoto</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium" data-testid="text-title">
                  Sou desenvolvedor de software em Santos, Brasil.
                </h2>
                <h3 className="text-lg lg:text-xl text-muted-foreground" data-testid="text-subtitle">
                  Uso código para dar vida a novas ideias.
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/matheusmisumoto" 
                   className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                   data-testid="button-github">
                  Visite-me no GitHub
                </a>
                <a href="https://www.linkedin.com/in/matheusmisumoto/" 
                   className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
                   data-testid="button-linkedin">
                  Visite-me no LinkedIn
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img src="https://img.matheusmisumoto.dev/2024/07/202406-apresentacao-right.jpg" 
                   alt="Matheus Misumoto" 
                   className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover"
                   data-testid="img-profile" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center" data-testid="text-about-title">Tecnologia + Comunicação</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground" data-testid="text-education">
                  <strong>Graduado em Sistemas para Internet na Faculdade de Tecnologia do Estado de São Paulo (FATEC Rubens Lara), em Santos. Formado em Jornalismo pela Universidade Santa Cecília, com pós-graduação pela Faculdade Cásper Líbero. Alumnus do programa Campus Expert da plataforma de educação DIO. Certificado Associate Cloud Engineer pelo Google Cloud.</strong>
                </p>
                
                <p className="text-muted-foreground" data-testid="text-experience">
                  Atualmente atuo como engenheiro de software na HP. Trabalhei como avaliador freelancer de qualidade de pesquisa Google para a TELUS Digital. Também fiz parte da primeira equipe de jornalismo no litoral sul de São Paulo (Santos e Região) do site de notícias g1, da TV Globo.
                </p>
                
                <p className="text-muted-foreground" data-testid="text-publications">
                  Dentre meus trabalhos publicados está o capítulo "Social TV e Segunda Tela: Mudanças no Consumo de Conteúdo Gerado em Ambientes Broadcast", no livro Comunicação em Cena – Volume 1 (Editora Scortecci).
                </p>
                
                <div className="pt-4">
                  <a href="https://matheusmisumoto.dev/resume" 
                     className="inline-flex items-center text-primary hover:underline font-medium"
                     data-testid="link-resume">
                    Veja o currículo completo →
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <img src="https://img.matheusmisumoto.dev/2020/11/201211-laptopcoding.png" 
                     alt="Montagem de Macbook Pro com um código de aplicativo mobile" 
                     className="w-full max-w-md h-auto rounded-xl shadow-lg"
                     data-testid="img-coding" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center" data-testid="text-skills-title">Skills & Tools</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {skills.map((skill, index) => (
                <div key={skill} 
                     className="skill-badge bg-card border border-border rounded-lg p-3 text-center hover:shadow-md transition-all hover:-translate-y-0.5"
                     data-testid={`skill-badge-${index}`}>
                  <span className="text-sm font-medium text-card-foreground">{skill}</span>
                </div>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center" data-testid="text-certifications-title">Certificações</h3>
              <div className="flex flex-wrap justify-center gap-8">
                <a href="https://www.credly.com/badges/b5667f85-956f-4ce0-91ac-7d72b84ea4c6/public_url" 
                   className="block hover:scale-105 transition-transform" 
                   target="_blank"
                   data-testid="link-gcp-cert">
                  <img src="https://img.matheusmisumoto.dev/2023/07/badge-gcp-cloud-engineer-certified.png" 
                       alt="Badge Google Cloud Certified - Cloud Engineer Associate" 
                       className="w-24 h-24 object-contain"
                       data-testid="img-gcp-badge" />
                </a>
                <a href="https://www.credly.com/badges/87e1ad84-6ffb-420b-859d-5aadfd8ff4db/public_url" 
                   className="block hover:scale-105 transition-transform" 
                   target="_blank"
                   data-testid="link-cisco-cert">
                  <img src="https://img.matheusmisumoto.dev/2021/02/badge-cyberops-associate.png" 
                       alt="Badge - Cisco Network Academy - CyberOps Associate" 
                       className="w-24 h-24 object-contain"
                       data-testid="img-cisco-badge" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center" data-testid="text-projects-title">Projetos</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Project 1: FitLogr */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-fitlogr">
                <img src="https://img.matheusmisumoto.dev/2023/12/202312-fitlogr-screens-1052x592.jpg" 
                     alt="Montagem do projeto FitLogr" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-fitlogr" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-fitlogr-title">FitLogr</h3>
                  <p className="text-muted-foreground" data-testid="text-project-fitlogr-description">
                    Aplicativo web de registro e acompanhamento de treinos de musculação. O front end usa React com Next.js e Tailwind CSS. A API RESTful utiliza Java com Spring Boot, Spring Security e banco de dados MariaDB/MySQL.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://fitlogr.matheusmisumoto.dev/" 
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-fitlogr-demo">
                      Visitar aplicação
                    </a>
                    <a href="https://github.com/matheusmisumoto/workout-logger-web" 
                       className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm font-medium"
                       data-testid="button-fitlogr-web-repo">
                      Ver repositório web
                    </a>
                    <a href="https://github.com/matheusmisumoto/workout-logger-api" 
                       className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm font-medium"
                       data-testid="button-fitlogr-api-repo">
                      Ver repositório API
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2: The Evolution */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-evolution">
                <img src="https://img.matheusmisumoto.dev/2022/07/202207-evolution-theme-wordpress-1052x592.jpg" 
                     alt="Montagem com telas da versão desktop e mobile do tema Evolution" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-evolution" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-evolution-title">The Evolution</h3>
                  <p className="text-muted-foreground" data-testid="text-project-evolution-description">
                    Tema open-source de edição completa do site para WordPress em estilo minimalista. Listado no repositório público do WordPress.org.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://wordpress.org/themes/the-evolution/" 
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-evolution-download">
                      Download no WordPress.org
                    </a>
                    <a href="https://github.com/matheusmisumoto/evolution" 
                       className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm font-medium"
                       data-testid="button-evolution-repo">
                      Ver repositório no GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 3: Gaimusho Kenshusei */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-gaimusho">
                <img src="https://img.matheusmisumoto.dev/2024/06/site-gaimusho-kenshusei-2024-650x366.jpg" 
                     alt="Mockup do site da Associação Brasileira de Ex-Bolsistas Gaimusho Kenshusei" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-gaimusho" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-gaimusho-title">Associação Brasileira de Ex-Bolsistas Gaimusho Kenshusei</h3>
                  <p className="text-muted-foreground" data-testid="text-project-gaimusho-description">
                    Site em WordPress, com um banco de dados de ex-bolsistas contendo suas biografias. Utiliza JavaScript, React e PHP.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://gaimushobr.org/" 
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-gaimusho-visit">
                      Visitar o site
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 4: Tastin' */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-tastin">
                <img src="https://img.matheusmisumoto.dev/2022/03/202203-tastin-restaurant-search-650x366.jpg" 
                     alt="Montagem com a logomarca do projeto Tastin'" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-tastin" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-tastin-title">Tastin'</h3>
                  <p className="text-muted-foreground" data-testid="text-project-tastin-description">
                    Aplicação de busca de restaurantes próximos usando a biblioteca React e as APIs do Google Maps e do Google Places.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://projects.matheusmisumoto.dev/restaurant-finder/" 
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-tastin-visit">
                      Visitar o site
                    </a>
                    <a href="https://github.com/matheusmisumoto/restaurant-finder-react" 
                       className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm font-medium"
                       data-testid="button-tastin-repo">
                      Ver repositório no GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 5: Angular Classes */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-angular">
                <img src="https://img.matheusmisumoto.dev/2021/09/202109-angular-classes-650x366.jpg" 
                     alt="Tela de um dos projetos do site Angular Classes" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-angular" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-angular-title">Arquivo de projetos em Angular</h3>
                  <p className="text-muted-foreground" data-testid="text-project-angular-description">
                    Site com alguns usos do framework como operações matemáticas, regras condicionais, rotas de navegação, formulários, uso de APIs públicas, além do Realtime Database e a autenticação do Firebase.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://projects.matheusmisumoto.dev/angular-classes/" 
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-angular-visit">
                      Visitar o site
                    </a>
                    <a href="https://github.com/matheusmisumoto/angular-classes-archive" 
                       className="inline-flex items-center px-4 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm font-medium"
                       data-testid="button-angular-repo">
                      Ver repositório no GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-8">
              <a href="https://matheusmisumoto.dev/projetos" 
                 className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                 data-testid="button-all-projects">
                Veja todos os projetos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center" data-testid="text-culture-title">Cultura Japonesa</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground" data-testid="text-culture-description">
                  Fui bolsista do Ministério dos Negócios Estrangeiros do Japão em um programa de líderes para a divulgação da cultura japonesa na América Latina. Também atuei como diretor de comunicação voluntário da Associação Japonesa de Santos por mais de uma década.
                </p>
                
                <div className="pt-4">
                  <a href="https://matheusmisumoto.dev/viagens/japao/aventura-no-japao-uma-experiencia-como-bolsista-do-ministerio-dos-negocios-estrangeiros.html" 
                     className="inline-flex items-center text-primary hover:underline font-medium"
                     data-testid="link-japan-story">
                    Leia mais sobre o intercâmbio →
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <img src="https://img.matheusmisumoto.dev/2020/07/home-bolsa-japao-1052x592.jpg" 
                     alt="Meditando em um templo zen-budista no Japão" 
                     className="w-full max-w-md h-auto rounded-xl shadow-lg object-cover"
                     data-testid="img-japan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-center" data-testid="text-contact-title">Vamos tomar um café!</h2>
            
            <div className="bg-card border border-border rounded-xl p-8">
              <iframe 
                style={{border: 'none', width: '100%', minHeight: '500px'}} 
                id="vamos-tomar-um-cafe-uaemq4" 
                src="https://noteforms.com/forms/vamos-tomar-um-cafe-uaemq4"
                data-testid="iframe-contact-form"
                title="Formulário de Contato">
              </iframe>
              <script 
                type="text/javascript" 
                onLoad={() => {
                  if (typeof (window as any).initEmbed === 'function') {
                    (window as any).initEmbed('vamos-tomar-um-cafe-uaemq4');
                  }
                }}
                src="https://noteforms.com/widgets/iframe.min.js">
              </script>
            </div>
            
            <div className="text-center pt-8">
              <p className="text-muted-foreground mb-4" data-testid="text-contact-alternative">Ou entre em contato diretamente:</p>
              <a href="https://www.linkedin.com/in/matheusmisumoto/" 
                 className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                 data-testid="button-linkedin-contact">
                Entrar em contato pelo LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <p className="text-muted-foreground" data-testid="text-footer">
              © 2024 Matheus Misumoto. Desenvolvedor de Software.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
