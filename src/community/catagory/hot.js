import React from "react";
import Navi from "../../components/Navi";
import "../community.css";
import CommunityCatagory from "../../components/communityCatagory";

const Hot = () => {
  return (
    <>
      <Navi />
      <CommunityCatagory />

      <section>
        <div className="postingLocate"></div>
      </section>
    </>
  );
};

export default Hot;
