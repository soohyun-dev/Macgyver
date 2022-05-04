import React from "react";
import Navi from "../Navi";
import "./loginMain.css";
import "../style.css";

const LoginMain = () => {
  return (
    <>
      <Navi />
      <section id="login">
        <h1
          className="logitTitle"
          style={{ color: "#4b636e", fontSize: "20px" }}
        >
          MacGyver
        </h1>
        <form>
          <input type="text" className="loginBlock" placeholder="아이디" />
          <input
            type="password"
            className="loginBlock"
            placeholder="비밀번호"
          />
          <div className="loginClick">
            <a href="../myPage.html">로그인</a>
          </div>
          <div className="signUp">
            <a href="signUp.html" className="loginBack">
              회원가입
            </a>
          </div>
        </form>
        <div className="link">
          <a href="loginShit.html">로그인이 안되시나요?</a>
        </div>
      </section>
    </>
  );
};

export default LoginMain;
