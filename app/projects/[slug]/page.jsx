import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <>
      <div className="bg-orb orb-a" aria-hidden="true" />
      <div className="bg-orb orb-b" aria-hidden="true" />

      <header className="project-header">
        <Link href="/" className="btn btn-ghost">
          Back to Portfolio
        </Link>
      </header>

      <main className="project-page">
        <article className="project-detail reveal is-visible">
          {project.image ? (
            <div className="project-hero-image">
              <Image
                src={project.image}
                alt={project.imageAlt || `${project.title} screenshot`}
                width={1600}
                height={900}
                priority
              />
            </div>
          ) : null}
          <p className="eyebrow">Project Overview</p>
          <h1>{project.title}</h1>
          <p className="project-summary">{project.summary}</p>

          <ul className="project-tags detail-tags">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>Highlights</h2>
          <ul className="project-highlights">
            {project.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className="project-action-row">
            <a className="btn" href={project.visitUrl} target="_blank" rel="noopener">
              {project.visitLabel}
            </a>
            <Link href="/" className="btn btn-ghost">
              Home
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
