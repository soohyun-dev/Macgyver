import React, { useEffect } from "react";

const { kakao } = window;
let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

const MapContainer = ({ searchPlace }) => {
  useEffect(() => {
    const container = document.getElementById("myMap"); // 지도를 표시할 div
    const options = {
      center: new kakao.maps.LatLng(37.45038063660735, 127.1301987633948), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };
    const map = new kakao.maps.Map(container, options); // 지도를 생성

    var imageSrc = "https://cdn-icons-png.flaticon.com/512/1600/1600667.png", // 마커이미지의 주소입니다
      imageSize = new kakao.maps.Size(42, 46), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imageOption
    );

    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(searchPlace, placesSearchCB);

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
        image: markerImage,
      });

      // 마커에 클릭이벤트를 등록
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        infowindow.open(map, marker);
      });
    }
  }, [searchPlace]);

  return <div id="myMap"></div>;
};

export default MapContainer;
