const textCheckGroups = [
  {
    id: "categoryA",
    label: "カテゴリA",
    words: ["送料無料", "税込", "返品可能"],
  },
  {
    id: "categoryB",
    label: "カテゴリB",
    words: ["キャンペーン", "期間限定"],
  },
  {
    id: "categoryC",
    label: "カテゴリC",
    words: ["お問い合わせ", "会社概要"],
  },
];

export function runTextChecks(target) {
  const text = target.textContent || "";

  return {
    id: "text",
    label: "文言チェック",
    groups: textCheckGroups.map((group) => ({
      id: group.id,
      label: group.label,
      items: group.words.map((word) => ({
        id: `word-${word}`,
        label: word,
        ok: text.includes(word),
        message: text.includes(word)
          ? "ページ内に文言があります"
          : "ページ内に文言がありません",
      })),
    })),
  };
};
