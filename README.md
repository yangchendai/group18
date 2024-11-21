# 最近紅什麼

## 專案簡介

「最近紅什麼」是一個介紹近期熱門的網站，涵蓋了各種美食趨勢、youtuber評論以及各大美食和逛逛地點。該網站提供使用者最新的美食資訊，並且能根據不同區域與熱門評論，推薦當地及網紅最推崇的美食。目的是讓使用者快速了解哪些美食現在最紅，並且能夠輕鬆找到資訊來源。另外也提供好玩的遊戲資訊給大家分享。

## 技術選用

- **React**：使用 React 框架來開發單頁應用，將各個區塊設計為獨立元件，確保可重用性與模組化。
- **TypeScript**：使用 TypeScript 提供靜態型別檢查，確保程式碼的穩定性與可維護性。
- **CSS / Flexbox / Grid**：使用 CSS 配合 Flexbox 和 Grid 進行網站的排版設計，保持響應式布局，支持各種設備屏幕尺寸。
- **React Router**：用於頁面間的導航，讓用戶能夠輕鬆切換不同的區塊，如熱門美食、youtuber評論、熱銷地點等。
- **Git & GitHub**：使用 Git 進行版本控制，所有源代碼托管於 GitHub，並通過 GitHub Pages 部署網站。
  
## 目標功能
*熱門美食：展示近期最受歡迎的項目，並且提供每個詳細介紹及來源連結。
 網紅評論：收集來自youtuber的評論，並提供其來源連結，讓使用者了解真實的評論。
熱銷地點：推薦各大城市的熱門美食地點，並提供相關地點的詳細資料和來源。
資料來源：每個美食、評論、地點、遊戲項目都提供相應的資料來源連結，確保資訊的可靠性。

## 網站結構

網站由以下幾個主要區塊組成：

1. **首頁（Home）** - 介紹網站的功能，並展示簡單的導航。
2. **熱門美食（Trending）** - 顯示目前流行的時事，包括美食描述和來源連結。
3. **網紅評論（Reviews）** - 收集來自youtuber和民眾的評論，並提供參考來源。
4. **熱銷地點（Locations）** - 推薦各地熱點，並提供詳細的地點資訊和來源。

## 安裝與運行

1. 克隆此專案到本地：

   ```bash
   git clone https://github.com/yourusername/近期紅什麼.git
   cd 最近紅什麼
## 安裝依賴：

bash
複製程式碼
npm install
啟動開發伺服器：

bash
複製程式碼
npm start
開啟瀏覽器並訪問 http://localhost:3000，即可在本地查看網站。

部署至 GitHub Pages
確保已經配置好 gh-pages 分支：

bash
複製程式碼
npm run deploy
部署後，網站將會在 GitHub Pages 上上線。

文件結構
plaintext
複製程式碼
├── public/
│   ├── index.html         # HTML 主文件
│   └── ...
├── src/
│   ├── components/        # 各頁面元件
│   ├── pages/             # 頁面組件（如 Trending, Reviews, Locations）
│   ├── App.tsx            # 根元件
│   └── index.tsx          # 進入點
├── package.json           # 專案依賴與配置
├── README.md              # 這份文件
└── ...


Fork 本專案。
創建一個新的分支（git checkout -b feature-xyz）。
提交變更（git commit -am 'Add feature xyz'）。
推送分支（git push origin feature-xyz）。
開啟 Pull Request。
資料來源
美食趨勢資料
美食評論資料
遊戲介紹資料
地點資料來源


github page
https://yangchendai.github.io/group18/
