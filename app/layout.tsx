import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { OrganizationSchema, WebsiteSchema } from "@/components/schema";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Kolimo Multimedia — Creative Agency & Media Company in Abuja, Nigeria",
    template: "%s · Kolimo Multimedia",
  },
  description: site.description,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  keywords: [...site.keywords],
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Creative Agency",
  openGraph: {
    title:
      "Kolimo Multimedia — Creative Agency & Media Company in Abuja, Nigeria",
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolimo Multimedia — Creative Agency in Abuja, Nigeria",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <OrganizationSchema />
        <WebsiteSchema />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
