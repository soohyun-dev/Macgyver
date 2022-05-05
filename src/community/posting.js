import Navi from "../Navi";
import "./posting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./communityPosting.css";

const Posting = () => {
  return (
    <>
      <Navi />
      <section id="cmPostingBlock">
        <p className="cmPostingTitle">풍경 죽이죠?</p>
      </section>
      <section id="psImg">
        <div className="cmPostingImg">
          <img src={"img/postingImg.jpg"} alt="" />
        </div>
      </section>
      <section>
        <div className="cmPostingContent">
          <p>이번에 고원가서 찍은 사진입니다. 잘나와서 올려봅니다 ㅎㅎ</p>
        </div>
      </section>

      <div className="likeDiv">
        <div className="buttonContainer">
          <button className="like">
            <FontAwesomeIcon icon={faHeart} className="star" />
            Like
          </button>
        </div>
        <div className="buttonContainer">
          <button className="dislike">
            <FontAwesomeIcon icon={faHeart} className="star" />
            DisLike
          </button>
        </div>
      </div>
      <hr />

      <section>
        <div className="cmPostingComment">
          <p>댓글</p>
          <input />
          <button>확인</button>
        </div>
      </section>

      <hr />

      <section id="comment">
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
            <div class="commentContent">
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
      </section>
    </>
  );
};

export default Posting;
