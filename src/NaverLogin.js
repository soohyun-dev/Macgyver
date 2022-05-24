// 네이버 로그인 JDK 사용로직
import React, { useEffect } from "react";

const { naver } = window;

const NaverLogin = () => {
  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "niL6_sFJJCPqpfSO0uHU",
      callbackUrl:
        "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/login/oauth2/code/naver",
      clientSecret: "I7DrhpsqP6",
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: "green", type: 3, height: "60" }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return <div id="naverIdLogin" />;
};

export default NaverLogin;
