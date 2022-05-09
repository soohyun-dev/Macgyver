import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main-box">
      <div className="main-text">
        <div className="catagory">
          <p href="recommend/recommend.html">
            <Link to="/Recommend">
              <FontAwesomeIcon
                icon={faStar}
                className="recommendIcon"
                style={{ color: "yellow" }}
              />
            </Link>
          </p>
          <p href="map.html">
            <Link to="/Map">
              <FontAwesomeIcon
                icon={faMapSigns}
                className="location"
                style={{ color: "greenyellow" }}
              />
            </Link>
          </p>
          <p href="community/community.html">
            <Link to="/Community">
              <FontAwesomeIcon
                icon={faUsers}
                className="users"
                style={{ color: "rgb(241, 177, 66)" }}
              />
            </Link>
          </p>
          <p href="login/login.html">
            <Link to="/Mypage">
              <FontAwesomeIcon
                icon={faUser}
                className="user"
                style={{ color: "rgb(47, 175, 255)" }}
              />
            </Link>
          </p>
        </div>
        <div className="MainContent">
          <span>캠핑장 추천을</span>
          <span>원한다면</span>
          <span>MacGyver</span>
        </div>
      </div>
      <div className="managerMod">
        <Link to="/Manager">
          <p>관리자모드</p>
        </Link>
      </div>
    </div>
  );
};

export default Main;
