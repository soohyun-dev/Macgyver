import Navi from "../components/Navi";
import "./postManager.css";
import "./manager.css";
import { Link } from "react-router-dom";
import PostingList from "./component/postingList";
import { useEffect, useState } from "react";
import { getPosting, deletePosting } from "../api/api";

const LIMIT = 8;

const PostManager = () => {
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [hasNext, setHasNext] = useState(false);

  const handleDelete = async (id) => {
    const result = await deletePosting(id);
    if (!result) return;

    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

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

  return (
    <>
      <Navi />
      <section>
        <div className="managerTitle">
          <p>관리자모드</p>
        </div>
      </section>

      <section id="managerCatagory">
        <Link to="/manager">
          <div className="memberManage">
            <p>회원 관리</p>
          </div>
        </Link>

        <Link to="/postManager">
          <div className="postingManage">
            <p style={{ backgroundColor: "#000", color: "#fff" }}>
              게시물 관리
            </p>
          </div>
        </Link>

        <Link to="/announceWrite">
          <div className="announceWrite">
            <p style={{ backgroundColor: "#fff", color: "#000" }}>공지 작성</p>
          </div>
        </Link>
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

      <PostingList items={items} onDelete={handleDelete} />
      <div class="loadButton">
        <button disabled={!hasNext} onClick={handleLoadMore}>
          더보기
        </button>
      </div>
    </>
  );
};

export default PostManager;
