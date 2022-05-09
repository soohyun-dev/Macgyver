import Navi from "../Navi";
import "./announceWrite.css";
import "./manager.css";
import { Link } from "react-router-dom";
const AnnounceWrite = () => {
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
            <p>게시물 관리</p>
          </div>
        </Link>

        <Link to="/announceWrite">
          <div className="announceWrite">
            <p style={{ backgroundColor: "#000", color: "#fff" }}>공지 작성</p>
          </div>
        </Link>
      </section>

      <section id="announceWrite">
        <div className="announceWriteBlock">
          <div className="annWriteTitle">
            <p>제목</p>
            <input />
          </div>
          <div className="annWriteFile">
            <p>첨부파일</p>
            <input />
          </div>
        </div>

        <div className="annWriteWrite">
          <input />
        </div>
      </section>

      <section id="announceWriteSubmit">
        <div>
          <p href="#">글 작성</p>
          <p href="community.html">되돌아가기</p>
        </div>
      </section>
    </>
  );
};

export default AnnounceWrite;
