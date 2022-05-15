import "./recommend.css";
import "../style.css";
import Navi from "../components/Navi";
import React from "react";
import RecommendTitle from "./recommendTitle";
import CampingContent from "../campingContent";
import campingItems from "../mock/rcMock.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import BottomPage from "../components/bottomPage.";

const Recommend = () => {
  return (
    <>
      <Navi />
      <div className="rcBlock">
        <div>
          <Link to="/checkList">
            <p>
              나의 캠핑 취향을 고르러
              <FontAwesomeIcon
                icon={faArrowRightToBracket}
                className="arrow"
                style={{ marginLeft: "10px" }}
              />
            </p>
          </Link>
        </div>
      </div>
      <RecommendTitle />
      <CampingContent items={campingItems} />
      <BottomPage />
    </>
  );
};

export default Recommend;
