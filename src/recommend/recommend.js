import "./recommend.css";
import "../style.css";
import Navi from "../Navi";
import React from "react";
import RecommendTitle from "./recommendTitle";
import MyPageRecommend from "../mypage/myPageRecommend";

const Recommend = () => {
  return (
    <>
      <Navi />
      <RecommendTitle />
      <MyPageRecommend />
      <MyPageRecommend />
    </>
  );
};

export default Recommend;
