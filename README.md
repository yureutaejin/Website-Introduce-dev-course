# 2022 디스커버리학기 웹프로그래밍 프로젝트  
2022년 서울과학기술대학교 프로그래밍 경진대회 최우수상 (Top Award)

# Introduction
초보 개발자를 위한 introduction 웹사이트

주소: http://introducedevcourseyureutaejin.tech/  

# 구현 제한 조건 (강의)  
- javascript 및 기초적인 html을 사용할 것 (웹프레임워크를 사용하지 않고 정적인 파일을 제공하도록)  
강의의 구현 조건 안에서는 정적파일을 무한히 만들 수 밖에 없으므로, 따로 백엔드를 두어 요청하도록 만들었습니다.  
웹프레임워크를 활용한다면 해당 프로젝트의 코드보다 더 간결하게, 더 적게 만들 수 있었을 것입니다.(rendering)

# Abstract
요즈음 많은 사람들이 소프트웨어 개발에 관심을 가지고 배우고 있다. 하지만 초기에 정확한 진로의 종류와 커리큘럼 등을 파악하지 못하는 경우가 많고 단순히 학과 or 학원의 커리큘럼을 따라 공부하면서 정작 본인에게 맞는 진로를 찾지 못하고 소위 ‘양산형 개발자’가 되는 경우가 많다. 이를 막기 위해 초보자들도 소프트웨어 개발 진로와 커리큘럼 등을 어느정도 파악할 수 있는 사이트를 만드려고 한다.

제공 서비스는 진로 소개, stack, 도움이 되는 영상, 로드맵 pdf, 기초적인 사진 등을 제공하려 한다.

# implementation
![Architecture](https://user-images.githubusercontent.com/85734054/186342042-266b75b4-fc67-4372-8b5a-f6e81cd02384.PNG)

메인 정적 페이지(index.html)를 두고 각 서비스는 이미지를 클릭해서 이동하도록 한다. (addeventlistener)

이후 각 진로 및 stack에 관한 페이지는 내용만 바뀌고 페이지 형식은 크게 달라지지 않으므로 html 파일을 여러개 만들기 보다는, node js express 웹서버와 js파일을 통해 동적으로 html 파일의 부분을 바꾼다.

해당 내용은 하나의 json 파일로 구성하거나 변수형태로 두려했으나, 코드의 효율성 및 정리 정도가 매우 떨어지고 CORS 이슈가 발생하기도 했으며 내용이 늘어난다면 관리가 힘들다고 생각했다.

따라서 향후 user 요청에 따른 데이터 관리구현까지 생각하여 python flask 프레임워크로 간단한 백엔드를 구성했다. 현재는 프론트의 GET 요청에 따라 json을 return해주지만, 이후에는 CURD와 REST API의 정의를 만족하는 기능을 구현하려한다.

해당 파이프라인은 github page나 AWS S3와 같은 정적 페이지 호스팅 공간에서는 구현이 불가능하므로 AWS EC2 인스턴스 서버를  할당받아서 배포했다. https 제공을 고려해 도메인은 github student package로 무료로 구입해서 route 53에 등록했다.

배포는 github와 docker을 활용해 구성했다. 프론트, 백 각각 dockerfile을 구성하고 서버에서 image build 및 run을 하면 바로 깃허브에서 pull을 통해 연결 및 배포가 완료된다.

해당 페이지는 초보 개발자를 위해서 만들었으며, 웹프레임워크를 활용한다면 훨씬 효율적이게 구현이 가능할 것이다. 따라서 해당 페이지 또한 초보 개발자가 쉽게 접하고 구현을 재현할 수 있도록 dockerfile과 재현 방법을 모두 github에 제공한다.


## laguage & tool
vanilla js
node js express
html
css
python
flask
docker

## deploy
aws ec2
domain => github student pack
인스턴스 할당하고 router 53을 사용해 도메인 등록 완료했습니다.

## local implementation test
project 전체 git clone 후, fronend, backend DockerFile 각각 build하고 container 구동하면 됩니다.

```sh
git clone https://github.com/yureutaejin/univ_introduce_dev_course

# project에서 frontend, backend 폴더 내부에 각각 접근 후
docker build -t introducedevproject:front .
docker build -t introducedevproject:back .

# 반드시 백엔드 외부 포트와 프론트엔드 외부 포트가 달라야합니다.
docker run -it -d -p [local port1]:3000 --name introduce_dev_front introducedevproject:front
docker run -it -d -p [local port2]:5000 --name introduce_dev_back introducedevproject:back
```

실행이 되지 않는다면 각 container에 docker attach로 접근하고 프론트는 npm start, 백은 python server.py 하시면 됩니다.
이후엔 127.0.0.1:[local port1]으로 접근하면 됩니다.
서버 배포의 경우에, 포트포워딩에 따라 달라질 수 있는데. carrer.js랑 stack.js의 back_url 변수 값을 변경해주시면 됩니다. 백엔드에서 curl http://{api 주소} 로 먼저 return 값이 나오는지 확인해보세요. 나온다면 해당 주소로 back_url을 변경해주면 됩니다.
