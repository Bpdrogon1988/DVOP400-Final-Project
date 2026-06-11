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
    items: [
      {
        name: "AWS EC2",
        description: "Virtual Linux or Windows servers in AWS used to host applications, lab workloads, and infrastructure services.",
      },
      {
        name: "S3",
        description: "AWS object storage used for static websites, artifacts, backups, logs, and durable file storage.",
      },
      {
        name: "IAM",
        description: "AWS identity and access management for users, roles, permissions, and least-privilege access control.",
      },
      {
        name: "VPC",
        description: "Private AWS networking for subnets, route tables, security groups, NAT, bastion access, and traffic isolation.",
      },
      {
        name: "ECS/ECR",
        description: "AWS container services for storing Docker images in ECR and running containerized workloads in ECS.",
      },
      {
        name: "RDS",
        description: "Managed AWS relational databases used for reliable backend data storage without manually administering database servers.",
      },
      {
        name: "Lambda",
        description: "Serverless AWS functions used to run event-driven automation without managing a full server.",
      },
      {
        name: "SNS/SQS",
        description: "AWS messaging services used to decouple systems with queues, notifications, and event-driven workflows.",
      },
      {
        name: "CloudFormation",
        description: "AWS infrastructure-as-code templates for repeatable cloud deployments and consistent resource creation.",
      },
      {
        name: "CodePipeline",
        description: "AWS CI/CD service for automating build, test, and deployment workflows.",
      },
      {
        name: "Azure",
        description: "Microsoft cloud platform used for fundamentals, administration coursework, and Azure DevOps pipeline practice.",
      },
    ],
  },
  {
    title: "DevOps",
    items: [
      {
        name: "Docker",
        description: "Container platform used to package applications with their runtime so they build and run consistently.",
      },
      {
        name: "Docker Compose",
        description: "Tool for running multi-container local environments, such as an app with a database, Redis, or gateway service.",
      },
      {
        name: "Git",
        description: "Version control used to track code changes, branch safely, and collaborate on project history.",
      },
      {
        name: "GitHub",
        description: "Source hosting platform used for repositories, pull requests, project publishing, and portfolio delivery.",
      },
      {
        name: "GitHub Actions",
        description: "Workflow automation used to build, test, scan, and publish application containers from the repository.",
      },
      {
        name: "CI/CD",
        description: "Continuous integration and delivery practices that automate testing, packaging, and deployment steps.",
      },
      {
        name: "Kubernetes",
        description: "Container orchestration platform for running, scaling, and managing containerized services.",
      },
      {
        name: "Argo CD",
        description: "GitOps deployment tool that keeps Kubernetes environments aligned with configuration stored in Git.",
      },
      {
        name: "Minikube",
        description: "Local Kubernetes environment used for learning, testing, and practicing cluster workflows on one machine.",
      },
    ],
  },
  {
    title: "Automation",
    items: [
      {
        name: "Terraform",
        description: "Infrastructure-as-code tool used to define, plan, and deploy cloud resources across providers.",
      },
      {
        name: "CloudFormation",
        description: "AWS-native automation for defining cloud resources as templates and deploying them repeatably.",
      },
      {
        name: "Ansible",
        description: "Configuration automation tool used to install packages, configure systems, and standardize server setup.",
      },
      {
        name: "Pulumi concepts",
        description: "Infrastructure-as-code approach that uses general-purpose programming languages to define cloud resources.",
      },
      {
        name: "Bash",
        description: "Linux shell scripting used for repeatable command-line automation, setup tasks, and troubleshooting.",
      },
      {
        name: "PowerShell",
        description: "Windows and cross-platform scripting used for administrative automation and system management.",
      },
      {
        name: "SELinux",
        description: "Linux mandatory access control used to restrict what processes can access, even when normal permissions allow it.",
      },
    ],
  },
  {
    title: "Systems",
    items: ["Ubuntu", "Fedora", "WSL2", "systemd", "firewalld", "SELinux", "Apache", "NGINX", "Windows Server", "AD DS coursework"],
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
