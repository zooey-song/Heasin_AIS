import React, { useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import CircleMarker from '../items/circleMarker'; // 파일 이름에 따라 적절히 조정
import SideMenu from '../items/sideMenu';


const HomeMap = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState('/homemap');
  const center = [37.571625, 127.0421417]; // 지도 중심 좌표 (위도, 경도)
  const circleCenters = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.49, -0.08]
  ];

  return (
    <div style={{ height: '100vh', width: '100vw', position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: menuOpen ? '16.5rem' : '1rem',
          transition: 'right 0.3s ease-in-out',
          zIndex: 70
        }}
      >
        <button
          style={{
            background: menuOpen ? '#444' : 'gray',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: menuOpen ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none'
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Side Menu */}
      <SideMenu
        isOpen={menuOpen}
        onSelect={(menu) => {
          setSelectedMenu(menu);
          setMenuOpen(false);
        }}
        toggleMenu={() => setMenuOpen(false)}
      />

      {/* Dynamic Content */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        {selectedMenu === '/homemap' && (
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
        )}
      </div>
    </div>
  );
};

export default HomeMap;
