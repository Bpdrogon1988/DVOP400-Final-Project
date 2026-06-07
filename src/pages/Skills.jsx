import { skillGroups } from "../data/profile.js";

export default function Skills() {
  return (
    <section className="stack">
      <div className="page-title">
        <p className="eyebrow">Skills</p>
        <h1>Technical skills organized by operating area.</h1>
        <p>
          The skill set is grouped for hiring managers and technical reviewers
          who need to quickly find cloud, systems, automation, and security
          coverage.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <section className="skill-group" key={group.title}>
            <h2>{group.title}</h2>
            <ul className="tag-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
