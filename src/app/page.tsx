import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";
import { aiTools } from "@/data/aiTools";

const entries = [
  { href: "/ai-tools", title: "AI 工具資料庫", text: "從用途、免費限制、替代方案與適合情境快速篩選工具。" },
  { href: "/free-plan", title: "免費版實測", text: "專注一般使用者最在意的免費額度、限制與是否值得升級。" },
  { href: "/alternatives", title: "替代工具比較", text: "當熱門工具不適合你時，快速找到功能接近的替代選擇。" },
  { href: "/templates", title: "免費模板", text: "整理 AI 提示詞、Notion 工作台與內容生產模板入口。" }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <span className="eyebrow">AI Tool Insight MVP</span>
          <h1>顏究工具庫</h1>
          <p className="lead">AI 工具、App 教學與數位效率實測筆記。用清楚的免費版測試、替代工具比較與教學模板，幫你少踩雷、快上手。</p>
          <div className="hero-actions">
            <Link className="button" href="/ai-tools">查看 AI 工具資料庫</Link>
            <Link className="button secondary" href="/free-plan">免費版實測入口</Link>
          </div>
        </div>
        <aside className="panel" aria-label="網站重點">
          <div className="metric-grid">
            <div className="metric"><strong>5</strong><span>首批 AI 工具</span></div>
            <div className="metric"><strong>0</strong><span>外部字體依賴</span></div>
            <div className="metric"><strong>RWD</strong><span>手機版導覽</span></div>
            <div className="metric"><strong>SEO</strong><span>站點地圖與 robots</span></div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="card-grid">
          {entries.map((entry) => (
            <Link className="card highlight" href={entry.href} key={entry.href}>
              <h3>{entry.title}</h3>
              <p>{entry.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>熱門 AI 工具實測</h2>
            <p>先從最常見的內容、設計、簡報、筆記與短影音工具開始。</p>
          </div>
          <Link className="button secondary" href="/alternatives">替代工具比較入口</Link>
        </div>
        <div className="tool-grid">
          {aiTools.slice(0, 3).map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
        </div>
      </section>
    </main>
  );
}
