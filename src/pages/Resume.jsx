const certifications = [
  "AWS Certified Solutions Architect - Associate (Score: 878)",
  "CompTIA Linux+ XK0-005 (Score: 812)",
  "Microsoft Azure Fundamentals AZ-900 (Completed)",
  "Microsoft Azure Administrator AZ-104 (Completed)",
  "Red Hat Certified System Administrator / RHCSA coursework (Completed)",
  "Microsoft Windows Server MCSA/MCSE college certificate track",
  "VMware vSphere ICM 8.x college coursework",
  "Cisco CCNA / DevNet coursework",
];

const education = [
  "Associate of Applied Science (AAS) - Cloud DevOps / Computer Information Systems",
  "Spokane Community College - Cloud engineering, DevOps, Linux, Windows Server, virtualization, networking, and AWS Academy coursework",
  "Bachelor of Applied Science pathway in Cloud DevOps / CIS in progress; focus on AWS, Azure, DevOps automation, Cisco networking, Terraform, Ansible, and CI/CD",
  "Completed extensive hands-on lab sequence across Linux administration, Windows Server, VMware vSphere, AWS Academy, Docker, Git/GitHub, GitHub Actions, and Cisco Packet Tracer",
];

const cloudProjects = [
  "Containerized and deployed a broken-down monolithic application as microservices using AWS Cloud9, ECR, ECS, task definitions, services, and container image workflows",
  "Built static and dynamic website deployment workflows using S3 website hosting, CloudFormation templates, CodeCommit/CodePipeline automation, and repeatable infrastructure deployment",
  "Designed public/private subnet layouts with route tables, Internet Gateway, NAT Gateway, Bastion host access, security groups, AWS CLI validation, and VPC troubleshooting workflows",
  "Implemented event-driven patterns using Lambda, SNS, SQS, S3, and reporting workflows to separate application components and improve reliability",
  "Worked with RDS/MariaDB, Secrets Manager concepts, application load balancing, Auto Scaling, EC2, and backend database connectivity",
  "Built an Azure DevOps pipeline for a containerized Node.js application integrating source control, Docker image creation, and deployment-style workflow practice",
  "Designed CI/CD workflow concepts for building and publishing a personal website container image to Docker Hub using GitHub Actions and repository secrets",
  "Built and planned Terraform projects for VPCs, subnets, route tables, EC2, KMS, multi-cloud app deployments, and policy-style plan scanning",
];

const securityProjects = [
  "Built a Rust-based zero-trust WAF architecture with JWT and IP filtering, Redis-backed rate limiting, 4-hour container rotation, cosign-signed images, Docker hardening, encrypted telemetry, and audit logging",
  "Implemented a local mineable blockchain node with genesis block creation, block hashing, serialization, and cryptographic validation concepts",
  "Created a FastAPI gateway with JWT issuance and revocation, Redis token blacklist patterns, proxy routing, Docker Compose orchestration, and zero-trust access controls",
  "Developed a file scanning tool using walkdir, serde, sha2, blake3, and recursive hashing patterns for integrity validation and security automation",
  "Built a command-line firewall management concept integrating nftables and iptables operations, IP rules, and infrastructure security automation workflows",
  "Created a hardened container rotation workflow with AES-GCM and ChaCha20 encryption concepts, cosign signing and verification, and scheduled rebuild patterns",
  "Built a Rust-based Kubernetes operator workflow and practiced GitOps deployment concepts using Argo CD, Docker, Minikube, and WSL2",
];

const skills = [
  "Cloud: AWS EC2, S3, IAM, VPC, ECS/ECR, RDS, Lambda, SNS/SQS, CloudFormation, CodePipeline, CloudWatch concepts; Azure and Azure DevOps",
  "DevOps & Containers: Docker, Docker Compose, Git, GitHub, GitHub Actions, CI/CD, Kubernetes, Argo CD, Minikube, container hardening",
  "IaC & Automation: Terraform, CloudFormation, Ansible, Pulumi concepts, Bash, PowerShell, repeatable infrastructure deployment",
  "Linux/Windows: Ubuntu, Fedora, WSL2, systemd, firewalld, SELinux basics, Apache, NGINX, DNS/BIND, Windows Server, AD DS coursework",
  "Networking: VLANs, trunking, EtherChannel, DHCP/DHCPv6, IPv6, routing tables, subnetting, security groups, NAT, bastion access, Packet Tracer",
  "Programming/Security: Rust, Python, JavaScript/TypeScript, Node.js, JWT, mTLS concepts, Redis rate limiting, IP filtering, KMS concepts, cosign/Sigstore, hashing, encryption, audit logging",
];

const targetRoles = [
  "Cloud Systems Administrator",
  "Junior Cloud Engineer",
  "DevOps Technician",
  "Infrastructure Support Engineer",
  "Cloud Support Associate",
  "Junior Platform Engineer",
];

export default function Resume() {
  return (
    <section className="resume">
      <header className="resume-header">
        <h1>Resume</h1>
        <p>
          Cloud engineering student and hands-on infrastructure builder with
          completed AWS Solutions Architect Associate and Linux+ certifications,
          AAS-level Cloud DevOps training, and college certificate coursework
          across Linux, Windows Server, VMware, networking, Docker, GitHub
          Actions, and cloud automation.
        </p>
      </header>

      <div className="resume-grid">
        <div className="resume-card">
          <h2>Certifications & College Certificates</h2>
          <ul>
            {certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-card">
          <h2>Education</h2>
          <ul>
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-card wide">
          <h2>Cloud & DevOps Project Experience</h2>
          <ul>
            {cloudProjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-card wide">
          <h2>Security, Rust & Infrastructure Engineering</h2>
          <ul>
            {securityProjects.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-card">
          <h2>Technical Skills</h2>
          <ul>
            {skills.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="resume-card">
          <h2>Target Roles</h2>
          <ul>
            {targetRoles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
