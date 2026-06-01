import type { Metadata } from "next";
import Link from "next/link";
import { ToolCard } from "@/components/ToolCard";
import { aiTools } from "@/data/aiTools";

export const metadata: Metadata = {
  title: "顏究工具庫｜AI 工具資料庫、免費版實測與替代工具比較",
  description: "顏究工具庫幫你查 AI 工具、看免費版限制、找替代工具，並整理 App 教學與數位效率筆記。"
};

const mainEntries = [
  {
    href: "/ai-tools",
    title: "我要找 AI 工具",
    text: "依照寫作、設計、簡報、筆記與短影音用途，快速找到適合的 AI 工具。"
  },
  {
    href: "/free-plan",
    title: "我要查免費版限制",
    text: "先看免費版能做到什麼、容易卡在哪裡，再決定是否需要升級。"
  },
  {
    href: "/alternatives",
    title: "我要找替代工具",
    text: "當熱門工具不符合預算、語言或工作流時，找到同類替代方案。"
  }
];

const categories = [
  "寫作與對話",
  "設計與社群素材",
  "簡報與文件",
  "筆記與知識管理",
  "短影音剪輯"
];

const highlights = [
  {
    href: "/free-plan",
    value: "免費限制",
    label: "查免費版能不能日常使用、什麼情況會卡住"
  },
  {
    href: "/alternatives",
    value: "替代方案",
    label: "熱門工具不適合時，快速找到同類替代選擇"
  },
  {
    href: "/tutorials",
    value: "教學筆記",
    label: "用新手能跟上的方式，把 App 放進工作流"
  },
  {
    href: "/templates",
    value: "模板資源",
    label: "準備評測表、比較表與 AI 工具選擇清單"
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div>
          <span className="eyebrow">AI 工具資料庫與效率筆記</span>
          <h1>顏究工具庫</h1>
          <p className="lead">
            不知道哪個 AI 工具免費版真的夠用？怕升級後才發現不適合、花了冤枉錢？顏究工具庫幫你查 AI 工具、看免費版限制、找替代工具，也整理新手能跟上的 App 教學。
          </p>
          <div className="hero-actions">
            <Link className="button" href="/ai-tools">找適合我的 AI 工具</Link>
            <Link className="button secondary" href="/free-plan">查免費版夠不夠用</Link>
          </div>
        </div>
        <aside className="panel" aria-label="網站整理重點">
          <div className="metric-grid">
            {highlights.map((item) => (
              <Link className="metric" href={item.href} key={item.href}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="card-grid">
          {mainEntries.map((entry) => (
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
            <h2>依用途找工具</h2>
            <p>先從你要完成的任務出發，再看免費版限制、適合情境與替代方案。</p>
          </div>
          <Link className="button secondary" href="/ai-tools">查看全部工具</Link>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <Link className="category-card" href="/ai-tools" key={category}>
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <h2>熱門 AI 工具實測</h2>
            <p>從免費版、適合用途與替代工具開始，快速判斷要不要試用。</p>
          </div>
          <Link className="button secondary" href="/alternatives">看替代工具比較</Link>
        </div>
        <div className="tool-grid">
          {aiTools.slice(0, 5).map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
        </div>
      </section>
    </main>
  );
}
