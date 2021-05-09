---
title: HTTP (Hyper Text Transfer Protocol)
date: 2021-04-19T01:17:08.101Z
author: ura
category: study
hero_image: /content/images/igor-son-FV_PxCqgtwc-unsplash.jpg
---

## http 메시지에 모든 것을 전송

* HTML, TEXT
* IMAGE, 음성, 영상, 파일
* JSON, XML(JSON)
* 거의 모든 형태의 데이터 전송 가능
* 서버간에 데이터를 주고 받을 때도 대부분 HTTP 사용

## 기반 프로토콜

* TCP ← HTTP/1.1, HTTP/2 TCP프로토콜 위에서 동작
* HTTP3 ← UDP 기반으로 되어 있음 (어플리케이션 단계에서 udp 프로토콜 위에 성능을 최적하도록 새로 나온 것)

## HTTP 특징

* 클라이언트 서버 구조

  * request response 구조
  * 클라이언트는 http 메시지를 서버에 요청을 보내고 응답을 대기함
  * 서버가 요청에 대한 결과를 만들어서 응답함.
  * 클라이언트는 UI/사용성 , 서버는 비즈니스 로직 (양쪽이 독립적으로 성장가능)
* 무상태 프로토콜(Stateless)

  * 서버가 클라이언트의 상태를 보존하지 않는다 .

    * 상태 유지 - stateful (서버가 이전 상태를 보존함)
    * 무상태 - stateless
  * 상태유지는 중간에 변경되면 안된다. ( 바뀌려면 기존 상태정보를 가지고 있어야하며 넘겨줘야함)
  * 무상태는 바뀌어도 됨.

    * 클라이언트에서 대거 요청이 들어와도 서버에서 대거 응답 가능
  * 상태유지인경우 서버1이 장애가나면 클라이언트에서 다시 시작해야함
  * 무상태는

    * 아무 서버나 호출해도 된다.
    * 스케일 아웃 - 수평 확장 유리하다 .
  * 무상태 한계

    * 상태를 유지해야 하는 경우 → 일반적으로 브라우저 쿠키와 서버 세션등을 사용해서 상태 유지
    * 상태 유지는 최소한만 사용해야함
    * 데이터를 너무 많이 보낸다.
* 비연결성

  * 필요한 것만 주고받고 끊어 버림
  * 최소한의 자원 유지.!
  * 연결을 유지하지 않는 모델임
  * 초 단위의 이하의 빠른 속도로 응답
  * 실제로 수천명이 요청을 해도 1시간동안 처리하는 요청은 몇 건 되지 않는다.
  * 서버 자원을 매우 효율적으로 사용
  * 단점

    * tcp/ip 연결을 새로 맺어야함 3 way handshake 시간이 추가 (응답 요청)
    * 너무 많은 자원이 다운로드가 됨(불필요정보)
    * http는 지속연결을 기본적으로 사용함 ← http2,3는 많은 최적화가 됨

      * http3는 udp 연결을 통해 더 빠르게 요청 최적화가 되어 있음.
  * 스테이스리스를 기억해야함!!!!
  * 첫페이지는 정적페이지를 뿌림 (상태 X) → 이벤트 페이지로 (이벤트 페이지 설계)
* HTTP 메시지로 통신함

  * start line = request-line / status-line
  * request-line = method , 요청대상, HTTP 버전
  * method 종류

    * GET, POST, PUT, DELETE
  * HTTP 헤더

    * http 전송에 필요한 모든 부가 정보
  * HTTP 메시지 body

    * byte 로 표현 할 수 있는 모든 데이터가 전송됨!
* 단순하며, 확장 가능하다.

## HTTP API

* URI 설계 - 리소스 식별이 중요
* 리소스와 행위를 분리해야함
* 리소스는 명사 , 행위는 동사

## HTTP METHOD

* GET, POST, PUT, DELETE, PATCH
* head, option
* 안전
* 멱등 → POST는 멱등하지 않는다. 멱등은 외부요인까지 간섭하지 않는다 .
* 캐시가능

  * get, head,post, patch
  * 실제로 get, head정도만 캐시로 사용
  * post, patch는 본문 내용까지 봐야하므로 캐시로 사용하지 않음

## HTTP 활용

* 클라이언트 ↔서버

[](https://restfulapi.net/resource-naming)<https://restfulapi.net/resource-naming> ← uri 설계 개념

[](https://tools.ietf.org/html/rfc7230)<https://tools.ietf.org/html/rfc7230> ← HTTP 스펙