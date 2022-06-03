import Navi from "../components/Navi";
import "./loginMain.css";
import "../style.css";
import BottomPage from "../components/bottomPage";
import KakaoLogin from "./kakaoLogin";

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
          {/* 카카오 로그인 */}
          <KakaoLogin />
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
