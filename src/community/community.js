import React from "react";
import Navi from "../components/Navi";
import "./community.css";
import CommunityCatagory from "./communityCatagory";
import CommunityPosting from "./communityPosting";
import communityItems from "../mock/cmMock.json";

const Community = () => {
  return (
    <>
      <Navi />
      <CommunityCatagory />

      <section>
        <div className="postingLocate"></div>
      </section>
      <section id="postingBlock">
        <CommunityPosting items={communityItems} />
      </section>
    </>
  );
};

export default Community;
