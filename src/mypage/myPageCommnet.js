import { Link } from "react-router-dom";
import "./myPageComment.css";

const MyPageComment = () => {
  return (
    <>
      <section id="myComment">
        <div className="postName">
          <Link to="/reportPostingContent">
            <p>참좋아요 캠핑장 주기적으로 올라옵니다. 광고 의심됩니다.</p>
          </Link>
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
    </>
  );
};

export default MyPageComment;
