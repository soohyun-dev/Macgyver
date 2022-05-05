import "./myPageRecommend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MyPageRecommend = () => {
  return (
    <>
      <section className="recommend">
        <div className="recommendBlock">
          <div className="recommendImg">
            <img src={"img/rec01.jpg"} alt="" />
          </div>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div className="recommendContent">
            <div className="recommendContentTitle">
              <p>서울 북한산 럭셔리 글램핑</p>
              <FontAwesomeIcon icon={faBookmark} className="BookMark" />
            </div>
            <div className="recommendContentContent">
              <p>서울 은평구 북한산로 242</p>
            </div>
            <Link to="/recommendContent">
              <div className="recommendContentButton">
                <p href="#">보러가기</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default MyPageRecommend;
