
import './App.css';
import './index.css';
import Login from './member/Login'
import HomeMap from './items/homemap'
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 기본 경로에서 Login 컴포넌트를 렌더링 */}
        <Route path="/" element={<Login />} />
        <Route path="/homemap" element={<HomeMap />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;