import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section className="stack">
      <div className="page-title">
        <p className="eyebrow">Contact</p>
        <h1>Available for cloud support, DevOps, and infrastructure roles.</h1>
        <p>
          Best fit: teams that need dependable infrastructure support,
          automation-minded troubleshooting, and clean deployment practices.
        </p>
      </div>

      <section className="contact-grid">
        <a className="contact-card" href={`mailto:${profile.email}`}>
          <span>Email</span>
          <strong>{profile.email}</strong>
        </a>
        <a className="contact-card" href={`https://${profile.github}`} target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <strong>{profile.github}</strong>
        </a>
        <div className="contact-card">
          <span>Location</span>
          <strong>{profile.location}</strong>
        </div>
      </section>
    </section>
  );
}
