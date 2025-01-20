import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CircleMarker from '../items/circleMarker'; // 파일 이름에 따라 적절히 조정
import SideMenu from '../items/sideMenu';

const HomeMap = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const center = [37.571625, 127.0421417]; // 지도 중심 좌표 (위도, 경도)
  const circleCenters = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.49, -0.08]
  ];

  return (
    <>
      <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: menuOpen ? '16.5rem' : '1rem', // 메뉴 열림/닫힘에 따라 X 버튼 위치 변경
            transition: 'right 0.3s ease-in-out',
            zIndex: 70 // 버튼이 항상 메뉴 위에 표시되도록 설정
          }}
        >
          <button
            style={{
              background: 'gray',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <MapContainer
            center={center} // 초기 중심 좌표 (위도, 경도)
            zoom={5} // 초기 줌 레벨
            style={{ height: '100%', width: '100%' }}
          >
            {/* OpenStreetMap 기본 타일 레이어 */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* CircleMarker 컴포넌트를 반복 렌더링 */}
            {circleCenters.map((center, index) => (
              <CircleMarker key={index} center={center} />
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default HomeMap;
