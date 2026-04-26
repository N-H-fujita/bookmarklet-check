import React, { useState } from "react";
import Tabs from "./Tabs";

export default function SubTabs({ tabs, renderContent }) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  return (
    <>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onChange={setActiveTab}
        classPrefix="bc-sub"
      />

      <div className="bc-sub-content">
        {renderContent(activeTab)}
      </div>
    </>
  );
};
