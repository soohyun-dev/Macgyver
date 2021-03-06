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

    // ????????? ??????
    console.log(list);
    setResult(list);
    postCheckList(list);
  };

  function submitSuccess() {
    alert("?????? ?????????????????????! ?????????????????? ???????????????.");
    window.location.href = "./New";
  }

  return (
    <>
      <Navi />
      <section id="checkList">
        <div>
          <div className="checkListTitle">
            <FontAwesomeIcon icon={faUserTag} className="checkListIcon" />
            <p>?????? ?????? ??????????</p>
          </div>
          <div className="checkListOrder">
            <p>
              ????????? ?????? ????????? ??????????????????!! ?????? ????????? ?????? ?????? ?????????
              ????????? ???????????????!
            </p>
          </div>
          <div className="checkListBlock">
            {/* ?????? 1 */}
            <div className="checkListQue">
              <p>1. ?????? ????????????.</p>
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

            {/* ?????? 2 */}
            <div className="checkListQue">
              <p>2. ?????? ??????????????? ???????????????.</p>
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

            {/* ?????? 3 */}
            <div className="checkListQue">
              <p>3. ??? ???????????? ????????? ????????? ??????????????? ??????.</p>
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
            {/* ?????? 4 */}
            <div className="checkListQue">
              <p>4. ????????? ???????????????????</p>
            </div>
            <div className="checkListAnSwer">
              <div style={{ backgroundColor: "#0064b7" }}>
                <input
                  type="checkbox"
                  name="q4"
                  value="0"
                  onClick={(e) => checkOnlyOne4(e.target)}
                />
                <span>??????, ??????</span>
              </div>
              <div style={{ backgroundColor: "#aa00ff" }}>
                <input
                  type="checkbox"
                  name="q4"
                  value="1"
                  onClick={(e) => checkOnlyOne4(e.target)}
                />
                <span>?????? (????????????)</span>
              </div>
            </div>

            {/* ?????? 5 */}
            <div className="checkListQue">
              <p>5. ????????? ????????? ???????????? ??????????</p>
            </div>
            <div className="checkListAnSwer">
              <div style={{ backgroundColor: "#0064b7" }}>
                <input
                  type="checkbox"
                  name="q5"
                  value="0"
                  onClick={(e) => checkOnlyOne5(e.target)}
                />
                <span>??????</span>
              </div>
              <div style={{ backgroundColor: "#aa00ff" }}>
                <input
                  type="checkbox"
                  name="q5"
                  value="1"
                  onClick={(e) => checkOnlyOne5(e.target)}
                />
                <span>????????? ????????????</span>
              </div>
            </div>
            {/* ?????? 6 */}
            <div className="checkListQue">
              <p>6. ???????????? ?????? ???, ??? ??? ?????? ???????????? ??????????</p>
            </div>
            <div className="checkListAnSwer">
              <div style={{ backgroundColor: "#0064b7" }}>
                <input
                  type="checkbox"
                  name="q6"
                  value="0"
                  onClick={(e) => checkOnlyOne6(e.target)}
                />
                <span>?????? ?????? ??????</span>
              </div>
              <div style={{ backgroundColor: "#aa00ff" }}>
                <input
                  type="checkbox"
                  name="q6"
                  value="1"
                  onClick={(e) => checkOnlyOne6(e.target)}
                />
                <span>????????? ?????? ??????</span>
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
          ??????
        </button>
      </section>

      <BottomPage />
    </>
  );
};

export default CheckList;
