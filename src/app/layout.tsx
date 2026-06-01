import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = "https://ai-tool-insight.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "顏究工具庫｜AI 工具資料庫與免費版實測",
    template: "%s｜顏究工具庫"
  },
  description: "顏究工具庫整理 AI 工具資料庫、免費版實測、替代工具比較、App 教學與數位效率筆記，幫你找到適合自己的工具組合。",
  openGraph: {
    title: "顏究工具庫｜AI 工具資料庫與免費版實測",
    description: "AI 工具、App 教學與數位效率實測筆記，聚焦免費版限制、替代工具與實用模板。",
    url: siteUrl,
    siteName: "顏究工具庫",
    locale: "zh_TW",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "顏究工具庫｜AI 工具資料庫與免費版實測",
    description: "AI 工具資料庫、免費版實測、替代工具比較、App 教學與數位效率筆記。"
  },
  alternates: {
    canonical: siteUrl
  }
};

const navItems = [
  { href: "/ai-tools", label: "AI 工具" },
  { href: "/free-plan", label: "免費實測" },
  { href: "/alternatives", label: "替代比較" },
  { href: "/tutorials", label: "教學" },
  { href: "/templates", label: "模板" },
  { href: "/cooperation", label: "合作" },
  { href: "/about", label: "關於" }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant">
      <body>
        <header className="site-header">
          <nav className="nav-shell" aria-label="主選單">
            <Link className="brand" href="/" aria-label="顏究工具庫首頁">
              <span className="brand-mark">AI</span>
              <span>顏究工具庫</span>
            </Link>
            <div className="nav-links">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <div>
            <strong>顏究工具庫</strong>
            <p>AI 工具資料庫、免費版實測、替代工具比較、App 教學與數位效率筆記。</p>
          </div>
          <p>© 2026 顏究工具庫</p>
        </footer>
      </body>
    </html>
  );
}
