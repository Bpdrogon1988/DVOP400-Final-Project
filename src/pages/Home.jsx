export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Welcome</p>
        <h1>
          Building cloud-ready platforms, automation pipelines, and resilient
          infrastructure.
        </h1>
        <p className="lead">
          This site highlights my Cloud DevOps background, hands-on lab work,
          and the project portfolio I am building across AWS, Linux, Docker,
          and GitHub Actions.
        </p>
        <div className="cta-group">
          <a className="btn primary" href="/resume">
            View Resume
          </a>
          <a className="btn ghost" href="/about">
            About Me
          </a>
        </div>
      </div>
      <div className="hero-card">
        <h2>Focus Areas</h2>
        <ul>
          <li>Cloud architecture and networking labs</li>
          <li>CI/CD automation with Docker and GitHub Actions</li>
          <li>Security-focused infrastructure engineering</li>
          <li>Modern DevOps tooling and IaC practices</li>
        </ul>
      </div>
    </section>
  );
}
