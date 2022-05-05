import Navi from "../Navi";
import "./mypage.css";
import "../community/report.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RecommendTitle from "../recommend/recommendTitle";

const mypage = () => {
  return (
    <>
      <Navi />
      <RecommendTitle />
      <section className="recommend">
        <div className="recommendBlock">
          <div className="recommendImg">
            <img src={"img/rec01.jpg"} alt="" />
          </div>
          <div className="rating">
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
            <FontAwesomeIcon icon={faStar} className="star" />
          </div>
          <div className="recommendContent">
            <div className="recommendContentTitle">
              <p>서울 북한산 럭셔리 글램핑</p>
              <i className="fa fa-bookmark"></i>
            </div>
            <div className="recommendContentContent">
              <p>서울 은평구 북한산로 242</p>
            </div>
            <div className="recommendContentButton">
              <p href="#">보러가기</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="reportTitle">
          <p>작성 댓글</p>
        </div>
      </section>
      <section id="reportClassify">
        <div className="reportName">
          <p>제목</p>
        </div>
        <div className="reportId">
          <p>ID</p>
        </div>
        <div className="reportDay">
          <p>작성일</p>
        </div>
      </section>

      <section id="myComment">
        <div className="postName">
          <p>참좋아요 캠핑장 주기적으로 올라옵니다. 광고 의심됩니다.</p>
        </div>
        <div className="postId">
          <p>ilsanCamper</p>
        </div>
        <div className="postDay">
          <p>2022-04-16</p>
        </div>
        <div className="delComment">
          <p>삭제하기</p>
        </div>
      </section>

      <section>
        <div className="loginSetting">
          <div className="loginSettingBlock">
            <p href="#" className="loginModify">
              개인정보 수정
            </p>
            <p href="myPage/signUpDel.html" className="widrawalBlock">
              회원탈퇴
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default mypage;
