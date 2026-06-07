export const profile = {
  name: "Branden Frady",
  title: "Cloud DevOps | Infrastructure Automation",
  location: "Spokane, WA",
  email: "canfood2015@gmail.com",
  github: "github.com/Bpdrogon1988",
  photo: "/WIN_20260424_12_24_54_Pro.jpg",
  summary:
    "Cloud engineering student and hands-on infrastructure builder focused on AWS, Linux, Docker, CI/CD, and security-minded automation.",
};

export const highlights = [
  "AWS Solutions Architect Associate and CompTIA Linux+ certified",
  "AAS-level Cloud DevOps training with AWS, Azure, Linux, Windows Server, VMware, Cisco, Docker, and GitHub Actions",
  "Production-style labs covering VPC design, ECS/ECR, S3, CloudFormation, CI/CD, container hardening, and zero-trust patterns",
];

export const certifications = [
  "AWS Certified Solutions Architect - Associate (Score: 878)",
  "CompTIA Linux+ XK0-005 (Score: 812)",
  "Microsoft Azure Fundamentals AZ-900 (Completed)",
  "Microsoft Azure Administrator AZ-104 (Completed)",
  "Red Hat Certified System Administrator / RHCSA coursework (Completed)",
  "Microsoft Windows Server MCSA/MCSE college certificate track",
  "VMware vSphere ICM 8.x college coursework",
  "Cisco CCNA / DevNet coursework",
];

export const education = [
  "Associate of Applied Science (AAS) - Cloud DevOps / Computer Information Systems",
  "Spokane Community College - Cloud engineering, DevOps, Linux, Windows Server, virtualization, networking, and AWS Academy coursework",
  "Bachelor of Applied Science pathway in Cloud DevOps / CIS in progress; focus on AWS, Azure, DevOps automation, Cisco networking, Terraform, Ansible, and CI/CD",
  "Completed hands-on labs across Linux administration, Windows Server, VMware vSphere, AWS Academy, Docker, Git/GitHub, GitHub Actions, and Cisco Packet Tracer",
];

export const cloudProjects = [
  "Containerized and deployed a broken-down monolithic application as microservices using AWS Cloud9, ECR, ECS, task definitions, services, and image workflows",
  "Built static and dynamic website deployment workflows using S3 website hosting, CloudFormation templates, CodeCommit/CodePipeline automation, and repeatable deployment",
  "Designed public/private subnet layouts with route tables, Internet Gateway, NAT Gateway, bastion access, security groups, AWS CLI validation, and VPC troubleshooting",
  "Implemented event-driven patterns using Lambda, SNS, SQS, S3, and reporting workflows to separate application components and improve reliability",
  "Worked with RDS/MariaDB, Secrets Manager concepts, application load balancing, Auto Scaling, EC2, and backend database connectivity",
  "Built an Azure DevOps pipeline for a containerized Node.js application integrating source control, Docker image creation, and deployment workflow practice",
  "Designed CI/CD workflow concepts for building and publishing a personal website container image to Docker Hub using GitHub Actions and repository secrets",
  "Built and planned Terraform projects for VPCs, subnets, route tables, EC2, KMS, multi-cloud app deployments, and policy-style plan scanning",
];

export const securityProjects = [
  "Built a Rust-based zero-trust WAF architecture with JWT and IP filtering, Redis-backed rate limiting, container rotation, cosign-signed images, Docker hardening, encrypted telemetry, and audit logging",
  "Implemented a local mineable blockchain node with genesis block creation, block hashing, serialization, and cryptographic validation concepts",
  "Created a FastAPI gateway with JWT issuance and revocation, Redis token blacklist patterns, proxy routing, Docker Compose orchestration, and zero-trust access controls",
  "Developed a file scanning tool using walkdir, serde, sha2, blake3, and recursive hashing patterns for integrity validation and security automation",
  "Built a command-line firewall management concept integrating nftables and iptables operations, IP rules, and infrastructure security automation workflows",
  "Created a hardened container rotation workflow with AES-GCM and ChaCha20 encryption concepts, cosign signing and verification, and scheduled rebuild patterns",
  "Built a Rust-based Kubernetes operator workflow and practiced GitOps deployment concepts using Argo CD, Docker, Minikube, and WSL2",
];

export const skillGroups = [
  {
    title: "Cloud",
    items: ["AWS EC2", "S3", "IAM", "VPC", "ECS/ECR", "RDS", "Lambda", "SNS/SQS", "CloudFormation", "CodePipeline", "Azure"],
  },
  {
    title: "DevOps",
    items: ["Docker", "Docker Compose", "Git", "GitHub", "GitHub Actions", "CI/CD", "Kubernetes", "Argo CD", "Minikube"],
  },
  {
    title: "Automation",
    items: ["Terraform", "CloudFormation", "Ansible", "Pulumi concepts", "Bash", "PowerShell"],
  },
  {
    title: "Systems",
    items: ["Ubuntu", "Fedora", "WSL2", "systemd", "firewalld", "SELinux basics", "Apache", "NGINX", "Windows Server", "AD DS coursework"],
  },
  {
    title: "Networking",
    items: ["VLANs", "Trunking", "EtherChannel", "DHCP/DHCPv6", "IPv6", "Routing", "Subnetting", "NAT", "Bastion access", "Packet Tracer"],
  },
  {
    title: "Security & Code",
    items: ["Rust", "Python", "JavaScript", "Node.js", "JWT", "mTLS concepts", "Redis rate limiting", "IP filtering", "KMS concepts", "cosign", "Hashing", "Audit logging"],
  },
];

export const targetRoles = [
  "Cloud Systems Administrator",
  "Junior Cloud Engineer",
  "DevOps Technician",
  "Infrastructure Support Engineer",
  "Cloud Support Associate",
  "Junior Platform Engineer",
];
