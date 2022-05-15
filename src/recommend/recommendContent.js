import Navi from "../components/Navi";
import "./recommendContent.css";
import "./recommend.css";
import Rating from "../rating";
import RecommendTitle from "./recommendTitle";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const RecommendContent = () => {
  const location = useLocation();
  const item = location.state.item;
  const { title, imgUrl, rating, content, address, tag } = item;

  return (
    <>
      <Navi />
      <RecommendTitle />
      <section id="recommendContent">
        <div className="campingName">
          <p>{title}</p>
        </div>
        <div className="campingImg">
          <img src={imgUrl} alt="" />
        </div>
        <div className="campingRating">
          <Rating value={rating} />
        </div>

        <div className="campingContent">
          <p>{content}</p>
        </div>

        <div className="campingTag">
          <p>{tag}</p>
        </div>

        <div className="campingLocation">
          <p>{address}</p>
        </div>

        <Link to="/recommend">
          <div class="rcBackBlock">되돌아가기</div>
        </Link>
      </section>
    </>
  );
};

export default RecommendContent;
