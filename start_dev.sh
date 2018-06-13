# sudo docker stack deploy gozh -c gozh.yml
sudo docker run --rm -p 8089:8020 -v "$PWD":/usr/src/app -w /usr/src/app node:8.0 npm run dev