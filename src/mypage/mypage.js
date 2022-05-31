import Navi from "../components/Navi";
import "./mypage.css";
import "../community/report/report.css";
import "../community/report/reportTitle.css";
import { Link } from "react-router-dom";
import CampingContent from "../campingContent";
import BottomPage from "../components/bottomPage";
import { getPosting, deletePosting, getBookmark, getMyPage } from "../api/api";
import PostingList from "../manager/component/postingList";
import { useState, useEffect, useRef } from "react";
import Items from "../mock/rcMock.json";

const LIMIT = 8;

const profile = window.localStorage.getItem("profile");
console.log(profile);

const Mypage = () => {
  // 마이페이지 해당 유저 정보 불러오기
  const [user, setUser] = useState([]);
  const tmp = [];
  // 응답에 맞게 페이지를 랜더링

  const loadUser = async () => {
    const information = await getMyPage();
    setUser(information);
  };

  useEffect(() => {
    loadUser();
  }, []);
  // 유저정보 출력해보기
  console.log(user);

  getMyPage();
  // 북마크 되어있는 값만 전
  const result = Items.filter((item) => item.bookmark === true);

  const [bookmark, setBookmark] = useState([]);
  // 북마크 정보
  const bookmarkHandleLoad = async () => {
    const bookmark = await getBookmark();
    setBookmark(bookmark);
  };

  useEffect(() => {
    bookmarkHandleLoad();
  }, []);

  console.log(bookmark);

  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [hasNext, setHasNext] = useState(false);

  const handleDelete = async (id) => {
    const result = await deletePosting(id);
    if (!result) return;

    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 작성한 글
  const handleLoad = async (options) => {
    const { reviews, paging } = await getPosting(options);
    if (options.offset === 0) {
      setItems(reviews);
    } else {
      setItems([...items, ...reviews]);
    }
    setOffset(options.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ offset, limit: LIMIT });
  };

  useEffect(() => {
    handleLoad({ offset: 0, limit: LIMIT });
  }, []);

  //   let n = user.nickname;
  //   if (n === undefined) {
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 1000);
  //   }

  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      window.location.reload();
    }
  }, []);
  return (
    <>
      <Navi />
      <section id="myPageTitle">
        <p className="titleText">
          <span>{user.nickname}</span>님의 페이지.
        </p>
      </section>
      <section id="myPageBookmark">
        <CampingContent items={bookmark} />
      </section>
      <section>
        <div className="reportTitle">
          <p>작성 글</p>
        </div>
      </section>
      <section id="managerClassify">
        <div className="managerPostingTitle">
          <p>제목</p>
        </div>
        <div className="managerPostingId">
          <p>작성자</p>
        </div>
        <div className="managerPostingDay">
          <p>작성일</p>
        </div>
        <div className="managerPostingModify">
          <p>관리</p>
        </div>
      </section>

      <PostingList items={tmp} onDelete={handleDelete} />

      <div class="loadButton">
        <button disabled={!hasNext} onClick={handleLoadMore}>
          더보기
        </button>
      </div>

      <section>
        <div className="loginSetting">
          <div className="loginSettingBlock">
            <Link to="/signUpDel">
              <p href="myPage/signUpDel.html" className="widrawalBlock">
                회원탈퇴
              </p>
            </Link>
          </div>
        </div>
      </section>

      <BottomPage />
    </>
  );
};

export default Mypage;
