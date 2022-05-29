import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./kakaoLogin.css";
const { Kakao } = window;

const KakaoLogin = () => {
  const navigate = useNavigate();
  const REST_API_KEY = "a31288d41e5fc2bfcf3d40ec4cf3b196";
  const REDIRECT_URI = "http://localhost:3000/Macgyver/login";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    // 백엔드로부터 jwt 토큰 받기
    (async () => {
      try {
        const res = await axios
          .get(
            `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/oauth/token?code=${code}`
          )
          .then((response) => {
            console.log("확인", response);
            const token = response.headers.authorization;
            window.localStorage.setItem("token", token);
          });
        console.log(res);
      } catch (e) {
        console.error(e);
      }

      const token = window.localStorage.getItem("token");
      // 백엔드로 토큰 다시 넘기기
      try {
        const res = await axios
          .get(
            "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/user/mypage",
            {
              headers: {
                Authorization: token,
                request: token,
              },
            }
          )
          .then((data) => {
            window.localStorage.setItem("profile", data);
            console.log(data);
            if (data) {
              navigate("../myPage");
            }
          });
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const profile = window.localStorage.getItem("profile");

  return (
    <>
      <div className="KaKaoBtn">
        <a href={KAKAO_AUTH_URI}>카카오로 시작하기</a>
      </div>
    </>
  );
};

export default KakaoLogin;
