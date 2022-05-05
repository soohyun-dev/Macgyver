import Navi from "../Navi";
import "./announceWrite.css";
import "./manager.css";

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
        <div className="memberManage">
          <p href="manager.html">회원 관리</p>
        </div>
        <div className="postingManage">
          <p href="postMange.html">게시물 관리</p>
        </div>
        <div className="announceWrite">
          <p href="announceWrite.html">공지 작성</p>
        </div>
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
