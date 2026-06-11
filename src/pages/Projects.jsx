import { cloudProjects, securityProjects } from "../data/profile.js";

function ProjectGroup({ title, intro, items }) {
  return (
    <section className="content-block">
      <div className="block-header">
        <h2>{title}</h2>
        <p>{intro}</p>
      </div>
      <div className="project-list">
        {items.map((item, index) => (
          <article className="project-item" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Projects() {
  return (
    <section className="stack">
      <div className="page-title">
        <p className="eyebrow">Projects</p>
        <h1>Hands-on infrastructure, automation, and security work.</h1>
        <p>
          Project work is grouped by outcome so it is easier to scan than a
          long resume list.
        </p>
      </div>

      <ProjectGroup
        title="Cloud & DevOps"
        intro="AWS, Azure, containers, CI/CD, IaC, and repeatable deployment labs."
        items={cloudProjects}
      />
      <ProjectGroup
        title="Security & Systems"
        intro="Zero-trust patterns, Rust tooling, container hardening, and defensive automation."
        items={securityProjects}
      />
    </section>
  );
}
