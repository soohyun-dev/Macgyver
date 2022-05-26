import axios from "axios";
import React, { useEffect, useState } from "react";
import { KakaoLogin } from "./kkkLogin";
const { Kakao } = window;

const Klogin = () => {
  const [userData, setUserData] = useState("[]");
  const REST_API_KEY = "a31288d41e5fc2bfcf3d40ec4cf3b196";
  const REDIRECT_URI = "http://localhost:3000";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`api/code=${code}`);
        const token = res.headers.authorization;
        window.localStorage.setItem("token", token);
        try {
          const res = await axios.post("/api/post", {
            headers: {
              Authorization: token,
            },
          });
          console.log(res);
        } catch (e) {
          console.error(e);
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  //   axios
  //     .get(
  //       `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081?code=${code}`,
  //       {
  //         headers: {
  //           "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res.data["access_token"]);
  //       console.log(res);
  //     })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log("확인");
  //       localStorage.setItem("access_token", res.token);
  //       setUserData({
  //         nickname: res.nickname,
  //       });
  //       console.log(res);
  //     });

  //   //   const req = new Request(`https://kauth.kakao.com/oauth/token`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(),
  //   });
  //   console.log(req);

  //   Kakao.Auth.setAccessToken(REST_API_KEY);

  //   console.log(userData);

  return (
    <>
      <a href={KAKAO_AUTH_URI} onClick={KakaoLogin}>
        카카오로 시작하기
      </a>
    </>
  );
};

export default Klogin;
