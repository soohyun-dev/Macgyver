import { Link } from "react-router-dom";
import Navi from "../components/Navi";
import "./manager.css";
import MemberList from "./component/memberList";
import { useEffect, useState } from "react";
import { deleteUser, getUser } from "../api/api";
import user from "../mock/userMock.json";

const LIMIT = 8;

const Manager = () => {
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);
  const [hasNext, setHasNext] = useState(false);

  const handleLoad = async (options) => {
    const user = await getUser();
    if (options.offset === 0) {
      setItems(user);
    } else {
      setOffset([...items, ...user]);
    }
    setItems(user);

    console.log(items);
  };

  const handleDelete = async (id) => {
    const result = await deleteUser(id);
    if (!result) return;
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
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
            <p style={{ backgroundColor: "#000", color: "#fff" }}>회원 관리</p>
          </div>
        </Link>

        <Link to="/postManager">
          <div className="postingManage">
            <p>게시물 관리</p>
          </div>
        </Link>

        <Link to="/announceWrite">
          <div className="announceWrite">
            <p style={{ backgroundColor: "#fff", color: "#000" }}>공지 작성</p>
          </div>
        </Link>
      </section>

      <section id="managerClassify">
        <div className="managerId">
          <p>아이디</p>
        </div>
        <div className="managerDay">
          <p>가입일</p>
        </div>
        <div className="managerModify">
          <p>관리</p>
        </div>
      </section>

      <MemberList items={user} onDelete={handleDelete} />

      <div class="loadButton">
        <button disabled={!hasNext} onClick={handleLoadMore}>
          더보기
        </button>
      </div>
    </>
  );
};

export default Manager;
