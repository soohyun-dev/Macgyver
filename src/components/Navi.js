import "./nav.css";
import { Link } from "react-router-dom";

const Navi = () => {
  return (
    <>
      <div className="nav">
        <Link to="/main">
          <h1 className="logo">MacGyver</h1>
        </Link>
        <div>
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
        </div>
      </div>
    </>
  );
};

export default Navi;
