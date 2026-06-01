import type { Metadata } from "next";
import Link from "next/link";
import { aiTools } from "@/data/aiTools";

export const metadata: Metadata = {
  title: "AI 工具替代方案比較：ChatGPT、Canva、Gamma、Notion、CapCut 替代工具",
  description: "比較熱門 AI 工具替代方案，整理 ChatGPT、Canva、Gamma、Notion、CapCut 在不同情境下可考慮的替代工具。"
};

const alternativeNotes: Record<string, { when: string; forWhom: string }> = {
  ChatGPT: {
    when: "當你需要不同語氣、即時搜尋、文件摘要或更符合公司政策的 AI 助理時，可以比較其他對話工具。",
    forWhom: "適合重視寫作風格、資料查證、學習研究或企業協作的使用者。"
  },
  Canva: {
    when: "當你需要更細緻的設計控制、品牌協作、向量編輯或不同模板風格時，可以找設計類替代工具。",
    forWhom: "適合社群小編、設計新手、品牌經營者與需要快速產圖的小團隊。"
  },
  Gamma: {
    when: "當你需要更傳統的投影片、公司版型、細節排版或簡報協作流程時，可以比較其他簡報工具。",
    forWhom: "適合提案工作者、課程講師、產品經理與需要快速產出簡報草稿的人。"
  },
  Notion: {
    when: "當你需要離線筆記、專業資料庫、個人知識庫或更低學習成本時，可以考慮替代工具。",
    forWhom: "適合知識工作者、內容創作者、學生與管理專案或文件的小團隊。"
  },
  CapCut: {
    when: "當你需要更專業剪輯、複雜音訊、桌面後製或不同平台工作流時，可以比較其他剪輯工具。",
    forWhom: "適合短影音創作者、社群經營者、YouTuber 與需要快速剪片的行銷團隊。"
  }
};

export default function AlternativesPage() {
  return (
    <main className="page">
      <span className="eyebrow">Alternatives</span>
      <h1>AI 工具替代方案比較</h1>
      <p className="lead">
        熱門工具不一定適合每個預算、語言、協作或輸出需求。這裡整理 ChatGPT、Canva、Gamma、Notion、CapCut 的替代方案與適合情境。
      </p>

      <section className="section tool-grid">
        {aiTools.map((tool) => {
          const note = alternativeNotes[tool.name];
          return (
            <article className="card" key={tool.slug}>
              <h3>{tool.name} 替代工具</h3>
              <div className="content-stack">
                <p><strong>什麼情況需要替代：</strong>{note.when}</p>
                <div>
                  <strong>可考慮替代工具</strong>
                  <div className="tag-row" aria-label={`${tool.name} 替代方案`}>
                    {tool.alternatives.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                </div>
                <p><strong>適合使用者：</strong>{note.forWhom}</p>
              </div>
              <div className="card-actions">
                <Link className="button secondary" href={`/ai-tools/${tool.slug}`}>查看 {tool.name} 分析</Link>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
