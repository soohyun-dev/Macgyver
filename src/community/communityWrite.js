import Navi from "../components/Navi";
import "./communityWrite.css";

const CoummunityWrite = () => {
  return (
    <>
      <Navi />
      <section>
        <div className="managerTitle">
          <p>글쓰기</p>
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
          <div className="communityCatagory">
            <p>게시판</p>
            <select>
              <option>팁공유</option>
              <option>자유</option>
              <option>후기</option>
              <option>신고방</option>
            </select>
          </div>

          <div className="annWriteWrite">
            <input />
          </div>
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

export default CoummunityWrite;
