import React, { useState } from "react";

export default function App({ onClose }) {
  const tabs = [
    { id: "tab1", label: "タブ1" },
    { id: "tab2", label: "タブ2" },
    { id: "tab3", label: "タブ3" },
    { id: "tab4", label: "タブ4" },
    { id: "tab5", label: "タブ5" },
  ];
  const textTabs = [
    { id: "categoryA", label: "カテゴリA" },
    { id: "categoryB", label: "カテゴリB" },
    { id: "categoryC", label: "カテゴリC" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [activeTextTab, setActiveTextTab] = useState(textTabs[0].id);

  return (
    <div className="bc-modal">
      {/* ヘッダー */}
      <div className="bc-header">
        <h2 className="bc-title">ページチェック</h2>

        <button className="bc-close-button" onClick={onClose}>
          ×
        </button>
      </div>

      {/* タブ */}
      <div className="bc-tab-list">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`bc-tab ${activeTab === tab.id ? "is-active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* コンテンツ */}
      <div className="bc-content">
        {activeTab === "tab1" && (
          <div>
            <div className="bc-sub-tab-list">
              {textTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTextTab(tab.id)}
                  className={`bc-sub-tab ${activeTextTab === tab.id ? "is-active" : ""}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="bc-sub-content">
              {activeTextTab === "categoryA" && <div>カテゴリAのチェック（仮）</div>}
              {activeTextTab === "categoryB" && <div>カテゴリBのチェック（仮）</div>}
              {activeTextTab === "categoryC" && <div>カテゴリCのチェック（仮）</div>}
            </div>
          </div>
        )}

        {activeTab === "tab2" && <div>タブ2（仮）</div>}
        {activeTab === "tab3" && <div>タブ3（仮）</div>}
        {activeTab === "tab4" && <div>タブ4（仮）</div>}
        {activeTab === "tab5" && <div>タブ5（仮）</div>}
      </div>
    </div>
  );
};
