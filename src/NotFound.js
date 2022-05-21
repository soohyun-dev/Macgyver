import { Link } from "react-router-dom";
import BottomPage from "./components/bottomPage";
import Navi from "./components/Navi";
import "./NotFound.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <>
      <Navi />
      <div className="empty">
        <div className="emptyText">
          <p>요청하신 페이지를 찾을 수 없습니다.</p>
        </div>
        <div className="emptyText2">
          <p>
            <span>입력하신 주소</span>가 올바른지 다시 한 번 확인해주세요.
          </p>
        </div>
        <div className="emptyButton">
          <Link to="/">
            <button>
              <p>
                되돌아가기
                <FontAwesomeIcon
                  className="emptyButtonIcon"
                  icon={faArrowRight}
                />
              </p>
            </button>
          </Link>
        </div>
      </div>

      <BottomPage />
    </>
  );
};

export default NotFound;
