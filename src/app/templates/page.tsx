import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "免費資源｜AI 工具評測表與新手選擇清單",
  description: "顏究工具庫免費資源頁，整理 AI 工具免費版評測表、替代方案比較表與新手 AI 工具選擇清單。"
};

const resources = [
  {
    title: "AI 工具免費版評測表",
    text: "用免費額度、輸出品質、限制、升級需求與適合情境，記錄每款工具是否真的夠用。"
  },
  {
    title: "AI 工具替代方案比較表",
    text: "把熱門工具與替代方案放在同一張表，方便比較預算、功能、語言支援與使用情境。"
  },
  {
    title: "新手 AI 工具選擇清單",
    text: "從寫作、設計、簡報、筆記到短影音，幫新手先挑出最值得試用的工具組合。"
  }
];

const templateOutcomes = [
  "免費版是否夠用",
  "有沒有更適合的替代工具",
  "是否值得升級付費版"
];

export default function TemplatesPage() {
  return (
    <main className="page">
      <span className="eyebrow">Free Resources</span>
      <h1>免費資源</h1>
      <p className="lead">
        這裡會整理可複製的 AI 工具評測表、替代方案比較表與新手選擇清單。資源完成後會在本頁開放。
      </p>

      <section className="section feature-grid">
        <article className="card highlight">
          <h2>這些模板會幫你判斷什麼</h2>
          <p>不是單純列工具清單，而是把試用前後最容易忽略的決策問題整理成可檢查的表格。</p>
        </article>
        <article className="card">
          <ul className="list-clean">
            {templateOutcomes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
      </section>

      <section className="section card-grid">
        {resources.map((resource) => (
          <article className="card highlight" key={resource.title}>
            <h3>{resource.title}</h3>
            <p>{resource.text}</p>
            <div className="card-actions">
              <span className="button disabled" aria-disabled="true">製作中</span>
            </div>
          </article>
        ))}
      </section>

      <section className="section panel">
        <span className="eyebrow">Support</span>
        <h2>支持免費資源更新</h2>
        <p>
          未來可在這裡放置 Gumroad、Ko-fi 或電子報訂閱入口。目前先不放假連結，等資源完成後再開放。
        </p>
      </section>
    </main>
  );
}
