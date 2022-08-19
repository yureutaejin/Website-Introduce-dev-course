# Introduce Dev Course
초보 개발자를 위한 course 제시 사이트

주소: 3.101.0.137

## laguage & tool
vanilla js
node js express
html
css

## implementation
project 전체 clone 후, DockerFile build하고 container 구동하면 됩니다.

```sh
git clone https://github.com/yureutaejin

# project에서 frontend 폴더 접근 후
docker build -t introducedevproject:test [dockerfile 있는 folder 위치]

docker run -d -p [local port]:3000 --name introduce_dev introducedevproject:test
```
이후엔 localhost:[local port]로 접근하면 됩니다.