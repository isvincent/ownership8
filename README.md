# 所有權的物權特性｜互動學習網

公民與社會 2　第5章「權利關係與財產權保障」第二節（課本 p.109–115）的互動式學習網站。純 HTML／CSS／JavaScript，不需安裝、不需伺服器，可直接部署到 GitHub Pages。

## 功能
- 🧭 學習指引：學習目標、7 步驟學習路徑、關鍵詞雲、迷思翻卡、雙向細目表
- 📖 教材：7 個單元完整呈現課本內文、小辭典、例、請想想看、公民論壇，可切換「課本原頁」與朗讀
- ✏️ 例題習題：課本例題＋自編基本題、進階題、素養題（附參考答案）
- 🎮 互動實驗室：物的分類器、四特性轉盤、優先性時間軸、債權 vs 物權對抗網、民法767 判斷器、所有權移轉流程、公私益天平
- 🚀 進階延伸：法條卡、民法765、公地悲劇、寇斯定理、買賣不破租賃、創用CC
- 🏋️ 練習：閃卡、60 秒是非快問快答、情境分類、名詞配對（可反覆演練）
- 📝 測驗：20 題單選（依雙向細目表命題），隨機排序、計時、分單元成績、錯題檢討
- 📊 學習歷程：自動記錄閱讀、練習、測驗、心得，可下載 CSV／TXT／JSON
- 📥 下載：原始教材 PDF、雙向細目表、題庫、9:16 影片簡報、Padlet 教學板
- ⚙️ 顯示與操作設定：全螢幕、音效、裝置、版面、語言（繁中／英文）、字體、色系

## 檔案架構
```
所有權的物權特性/
├── index.html                 首頁（入口）
├── css/style.css              樣式（亮色／暗色、手機／平板／電腦）
├── js/
│   ├── quiz.js                20 題測驗與雙向細目表（由 data/quiz.json 產生）
│   ├── data.js                教材、學習指引、習題、練習題庫、延伸內容、介面文字
│   ├── figs.js                SVG 插圖（重繪圖 5-2-2～5-2-4、概念圖）
│   ├── viz.js                 7 個互動視覺化元件
│   └── app.js                 路由、設定、音效、練習、測驗、學習歷程
├── data/quiz.json             測驗題庫（JSON）
├── assets/
│   ├── 所有權的物權特性.pdf      原始教材
│   ├── pig.jpg                圖 5-2-1
│   └── pages/p1–p7.webp       課本原頁
├── video/
│   ├── 所有權的物權特性_影片簡報.html   9:16 自動播放影片簡報（300 秒，含旁白與字幕）
│   └── 旁白逐字稿.txt
├── 雙向細目表與測驗題.md
└── README.md
```
（`classroom/` 是發布到 Google Classroom 的腳本與紀錄，已列在 `.gitignore`，不會上傳。）

## 上傳到 GitHub Pages
1. 在 GitHub 建立新的 repository（例如 `ownership-civics`），設為 Public。
2. 點「Add file → Upload files」，把本資料夾內**所有檔案與子資料夾**拖曳上傳（`classroom/` 除外），按「Commit changes」。
3. 到「Settings → Pages」，Source 選「Deploy from a branch」，Branch 選 `main`、資料夾 `/ (root)`，按 Save。
4. 約 1 分鐘後即可用 `https://你的帳號.github.io/ownership-civics/` 開啟。

## 修改內容
- 教材文字、習題、練習題庫：編輯 `js/data.js`
- 測驗題目：編輯 `data/quiz.json` 後，重新產生 `js/quiz.js`（或直接編輯 `js/quiz.js`）

學習歷程只儲存在學生自己的瀏覽器（localStorage），請提醒學生下載保存。
