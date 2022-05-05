import "./communityPosting.css";

const CommunityPosting = () => {
  return (
    <>
      <section id="posting">
        <div className="postingBlock">
          <div className="postingContent">
            <div className="postingTitle">
              <p>풍경 죽이죠?</p>
            </div>
            <div className="postingImg">
              <img src={"img/postingImg.jpg"} alt="" />
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

export default CommunityPosting;
