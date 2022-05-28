import Navi from "../components/Navi";
import "./posting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./communityPosting.css";
import { useLocation } from "react-router-dom";

const Posting = () => {
  // 전달 받은 props 활용
  const location = useLocation();
  const item = location.state.item;
  const { title, imgUrl, content } = item;

  return (
    <>
      <Navi />
      <section id="cmPostingBlock">
        <p className="cmPostingTitle">{title}</p>
      </section>

      <section id="psImg">
        <div className="cmPostingImg">
          <img src={imgUrl} alt="" />
        </div>
      </section>
      <section id="cmPostingContent">
        <div className="cmPostingContent">
          <p>{content}</p>
        </div>
      </section>

      <div className="likeDiv">
        <div className="buttonContainer">
          <button className="like">
            <FontAwesomeIcon icon={faHeart} className="star" />
            Like
          </button>
        </div>
      </div>
      <hr />

      <section>
        <div className="cmPostingComment">
          <div>
            <p>댓글</p>
          </div>
          <div>
            <textarea placeholder="댓글을 입력해주세요" />
          </div>
          <div>
            <button type="submit">등록</button>
          </div>
        </div>
      </section>

      <hr style={{ opacity: "30%" }} />

      {/* <section id="comment">
        <div className="cmPostingComment">
          <div className="commentWrite">
            <div className="commentContent">
              <p>오 잘나왔네요</p>
            </div>
            <div className="commentId">
              <p>
                <span>ilsanCamper</span>
              </p>
            </div>
            <div className="commentDay">
              <p>
                <span>2022-04-15</span>
              </p>
            </div>
          </div>

          <div className="commentWrite">
            <div className="commentContent">
              <p>굿굿</p>
            </div>
            <div className="commentId">
              <p>
                <span>gold</span>
              </p>
            </div>
            <div className="commentDay">
              <p>
                <span>2022-04-15</span>
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Posting;
