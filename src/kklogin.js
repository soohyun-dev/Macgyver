import axios from "axios";
import React, { useEffect, useState } from "react";
import KaKaoLogin from "react-kakao-login";
import styled from "styled-components";

function Login() {
  const [data, setData] = useState("");

  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  const responseKaKao = (res) => {
    setData(res);

    const profile = JSON.stringify(res);
    console.log(profile);

    localStorage.setItem("user", JSON.stringify(res));

    const req = new Request(
      `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/oauth/token?code=${code}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    console.log(req);
    
    fetch(
      `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/oauth/token?code=${code}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("확인", response);
        if (response.Authorization) {
          localStorage.setItem("token", response.Authorization);
          console.log("로그인 성공");
        } else {
          console.log("로그인 실패");
        }
      });
  };

  //   useEffect(() => {
  //     (async () => {
  //       try {
  //         const response = await axios.post("/api/oauth/token", data, {
  //           headers: {
  //             Authorization: data,
  //           },
  //         });
  //       } catch (e) {
  //         console.error(e);
  //       }
  //     })();
  //   }, []);

  // const sendKakaoTokenToServer = (token) => {
  //   axios.post("/auth/kakao", { access_token: token }).then((response) => {
  //     if (response.status == 201 || response.status == 200) {
  //       const user = response.data.user;
  //       window.localStorage.setItem(
  //         "token",
  //         JSON.stringify({
  //           access_token: response.data.jwt,
  //         })
  //       );
  //     } else {
  //       window.alert("로그인에 실패하였습니다.");
  //     }
  //   });
  // };

  // sendKakaoTokenToServer(res);

  // axios({
  //   method: "post",
  //   url: "https://learn.codeit.kr/api/film-reviews",
  //   data: {
  //     res,
  //   },
  // });

  const responseFail = (err) => {
    alert(err);
  };

  return (
    <div className="login">
      <div className="login__box">
        {/*<div className="kakao__login"><FontAwesomeIcon icon="comments" className="login__icon" />카카오 로그인</div>*/}
        <KaKaoBtn
          //styled component 통해 style을 입혀 줄 예정
          jsKey="9b57b651f2af90a7c31b9dbdc6c47377"
          //카카오에서 할당받은 jsKey를 입력
          buttonText="카카오 계정으로 로그인"
          //로그인 버튼의 text를 입력
          onSuccess={responseKaKao}
          onFailure={responseFail}
          //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장
          getProfile={true}
        />
        <div className="kakao__signup"></div>
      </div>
    </div>
  );
}

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
