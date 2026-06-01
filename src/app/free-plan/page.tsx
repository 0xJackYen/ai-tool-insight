import type { Metadata } from "next";
import Link from "next/link";
import { aiTools } from "@/data/aiTools";

export const metadata: Metadata = {
  title: "免費版實測",
  description: "整理 AI 工具與 App 免費版限制、適合用途與升級前檢查清單。"
};

export default function FreePlanPage() {
  return (
    <main className="page">
      <span className="eyebrow">Free Plan Tests</span>
      <h1>免費版實測</h1>
      <p className="lead">先確認免費版能做到什麼、卡在哪裡，再決定是否升級。這裡聚焦一般創作者、學生與小團隊最常遇到的限制。</p>
      <section className="section tool-grid">
        {aiTools.map((tool) => (
          <article className="card" key={tool.slug}>
            <h3>{tool.name}</h3>
            <p>{tool.freePlan}</p>
            <ul className="list-clean">
              {tool.freePlanLimitations.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="card-actions"><Link className="button secondary" href={`/ai-tools/${tool.slug}`}>看完整限制</Link></div>
          </article>
        ))}
      </section>
    </main>
  );
}
