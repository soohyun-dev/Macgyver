import React from "react";
import Navi from "../Navi";
import "./community.css";
import CommunityCatagory from "./communityCatagory";
import CommunityPosting from "./communityPosting";

const Community = () => {
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
        <CommunityPosting />
        <CommunityPosting />
        <CommunityPosting />
        <CommunityPosting />
      </section>
    </>
  );
};

export default Community;
