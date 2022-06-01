import "./nav.css";
import { Link, useNavigate } from "react-router-dom";

const Navi = () => {
  const navigate = useNavigate();
  // 로그아웃
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
  };

  //   if (!Kakao.Auth.getAccessToken()) {
  //     console.log('Not logged in.');
  //     return;
  //   }
  //   Kakao.Auth.logout(function() {
  //     console.log(Kakao.Auth.getAccessToken());
  //   });
  //   Kakao.API.request({
  //     url: '/v1/user/unlink',
  //     success: function(response) {
  //       console.log(response);
  //     },
  //     fail: function(error) {
  //       console.log(error);
  // },
  //   });

  function LogoutButton() {
    return (
      <button
        onClick={() => {
          logout();
        }}
        className="logout"
      >
        로그아웃
      </button>
    );
  }

  function UserButton(props) {
    if (props.isLoggedIn > 0) {
      return <LogoutButton />;
    }
  }
  const cnt = localStorage.length;

  return (
    <>
      <div className="nav">
        <Link to="/">
          <h1 className="logo">MacGyver</h1>
        </Link>
        <div>
          <Link to="/New">
            <h2 className="menu" href="#">
              신규
            </h2>
          </Link>
          <Link to="/Recommend">
            <h2 className="menu" href="#">
              캠핑장추천
            </h2>
          </Link>
          <Link to="/Map">
            <h2 className="menu" href="#">
              지도
            </h2>
          </Link>
          <Link to="/Community">
            <h2 className="menu" href="#">
              커뮤니티
            </h2>
          </Link>
          <Link to="/login">
            <h2 className="menu" href="#">
              마이페이지
            </h2>
          </Link>
          <UserButton isLoggedIn={cnt} />
        </div>
      </div>
    </>
  );
};

export default Navi;
