import type { Metadata } from "next";
import Link from "next/link";
import { aiTools } from "@/data/aiTools";

export const metadata: Metadata = {
  title: "替代工具比較",
  description: "比較熱門 AI 工具的替代方案，依照內容、設計、簡報、筆記與短影音用途快速選擇。"
};

export default function AlternativesPage() {
  return (
    <main className="page">
      <span className="eyebrow">Alternatives</span>
      <h1>替代工具比較</h1>
      <p className="lead">當熱門工具不符合預算、語言、協作或輸出需求時，可以從同類替代方案開始試用。</p>
      <section className="section tool-grid">
        {aiTools.map((tool) => (
          <article className="card" key={tool.slug}>
            <h3>{tool.name} 替代方案</h3>
            <div className="tag-row">
              {tool.alternatives.map((item) => <span className="tag" key={item}>{item}</span>)}
            </div>
            <p>{tool.verdict}</p>
            <Link className="button secondary" href={`/ai-tools/${tool.slug}`}>查看 {tool.name} 分析</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
