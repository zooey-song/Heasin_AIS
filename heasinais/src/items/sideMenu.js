import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
const sideMenu = ({ isOpen, onSelect, toggleMenu }) => {
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 50
          }}
          onClick={toggleMenu}
        ></div>
      )}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-250px',
          height: '100%',
          width: '250px',
          background: '#333',
          color: 'white',
          transition: 'right 0.3s ease-in-out',
          zIndex: 60,
          padding: '16px'
        }}
      >
        <ul>
          <li style={{ margin: '10px 0' }}>
            <button
              style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => onSelect('/homemap')}
            >
              Home Map
            </button>
          </li>
          <li style={{ margin: '10px 0' }}>
            <button
              style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => onSelect('/homemap')}
            >
              Home Map
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default sideMenu;