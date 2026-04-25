const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "../dist/bookmarklet.js");
const outputPath = path.resolve(__dirname, "../dist/bookmarklet.txt");

const code = fs.readFileSync(inputPath, "utf8");

// 改行削除（bookmarklet用）
const oneLine = code.replace(/\r?\n/g, "");

// javascript: 付与
const bookmarklet = `javascript:${oneLine}`;

// 出力
fs.writeFileSync(outputPath, bookmarklet, "utf8");

console.log("bookmarklet.txt を作成しました");