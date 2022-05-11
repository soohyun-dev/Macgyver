# Macgyver Reac Code 
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
- 이때,
  const location = useLocation();<br>
  const item = location.state.item;<br>
  를 사용하여 item 값에 직접 접근하여 각 item 을 바로 사용 할 수 있게해줌.<br>
- 이를 통해 상세페이지 구현
  
