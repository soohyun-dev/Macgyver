import Navi from "../Navi";
import "./manager.css";

const Manager = () => {
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
          <p href="#">회원 관리</p>
        </div>
        <div className="postingManage">
          <p href="postMange.html">게시물 관리</p>
        </div>
        <div className="announceWrite">
          <p href="announceWrite.html">공지 작성</p>
        </div>
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

      <section>
        <div className="memberManagePost">
          <div className="postId">
            <p>ilsanCamper</p>
          </div>
          <div className="postDay">
            <p>2022-04-16</p>
          </div>
          <div className="postModify">
            <p href="#">회원 삭제</p>
          </div>
        </div>
        <div className="memberManagePost">
          <div className="postId">
            <p>가천컴공생</p>
          </div>
          <div className="postDay">
            <p>2022-04-16</p>
          </div>
          <div className="postModify">
            <p href="#">회원 삭제</p>
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

export default Manager;
