import React from "react";
import Navi from "../../components/Navi";
import "../community.css";
import CommunityCatagory from "../../components/communityCatagory";
import CommunityPosting from "../communityPosting";

const Free = () => {
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

export default Free;
