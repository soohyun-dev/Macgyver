import "./mypage/myPageRecommend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useState } from "react";
import Rating from "./rating";

const CampingContentItem = ({ item }) => {
  const { imgUrl, rating, title, address, bookmark } = item;
  const [bookMarkIcon, setBookMarkIcon] = useState(bookmark);
  const bookmarkChange = (v) => {
    item.bookmark = v;
  };
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
                    onClick={() => {
                      bookmarkChange(false);
                      setBookMarkIcon(!bookMarkIcon);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="BookMark"
                    style={{ color: "#888" }}
                    onClick={() => {
                      bookmarkChange(true);
                      setBookMarkIcon(!bookMarkIcon);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="recommendContentContent">
              <p>{address}</p>
            </div>
            <Link to={`/recommendContent/${item.id}`} state={{ item: item }}>
              <div className="recommendContentButton">
                <p>보러가기</p>
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
