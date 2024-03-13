# node-http-2

Implementing an HTTP/2 Server with Node.js

## 사전 요구사항

HTTP/2 서버를 운영하기 위해서는 ssl 인증서가 필요합니다.

아래 명령어는 개발용 인증서(자체 서명)를 발급하는 방법이며, 실제 인증기관이 발급해준 ssl 인증서가 필요합니다.

```sh
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout ./src/privkey.pem -out ./src/cert.pem
```

## 실행

인증서 설정이 완료되면 아래와 같은 명령어를 실행하세요.

```sh
npm run start
```

## HTTP 2란?

[링크](https://inpa.tistory.com/entry/WEB-%F0%9F%8C%90-HTTP-20-%ED%86%B5%EC%8B%A0-%EA%B8%B0%EC%88%A0-%EC%9D%B4%EC%A0%9C%EB%8A%94-%ED%99%95%EC%8B%A4%ED%9E%88-%EC%9D%B4%ED%95%B4%ED%95%98%EC%9E%90)

## 크롬 개발자도구 네트워크 탭에서 프로토콜 활성화

![Screenshot 2024-03-12 at 17 16 32](https://github.com/JeHwanYoo/node-http-2/assets/13535954/b0b6c286-2dff-44d7-884e-ef4bd08b708c)

![Screenshot 2024-03-12 at 17 15 31](https://github.com/JeHwanYoo/node-http-2/assets/13535954/3384f681-4e40-49a1-b6c0-ba8ad873c21a)
