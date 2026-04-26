import React from "react";

export default function ResultList({ items }) {
  if (!items.length) {
    return <p className="bc-empty">チェック項目はまだありません。</p>;
  }

  return (
    <ul className="bc-result-list">
      {items.map((item) => (
        <li
          key={item.id}
          className={`bc-result-item ${item.ok ? "is-ok" : "is-ng"}`}
        >
          <div className="bc-result-label">
            <span>{item.ok ? "✅" : "❌"}</span>
            <strong>{item.label}</strong>
          </div>
          <p className="bc-result-message">{item.message}</p>
        </li>
      ))}
    </ul>
  );
};
