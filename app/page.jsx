'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { projects } from './data/projects';

const languageBadges = [
  { label: 'JS/TypeScript', icon: '/icons/javascript.svg' },
  { label: 'Golang', icon: '/icons/go.svg' },
  { label: 'Java', icon: '/icons/java.svg' },
  { label: 'Next.js', icon: '/icons/nextjs.svg' }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = useMemo(
    () => [
      { id: 'about', label: 'Home' },
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'contact', label: 'Contact' }
    ],
    []
  );

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((section) => sectionObserver.observe(section));
    return () => sectionObserver.disconnect();
  }, []);

  return (
    <>
      <div className="bg-orb orb-a" aria-hidden="true" />
      <div className="bg-orb orb-b" aria-hidden="true" />

      <header className="site-header" id="top">
        <a className="brand" href="#top" aria-label="Rayan Malki home">
          RM <span>Rayan Malki</span>
        </a>

        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`site-nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-right">
          <a
            className="header-social"
            href="https://github.com/RayanMalki"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <img src="/icons/github.svg" alt="" aria-hidden="true" />
          </a>
          <a
            className="header-social"
            href="https://linkedin.com/in/RayanMalki"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <img src="/icons/linkedin.svg" alt="" aria-hidden="true" />
          </a>
          <a className="btn btn-nav" href="/cv-rayan-malki-english.pdf" target="_blank" rel="noopener">
            Download CV
          </a>
        </div>
      </header>

      <main>
        <section className="hero section reveal" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineering Student, Montreal</p>
            <h1>Hi, I&apos;m Rayan Malki</h1>
            <p className="lead">
              I build reliable backend systems and practical full-stack products with a strong focus on performance,
              maintainability, and clean architecture.
            </p>

            <div className="lang-row" aria-label="Language and platform skills">
              {languageBadges.map((badge) => (
                <span className="lang-pill" key={badge.label}>
                  <img src={badge.icon} alt="" aria-hidden="true" />
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <a className="btn" href="#projects">
                View Projects
              </a>
              <a className="btn btn-ghost" href="mailto:rayanmalki54@gmail.com">
                Email Me
              </a>
            </div>
          </div>

          <div className="hero-photo-shell" aria-label="Rayan Malki portrait">
            <div className="hero-photo">
              <Image
                src="/images/rayan-portrait.jpg"
                alt="Rayan Malki portrait"
                fill
                priority
                sizes="(max-width: 960px) 88vw, 420px"
              />
            </div>
          </div>
        </section>

        <section className="skills section reveal" id="skills" aria-labelledby="skills-title">
          <div className="section-head">
            <p className="eyebrow">Capabilities</p>
            <h2 id="skills-title">Technical Stack</h2>
          </div>
          <div className="skills-grid">
            <article className="card">
              <h3>Languages</h3>
              <p>Go, TypeScript, JavaScript, Python, Java, C, SQL, PHP, Bash, HTML, CSS</p>
            </article>
            <article className="card">
              <h3>Technologies</h3>
              <p>React.js, Next.js, Node.js, Express.js, Docker, PostgreSQL, MySQL, SQLite, OracleDB, Git</p>
            </article>
            <article className="card">
              <h3>Cloud &amp; Systems</h3>
              <p>Microsoft Azure, Google Cloud, TCP/IP protocols, API design, backend architecture, Agile workflows</p>
            </article>
          </div>
        </section>

        <section className="projects section reveal" id="projects" aria-labelledby="projects-title">
          <div className="section-head">
            <p className="eyebrow">Featured Projects</p>
            <h2 id="projects-title">Projects</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card project-link-card">
                {project.image ? (
                  <div className="project-thumb">
                    <Image
                      src={project.image}
                      alt={project.imageAlt || `${project.title} preview`}
                      width={1200}
                      height={675}
                    />
                  </div>
                ) : null}
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="project-open">Open</span>
                </div>
                <p>{project.shortSummary}</p>
                <ul className="project-tags">
                  {project.stack.slice(0, 4).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </section>

        <section className="contact section reveal" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Let&apos;s Build</p>
            <h2 id="contact-title">Interested in working together?</h2>
            <p className="lead-small">
              I am open to internships, collaborations, and backend/full-stack opportunities where I can ship dependable
              systems and keep learning fast.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:rayanmalki54@gmail.com">rayanmalki54@gmail.com</a>
            <a href="tel:+15145609384">+1 (514) 560-9384</a>
            <a href="https://github.com/RayanMalki" target="_blank" rel="noopener">
              github.com/RayanMalki
            </a>
            <a href="https://linkedin.com/in/RayanMalki" target="_blank" rel="noopener">
              linkedin.com/in/RayanMalki
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Rayan Malki</p>
        <p>Software Engineering Student at ETS</p>
      </footer>
    </>
  );
}
