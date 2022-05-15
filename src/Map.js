import "./App.css";
import Navi from "./components/Navi";
import "./Map.css";
import { useState } from "react";
import MapContainer from "./MapContainer";

const Map = ({ searchPlace }) => {
  const [inputText, setInputText] = useState("");
  const [place, setPlace] = useState("");

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(inputText);
    setInputText("");
  };

  return (
    <>
      <Navi />
      <div class="mapBlock">
        <div class="mapCatagory">
          <div>
            <p>캠핑장 조회</p>
            <form className="inputForm" onSubmit={handleSubmit}>
              <input
                placeholder="검색"
                onChange={onChange}
                value={inputText}
                style={{ backgroundColor: "#d8d8d8" }}
              />
              <button type="submit">검색</button>
            </form>
          </div>
          <div className="mapText">
            <p>
              ※ 원하시는 캠핑장의 주소나 명칭을 검색하시면 지도에 위치가
              표시됩니다.
            </p>
          </div>
        </div>

        <MapContainer searchPlace={place} />
      </div>
    </>
  );
};

export default Map;
