export type AITool = {
  name: string;
  slug: string;
  category: string;
  officialUrl: string;
  freePlan: string;
  freePlanLimitations: string[];
  pricing: string;
  bestFor: string[];
  notFor: string[];
  pros: string[];
  cons: string[];
  alternatives: string[];
  rating: number;
  verdict: string;
  affiliateUrl: string;
};

export const aiTools: AITool[] = [
  {
    name: "ChatGPT",
    slug: "chatgpt",
    category: "AI 對話與內容生產",
    officialUrl: "https://chatgpt.com/",
    freePlan: "可免費使用基礎 AI 對話、寫作、摘要與日常問答功能。",
    freePlanLimitations: [
      "尖峰時段與高階模型可能有用量或速度限制",
      "部分進階工具、專案與協作功能需升級付費方案",
      "長文件與大量資料處理不適合完全依賴免費版"
    ],
    pricing: "提供免費版；Plus、Team 與企業方案依官方公告計費。",
    bestFor: ["文章草稿", "企劃發想", "學習摘要", "程式除錯", "日常工作助理"],
    notFor: ["未經查證的醫療或法律決策", "大量自動化任務", "需要固定格式資料庫的工作流"],
    pros: ["入門門檻低", "支援多種任務", "回覆速度與品質穩定", "適合建立個人工作流"],
    cons: ["免費版用量不一定適合重度使用", "需要使用者自行驗證重要資訊", "複雜任務仍需清楚提示詞"],
    alternatives: ["Claude", "Gemini", "Microsoft Copilot", "Perplexity"],
    rating: 4.8,
    verdict: "最適合作為 AI 工具入門與日常效率中樞，免費版已足以完成多數輕量內容與學習任務。",
    affiliateUrl: ""
  },
  {
    name: "Canva",
    slug: "canva",
    category: "設計與社群素材",
    officialUrl: "https://www.canva.com/",
    freePlan: "可免費使用大量模板、簡報、社群圖文與基礎設計功能。",
    freePlanLimitations: [
      "部分素材、品牌工具與進階去背功能需付費",
      "團隊品牌控管與進階協作功能較受限制",
      "大量商用模板使用前仍需確認授權範圍"
    ],
    pricing: "提供免費版；Pro、Teams 與企業方案依官方公告計費。",
    bestFor: ["社群貼文", "簡報", "品牌素材", "履歷", "活動海報"],
    notFor: ["高度客製化向量設計", "專業印刷前製", "複雜動畫後製"],
    pros: ["模板豐富", "操作直覺", "適合非設計師快速產出", "多人協作方便"],
    cons: ["熱門模板容易撞款", "免費素材限制較明顯", "精細設計彈性不如專業軟體"],
    alternatives: ["Adobe Express", "Figma", "VistaCreate", "Microsoft Designer"],
    rating: 4.6,
    verdict: "若你需要快速完成社群與簡報視覺，Canva 免費版是最容易上手的設計工具之一。",
    affiliateUrl: ""
  },
  {
    name: "Gamma",
    slug: "gamma",
    category: "AI 簡報與文件",
    officialUrl: "https://gamma.app/",
    freePlan: "可用 AI 快速建立簡報、網頁式文件與提案初稿。",
    freePlanLimitations: [
      "AI 生成點數與輸出能力有限",
      "進階匯出、品牌設定與分析功能可能需付費",
      "生成後仍需要人工調整架構與品牌語氣"
    ],
    pricing: "提供免費版；Plus、Pro 與團隊方案依官方公告計費。",
    bestFor: ["提案初稿", "課程簡報", "產品介紹", "企劃視覺化", "網頁式簡報"],
    notFor: ["需要細緻動畫的舞台簡報", "公司嚴格版型控管", "大量資料圖表自動化"],
    pros: ["從文字到簡報速度快", "版面具現代感", "適合整理想法", "分享連結方便"],
    cons: ["免費點數有限", "中文長文仍需校稿", "品牌一致性需手動調整"],
    alternatives: ["Tome", "Beautiful.ai", "Canva", "Google Slides"],
    rating: 4.4,
    verdict: "Gamma 適合把想法快速變成可展示雛形，尤其適合簡報前期發想與提案草稿。",
    affiliateUrl: ""
  },
  {
    name: "Notion",
    slug: "notion",
    category: "筆記、資料庫與知識管理",
    officialUrl: "https://www.notion.so/",
    freePlan: "個人可免費建立筆記、資料庫、任務清單與基本知識庫。",
    freePlanLimitations: [
      "團隊協作、權限與歷史版本功能在免費版較有限",
      "AI 功能通常需額外加購或使用付費方案",
      "資料庫架構複雜時需要花時間規劃"
    ],
    pricing: "提供免費版；Plus、Business、Enterprise 與 AI 加購依官方公告計費。",
    bestFor: ["個人知識庫", "專案管理", "內容行事曆", "讀書筆記", "小團隊文件"],
    notFor: ["重度試算表運算", "需要離線優先的筆記", "高度結構化企業資料庫"],
    pros: ["資料庫彈性高", "模板生態豐富", "頁面排版乾淨", "適合整合筆記與任務"],
    cons: ["新手需要理解資料庫概念", "離線體驗有限", "大型工作區可能變慢或混亂"],
    alternatives: ["Coda", "Airtable", "Obsidian", "Craft"],
    rating: 4.5,
    verdict: "Notion 免費版很適合打造個人工作台，但要避免一開始就把系統做得過度複雜。",
    affiliateUrl: ""
  },
  {
    name: "CapCut",
    slug: "capcut",
    category: "短影音剪輯",
    officialUrl: "https://www.capcut.com/",
    freePlan: "可免費剪輯短影音、字幕、轉場、特效與多平台內容。",
    freePlanLimitations: [
      "部分素材、特效、雲端空間與進階功能需付費",
      "商業使用素材前需確認授權與平台政策",
      "專業長片與複雜調色仍不如桌面級剪輯軟體"
    ],
    pricing: "提供免費版；Pro 與相關加值方案依官方公告計費。",
    bestFor: ["TikTok 短影音", "Reels", "YouTube Shorts", "自動字幕", "快速剪輯"],
    notFor: ["電影級後製", "複雜多機剪輯", "高度客製音訊工程"],
    pros: ["短影音工作流完整", "字幕與模板好用", "手機與桌面都方便", "學習成本低"],
    cons: ["熱門模板辨識度高", "進階素材常需付費", "專業色彩與音訊控制有限"],
    alternatives: ["Adobe Premiere Rush", "DaVinci Resolve", "VN", "InShot"],
    rating: 4.5,
    verdict: "CapCut 是短影音創作者最值得先試的免費剪輯工具，適合快速把腳本變成可發布內容。",
    affiliateUrl: ""
  }
];

export function getToolBySlug(slug: string) {
  return aiTools.find((tool) => tool.slug === slug);
}
