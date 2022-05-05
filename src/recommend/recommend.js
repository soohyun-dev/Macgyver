import "./recommend.css";
import "../style.css";
import Navi from "../Navi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import RecommendTitle from "./recommendTitle";

const Recommend = () => {
  return (
    <>
      <Navi />
      <RecommendTitle />
      <section className="recommend">
        <div className="recommendBlock">
          <div className="recommendImg">
            <img src={"img/rec01.jpg"} alt="recommend01" />
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
