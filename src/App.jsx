import React, { useState } from "react";

export default function App({ onClose }) {
  const tabs = [
    { id: "tab1", label: "タブ1" },
    { id: "tab2", label: "タブ2" },
    { id: "tab3", label: "タブ3" },
    { id: "tab4", label: "タブ4" },
    { id: "tab5", label: "タブ5" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div style={modalStyle}>
      {/* ヘッダー */}
      <div style={headerStyle}>
        <h2 style={{ margin: 0, fontSize: "18px" }}>ページチェック</h2>

        <button onClick={onClose} style={closeButtonStyle}>
          ×
        </button>
      </div>

      {/* タブ */}
      <div style={tabListStyle}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...tabStyle,
              ...(activeTab === tab.id ? activeTabStyle : {}),
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      <div style={contentStyle}>
        {activeTab === "tab1" && <div>タブ1（仮）</div>}
        {activeTab === "tab2" && <div>タブ2（仮）</div>}
        {activeTab === "tab3" && <div>タブ3（仮）</div>}
        {activeTab === "tab4" && <div>タブ4（仮）</div>}
        {activeTab === "tab5" && <div>タブ5（仮）</div>}
      </div>
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

const closeButtonStyle = {
  background: "transparent",
  border: "none",
  fontSize: "20px",
  cursor: "pointer",
};

const tabListStyle = {
  display: "flex",
  gap: "8px",
  marginTop: "12px",
  flexWrap: "wrap",
};

const tabStyle = {
  padding: "6px 10px",
  border: "1px solid #ccc",
  background: "#f5f5f5",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "13px",
};

const activeTabStyle = {
  background: "#222",
  color: "#fff",
  borderColor: "#222",
};

const contentStyle = {
  marginTop: "12px",
};
