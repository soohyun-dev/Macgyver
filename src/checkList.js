import Navi from "./components/Navi";
import "./checkList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTag } from "@fortawesome/free-solid-svg-icons";
import BottomPage from "./components/bottomPage";
import { createCheckList, postCheckList } from "./api/api";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const token = window.localStorage.getItem("token");

const CheckList = () => {
  const [result, setResult] = useState([]);
  const checkOnlyOne1 = (checkThis) => {
    const checkboxes1 = document.getElementsByName("q1");
    for (let i = 0; i < checkboxes1.length; i++) {
      if (checkboxes1[i] !== checkThis) {
        checkboxes1[i].checked = false;
      }
    }
  };

  const checkOnlyOne2 = (checkThis) => {
    const checkboxes1 = document.getElementsByName("q2");
    for (let i = 0; i < checkboxes1.length; i++) {
      if (checkboxes1[i] !== checkThis) {
        checkboxes1[i].checked = false;
      }
    }
  };
  const checkOnlyOne3 = (checkThis) => {
    const checkboxes1 = document.getElementsByName("q3");
    for (let i = 0; i < checkboxes1.length; i++) {
      if (checkboxes1[i] !== checkThis) {
        checkboxes1[i].checked = false;
      }
    }
  };

  const checkOnlyOne4 = (checkThis) => {
    const checkboxes1 = document.getElementsByName("q4");
    for (let i = 0; i < checkboxes1.length; i++) {
      if (checkboxes1[i] !== checkThis) {
        checkboxes1[i].checked = false;
      }
    }
  };

  const checkOnlyOne5 = (checkThis) => {
    const checkboxes1 = document.getElementsByName("q5");
    for (let i = 0; i < checkboxes1.length; i++) {
      if (checkboxes1[i] !== checkThis) {
        checkboxes1[i].checked = false;
      }
    }
  };

  const checkOnlyOne6 = (checkThis) => {
    const checkboxes1 = document.getElementsByName("q6");
    for (let i = 0; i < checkboxes1.length; i++) {
      if (checkboxes1[i] !== checkThis) {
        checkboxes1[i].checked = false;
      }
    }
  };

  const report = () => {
    var list = new Object();
    var msg = {};
    var checkBoxes1 = document.getElementsByName("q1");
    var checkBoxes2 = document.getElementsByName("q2");
    var checkBoxes3 = document.getElementsByName("q3");
    var checkBoxes4 = document.getElementsByName("q4");
    var checkBoxes5 = document.getElementsByName("q5");
    var checkBoxes6 = document.getElementsByName("q6");

    for (var i = 0; i < checkBoxes1.length; i++) {
      if (checkBoxes1[i].checked) {
        list.q1 = checkBoxes1[i].value;
      }
    }
    for (var j = 0; j < checkBoxes2.length; j++) {
      if (checkBoxes2[j].checked) {
        list.q2 = checkBoxes2[j].value;
      }
    }
    for (var k = 0; k < checkBoxes3.length; k++) {
      if (checkBoxes3[k].checked) {
        list.q3 = checkBoxes3[k].value;
      }
    }
    for (var l = 0; l < checkBoxes4.length; l++) {
      if (checkBoxes4[l].checked) {
        list.q4 = checkBoxes4[l].value;
      }
    }
    for (var m = 0; m < checkBoxes5.length; m++) {
      if (checkBoxes5[m].checked) {
        list.q5 = checkBoxes5[m].value;
      }
    }
    for (var n = 0; n < checkBoxes6.length; n++) {
      if (checkBoxes6[n].checked) {
        list.q6 = checkBoxes6[n].value;
      }
    }

    // 결과값 송신
    console.log(list);
    setResult(list);
    postCheckList(list);
  };

  function submitSuccess() {
    alert("제출 완료되었습니다! 추천페이지로 이동됩니다.");
    window.location.href = "./New";
  }

  return (
    <>
      <Navi />
      <section id="checkList">
        <div>
          <div className="checkListTitle">
            <FontAwesomeIcon icon={faUserTag} className="checkListIcon" />
            <p>나의 캠핑 취향은?</p>
          </div>
          <div className="checkListOrder">
            <p>
              자신의 캠핑 취향을 선택해주세요!! 취향 확인을 통해 맞춤 캠핑장
              추천을 해드립니다!
            </p>
          </div>
          <div className="checkListBlock">
            {/* 질문 1 */}
            <div className="checkListQue">
              <p>1. 나는 뚜벅이다.</p>
            </div>
            <div className="checkListAnSwer">
              <div>
                <input
                  type="checkbox"
                  name="q1"
                  value="1"
                  onClick={(e) => checkOnlyOne1(e.target)}
                />
                <span>O</span>
              </div>
              <div style={{ backgroundColor: "#ff6434" }}>
                <input
                  type="checkbox"
                  name="q1"
                  value="0"
                  onClick={(e) => checkOnlyOne1(e.target)}
                />
                <span>X</span>
              </div>
            </div>

            {/* 질문 2 */}
            <div className="checkListQue">
              <p>2. 나는 캠핑장비를 가지고있다.</p>
            </div>
            <div className="checkListAnSwer">
              <div>
                <input
                  type="checkbox"
                  name="q2"
                  value="1"
                  onClick={(e) => checkOnlyOne2(e.target)}
                />
                <span>O</span>
              </div>
              <div style={{ backgroundColor: "#ff6434" }}>
                <input
                  type="checkbox"
                  name="q2"
                  value="0"
                  onClick={(e) => checkOnlyOne2(e.target)}
                />
                <span>X</span>
              </div>
            </div>

            {/* 질문 3 */}
            <div className="checkListQue">
              <p>3. 집 밖이라면 하루쯤 샤워를 건너뛰어도 된다.</p>
            </div>
            <div className="checkListAnSwer">
              <div>
                <input
                  type="checkbox"
                  name="q3"
                  value="1"
                  onClick={(e) => checkOnlyOne3(e.target)}
                />
                <span>O</span>
              </div>
              <div style={{ backgroundColor: "#ff6434" }}>
                <input
                  type="checkbox"
                  name="q3"
                  value="0"
                  onClick={(e) => checkOnlyOne3(e.target)}
                />
                <span>X</span>
              </div>
            </div>
            {/* 질문 4 */}
            <div className="checkListQue">
              <p>4. 누구와 함께하시나요?</p>
            </div>
            <div className="checkListAnSwer">
              <div style={{ backgroundColor: "#0064b7" }}>
                <input
                  type="checkbox"
                  name="q4"
                  value="0"
                  onClick={(e) => checkOnlyOne4(e.target)}
                />
                <span>친구, 연인</span>
              </div>
              <div style={{ backgroundColor: "#aa00ff" }}>
                <input
                  type="checkbox"
                  name="q4"
                  value="1"
                  onClick={(e) => checkOnlyOne4(e.target)}
                />
                <span>가족 (아이동반)</span>
              </div>
            </div>

            {/* 질문 5 */}
            <div className="checkListQue">
              <p>5. 캠핑장 인근에 놀거리가 있다면?</p>
            </div>
            <div className="checkListAnSwer">
              <div style={{ backgroundColor: "#0064b7" }}>
                <input
                  type="checkbox"
                  name="q5"
                  value="0"
                  onClick={(e) => checkOnlyOne5(e.target)}
                />
                <span>간다</span>
              </div>
              <div style={{ backgroundColor: "#aa00ff" }}>
                <input
                  type="checkbox"
                  name="q5"
                  value="1"
                  onClick={(e) => checkOnlyOne5(e.target)}
                />
                <span>캠핑에 집중한다</span>
              </div>
            </div>
            {/* 질문 6 */}
            <div className="checkListQue">
              <p>6. 캠핑장을 고를 때, 이 중 가장 고려하는 대상은?</p>
            </div>
            <div className="checkListAnSwer">
              <div style={{ backgroundColor: "#0064b7" }}>
                <input
                  type="checkbox"
                  name="q6"
                  value="0"
                  onClick={(e) => checkOnlyOne6(e.target)}
                />
                <span>동물 동반 여부</span>
              </div>
              <div style={{ backgroundColor: "#aa00ff" }}>
                <input
                  type="checkbox"
                  name="q6"
                  value="1"
                  onClick={(e) => checkOnlyOne6(e.target)}
                />
                <span>계절에 맞는 명소</span>
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => {
            report();
            submitSuccess();
          }}
        >
          제출
        </button>
      </section>

      <BottomPage />
    </>
  );
};

export default CheckList;
