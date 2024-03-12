import * as http2 from 'node:http2'
import * as fs from 'node:fs'
import * as path from 'node:path'

// SSL/TLS 인증서와 개인 키 경로
const serverOptions = {
  key: fs.readFileSync(path.join(import.meta.dirname, 'privkey.pem')),
  cert: fs.readFileSync(path.join(import.meta.dirname, 'cert.pem')),
}

// HTTP/2 서버 생성
const server = http2.createSecureServer(serverOptions)

server.on('error', err => console.error(err))

server.on('stream', (stream, headers) => {
  // 스트림은 요청과 응답을 다루는 객체입니다.
  // 클라이언트로부터 요청 경로를 가져옵니다.
  const path = headers[':path']

  // 간단한 응답 메시지
  const responseBody = `Hello, HTTP/2 world! Requested path: ${path}`

  // 응답 헤더 설정
  stream.respond({
    'content-type': 'text/plain; charset=utf-8',
    ':status': 200,
  })

  // 응답 본문 보내기
  stream.end(responseBody)
})

// 서버가 8443 포트에서 수신하도록 설정
server.listen(8443, () => {
  console.log('Server is running on https://localhost:8443')
})
