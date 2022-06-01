import "./recommend.css";
import "../style.css";
import Navi from "../components/Navi";
import React, { useEffect, useState } from "react";
import CampingContent from "../campingContent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import BottomPage from "../components/bottomPage";

import "./recommendTitle.css";
import { getCamping } from "../api/api";

////////////////////////////////////////////////////////////////////////////
//                    신규 유저 추천 페이지
///////////////////////////////////////////////////////////////////////////

const New = () => {
  const [items, setItems] = useState([]);

  const handleLoad2 = async () => {
    const cam = await getCamping();
    setItems(cam);
  };

  useEffect(() => {
    handleLoad2();
  }, []);

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
      <section id="myPageTitle">
        <p className="titleText">다음과 같은 캠핑장들을 추천해드려요!</p>
      </section>

      <div className="CampingList">
        <CampingContent items={items} />
      </div>

      <BottomPage />
    </>
  );
};

export default New;
