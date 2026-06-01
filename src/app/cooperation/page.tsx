import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "合作提案",
  description: "顏究工具庫合作頁，開放 AI 工具評測、教學內容、模板資源與品牌合作洽詢。"
};

export default function CooperationPage() {
  return (
    <main className="page">
      <span className="eyebrow">Cooperation</span>
      <h1>合作提案</h1>
      <p className="lead">歡迎 AI 工具、App、SaaS 與數位效率品牌合作評測、教學內容或模板資源。所有內容會以實測與讀者決策為優先。</p>
      <section className="section feature-grid">
        <article className="card"><h3>可合作項目</h3><p>工具實測、替代方案比較、App 教學、模板共創、內容專題與聯盟連結揭露。</p></article>
        <article className="card"><h3>內容原則</h3><p>清楚標示合作關係，保留優缺點與免費版限制，避免只做廣告式介紹。</p></article>
      </section>
    </main>
  );
}
