import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於顏究工具庫",
  description: "關於顏究工具庫：專注 AI 工具資料庫、免費版實測、替代工具比較、App 教學與數位效率筆記。"
};

export default function AboutPage() {
  return (
    <main className="page">
      <span className="eyebrow">About</span>
      <h1>關於顏究工具庫</h1>
      <p className="lead">顏究工具庫是一個 AI 工具資料庫 MVP，目標是用實測筆記協助讀者找到適合自己的工具，而不是追逐每一個新名詞。</p>
      <section className="section feature-grid">
        <article className="card"><h3>網站定位</h3><p>AI 工具資料庫、免費版實測、替代工具比較、App 教學與數位效率筆記。</p></article>
        <article className="card"><h3>評測方向</h3><p>優先回答：免費版夠不夠用、適合誰、不適合誰、有哪些替代方案，以及如何放進日常工作流。</p></article>
      </section>
    </main>
  );
}
