import axios from "axios";

export async function getCamping() {
  const response = await fetch(
    "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/camp/list",
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

export function test() {
  axios
    .get(
      "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/camp/1"
    )
    .then((data) => {
      console.log(data.data);
    });
}

const BASE_URL = "https://learn.codeit.kr/api";

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

// 생성
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

// 수정
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

// 삭제

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

// 로그인 api GET

export async function getMember() {
  const response = await fetch("https://api.androidhive.info/contacts/", {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("멤버 리스트를 불러오는데 실패했습니다.");
  }
  const body = await response.json();
  return body;
}

// 로그인 api DELETE

export async function deleteMember(id) {
  const response = await fetch(`https://api.androidhive.info/contacts/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("멤버 리스트를 삭제하는데 실패했습니다.");
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
