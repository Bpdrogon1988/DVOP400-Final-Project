import { education, highlights, profile } from "../data/profile.js";

export default function About() {
  return (
    <section className="stack">
      <div className="page-title">
        <p className="eyebrow">About</p>
        <h1>Practical cloud training, built through real labs.</h1>
        <p>
          I focus on the operational side of cloud: clean deployment flows,
          repeatable infrastructure, secure containers, and systems that are
          understandable enough to support.
        </p>
      </div>

      <section className="split">
        <div className="photo-frame">
          <img src={profile.photo} alt={profile.name} />
        </div>
        <div className="content-block">
          <h2>Current Focus</h2>
          <ul className="clean-list">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="content-block">
        <h2>Education</h2>
        <p>
          Spokane Community College coursework and degree work have covered
          cloud engineering, DevOps, Linux, Windows Server, virtualization,
          networking, AWS Academy labs, Docker, GitHub Actions, and Cisco
          Packet Tracer.
        </p>
        <ul className="timeline-list">
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
