import Navi from "../components/Navi";
import "./loginMain.css";
import "../style.css";
import BottomPage from "../components/bottomPage";
import Klogin from "../klogin";
import { Link } from "react-router-dom";

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
          <Klogin />

          {/* 
          네이버 로그인 Btn
          <button
            onClick={() =>
              window.open(
                "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/oauth2/authorization/naver?redirect_uri=http://localhost:3000/Macgyver/myPage",
                "_self"
              )
            }
          >
            <img
              className="loginImg"
              src={`${process.env.PUBLIC_URL}/img/naverLogin.png`}
              alt=""
            />
          </button> */}
        </div>
        <div className="loginExplain_02">
          <p>사용자 정보는 등록된 카카오 로그인 정보를 통해 제공받습니다.</p>
        </div>
      </section>

      <BottomPage />
    </>
  );
};

export default LoginMain;

// function GetProfile() {
//     window.location.href.includes("access_token") && getUser();

//     function GetUser() {
//       const location = window.location.href.split("=")[1];
//       const loca = location.split("&")[0];
//       const header = {
//         Authorization: loca,
//       };

//       fetch(
//         "http://ec2-3-35-91-109.ap-northeast-2.compute.amazonaws.com:8081/oauth2/authorization/naver",
//         {
//           method: "get",
//           headers: header,
//         }
//       )
//         .then((res) => res.json())
//         .then((res) => {
//           localStorage.setItem("wtw-token", res.token);
//         });
//     }
//   }

//   GetProfile();
