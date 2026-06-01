import type { Metadata } from "next";
import { ToolCard } from "@/components/ToolCard";
import { aiTools } from "@/data/aiTools";

export const metadata: Metadata = {
  title: "AI 工具資料庫",
  description: "顏究工具庫 AI 工具資料庫，整理 ChatGPT、Canva、Gamma、Notion、CapCut 的免費版限制、適合情境與替代工具。"
};

export default function AIToolsPage() {
  return (
    <main className="page">
      <section className="section-header">
        <div>
          <span className="eyebrow">AI Tools Database</span>
          <h1>AI 工具資料庫</h1>
          <p className="lead">用免費版限制、價格方向、優缺點與替代工具，快速判斷一款工具是否適合你的工作流。</p>
        </div>
      </section>
      <div className="tool-grid">
        {aiTools.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
      </div>
    </main>
  );
}
