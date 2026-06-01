# ai-tool-insight

顏究工具庫：AI 工具資料庫、免費版實測、替代工具比較、App 教學與數位效率筆記。

## 路由

- `/`：首頁
- `/ai-tools`：AI 工具資料庫
- `/ai-tools/[slug]`：單一工具實測頁
- `/free-plan`：免費版實測
- `/alternatives`：替代工具比較
- `/tutorials`：App 教學
- `/templates`：免費模板
- `/cooperation`：合作提案
- `/about`：關於顏究工具庫

## 本機開發

```bash
npm install
npm run dev
```

## 檢查

```bash
npm run build
npm run lint
```

## 部署

建議使用 Vercel Import GitHub repo，Framework Preset 選 Next.js。

- Build Command: `npm run build`
- Environment variable: `NEXT_PUBLIC_SITE_URL=https://jack-tool-insight.vercel.app`
