import type { Metadata } from "next";
import Link from "next/link";
import { aiTools } from "@/data/aiTools";

export const metadata: Metadata = {
  title: "免費 AI 工具實測：哪些工具不用付費也夠用？",
  description: "整理 ChatGPT、Canva、Gamma、Notion、CapCut 免費版限制，判斷哪些 AI 工具不用付費也夠日常使用。"
};

const checklist = [
  "免費版每天或每月的額度是否足夠你的使用頻率？",
  "核心功能是否被鎖在付費版，還是免費版已經能完成主要任務？",
  "輸出品質、速度、浮水印、協作或品牌素材是否會影響正式使用？"
];

const quickConclusions = [
  { tool: "ChatGPT", conclusion: "適合入門與日常問答，但大量使用會卡。" },
  { tool: "Canva", conclusion: "適合基本設計與社群素材。" },
  { tool: "Gamma", conclusion: "適合測試簡報流程。" },
  { tool: "Notion", conclusion: "適合個人筆記與知識管理。" },
  { tool: "CapCut", conclusion: "適合基本短影音剪輯。" }
];

export default function FreePlanPage() {
  return (
    <main className="page">
      <span className="eyebrow">Free Plan Tests</span>
      <h1>免費 AI 工具實測：哪些工具不用付費也夠用？</h1>
      <p className="lead">
        先確認免費版能不能日常使用、什麼情況會卡住、什麼情況才需要升級，再決定是否付費。
      </p>

      <section className="section panel">
        <span className="eyebrow">Quick Take</span>
        <h2>快速結論</h2>
        <div className="summary-list">
          {quickConclusions.map((item) => (
            <div className="summary-item" key={item.tool}>
              <strong>{item.tool}</strong>
              <span>{item.conclusion}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section feature-grid">
        <article className="card highlight">
          <h3>1. 免費版能不能日常使用</h3>
          <p>先看工具是否能完成最常見的任務，例如寫作、簡報初稿、社群素材、筆記整理或短影音剪輯。</p>
        </article>
        <article className="card highlight">
          <h3>2. 什麼情況會卡住</h3>
          <p>檢查額度、速度、浮水印、進階模型、品牌素材、協作功能與輸出格式是否有限制。</p>
        </article>
        <article className="card highlight">
          <h3>3. 什麼情況才需要升級</h3>
          <p>只有當限制會影響交付品質、團隊協作或固定工作流時，才需要認真考慮付費方案。</p>
        </article>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>免費版工具比較</h2>
            <p>以下使用目前資料庫內容整理，每張卡都連到完整工具頁。</p>
          </div>
        </div>
        <div className="tool-grid">
          {aiTools.map((tool) => (
            <article className="card" key={tool.slug}>
              <div className="tag-row">
                <span className="tag">{tool.category}</span>
                <span className="tag rating">★ {tool.rating.toFixed(1)}</span>
              </div>
              <h3>{tool.name}</h3>
              <p><strong>免費版定位：</strong>{tool.freePlan}</p>
              <p><strong>常見限制：</strong></p>
              <ul className="list-clean">
                {tool.freePlanLimitations.slice(0, 2).map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p><strong>適合用途：</strong>{tool.bestFor.slice(0, 3).join("、")}</p>
              <div className="card-actions">
                <Link className="button secondary" href={`/ai-tools/${tool.slug}`}>看完整限制</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section panel">
        <span className="eyebrow">Upgrade Checklist</span>
        <h2>升級前檢查清單</h2>
        <ul className="list-clean">
          {checklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div className="hero-actions">
          <Link className="button" href="/templates">查看免費資源</Link>
        </div>
      </section>
    </main>
  );
}
