tar --remove-files -xzf ~/k70/webapp.tar.gz -C ~/k70/

cd k70

# build the image
docker build -f docker/prod/Dockerfile -t k70-web-app:latest .
docker container rm -f k70-web-app || true
docker image prune -f --filter "until=24h"
docker run -d --memory=512m --cpus=0.5 --restart unless-stopped --network frontend -e "VIRTUAL_HOST=https://qa.kanchenjunga70.com" --name k70-web-app k70-web-app:latest
