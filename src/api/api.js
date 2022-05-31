import axios from "axios";

const token = window.localStorage.getItem("token");

////////////////////////////////////////////////////////
//            북마크 되어있는지 체크 (색상)
////////////////////////////////////////////////////////

export async function bookmarkCheck() {
  const response = await fetch(
    "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/bookmark/ids",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    }
  );
  if (!response.ok) {
    throw new Error("북마크 아이콘 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  console.log(body);
  return body;
}

////////////////////////////////////////////////////////
//                  북마크 추가
////////////////////////////////////////////////////////
export async function postBookmark(id) {
  const response = await fetch(
    `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/bookmark/${id}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    }
  );
  console.log(id);

  if (!response.ok) {
    throw new Error("북마크를 추가하는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

////////////////////////////////////////////////////////
//                  북마크 해제
////////////////////////////////////////////////////////
export async function deleteBookmark(id) {
  const response = await fetch(
    `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/bookmark/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    }
  );
  console.log(id);

  if (!response.ok) {
    throw new Error("북마크를 해제하는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

////////////////////////////////////////////////////////
//            체크리스트 결과 송신
////////////////////////////////////////////////////////
export async function postCheckList(result) {
  const response = await fetch(
    "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/user/prefer",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(result),
    }
  );
  console.log(result);

  if (!response.ok) {
    throw new Error("체크리스트 결과를 전달하는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
////////////////////////////////////////////////////////
//              유저 정보3 불러오기
////////////////////////////////////////////////////////
export async function getUser3() {
  const response = await fetch(
    "http://221.145.28.93:3000/choice/user3?userID=3",
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  console.log(body);
  return body;
}

////////////////////////////////////////////////////////
//               북마크 정보 불러오기
////////////////////////////////////////////////////////

export async function getBookmark() {
  const response = await fetch(
    "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/user/bookmark",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    }
  );
  if (!response.ok) {
    throw new Error("북마크 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
////////////////////////////////////////////////////////
//               마이페이지 유저 정보
//////////////////////////////////////////////////////

export async function getMyPage() {
  const response = await fetch(
    "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/user/mypage",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: token,
      },
    }
  );

  if (!response.ok) {
    throw new Error("마이페이지 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
////////////////////////////////////////////////////////
//                  관리자 유저정보
////////////////////////////////////////////////////////
export async function getUser() {
  const response = await fetch(
    `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/admin/userList`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("유저 정보를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}
////////////////////////////////////////////////////////
//                  유저 정보 삭제
////////////////////////////////////////////////////////
export async function deleteUser(id) {
  const response = await fetch(
    `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/admin/userList/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: token,
        request: token,
      },
      body: {
        "content-type": "application/json",
        result: id,
      },
    }
  );
  if (!response.ok) {
    throw new Error("유저를 삭제하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}
////////////////////////////////////////////////////////
//                  캠핑장 불러오기
////////////////////////////////////////////////////////
export async function getCamping() {
  const response = await fetch(
    "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/camp/recommend",
    {
      method: "GET",
      headers: {
        Authorization: token,
        request: token,
      },
    }
  );
  if (!response.ok) {
    throw new Error("캠핑장을 불러오는데 실패했습니다");
  }
  const body = await response.json();
  console.log(body);
  return body;
}

const BASE_URL = "https://learn.codeit.kr/api";
////////////////////////////////////////////////////////
//               게시물 불러오기
////////////////////////////////////////////////////////
export async function getPosting({
  order = "createdAt",
  offset = 0,
  limit = 8,
}) {
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(`${BASE_URL}/film-reviews?${query}`);
  if (!response.ok) {
    throw new Error("리뷰를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}

////////////////////////////////////////////////////////
//                  게시물 생성
////////////////////////////////////////////////////////
export async function createPosting(formData) {
  const response = await fetch(`${BASE_URL}/film-reviews`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰를 생성하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

////////////////////////////////////////////////////////
//                   게시물 수정
////////////////////////////////////////////////////////
export async function updatePosting(id, formData) {
  const response = await fetch(`${BASE_URL}/film-reviews/${id}`, {
    method: "PUT",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("리뷰를 수정하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

////////////////////////////////////////////////////////
//                    게시물 삭제
////////////////////////////////////////////////////////

export async function deletePosting(id) {
  const response = await fetch(`${BASE_URL}/film-reviews/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("리뷰를 삭제하는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

export async function createCheckList(msg) {
  fetch("https://learn.codeit.kr/api/members", {
    method: "POST",
    body: JSON.stringify(msg),
  })
    .then((response) => response.text())
    .then((result) => {
      console.log(result);
    });
}
