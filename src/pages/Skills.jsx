import { useState } from "react";
import { skillGroups } from "../data/profile.js";

export default function Skills() {
  const firstDetailedSkill = skillGroups
    .flatMap((group) => group.items)
    .find((item) => typeof item === "object");
  const [activeSkill, setActiveSkill] = useState(firstDetailedSkill?.name);

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
              {group.items.map((item) => {
                const skill = typeof item === "string" ? { name: item } : item;
                const hasDescription = Boolean(skill.description);
                const isActive = activeSkill === skill.name;

                return (
                  <li className={hasDescription ? "skill-tag interactive" : "skill-tag"} key={skill.name}>
                    {hasDescription ? (
                      <button
                        aria-expanded={isActive}
                        aria-controls={`skill-${skill.name.replaceAll(" ", "-").replaceAll("/", "-")}`}
                        className={isActive ? "skill-button active" : "skill-button"}
                        type="button"
                        onClick={() => setActiveSkill(isActive ? "" : skill.name)}
                      >
                        {skill.name}
                      </button>
                    ) : (
                      <span>{skill.name}</span>
                    )}
                    {hasDescription && isActive ? (
                      <p id={`skill-${skill.name.replaceAll(" ", "-").replaceAll("/", "-")}`} className="skill-description">
                        {skill.description}
                      </p>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
