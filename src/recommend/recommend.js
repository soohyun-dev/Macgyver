import "./recommend.css";
import "../style.css";
import Navi from "../components/Navi";
import React from "react";
import RecommendTitle from "./recommendTitle";
import CampingContent from "../campingContent";
import campingItems from "../mock/rcMock.json";
import { Link } from "react-router-dom";

const Recommend = () => {
  return (
    <>
      <Navi />
      <RecommendTitle />
      <CampingContent items={campingItems} />
      <Link to="/checkList">
        <p>체크리스트</p>
      </Link>
    </>
  );
};

export default Recommend;
