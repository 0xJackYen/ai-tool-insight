import Link from "next/link";
import type { AITool } from "@/data/aiTools";

export function ToolCard({ tool }: { tool: AITool }) {
  return (
    <article className="card">
      <div className="tag-row">
        <span className="tag">{tool.category}</span>
        <span className="tag rating">★ {tool.rating.toFixed(1)}</span>
      </div>
      <h3>{tool.name}</h3>
      <p>{tool.verdict}</p>
      <div className="tag-row">
        {tool.bestFor.slice(0, 3).map((item) => (
          <span className="tag" key={item}>{item}</span>
        ))}
      </div>
      <div className="card-actions">
        <Link className="button secondary" href={`/ai-tools/${tool.slug}`}>查看實測</Link>
      </div>
    </article>
  );
}
