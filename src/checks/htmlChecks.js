export function runHtmlChecks(target) {
  const brs = [...target.querySelectorAll("br")];

  return {
    id: "html",
    label: "HTMLチェック",
    groups: [
      {
        id: "html-basic",
        label: "基本",
        items: [
          {
            id: "br",
            label: "brタグ",
            ok: brs.length === 0,
            message:
              brs.length === 0
                ? "brタグはありません"
                : `brタグが ${brs.length} 件あります`,
          },
        ],
      },
    ],
  };
};
