import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "合作提案｜AI 工具評測、教學文章與模板共創",
  description: "顏究工具庫開放 AI 工具評測、App 教學文章、模板共創與聯盟合作，所有內容保留實測、優缺點與合作揭露。"
};

const cooperationTypes = [
  "工具評測：實際整理免費版限制、適合情境、優缺點與替代工具。",
  "教學文章：把工具放進內容生產、簡報、筆記、短影音或工作流情境。",
  "模板共創：共同設計評測表、提示詞、工作清單或新手選擇清單。",
  "聯盟合作：可放置聯盟連結，但需清楚揭露合作關係。"
];

const rejectedTypes = [
  "純廣告式介紹，沒有實測或具體使用情境。",
  "無法揭露合作關係或要求隱藏贊助資訊。",
  "無法提供產品試用，導致內容只能轉述官方文案。"
];

const principles = [
  "保留優點、缺點、免費版限制與適合/不適合使用者。",
  "合作內容會清楚標示合作關係或聯盟連結。",
  "以讀者決策為優先，不把每一款工具都寫成唯一推薦。"
];

const cooperationBrief = [
  "工具名稱",
  "官方網站",
  "免費版 / 付費版資訊",
  "希望合作形式",
  "是否可提供測試帳號"
];

export default function CooperationPage() {
  return (
    <main className="page">
      <span className="eyebrow">Cooperation</span>
      <h1>合作提案</h1>
      <p className="lead">
        歡迎 AI 工具、App、SaaS 與數位效率品牌合作評測、教學文章、模板資源或聯盟合作。內容會以實測與讀者決策為優先。
      </p>

      <section className="section feature-grid">
        <article className="card highlight">
          <h3>可合作形式</h3>
          <ul className="list-clean">
            {cooperationTypes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="card">
          <h3>不接受內容</h3>
          <ul className="list-clean">
            {rejectedTypes.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="card">
          <h3>內容原則</h3>
          <ul className="list-clean">
            {principles.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="card">
          <h3>合作前請提供</h3>
          <ul className="list-clean">
            {cooperationBrief.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </article>
        <article className="card highlight">
          <h3>聯絡方式</h3>
          <p>合作信箱準備中。正式信箱開放前，本站不放置假信箱或無效表單。</p>
          <div className="card-actions">
            <span className="button disabled" aria-disabled="true">合作信箱準備中</span>
          </div>
        </article>
      </section>
    </main>
  );
}
