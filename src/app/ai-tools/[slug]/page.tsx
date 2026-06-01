import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { aiTools, getToolBySlug } from "@/data/aiTools";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return aiTools.map((tool) => ({ slug: tool.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const tool = getToolBySlug(params.slug);
  if (!tool) return {};

  return {
    title: `${tool.name} 免費版實測與替代工具`,
    description: `${tool.name} 的免費版限制、價格方向、適合族群、優缺點與替代工具整理。`
  };
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <ul className="list-clean">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}

export default function ToolDetailPage({ params }: Props) {
  const tool = getToolBySlug(params.slug);
  if (!tool) notFound();

  return (
    <main className="page">
      <article className="tool-detail">
        <span className="eyebrow">{tool.category}</span>
        <h1>{tool.name}</h1>
        <p className="lead">{tool.verdict}</p>
        <div className="tool-meta">
          <span className="tag rating">★ {tool.rating.toFixed(1)}</span>
          <span className="tag">免費版：有</span>
          <span className="tag">{tool.pricing}</span>
        </div>
        <div className="hero-actions">
          <a className="button" href={tool.affiliateUrl || tool.officialUrl} target="_blank" rel="noreferrer">前往官方網站</a>
          <a className="button secondary" href={tool.officialUrl} target="_blank" rel="noreferrer">查看官方資訊</a>
        </div>
      </article>

      <section className="section detail-grid">
        <section className="card highlight">
          <h2>免費版實測重點</h2>
          <p>{tool.freePlan}</p>
          <ul className="list-clean">
            {tool.freePlanLimitations.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
        <section className="card">
          <h2>替代工具</h2>
          <div className="tag-row">
            {tool.alternatives.map((item) => <span className="tag" key={item}>{item}</span>)}
          </div>
          <p>建議依照你的主要任務、預算與團隊協作需求選擇，而不是只看單一熱門工具。</p>
        </section>
      </section>

      <section className="section detail-grid">
        <ListBlock title="最適合" items={tool.bestFor} />
        <ListBlock title="不太適合" items={tool.notFor} />
        <ListBlock title="優點" items={tool.pros} />
        <ListBlock title="缺點" items={tool.cons} />
      </section>
    </main>
  );
}
