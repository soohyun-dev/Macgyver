import "./bottomPage.css";
import { Link } from "react-router-dom";

const BottomPage = () => {
  const up = () => {
    return window.scrollTo(0, 0);
  };
  return (
    <>
      <section id="bottomPage">
        <div class="bottomPage">
          <div class="bottomCatagory">
            <div class="bottomCatagory_0">
              <Link to="/">
                <p>맥가이버</p>
              </Link>
            </div>
            <div class="bottomCatagory_1">
              <p onClick={up} style={{ cursor: "pointer" }}>
                추천페이지
              </p>
            </div>
            <div class="bottomCatagory_2">
              <Link to="/map">
                <p>지도</p>
              </Link>
            </div>
            <div class="bottomCatagory_3">
              <div class="bC">
                <Link to="/community">
                  <p>커뮤니티</p>
                </Link>
                <div class="bCBlock">
                  <Link to="/announce">
                    <p>공지</p>
                  </Link>
                </div>
                <div class="bCBlock">
                  <Link to="/report">
                    <p>신고방</p>
                  </Link>
                </div>
              </div>
            </div>
            <div class="bottomCatagory_4">
              <Link to="/myPage">
                <p>마이페이지</p>
              </Link>
            </div>
          </div>
          <div class="copyright">
            <p>© Macgyver. All rights reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BottomPage;
