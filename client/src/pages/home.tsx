import { useEffect } from "react";

export default function Home() {
  const base = import.meta.env.BASE_URL;
  
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
    'HTML5', 'CSS', 'JavaScript', 'React', 'Python', 'Django', 'n8n', 'Power Automate',
    'WordPress', 'Jira', 'SQL Server', 'PostgreSQL', 'Git', 'GitHub', 'Azure DevOps',
    'Power BI', 'Excel', 'Analytics', 'BI', 'QA', 'Testes', 'Automações'
  ];

  return (
    <div className="bg-background text-foreground font-mono antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50" data-testid="navigation">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">
              <span className="text-primary">Bernardo</span>
              <span className="text-muted-foreground">@</span>
              <span className="text-foreground">Henrique</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-home">início</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-about">sobre</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-skills">skills</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors" data-testid="nav-link-projects">projetos</a>
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
                <p className="text-muted-foreground text-lg" data-testid="text-greeting">Olá, eu sou</p>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight" data-testid="text-name">
                  <span className="text-primary">Bernardo</span><br/>
                  <span className="text-foreground">Henrique</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium" data-testid="text-title">
                  E a minha missão é te fazer um apaixonado pela simplicidade.
                </h2>
                <h3 className="text-lg lg:text-xl text-muted-foreground" data-testid="text-subtitle">
                  Atuo com desenvolvimento web, automações, analytics/BI e QA.
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href="https://github.com/bernalves" 
                   className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                   data-testid="button-github">
                  Visite meu GitHub!
                </a>
                <a href="https://www.linkedin.com/in/bernalves/" 
                   className="inline-flex items-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors font-medium"
                   data-testid="button-linkedin">
                  Vamos conectar no LinkedIn!
                </a>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <img src={`${base}img/hero/bernalves.png`} 
                   alt="Bernardo Henrique" 
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
            <h2 className="text-3xl lg:text-4xl font-bold text-center" data-testid="text-about-title">Negócios +Tecnologia</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-muted-foreground" data-testid="text-education">
                  <strong>Bacharel em Relações Internacionais e Engenheiro de Software em formação. Estudei em instituições como a FIAP, DIO, Alura, UniBH, todas com excelentes profissionais, dedicados ao ensino.</strong>
                </p>
                
                <p className="text-muted-foreground" data-testid="text-experience">
                  Atualmente em Belo Horizonte/MG, já atuei com soluções de Business Intelligence, gestão de projetos, metodologias ágeis, integrações entre sistemas e diversas automações. Tenho experiência com ferramentas como Jira, Power BI, Git, Github, n8n, Power Automate, entre outras. Espero que possamos nos conectar e fazer algo incrível juntos!
                </p>
                
                <div className="pt-4">
                  <a href="https://www.linkedin.com/in/bernalves/" 
                     className="inline-flex items-center text-primary hover:underline font-medium"
                     data-testid="link-resume">
                    Veja o currículo completo →
                  </a>
                </div>
              </div>
              
              <div className="flex justify-center lg:justify-end">
                <img src={`${base}img/about/pitching.jpg`}
                     alt="Pitching" 
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
            <h2 className="text-3xl lg:text-4xl font-bold text-center" data-testid="text-skills-title">Skills</h2>
            
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
                <a href="http://ead.fm2s.com.br/verify/60431902981b6fbef54474ea9debe78954238abc" 
                   className="block hover:scale-105 transition-transform" 
                   target="_blank"
                   data-testid="link-gcp-cert">
                  <img src={`${base}img/badges/white_belt.png`} 
                       alt="FM2S - LEAN SIX SIGMA WHITE BELT" 
                       className="w-24 h-24 object-contain"
                       data-testid="img-gcp-badge" />
                </a>
                <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/131065/056522152e0450ddf891267a6c80fb5f/certificado.png" 
                   className="block hover:scale-105 transition-transform" 
                   target="_blank"
                   data-testid="link-gcp-cert">
                  <img src={`${base}img/badges/bi.png`} 
                       alt="FIAP - BUSINESS INTELLIGENCE" 
                       className="w-24 h-24 object-contain"
                       data-testid="img-gcp-badge" />
                </a>
                <a href="https://on.fiap.com.br/pluginfile.php/1/local_nanocourses/certificado_nanocourse/126612/1aecdf26ee885842583c83f9968c35e3/certificado.png" 
                   className="block hover:scale-105 transition-transform" 
                   target="_blank"
                   data-testid="link-gcp-cert">
                  <img src={`${base}img/badges/python.png`} 
                       alt="FIAP - PYTHON" 
                       className="w-24 h-24 object-contain"
                       data-testid="img-gcp-badge" />
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
              {/* Project 1: Superdados */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-superdados">
                <img src={`${base}img/projects/superdados.png`}
                     alt="Site Superdados" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-superdados" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-fitlogr-title">Superdados: Informações que dão lucro</h3>
                  <p className="text-muted-foreground" data-testid="text-project-superdados-description">
                    Plataforma full-stack de pesquisa de mercado desenvolvida em WordPress. Inclui blog dinâmico com análises, sistema de newsletter automatizado, formulários para pedidos customizados e interface responsiva.
                  </p>
                  <p><span className="text-primary">Wordpress, PHP, Analytics, Blog</span></p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://superdados.com/" 
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-superdados">
                      Visitar site →
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2: Bound */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-bound">
                <img src={`${base}img/projects/bound.png`}
                     alt="E-commerce Bound" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-n8n" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-bound-title">Vista Bound: Active Wear</h3>
                  <p className="text-muted-foreground" data-testid="text-project-bound-description">
                    Plataforma e-commerce de artigos esportivos e para o dia a dia. Inclui integrações logísticas, inteface responsiva e sistema de CRM.
                  </p>
                  <p><span className="text-primary">E-commerce, CRM, Lyfestyle, Tray</span></p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.vistabound.com.br/" 
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-bound">
                      Visitar loja →
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 3: n8n */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-n8n">
                <img src={`${base}img/projects/n8n.png`}
                     alt="Automações n8n" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-n8n" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-n8n-title">Automações em n8n</h3>
                  <p className="text-muted-foreground" data-testid="text-project-n8n-description">
                    Fluxos em nuvem para automação de processos, pesquisas, integração WhatsApp, gestão de envios, controle de cronogramas via cron jobs, tratamento de erros e webhooks.
                  </p>
                  <p><span className="text-primary">Automações, Javascript, n8n, Cloud, SQL, Webhooks, API</span></p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://bernalves.notion.site/n8n-21605a27e6c88083ad48cbe0b1dd7600?source=copy_link"
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-bound">
                      Venha ver →
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Project 4: Power Automate */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-power-automate">
                <img src={`${base}img/projects/power_Automate.png`}
                     alt="Automações power automate" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-power-automate" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-power-automate-title">Automações em Power Automate</h3>
                  <p className="text-muted-foreground" data-testid="text-project-power-automate-description">
                    Fluxos em nuvem para automação de processos, controle de cronogramas via cron jobs, tratamento de erros e webhooks, otimizações de rotinas integradas ao ambiente Microsoft e sequências de aprovações.
                  </p>
                  <p><span className="text-primary">Power Platform, Adaptive Cards, Cloud, Webhhoks, Dataverse, Automação de processos, Aprovações</span></p>
                  {/* <div className="flex flex-wrap gap-2">
                    <a href="https://bernalves.notion.site/n8n-21605a27e6c88083ad48cbe0b1dd7600?source=copy_link" 
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-bound">
                      Venha ver →
                    </a>
                  </div> */}
                </div>
              </div>

              {/* Project 5: Dashbords de BI */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-dashboards">
                <img src={`${base}img/projects/dashboards.png`}
                     alt="Dashboards de BI" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-dashboards" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-dashboards-title">Dasboards de BI</h3>
                  <p className="text-muted-foreground" data-testid="text-project-dashboards-description">
                    Dashboards interativos para métricas críticas e transformar dados complexos em insights visuais: acionáveis, segmentações, análise temporal e indicadores que direcionam decisões estratégicas e melhorias operacionais.
                  </p>
                  <p><span className="text-primary">Power BI, Dashboards, Storytelling, KPIs, DAX, ETL</span></p>
                  <div className="flex flex-wrap gap-2">
                    {/* <a href="https://bernalves.notion.site/n8n-21605a27e6c88083ad48cbe0b1dd7600?source=copy_link"
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-bound">
                      Venha ver →
                    </a> */}
                  </div>
                </div>
              </div>
              
              {/* Project 6: Analytics em Excel */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-analytics">
                <img src={`${base}img/projects/analytics.png`}
                     alt="Analytics em Excel" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-analytics" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-analytics-title">Analytics em Excel</h3>
                  <p className="text-muted-foreground" data-testid="text-project-analytics-description">
                    Análise de dados, visualizações, dashboards e relatórios para tomada de decisão. Modelos de regressão, análise de tendências e segmentação de dados.
                  </p>
                  <p><span className="text-primary">Analytics, Excel, Regressão, Pearson</span></p>
                  <div className="flex flex-wrap gap-2">
                    {/* <a href="https://bernalves.notion.site/n8n-21605a27e6c88083ad48cbe0b1dd7600?source=copy_link"
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-bound">
                      Venha ver →
                    </a> */}
                  </div>
                </div>
              </div>
              
              {/* Project 6: DBA e Queries */}
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow" data-testid="card-project-sql">
                <img src={`${base}img/projects/sql.png`}
                     alt="SQL Queries e DBA" 
                     className="w-full h-48 object-cover"
                     data-testid="img-project-sql" />
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-card-foreground" data-testid="text-project-sql-title">SQL Queries e DBA</h3>
                  <p className="text-muted-foreground" data-testid="text-project-sql-description">
                    Desenvolvimento e otimização de consultas SQL complexas para análise de dados e relatórios gerenciais. Conhecimento em diferentes SGBDs e foco na entrega de soluções escaláveis.
                  </p>
                  <p><span className="text-primary">PostgreSQL, SQL Server, Database Administration, Data Modeling</span></p>
                  <div className="flex flex-wrap gap-2">
                    {/* <a href="https://bernalves.notion.site/n8n-21605a27e6c88083ad48cbe0b1dd7600?source=copy_link"
                       className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                       data-testid="button-bound">
                      Venha ver →
                    </a> */}
                  </div>
                </div>
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
              <a href="https://www.linkedin.com/in/bernalves/" 
                 className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                 data-testid="button-linkedin-contact">
                Entrar em contato pelo LinkedIn →
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
              © 2025 Bernardo Henrique
            </p>
            <p className="text-muted-foreground" data-testid="text-footer">
              <span className="text-primary">Desenvolvimento web, automações, analytics/BI e QA</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
