docker build -t mszlachetko/mikrus:latest .
docker build -t mszlachetko/nginx:latest -f ./nginx/Dockerfile .
docker push mszlachetko/mikrus:latest
docker push mszlachetko/nginx:latest
