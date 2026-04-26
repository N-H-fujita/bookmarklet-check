import React, { useState } from "react";
import Tabs from "./ui/Tabs";
import SubTabs from "./ui/SubTabs";

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

export default function App({ onClose }) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

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
      <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} />

      {/* コンテンツ */}
      <div className="bc-content">
        {activeTab === "tab1" && (
          <SubTabs
            tabs={textTabs}
            renderContent={(active) => {
              if (active === "categoryA") return <div>カテゴリAのチェック（仮）</div>;
              if (active === "categoryB") return <div>カテゴリBのチェック（仮）</div>;
              if (active === "categoryC") return <div>カテゴリCのチェック（仮）</div>;
              return null;
            }}
          />
        )}

        {activeTab === "tab2" && <div>タブ2（仮）</div>}
        {activeTab === "tab3" && <div>タブ3（仮）</div>}
        {activeTab === "tab4" && <div>タブ4（仮）</div>}
        {activeTab === "tab5" && <div>タブ5（仮）</div>}
      </div>
    </div>
  );
};
