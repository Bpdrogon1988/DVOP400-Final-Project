PR URL: https://github.com/Bpdrogon1988/DVOP400-Final-Project/pull/REPLACE_ME

# Deployment Instructions

## Docker Hub Image
- Repository: brandenp88/dvop400-finalproject
- Tags: latest, <git-sha>

## Pull the Image
```bash
docker pull brandenp88/dvop400-finalproject:latest
```

## Run the Container
```bash
docker rm -f dvop400-finalproject
docker run -d --name dvop400-finalproject -p 8080:8080 brandenp88/dvop400-finalproject:latest
```

## View in Browser
Open: http://localhost:8080/#/

## Troubleshooting
If port 8080 is already in use, stop the old container and start this one again:
```bash
docker rm -f dvop400-finalproject
docker run -d --name dvop400-finalproject -p 8080:8080 brandenp88/dvop400-finalproject:latest
```

## Notes
- Windows and macOS users should run Docker Desktop with Linux containers enabled.
- Update the PR URL above once the pull request is created.
- Replace the placeholder profile image at public/profile-placeholder.svg with your photo.
