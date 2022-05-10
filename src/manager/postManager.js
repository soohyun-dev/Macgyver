import Navi from "../components/Navi";
import "./postManager.css";
import "./manager.css";
import { Link } from "react-router-dom";
import PostingList from "./component/postingList";
import mockItems from "../mock/cmMock.json";
import { useState } from "react";

const PostManager = () => {
  const [items, setItems] = useState(mockItems);

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };
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

      <section>
        <div className="postingPage">
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              1
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              2
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              3
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              4
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              5
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              6
            </p>
          </li>
          <li>
            <p href="#" name="page" onclick="checkOnlyOne(this)">
              7
            </p>
          </li>
        </div>
      </section>
    </>
  );
};

export default PostManager;
