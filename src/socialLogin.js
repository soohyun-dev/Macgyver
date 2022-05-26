const { Kakao } = window;

function SocialLogin({ modalClose }) {
  const kakaoLoginClickHandler = () => {
    if (!Kakao.isInitialized()) {
      Kakao.init("9b57b651f2af90a7c31b9dbdc6c47377");
    }

    const code = new URL(window.location.href).searchParams.get("code");

    Kakao.Auth.loginForm({
      success: function (authObj) {
        fetch(
          `http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/api/oauth/token?code=${code}`,
          {
            method: "GET",
            headers: {
              Authorization: authObj.access_token,
            },
          }
        )
          .then((res) => res.json())
          .then((res) => {
            if (!localStorage.token) {
              localStorage.setItem("token", res.access_token);
              if (res.access_token) {
                alert("맥가이버 에 오신걸 환영합니다.");
              }
            } else {
              alert("이미 로그인 되어 있습니다.");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  return (
    <>
      <button onClick={kakaoLoginClickHandler}>카카오로그인</button>
    </>
  );
}

export default SocialLogin;
