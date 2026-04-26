import React from "react";

export default function Tabs({ tabs, activeTab, onChange, classPrefix = "bc" }) {
  return (
    <div className={ `${classPrefix}-tab-list` }>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`${classPrefix}-tab ${activeTab === tab.id ? "is-active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
  );
};