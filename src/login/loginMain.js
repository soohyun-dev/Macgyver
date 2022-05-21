import React from "react";
import Navi from "../components/Navi";
import "./loginMain.css";
import "../style.css";
import BottomPage from "../components/bottomPage";

const LoginMain = () => {
  return (
    <>
      <Navi />
      <section id="login">
        <div className="loginTitle">
          <p>MacGyver Login</p>
        </div>
        <div className="loginExplain_01">
          <p>
            *캠핑장 정보를 더욱 효과적으로 추천드리기 위해 <br /> 로그인이
            필요합니다.
          </p>
        </div>
        <div className="loginBox">
          <button
            onClick={() =>
              window.open(
                "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/oauth2/authorization/naver",
                "_blank"
              )
            }
          >
            <img
              className="loginImg"
              src={`${process.env.PUBLIC_URL}/img/naverLogin.png`}
              alt=""
            />
          </button>
        </div>
        <div className="loginExplain_02">
          <p>사용자 정보는 등록된 네이버 로그인 정보를 통해 제공받습니다.</p>
        </div>
      </section>
      <BottomPage />
    </>
  );
};

export default LoginMain;
