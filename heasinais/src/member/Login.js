import React, { useState } from "react";
import Register from "./Register"; // 회원가입 모달 컴포넌트

const Login = () => {
  const [userid, setUserid] = useState(""); // 아이디 상태
  const [password, setPassword] = useState(""); // 비밀번호 상태
  const [showRegister, setShowRegister] = useState(false); // 회원가입 모달 상태

  const handleLogin = (e) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지
    console.log("아이디:", userid);
    console.log("비밀번호:", password);
    alert("로그인 버튼 클릭됨!");
  };

  return (
    <div className="relative h-screen bg-gray-900">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('../login_page.png')" }}
      ></div>

      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* 로그인 폼 */}
      <div className="relative flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 w-96">
          <h1 className="text-xl font-semibold text-center text-gray-800 mb-6">
            AIS 경로예측
          </h1>
          <form onSubmit={handleLogin}>
            {/* 아이디 입력 */}
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                아이디
              </label>
              <input
                type="text"
                id="username"
                value={userid}
                onChange={(e) => setUserid(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="아이디를 입력하세요"
              />
            </div>
            {/* 비밀번호 입력 */}
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            {/* 로그인 버튼 */}
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              로그인
            </button>
          </form>
          {/* 회원가입 버튼 */}
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowRegister(true)} // 회원가입 모달 열기
              className="text-blue-500 hover:underline text-sm"
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
      {/* 회원가입 모달 */}
      {showRegister && (
        <Register onClose={() => setShowRegister(false)} /> // 닫기 기능 전달
      )}
    </div>
  );
};

export default Login;
