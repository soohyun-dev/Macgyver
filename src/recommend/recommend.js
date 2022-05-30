import "./recommend.css";
import "../style.css";
import Navi from "../components/Navi";
import React, { useEffect, useRef, useState } from "react";
import RecommendTitle from "./recommendTitle";
import CampingContent from "../campingContent";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BottomPage from "../components/bottomPage";
import styled from "styled-components";
import { getCamping, getCheck, getUser3 } from "../api/api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Recommend = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

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
  const handleLoad = async () => {
    const camp = await getCamping();
    console.log(camp);
    setItems(camp);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  ////////////////////////////////////////////////////////////////////////////
  //       체크리스트 정보가 없으면 체크리스트 페이지로 이동시키는 코드
  ///////////////////////////////////////////////////////////////////////////
  console.log("아이템", items);
  if (items.length === 0) {
    navigate("../checkList");
  }

  // 추천 캠핑장 필터

  const Container = styled.div`
    text-align: center;
    width: 90%;
    margin: 0 auto;
    overflow: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리
  `;
  const Button = styled.button`
    margin: 0 20px;
    padding: 10px 30px;
    cursor: pointer;
    border: none;
    &:hover {
      transition: all 0.3s ease-in-out;
      opacity: 60%;
    }
  `;
  const SliderContainer = styled.div`
    margin: 0 40px;
    width: 100%;
    display: flex; //이미지들을 가로로 나열
  `;
  const TOTAL_SLIDES = 6;

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.2s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
  }, [currentSlide]);

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
      <RecommendTitle />
      <Container>
        <SliderContainer ref={slideRef}>
          <CampingContent items={items} />
        </SliderContainer>
        <div className="slideButtonBlock">
          <Button onClick={prevSlide} className="slideButton">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          <p className="slideText">Page {currentSlide + 1}</p>
          <Button onClick={nextSlide} className="slideButton">
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </div>
      </Container>
      <BottomPage />
    </>
  );
};

export default Recommend;
