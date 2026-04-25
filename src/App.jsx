import React from "react";

export default function App() {
  return (
    <div style={modalStyle}>
      <div style={headerStyle}>
        <h2 style={{ margin: 0, fontSize: "18px" }}>ページチェック</h2>
      </div>
      <p style={{ margin: "12px 0 0" }}>最小構成の表示確認です。</p>
    </div>
  );
}

const modalStyle = {
  width: "320px",
  padding: "16px",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: "12px",
  position: "fixed",
  top: "24px",
  left: "24px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
  fontFamily: "sans-serif",
  zIndex: 999999,
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};