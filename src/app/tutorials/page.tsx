import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App 教學",
  description: "顏究工具庫 App 教學，整理 AI 工具、設計、筆記與短影音工具的上手指南。"
};

const tutorials = [
  ["AI 工具上手", "用目標、素材、限制與輸出格式拆解提示詞，建立可重複使用的工作流。"],
  ["設計工具教學", "從社群圖文、簡報到品牌素材，整理非設計師也能掌握的製作流程。"],
  ["效率筆記教學", "用資料庫、任務清單與模板，把內容規劃和專案管理放在同一個系統。"]
];

export default function TutorialsPage() {
  return (
    <main className="page">
      <span className="eyebrow">Tutorials</span>
      <h1>App 教學</h1>
      <p className="lead">不只列功能，也會把工具放進真實情境：內容生產、簡報提案、資料整理與短影音發布。</p>
      <section className="section card-grid">
        {tutorials.map(([title, text]) => (
          <article className="card" key={title}>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
