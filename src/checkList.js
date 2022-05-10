import Navi from "./components/Navi";
import "./checkList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTag } from "@fortawesome/free-solid-svg-icons";

const CheckList = () => {
  function checkOnlyOne({ element }) {
    const checkboxes = document.getElementsByName("OX");

    checkboxes.forEach((cb) => {
      cb.checked = false;
    });

    element.checked = true;
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
                <input type="checkbox" name="OX" value="O" />
                <span>O</span>
              </div>
              <div style={{ backgroundColor: "#ff6434" }}>
                <input type="checkbox" name="OX" value="X" />
                <span>X</span>
              </div>
            </div>

            {/* 질문 2 */}
            <div className="checkListQue">
              <p>2. 나는 캠핑장비를 가지고있다.</p>
            </div>
            <div className="checkListAnSwer">
              <div>
                <input type="checkbox" name="OX" value="O" />
                <span>O</span>
              </div>
              <div style={{ backgroundColor: "#ff6434" }}>
                <input type="checkbox" name="OX" value="X" />
                <span>X</span>
              </div>
            </div>

            {/* 질문 3 */}
            <div className="checkListQue">
              <p>3. 집 밖이라면 하루쯤 샤워를 건너뛰어도 된다.</p>
            </div>
            <div className="checkListAnSwer">
              <div>
                <input type="checkbox" name="OX" value="O" />
                <span>O</span>
              </div>
              <div style={{ backgroundColor: "#ff6434" }}>
                <input type="checkbox" name="OX" value="X" />
                <span>X</span>
              </div>
            </div>
            {/* 질문 4 */}
            <div className="checkListQue">
              <p>4. 누구와 함께하시나요?</p>
            </div>
            <div className="checkListAnSwer">
              <div style={{ backgroundColor: "#0064b7" }}>
                <input type="checkbox" name="OX" value="O" />
                <span>친구, 연인</span>
              </div>
              <div style={{ backgroundColor: "#aa00ff" }}>
                <input type="checkbox" name="OX" value="X" />
                <span>가족 (아이동반)</span>
              </div>
            </div>

            {/* 질문 5 */}
            <div className="checkListQue">
              <p>5. 캠핑장 인근에 놀거리가 있다면?</p>
            </div>
            <div className="checkListAnSwer">
              <div style={{ backgroundColor: "#0064b7" }}>
                <input type="checkbox" name="OX" value="O" />
                <span>간다</span>
              </div>
              <div style={{ backgroundColor: "#aa00ff" }}>
                <input type="checkbox" name="OX" value="X" />
                <span>캠핑에 집중한다</span>
              </div>
            </div>
            {/* 질문 6 */}
            <div className="checkListQue">
              <p>6. 캠핑장을 고를 때, 이 중 가장 고려하는 대상은?</p>
            </div>
            <div className="checkListAnSwer">
              <div style={{ backgroundColor: "#0064b7" }}>
                <input type="checkbox" name="OX" value="O" />
                <span>동물 동반 여부</span>
              </div>
              <div style={{ backgroundColor: "#aa00ff" }}>
                <input type="checkbox" name="OX" value="X" />
                <span>계절에 맞는 명소</span>
              </div>
              <div style={{ backgroundColor: "#7ecb20" }}>
                <input type="checkbox" name="OX" value="X" />
                <span>캠핑장 내 이벤트 및 체험</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckList;
