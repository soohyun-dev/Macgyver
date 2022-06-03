import "./mypage/myPageRecommend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  bookmarkCheck,
  deleteBookmark,
  getBookmark,
  postBookmark,
} from "./api/api";
import Logo from "./MacGyver.jpg";

const CampingContentItem = ({ item }) => {
  const { id, firstImageUrl, facltNm, addr1, lineIntro, bookmark } = item;
  const [bookMarkIcon, setBookMarkIcon] = useState(bookmark);
  const bookmarkChange = (v) => {
    item.bookmark = !v;
  };
  ////////////////////////////////////////////////////////
  //            북마크 되어있는지 체크 (색상)
  ////////////////////////////////////////////////////////

  const [check, setCheck] = useState([]);

  const loadBookmark = async () => {
    const information = await bookmarkCheck();
    setCheck(information);
  };

  //////////////////////////////////////////////////////////////////////
  //          북마크 아이콘 색깔변경을 위한 북마크 저장 확인
  //////////////////////////////////////////////////////////////////////
  const [zzims, setZzim] = useState([]);

  const bookmarkHandleLoad = async () => {
    const zzims = await getBookmark();
    setZzim(zzims);
  };

  useEffect(() => {
    loadBookmark();
    bookmarkHandleLoad();
  }, []);

  const ImageUrl = firstImageUrl === "" ? Logo : firstImageUrl;

  const comment = lineIntro === "" ? "캠핑장 추천은 역시 MacGyver" : lineIntro;

  const cc = (id) => {
    if (check.includes(id)) {
      item.bookmark = true;
      return true;
    } else {
      item.bookmark = false;
      return false;
    }
  };

  return (
    <>
      <section className="recommend">
        <div className="recommendBlock">
          <div className="recommendImg">
            <img src={ImageUrl} alt={facltNm} />
          </div>
          <div className="recommendContent">
            <div className="recommendContentTitle">
              <p>{facltNm}</p>
              <div style={{ display: "inline" }}>
                {cc(id) === true ? (
                  bookmark === true ? (
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className="BookMark"
                      onClick={() => {
                        setBookMarkIcon(!bookMarkIcon);
                        deleteBookmark(item.id);
                        bookmarkChange(true);
                      }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faBookmark}
                      className="BookMark"
                      style={{ color: "#888" }}
                      onClick={() => {
                        setBookMarkIcon(!bookMarkIcon);
                        postBookmark(item.id);
                        bookmarkChange(false);
                      }}
                    />
                  )
                ) : bookmark === true ? (
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="BookMark"
                    onClick={() => {
                      setBookMarkIcon(!bookMarkIcon);
                      deleteBookmark(item.id);
                      bookmarkChange(true);
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="BookMark"
                    style={{ color: "#888" }}
                    onClick={() => {
                      setBookMarkIcon(!bookMarkIcon);
                      postBookmark(item.id);
                      bookmarkChange(false);
                    }}
                  />
                )}
              </div>
            </div>
            <div className="rcIntro">
              <p>{comment}</p>
            </div>
            <div className="recommendContentContent">
              <p>{addr1}</p>
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
      <div>
        {Object.keys(items).length === 12 ? (
          <CampingContentItem item={items} />
        ) : (
          items.map((item) => {
            return <CampingContentItem item={item} />;
          })
        )}
      </div>
    </>
  );
};

export default CampingContent;
