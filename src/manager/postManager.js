import Navi from "../Navi";
import "./postManager.css";
import "./manager.css";

const PostManager = () => {
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
          <p href="#">게시물 관리</p>
        </div>
        <div className="announceWrite">
          <p href="announceWrite.html">공지 작성</p>
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

      <section>
        <div className="managerPosting">
          <div className="postingTitle">
            <p>풍경 죽이죠?</p>
          </div>
          <div className="postingId">
            <p>라이언</p>
          </div>
          <div className="postingDay">
            <p>2022-04-16</p>
          </div>
          <div className="postingModify">
            <p>게시물 삭제</p>
          </div>
        </div>

        <div className="managerPosting">
          <div className="postingTitle">
            <p>참좋아요 캠핑장 주기적으로 올라옵니다. 광고 의심됩니다.</p>
          </div>
          <div className="postingId">
            <p>ilsanCamper</p>
          </div>
          <div className="postingDay">
            <p>2022-04-16</p>
          </div>
          <div className="postingModify">
            <p>게시물 삭제</p>
          </div>
        </div>
      </section>

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
