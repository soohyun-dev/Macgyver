import React from "react";
import "./Main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main-box">
      <div className="main-text">
        <div className="catagory">
          <a href="recommend/recommend.html">
            <FontAwesomeIcon icon={faStar} className="star" />
          </a>
          <a href="map.html">
            <FontAwesomeIcon icon={faMapSigns} className="location" />
          </a>
          <a href="community/community.html">
            <FontAwesomeIcon icon={faUsers} className="users" />
          </a>
          <a href="login/login.html">
            <FontAwesomeIcon icon={faUser} className="user" />
          </a>
        </div>
        <div className="content">
          <span>캠핑장 추천을</span>
          <span>원한다면</span>
          <span>MacGyver</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
