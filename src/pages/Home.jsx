import { Link } from "react-router-dom";
import { highlights, profile, targetRoles } from "../data/profile.js";

export default function Home() {
  return (
    <section className="stack">
      <div className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Cloud DevOps Portfolio</p>
          <h1>Building reliable cloud infrastructure with automation and security in mind.</h1>
          <p className="lead">{profile.summary}</p>
          <div className="cta-group">
            <Link className="btn primary" to="/projects">View Projects</Link>
            <Link className="btn secondary" to="/resume">Resume</Link>
          </div>
        </div>
        <aside className="profile-panel" aria-label="Profile summary">
          <img src={profile.photo} alt={profile.name} />
          <div>
            <p className="panel-name">{profile.name}</p>
            <p>{profile.location}</p>
          </div>
        </aside>
      </div>

      <section className="section-grid">
        <div className="section-intro">
          <p className="eyebrow">Overview</p>
          <h2>Clear strengths for cloud support, infrastructure, and junior DevOps roles.</h2>
        </div>
        <div className="feature-list">
          {highlights.map((item) => (
            <article className="feature-row" key={item}>
              <span />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="role-strip" aria-label="Target roles">
        {targetRoles.map((role) => (
          <span key={role}>{role}</span>
        ))}
      </section>
    </section>
  );
}
