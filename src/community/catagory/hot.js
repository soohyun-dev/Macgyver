import React from "react";
import Navi from "../../Navi";
import "../community.css";
import CommunityCatagory from "../communityCatagory";
import CommunityPosting from "../communityPosting";

const Hot = () => {
  return (
    <>
      <Navi />
      <CommunityCatagory />

      <section>
        <div className="postingLocate"></div>
      </section>
      <section id="postingBlock">
        <CommunityPosting />
        <CommunityPosting />
      </section>
    </>
  );
};

export default Hot;
