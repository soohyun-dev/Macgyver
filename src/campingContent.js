import "./mypage/myPageRecommend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Rating from "./rating";

const CampingContentItem = ({ item }) => {
  const { imgUrl, rating, title, location } = item;
  const [bookMarkIcon, setbookMarkIcon] = useState(false);

  return (
    <>
      <section className="recommend">
        <div className="recommendBlock">
          <div className="recommendImg">
            <img src={imgUrl} alt={title} />
          </div>
          <div className="rating">
            <Rating value={rating} />
          </div>
          <div className="recommendContent">
            <div className="recommendContentTitle">
              <p>{title}</p>
              <div>
                {bookMarkIcon === true ? (
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="BookMark"
                    onClick={() => setbookMarkIcon(!bookMarkIcon)}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="BookMark"
                    style={{ color: "color: rgb(169, 169, 169);" }}
                    onClick={() => setbookMarkIcon(!bookMarkIcon)}
                  />
                )}
              </div>
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
