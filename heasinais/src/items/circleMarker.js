import React from "react";
import { Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
const CircleMarker = ({ center }) => {
  // 상수로 고정된 스타일 값
  const radius = 500; // 반경: 500미터
  const color = "blue"; // 테두리 색상
  const fillColor = "rgba(0, 0, 255, 0.5)"; // 채우기 색상
  const fillOpacity = 0.5; // 채우기 투명도

  return (
    <Circle
      center={center}
      radius={radius}
      pathOptions={{
        color: color,
        fillColor: fillColor,
        fillOpacity: fillOpacity,
      }}
    />
  );
};
export default CircleMarker; 