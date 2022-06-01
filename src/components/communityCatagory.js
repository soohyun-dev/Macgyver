import { Link } from "react-router-dom";
import "./communityCatagory.css";

const communityCatagory = () => {
  return (
    <>
      <section id="communityCatagoryBlock">
        <div>
          <div className="leftBlock">
            <Link to="/community">
              <li
                style={{
                  backgroundColor: "#ff5983",
                  fontSize: "13px",
                  height: "28px",
                  width: "65px",
                }}
              >
                <p>전체보기</p>
              </li>
            </Link>
            <Link to="/tip">
              <li style={{ backgroundColor: "#b2ff59" }}>
                <p>팁공유</p>
              </li>
            </Link>
            <Link to="/free">
              <li style={{ backgroundColor: "#00e5ff" }}>
                <p>자유</p>
              </li>
            </Link>
            <Link to="/review">
              <li style={{ backgroundColor: "#ff9e80" }}>
                <p>후기</p>
              </li>
            </Link>
          </div>

          <div className="rightBlock">
            <Link to="/report">
              <li>
                <p>신고방</p>
              </li>
            </Link>
            <Link to="/announce">
              <li>
                <p>공지</p>
              </li>
            </Link>
            <Link to="/communityWrite">
              <li style={{ backgroundColor: "#000", color: "#fff" }}>
                <p>글쓰기</p>
              </li>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default communityCatagory;
