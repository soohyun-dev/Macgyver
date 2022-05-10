import Navi from "../components/Navi";
import "./recommendContent.css";
import "./recommend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import RecommendTitle from "./recommendTitle";

const RecommendContent = () => {
  return (
    <>
      <Navi />
      <RecommendTitle />
      <section id="recommendContent">
        <div className="campingName">
          <p>서울 북한산 럭셔리 글램핑</p>
        </div>
        <div className="campingImg">
          <img src={"img/rec01.jpg"} alt="" />
        </div>
        <div className="campingRating">
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
          <FontAwesomeIcon icon={faStar} className="star" />
        </div>

        <div className="campingContent">
          <p>
            서울시 은평구 북한산로 242번지 입력후 세븐차이나 주차장으로
            들어오시면 뒤쪽에 서울북한산글램핑 전용주차장이 보입니다.(택시도
            반드시 주차장에서 하차)
          </p>
        </div>

        <div className="campingTag">
          <p>
            독채, 침대방, 개별바비큐, 카라반, 글램핑, 수영장, 바비큐장,
            공용시설, 와이파이, 잔디, 온돌방, 스파
          </p>
        </div>

        <div className="campingLocation">
          <p>서울 은평구 북한산로 242</p>
        </div>
      </section>
    </>
  );
};

export default RecommendContent;
