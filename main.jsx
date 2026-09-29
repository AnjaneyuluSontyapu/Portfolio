import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const skills = [
  {
    name: 'ThingWorx',
    icon: '⚙',
    text: 'IoT applications, Mashups, Services, Streams, DataShapes & platform configuration'
  },
  {
    name: 'React.js',
    icon: '⚛',
    text: 'Components, hooks, state management, API integration and responsive UI'
  },
  {
    name: 'JavaScript',
    icon: 'JS',
    text: 'ES6+, array methods, async programming, DOM and practical coding'
  },
  {
    name: 'SQL / MSSQL',
    icon: 'DB',
    text: 'Queries, stored procedures, data migration, validation and optimization'
  },
  {
    name: 'TypeScript',
    icon: 'TS',
    text: 'Typed frontend development and maintainable application code'
  },
  {
    name: 'Git',
    icon: 'GH',
    text: 'GitHub, GitLab, branching, version control and collaborative development'
  }
];

const projects = [
  {
    tag: 'IoT • ThingWorx',
    title: 'AutoSPC',
    desc: 'An industrial Statistical Process Control application that processes manufacturing data, evaluates quality rules and supports violation notifications.',
    tech: ['ThingWorx', 'MSSQL', 'Ignition', 'Qlik'],
    featured: true
  },
  {
    tag: 'Frontend • React',
    title: 'React API Dashboard',
    desc: 'A responsive dashboard concept for consuming backend APIs, handling loading/error states and presenting operational data through reusable components.',
    tech: ['React', 'JavaScript', 'REST API', 'CSS']
  },
  {
    tag: 'Database • SQL',
    title: 'Data Operations Toolkit',
    desc: 'Reusable SQL patterns for reporting, validation, duplicate detection, stored procedures and controlled data migration.',
    tech: ['MSSQL', 'T-SQL', 'Stored Procedures']
  }
];

function App() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nav = [
    'About',
    'Skills',
    'Experience',
    'Projects',
    'Contact'
  ];

  const go = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({
        behavior: 'smooth'
      });

    setOpen(false);
  };

  return (
    <div className="site">

      {/* NAVIGATION */}
      <header className={scrolled ? 'nav scrolled' : 'nav'}>
        <div className="nav-inner">

          <button
            className="brand"
            onClick={() => go('about')}
            aria-label="Go home"
          >
            <span>AS</span>
            <b>Anjaneyulu</b>
          </button>

          <nav className={open ? 'mobile-open' : ''}>
            {nav.map((item) => (
              <button
                key={item}
                onClick={() => go(item)}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="nav-actions">

            <a
              className="icon-link"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <button
              className="menu"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? '✕' : '☰'}
            </button>

          </div>

        </div>
      </header>


      <main>

        {/* HERO */}
        <section id="about" className="hero section">

          <div className="hero-copy reveal">

            <p className="eyebrow">
              THINGWORX • REACT • IOT
            </p>

            <h1>
              Building useful
              <br />
              <span>digital experiences.</span>
            </h1>

            <p className="lead">
              I'm Anjaneyulu Sontyapu, a developer focused on
              industrial IoT applications, ThingWorx and modern
              frontend development with React and JavaScript.
            </p>

            <div className="hero-buttons">

              <button
                className="primary"
                onClick={() => go('projects')}
              >
                View my work →
              </button>

              <button
                className="secondary"
                onClick={() => go('contact')}
              >
                Let's connect
              </button>

            </div>

            <div className="quick-stats">

              <div>
                <strong>6+</strong>
                <span>Years in IT</span>
              </div>

              <div>
                <strong>IoT</strong>
                <span>Domain focus</span>
              </div>

              <div>
                <strong>React</strong>
                <span>Current focus</span>
              </div>

            </div>

          </div>


          <div
            className="hero-art"
            aria-hidden="true"
          >

            <div className="orb"></div>

            <div className="code-card">

              <div className="dots">
                <i></i>
                <i></i>
                <i></i>
              </div>

              <pre>
{`const developer = {
  name: "Anjaneyulu",
  focus: ["IoT", "React"],
  mindset: "build + learn"
};`}
              </pre>

            </div>

            <div className="floating-chip chip-one">
              ThingWorx
            </div>

            <div className="floating-chip chip-two">
              React.js
            </div>

          </div>

        </section>


        {/* SKILLS */}
        <section
          id="skills"
          className="section muted"
        >

          <div className="section-head">

            <div>

              <p className="eyebrow">
                WHAT I WORK WITH
              </p>

              <h2>
                Skills that connect
                <br />
                <span>systems to people.</span>
              </h2>

            </div>

            <p>
              From industrial IoT platforms and backend data
              to polished frontend experiences, I enjoy working
              across the stack.
            </p>

          </div>


          <div className="skill-grid">

            {skills.map((skill) => (

              <article
                className="skill-card"
                key={skill.name}
              >

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h3>
                  {skill.name}
                </h3>

                <p>
                  {skill.text}
                </p>

              </article>

            ))}

          </div>

        </section>


        {/* EXPERIENCE */}
        <section
          id="experience"
          className="section"
        >

          <div className="section-head">

            <div>

              <p className="eyebrow">
                EXPERIENCE
              </p>

              <h2>
                A career built around
                <br />
                <span>solving real problems.</span>
              </h2>

            </div>

          </div>


          <div className="timeline">

            <div className="timeline-line"></div>


            <article className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="time">
                2018 — PRESENT
              </div>

              <div>

                <h3>
                  ITC Infotech
                </h3>

                <p className="role">
                  ThingWorx Developer / IT
                </p>

                <p>
                  Working on industrial IoT solutions with
                  ThingWorx, manufacturing data, MSSQL and
                  integrations. Contributing to application
                  development, troubleshooting, database work
                  and production support.
                </p>

                <div className="pills">

                  <span>ThingWorx</span>
                  <span>IoT</span>
                  <span>MSSQL</span>
                  <span>JavaScript</span>

                </div>

              </div>

            </article>


            <article className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="time">
                NOW
              </div>

              <div>

                <h3>
                  Expanding into modern frontend
                </h3>

                <p className="role">
                  React + JavaScript
                </p>

                <p>
                  Building stronger frontend engineering
                  skills with reusable components, API
                  integration, state management and
                  responsive application design.
                </p>

                <div className="pills">

                  <span>React</span>
                  <span>REST APIs</span>
                  <span>TypeScript</span>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* PROJECTS */}
        <section
          id="projects"
          className="section muted"
        >

          <div className="section-head">

            <div>

              <p className="eyebrow">
                SELECTED WORK
              </p>

              <h2>
                Projects with a
                <br />
                <span>practical purpose.</span>
              </h2>

            </div>

          </div>


          <div className="project-grid">

            {projects.map((project) => (

              <article
                className={
                  project.featured
                    ? 'project-card featured'
                    : 'project-card'
                }
                key={project.title}
              >

                <div className="project-top">

                  <span>
                    {project.tag}
                  </span>

                  <span>↗</span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.desc}
                </p>

                <div className="pills">

                  {project.tech.map((tech) => (

                    <span key={tech}>
                      {tech}
                    </span>

                  ))}

                </div>

              </article>

            ))}

          </div>

        </section>


        {/* CONTACT */}
        <section
          id="contact"
          className="section contact"
        >

          <div className="contact-box">

            <div>

              <p className="eyebrow">
                GET IN TOUCH
              </p>

              <h2>
                Have an idea,
                <br />
                <span>
                  project or opportunity?
                </span>
              </h2>

              <p>
                I'm always interested in discussing
                technology, IoT applications, frontend
                development and new opportunities.
              </p>

            </div>


            <div className="contact-links">

              <a href="mailto:your.email@example.com">

                <span>✉</span>

                <span>
                  your.email@example.com
                </span>

                <span>↗</span>

              </a>


              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >

                <span>in</span>

                <span>
                  LinkedIn
                </span>

                <span>↗</span>

              </a>


              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >

                <span>
                  GH
                </span>

                <span>
                  GitHub
                </span>

                <span>↗</span>

              </a>

            </div>

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <span>
          © {new Date().getFullYear()} Anjaneyulu Sontyapu
        </span>

        <span>
          Designed & built with React
        </span>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById('root')
).render(
  <App />
);

