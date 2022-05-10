import { Link } from "react-router-dom";
import "./communityPosting.css";

const CommunityPostingItem = ({ item }) => {
  const { title, imgUrl } = item;

  return (
    <>
      <section id="cmPosting">
        <div className="cmPostingBlock">
          <div className="cmPostingContent">
            <div className="cmPostingTitle">
              <Link to="/posting">
                <p>{title}</p>
              </Link>
            </div>
            <div className="cmPostingImg">
              <img src={imgUrl} alt={title} />
            </div>
            <div className="tag">
              <p>#풍경사진전</p>
              <p>#풍경</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CommunityPosting = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <CommunityPostingItem item={item} />;
      })}
    </>
  );
};

export default CommunityPosting;
