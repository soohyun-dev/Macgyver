import "./recommend.css";
import "../style.css";
import Navi from "../Navi";

const Recommend = () => {
  return (
    <>
      <Navi />
      <section id="myPageTitle">
        <h1 className="titleText">
          <span>윤수현</span>님에게 추천해드려요!
        </h1>
      </section>
      <section className="recommend">
        <div className="recommendBlock">
          <div className="recommendImg"></div>
          <div className="rating">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          <div className="recommendContent">
            <div className="recommendContentTitle">
              <p>서울 북한산 럭셔리 글램핑</p>
              <i className="ratingClassName fa fa-bookmark"></i>
            </div>
            <div className="recommendContentContent">
              <p>서울 은평구 북한산로 242</p>
            </div>
            <div className="recommendContentButton">
              <a href="recommendContent.html">보러가기</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recommend;
