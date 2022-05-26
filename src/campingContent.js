import "./mypage/myPageRecommend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser3 } from "./api/api";

const CampingContentItem = ({ item }) => {
  const { firstImageUrl, facltNm, featureNm, lineIntro, bookmark } = item;
  const [bookMarkIcon, setBookMarkIcon] = useState(bookmark);
  const bookmarkChange = (v) => {
    item.bookmark = v;
  };

  return (
    <>
      <section className="recommend">
        <div className="recommendBlock">
          <div className="recommendImg">
            <img src={firstImageUrl} alt={facltNm} />
          </div>
          <div className="recommendContent">
            <div className="recommendContentTitle">
              <p>{facltNm}</p>
              <div style={{ display: "inline" }}>
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
            <div className="rcIntro">
              <p>{lineIntro}</p>
            </div>
            <div className="recommendContentContent">
              <p>{featureNm}</p>
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
