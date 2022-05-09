import "./mypage/myPageRecommend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CampingContentItem = ({ item }) => {
  const { imgUrl, rating, title, location } = item;

  return (
    <>
      <section className="recommend">
        <div className="recommendBlock">
          <div className="recommendImg">
            <img src={imgUrl} alt={title} />
          </div>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <p>{rating}</p>
          </div>
          <div className="recommendContent">
            <div className="recommendContentTitle">
              <p>{title}</p>
              <FontAwesomeIcon icon={faBookmark} className="BookMark" />
            </div>
            <div className="recommendContentContent">
              <p>{location}</p>
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

const CampingContent = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <CampingContentItem item={item} />;
      })}
    </>
  );
};
export default CampingContent;
