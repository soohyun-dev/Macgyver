import axios from "axios";

export const KakaoLogin = (history) => {
  window.Kakao.Auth.login({
    success: (response) => {
      axios
        .get(`9b57b651f2af90a7c31b9dbdc6c47377/kakao`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: response.access_token,
          },
        })
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          alert("로그인 되었습니다.");
          history.push("/");
        });
    },
    fail: (error) => {
      alert(JSON.stringify(error));
    },
  });
};
