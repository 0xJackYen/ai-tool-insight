import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免費模板",
  description: "免費模板入口，包含 AI 提示詞、工具評測表、Notion 工作台與內容生產檢查清單。"
};

const templates = [
  { title: "AI 工具評測表", text: "用用途、免費限制、輸出品質、替代方案與升級需求評估工具。" },
  { title: "提示詞工作卡", text: "把角色、任務、素材、限制與格式變成每次都能複製的提示詞。" },
  { title: "內容生產清單", text: "從選題、草稿、設計、排程到復盤，建立穩定發布節奏。" }
];

export default function TemplatesPage() {
  return (
    <main className="page">
      <span className="eyebrow">Free Templates</span>
      <h1>免費模板入口</h1>
      <p className="lead">MVP 階段先提供模板索引，後續可擴充成下載頁、電子報訂閱或會員資源庫。</p>
      <section className="section card-grid">
        {templates.map((template) => (
          <article className="card highlight" key={template.title}>
            <h3>{template.title}</h3>
            <p>{template.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
