import { certifications, education, profile, targetRoles } from "../data/profile.js";

export default function Resume() {
  return (
    <section className="stack">
      <div className="page-title compact">
        <p className="eyebrow">Resume</p>
        <h1>{profile.name}</h1>
        <p>{profile.summary}</p>
      </div>

      <section className="resume-layout">
        <aside className="resume-sidebar">
          <div>
            <h2>Contact</h2>
            <p>{profile.location}</p>
            <p>{profile.email}</p>
            <p>{profile.github}</p>
          </div>
          <div>
            <h2>Target Roles</h2>
            <ul className="tag-list vertical">
              {targetRoles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="resume-main">
          <section className="content-block">
            <h2>Professional Summary</h2>
            <p>
              Cloud engineering student and infrastructure builder with
              hands-on lab experience across AWS, Linux, containers,
              networking, automation, CI/CD, and security-focused deployment
              practices.
            </p>
          </section>

          <section className="content-block">
            <h2>Certifications & Coursework</h2>
            <ul className="clean-list">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="content-block">
            <h2>Education</h2>
            <ul className="clean-list">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </section>
  );
}
