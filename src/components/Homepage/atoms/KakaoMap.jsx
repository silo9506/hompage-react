/* global kakao */
import { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const KakaoMap = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      draggable: false,
      center: new kakao.maps.LatLng(37.6451805, 127.0143882),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    const markerPosition = new kakao.maps.LatLng(37.6451805, 127.0143882);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    const iwContent =
        '<div style="padding:5px; width:150px;">LovelyPoppy<br><div style="margin-top:2px;">강북구 수유동 288-4</div></div>',
      iwPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    marker.setMap(map);
    infowindow.open(map, marker);
  }, []);
  console.log(window.kakao);
  return (
    <Container>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </Container>
  );
};

export default KakaoMap;
