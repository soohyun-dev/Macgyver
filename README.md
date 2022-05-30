# Macgyver - ML 기반 캠핑장 추천 시스템

<br><br>
## 프로젝트 개요
![image](https://user-images.githubusercontent.com/81623931/169924541-aed15039-72ab-4618-a4e2-22ea7339b678.png)

코로나로 인해 지속적으로 성장해 나아가고 있는 캠핑 산업에 발맞춰서 자신의 선호도에 맞는 캠핑장들을 머신러닝을 통해 분류하여 이용자들에게 추천해주는 시스템을 개발.

## 팀원 구성
- 윤수현 (팀장) - FrontEnd, UI/UX 
- 정요원 - BackEnd, DB 구축
- 지하윤 - BackEnd, DB 구축
- 채희지 - ML 모델링, 데이터 전처리 분석

## 기술 스택
![image](https://user-images.githubusercontent.com/81623931/169923984-60d3576f-0207-49aa-a7d1-259ac8044de9.png)


## 개발 기록 (FrontEnd)


##깃허브 배포 버전
https://soohyun-dev.github.io/Macgyver/
<br><br>
## 2022년 5월 5일 ~ 6일 
React Code 생성
- 메인화면
- 커뮤니티
- 추천페이지
- 마이페이지
- 공지
- 신고방

HTML 코드로 작성했던 파일들을 React 코드로 재작성. 
라우터 Link 기능을 통해 서로 연결 완료.
<br><br>
## 2022년 5월 8일 
- mock 데이터 생성 테스트
- 체크리스트 UI 생성 (총 6가지 질문 구성)
- 관리자모드 게시물 삭제, 댓글 삭제 Front 구현 

<br><br>
## 2022년 5월 9일
- 지도 페이지 구현 (카카오 지도 API 활용)
- 이미지 로드 문제 해결 ( http://localhost:3000 ) 문제였음. 3003에서 돌리고 있었는데 재부팅 후 3000번에서 돌리니까 이미지 로드 잘 됨.
- 네이버 로그인 페이지 문제. 생각보다 구현에 어려움 느끼는 중.
- 북마크 클릭시 색 변경 구현했었는데, localhost 바뀌니까 갑자기 작동 안하는 문제 생김.
- api 연동 시도, api.js 파일 생성 

<br><br>
## 2022년 5월 10일
- api.js 에 getPosting, createPosting 함수 생성
- 커뮤니티 글 쓰기, 글 수정, 글 삭제 구현
- 글 수정 부분에서 문제 발생. 게시된 글을 수정누르면 기존 값이 들어가있어야하는데, 빈칸으로 나옴. <br> 3시간 넘게 고민한 결과 타이핑 오류가 있었음.
- 동적인 경로 생성이 어려움. useParams 사용해서 id 값을 비교해야하는데 잘안됨.


<br><br>
## 2022년 5월 11일
- posting 상세페이지 문제 해결.
1. Route를 통해 posting/:id 값으로 각 id 에 맞는 포스팅 상세페이지로 이동
2. Link 태그 내에서 state 로 props 를 전달해줌
3. useLocation 을 이용하여 해당 상세페이지에서 값을 전달받음.
이때, const location = useLocation(); const item = location.state.item; 를 <br>사용하여 item 값에 직접 접근하여 각 item 을 바로 사용 할 수 있게해줌. 이를 통해 상세페이지 구현.<br>
- 추천페이지 UI
- 체크리스트 checkOnlyOne 함수 구현
- 체크리스트 체크 여부 상태관리
- 공지방 데이터 랜더링 구현
- 관리자모드 게시글 삭제 구현
- 공지 작성 Input 구현

<br><br>
## 2022년 5월 12일
- 추천페이지 캠핑장 상세보기 구현
- bottomPage 구현
- 지도페이지 검색 구현
- 마이페이지 작성글 모아보기 구현


<br><br>
## 2022년 5월 14일
- 북마크 기능 구현


<br><br>
## 2022년 5월 15일
- 지도페이지 UI
- 지도페이지 검색시 캠핑장 위치 캠핑장이미지 대체 구현


<br><br>
## 2022년 5월 17일
- 추천페이지 슬라이더 구현

<br><br>
## 2022년 5월 19일
- 추천캠핑장 상세보기 UI 구성
- 복사 버튼 구현 (지도 검색창 붙여넣기 용도)

<br><br>
## 2022년 5월 20일
- 깃허브 배포 성공 (카카오 맵에 문제가 있었음, 도메인 주소 바꿔주니 접속 성공)
- React, Spring Boot CORS 문제 해결 (proxy 로는 해결 안되었으나 스프링쪽에서 3000번 허락해주는 코드 작성하니 데이터 잘 요청됨)

<br><br>
## 2022년 5월 21일
- 캠핑장 리스트 GET 성공. (총 3012개 데이터)
- 네이버 로그인 성공, 유저 데이터 백엔드에 잘 저장됨.
- 로그인 페이지 UI 제작 완료.
- 관리자모드 유저 데이터 GET 성공.

<br><br>
## 2022년 5월 21일
- 공지 작성 수정 
- filter를 통해 커뮤니티 게시판이랑 공지 게시판이랑 보이는 내용 분류 정상 작동
- 글쓰기 창에서 글쓰기 카테고리 분류 체크박스 생성
- 커뮤니티, 신고방 분류 정상 작동
- 글쓰기 UI 일부 수정

<br><br>
## 2022년 5월 22일~29일
- 로그인 문제로 일주일간 골머리 아팠음, 일주일정도 매일 백엔드팀이랑 맞춰본 결과 28일에 카카오 로그인 결국 성공!! 로그인 되니 대기하고있던 기능 구현 원할하게 진행중
- 카카오 소셜 로그인 구현 (React & Sprign Boot)
- 추천캠핑장 GET 구현
- 체크리스트 결과 송신 구현 (하루정도 400에러 계속 발생하다 29일에 해결)
- MyPage 구현
- 북마크 추가 기능 구현
- 관리자모드 유저정보 GET 구현
