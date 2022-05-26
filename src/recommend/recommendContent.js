import Navi from "../components/Navi";
import "./recommendContent.css";
import "./recommend.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const RecommendContent = () => {
  const location = useLocation();
  const item = location.state.item;
  const {
    facltNm,
    firstImageUrl,
    lineIntro,
    addr1,
    operPdCl,
    themaEnvrnCl,
    eqpmnLendCl,
    animalCmgCl,
    homepage,
    resveUrl,
  } = item;

  const clipboard = () => {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("Copy");
  };

  return (
    <>
      <Navi />
      <section id="myPageTitle">
        <p className="titleText">
          <span>{facltNm}</span>을 추천해드려요!
        </p>
      </section>
      <section id="recommendContent">
        <div className="campingImg">
          <img src={firstImageUrl} alt="facltNm" />
        </div>
        <div>
          <div className="campIntro">
            <p>"{lineIntro}"</p>
          </div>
        </div>

        <div className="campRecommendContent">
          <div className="campcontent">
            <div className="campcontentUp">
              <div className="campcontentBlock1">
                <div className="campcontentTitle">어디에 있나요?</div>
                <div className="campcontentText">
                  <input
                    className="clipboard"
                    id="myInput"
                    value={addr1}
                    readonly
                  />
                  <button
                    className="clipboard"
                    onClick={() => {
                      clipboard();
                      alert(
                        "복사되었습니다. 지도 페이지 검색창에 Ctrl + V 키로 붙여넣기 해주세요."
                      );
                    }}
                  >
                    <img
                      className="clipboardImg"
                      src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png"
                      alt="복사하기"
                      style={{ fontSize: "15px" }}
                    />
                  </button>
                  <p className="clipMapText">
                    복사 버튼을 누르고 지도 버튼에 들어가서 붙여넣기하세요.
                  </p>
                  <Link to="/map">
                    <button className="clipMapButton">
                      지도로
                      <FontAwesomeIcon
                        icon={faArrowRightToBracket}
                        className="arrow"
                      />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="campcontentBlock1">
                <div className="campcontentTitle">이때 방문하면 더 좋아요~</div>
                <div className="campcontentText">
                  <p style={{ marginTop: "80px", textAlign: "center" }}>
                    {operPdCl}
                  </p>
                </div>
              </div>
            </div>
            <div className="campcontentDown">
              <div className="campcontentBlock2">
                <div className="campcontentTitle">이런 특징들이 있어요!</div>
                <div className="campcontentText">
                  <p>
                    <span style={{ color: "#ff844c" }}>특징 :</span>{" "}
                    {themaEnvrnCl}
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    <span style={{ color: "#795548" }}>구비 :</span>{" "}
                    {eqpmnLendCl}
                  </p>
                  <p style={{ marginTop: "10px" }}>
                    <span>애완견 동반 :</span> {animalCmgCl}
                  </p>
                </div>
              </div>
              <div className="campcontentBlock2">
                <div className="campcontentTitle">
                  공식 홈페이지 & 예약 사이트
                </div>
                <div className="campcontentText">
                  <button
                    className="hpBtn"
                    style={{ backgroundColor: "#2979ff" }}
                    onClick={() => window.open(`${homepage}`, "_blank")}
                  >
                    홈페이지
                  </button>
                  <button
                    className="hpBtn"
                    style={{ backgroundColor: "#3090a6" }}
                    onClick={() => window.open(`${resveUrl}`, "_blank")}
                  >
                    예약페이지
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link to="/recommend">
          <div class="rcBackBlock">되돌아가기</div>
        </Link>
      </section>
    </>
  );
};

export default RecommendContent;
