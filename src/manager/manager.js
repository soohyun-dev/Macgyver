import { Link } from "react-router-dom";
import Navi from "../components/Navi";
import "./manager.css";
import mockItems from "../mock/userMock.json";
import MemberList from "./component/memberList";
import { useState } from "react";

const Manager = () => {
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

      <MemberList items={items} onDelete={handleDelete} />

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

export default Manager;
