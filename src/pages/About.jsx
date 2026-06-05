export default function About() {
  return (
    <section className="about">
      <div className="about-image">
        <img src="/profile-placeholder.svg" alt="Branden Frady" />
      </div>
      <div className="about-content">
        <h1>About Me</h1>
        <p>
          Cloud engineering student and hands-on infrastructure builder with
          completed AWS Solutions Architect Associate and Linux+ certifications,
          AAS-level Cloud DevOps training, and college certificate coursework
          across Linux, Windows Server, VMware, networking, Docker, GitHub
          Actions, and cloud automation.
        </p>
        <p>
          I focus on production-style labs that pair cloud architecture with
          automation and security. Recent work includes ECS and ECR
          microservices, S3 and CloudFormation deployments, CI/CD pipelines,
          and zero-trust architecture patterns.
        </p>
        <div className="about-meta">
          <div>
            <span className="label">Location</span>
            <span>Spokane, WA</span>
          </div>
          <div>
            <span className="label">Email</span>
            <span>canfood2015@gmail.com</span>
          </div>
          <div>
            <span className="label">GitHub</span>
            <span>github.com/Bpdrogon1988</span>
          </div>
        </div>
      </div>
    </section>
  );
}
