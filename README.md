# DVOP400-Final-Project
Personal website for the DVOP 400 final project, built as a multi-page React app and published as a Docker image via GitHub Actions.

## What is included
- Multi-page site with Home, About, Resume, Projects, Skills, and Contact pages
- Clickable Skills glossary with explanations for Cloud, DevOps, and Automation technologies
- Profile image and cleaned-up portfolio layout for a more readable resume presentation
- React + Vite + React Router SPA
- Dockerfile for production build served by Nginx
- GitHub Actions workflow to build and push a multi-platform image to Docker Hub
- Deployment guide with pull/run instructions

## Technology stack
- React 18, React Router
- Vite
- Docker + Nginx
- GitHub Actions (docker/build-push-action with buildx)

## Run locally
```bash
npm install
npm run dev
```

## Build production bundle
```bash
npm run build
```

## Docker
Build locally:
```bash
docker build -t dvop400-finalproject:local .
```

Run locally:
```bash
docker rm -f dvop400-finalproject
docker run -d --name dvop400-finalproject -p 8080:8080 dvop400-finalproject:local
```

Then open http://localhost:8080/#/

Run the published Docker Hub image:
```bash
docker rm -f dvop400-finalproject
docker pull brandenp88/dvop400-finalproject:latest
docker run -d --name dvop400-finalproject -p 8080:8080 brandenp88/dvop400-finalproject:latest
```

Check that it is running:
```bash
docker ps --filter name=dvop400-finalproject
```

## CI/CD (GitHub Actions)
Workflow file: .github/workflows/docker-publish.yml

Required GitHub Secrets:
- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN

The workflow builds and publishes a multi-platform Docker image to Docker Hub.

## Repo structure
- src/: React source
- src/data/profile.js: portfolio content, resume data, skills, and clickable skill explanations
- public/: static assets
- Dockerfile: container build
- deployment.md: Docker run instructions and PR link

## Notes
- The app uses hash routes for static hosting, such as http://localhost:8080/#/skills.
