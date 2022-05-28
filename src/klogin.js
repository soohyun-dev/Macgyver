import axios from "axios";
import React, { useEffect, useState } from "react";
const { Kakao } = window;

const Klogin = () => {
  const REST_API_KEY = "a31288d41e5fc2bfcf3d40ec4cf3b196";
  const REDIRECT_URI = "http://localhost:3000/Macgyver/login";
  const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  // 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  //   fetch(
  //     `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/oauth/token?code=${code}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",
  //         Accept: "application/json",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log("확인", response);
  //       if (response.Authorization) {
  //         localStorage.setItem("token", response.Authorization);
  //         console.log("로그인 성공");
  //       } else {
  //         console.log("로그인 실패");
  //       }
  //     });

  const [userData, setUserData] = useState("[]");
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
          .then((response) => {
            console.log("확인", response);

            const name = response.data.nickname;
            console.log(name);
          });
        console.log(res);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  Kakao.Auth.login({
    success: () => {
      Kakao.API.request({
        url: "/v2/user/me", // 사용자 정보 가져오기
        success: (res) => {
          // 로그인 성공할 경우 정보 확인 후 /kakao 페이지로 push
          //   console.log(res);
          //   console.log(
          //     "생년월일 :",
          //     res.kakao_account.birthday,
          //     "이메일 :",
          //     res.kakao_account.email,
          //     "성별 :",
          //     res.kakao_account.gender,
          //     "이름 :",
          //     res.kakao_account.profile.nickname
          //   );
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    fail: (error) => {
      console.log(error);
    },
  });

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

  //   const req = new Request(`https://kauth.kakao.com/oauth/token`, {
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
      <a href={KAKAO_AUTH_URI}>카카오로 시작하기</a>
    </>
  );
};

export default Klogin;
