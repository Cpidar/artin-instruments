import type { Metadata } from "next";
import { Geist, Geist_Mono, Vazirmatn } from "next/font/google";
import { IRANSans } from "@/styles/font";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/layout/json-ld";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vazirmatn = Vazirmatn({
  subsets: ['arabic', "latin"], // arabic is required for Persian/Farsi; latin is optional but useful
  // weight is optional for variable fonts (Vazirmatn is variable 100–900)
  display: 'swap',
  variable: '--font-vazirmatn', // uncomment if you want a CSS variable
})

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — Soluciones digitales`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} — Soluciones digitales`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Soluciones digitales`,
    description: site.description,
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">): React.ReactElement {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} h-full antialiased`}
    >
      <body className="bg-cream text-charcoal flex min-h-full flex-col font-sans">
        <JsonLd />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
