import "./recommend.css";
import "../style.css";
import Navi from "../components/Navi";
import React, { useEffect, useRef, useState } from "react";
import CampingContent from "../campingContent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BottomPage from "../components/bottomPage";
import "./recommendTitle.css";
import { camp2 } from "../api/api";

const Recommend = () => {
  const [items, setItems] = useState([]);
  const [items2, setItems2] = useState([]);

  var data = localStorage.getItem("profile");
  const userID = JSON.parse(data).data.id;

  //   const [camps, setCamps] = useState([]);
  //   // 추천 캠핑장 정보
  //   const handleLoadCamp = async () => {
  //     const camps = await getUser3();
  //     setCamps(camps.campingID);
  //   };

  //   useEffect(() => {
  //     handleLoadCamp();
  //   }, []);

  //   const result = [];
  //   for (var i = 0; i < camps.length; i++) {
  //     result.push(items[camps[i] - 1]);
  //   }
  //   const result2 = JSON.stringify(result);
  //   setItems(result2);

  //   console.log(camps);

  // 응답에 맞게 페이지를 랜더링

  //   const handleLoad2 = async () => {
  //     const tmp = await getCheck();
  //     setCheck(tmp);
  //   };

  //   useEffect(() => {
  //     handleLoad2();
  //   }, []);

  //   console.log("체크리스트", check);

  ///////////////////////////////////////////////////////////////////////////
  //                          캠핑장 정보 불러오기
  ///////////////////////////////////////////////////////////////////////////

  var sor = [];
  console.log(JSON.parse(data).data.id);

  const handleLoad2 = async () => {
    setItems2(data);
    const cam = await camp2();
    const count = Object.keys(cam).length;
    console.log(count);
    for (var i = 0; i < count - 1; i++) {
      sor.push(cam[i]);
    }
    console.log(sor);
    setItems(sor);
  };

  console.log(items);

  //   var sor = [];
  //   const handleLoad = async () => {
  //     const cam = await camp2();

  //     const count = Object.keys(cam).length;
  //     console.log(count);
  //     for (var i = 0; i < count - 1; i++) {
  //       sor.push(cam[i]);
  //     }
  //     console.log(sor);
  //     setItems(sor);
  //   };

  useEffect(() => {
    handleLoad2();
  }, []);

  // 시나리오 1
  //   const handleLoad = async () => {
  //     const camp = await getCamping();
  //     console.log(camp);
  //     setItems(camp);
  //     console.log("키값", items);
  //   };

  ////////////////////////////////////////////////////////////////////////////
  //       체크리스트 정보가 없으면 체크리스트 페이지로 이동시키는 코드
  ///////////////////////////////////////////////////////////////////////////
  //   console.log("아이템", items);
  //   if (items.length === 0) {
  //     navigate("../checkList");
  //   }

  //   // 추천 캠핑장 필터

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

export default Recommend;
