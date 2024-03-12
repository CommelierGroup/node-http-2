# node-http-2

Implementing an HTTP/2 Server with Node.js

## 사전 요구사항

HTTP/2 기반의 서버를 실행하기 위해서는 ssl 인증서가 필요합니다.

아래 명령어는 개발용 인증서(자체 서명)를 발급하는 방법이며, 실제 인증기관이 발급해준 ssl 인증서가 필요합니다.

```sh
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' -keyout ./src/privkey.pem -out ./src/cert.pem
```

## 실행

인증서 설정이 완료되면 아래와 같은 명령어를 실행하세요.

```sh
npm run start
```
