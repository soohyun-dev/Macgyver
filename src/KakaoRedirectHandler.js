import React from "react";
import { useNavigate } from "react-router-dom";

const { Kakao } = window;

function KakaoLo() {
  const navigate = useNavigate();
  const loginWithKakao = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch(
          "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081",
          {
            method: "GET",
            headers: {
              Authorization: authObj.access_token,
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            console.log(res.access_token);
            localStorage.setItem("Kakao_token", res.access_token);
            if (res.access_token) {
              alert("로그인 성공");
              navigate("/");
            }
          });
      },
    });
  };

  return (
    <button onClick={() => loginWithKakao()}>
      <p>카카오 로그인</p>
    </button>
  );
}

export default KakaoLo;
