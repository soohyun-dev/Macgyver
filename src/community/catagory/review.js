import React from "react";
import Navi from "../../Navi";
import "../community.css";
import CommunityCatagory from "../communityCatagory";

const Review = () => {
  return (
    <>
      <Navi />
      <CommunityCatagory />

      <section>
        <div className="postingLocate"></div>
      </section>
      <section id="postingBlock"></section>
    </>
  );
};

export default Review;
