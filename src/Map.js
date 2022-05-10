import "./App.css";
import { useEffect } from "react";
import Navi from "./components/Navi";
import "./Map.css";

const { kakao } = window;

const KakaoMapScript = () => {
  const container = document.getElementById("myMap");
  const options = {
    center: new kakao.maps.LatLng(37.45075962674148, 127.12968520031045),
    level: 3,
  };
  const map = new kakao.maps.Map(container, options);
};

export default function Map() {
  useEffect(() => {
    KakaoMapScript();
  }, []);

  return (
    <>
      <Navi />
      <div class="mapBlock">
        <div class="mapCatagory">
          <div>
            <p>캠핑장 조회</p>
            <input value={"검색"} style={{ backgroundColor: "#d8d8d8" }} />
            <select>
              <option>서울</option>
              <option>경기도</option>
              <option>강원도</option>
              <option>충청북도</option>
              <option>충청남도</option>
              <option>전라북도</option>
              <option>전라남도</option>
              <option>경상북도</option>
              <option>경상남도</option>
              <option>제주도</option>
            </select>
          </div>
          <div>
            <select>
              <option>파주시</option>
              <option>고양시</option>
              <option>김포시</option>
              <option>양주시</option>
              <option>연천시</option>
              <option>동두천</option>
              <option>포천시</option>
              <option>의정부</option>
              <option>가평군</option>
              <option>남양주</option>
              <option>구리시</option>
              <option>양평시</option>
            </select>
          </div>
        </div>
        <div id="myMap" />
      </div>
    </>
  );
}
