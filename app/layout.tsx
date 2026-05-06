import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
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
    default: "Kolimo Multimedia — Visual stories for brands worth watching",
    template: "%s — Kolimo Multimedia",
  },
  description:
    "A multimedia studio in Abuja, Nigeria. Production, digital marketing, creative direction, and web/app solutions — building brands since 2014.",
  metadataBase: new URL("https://kolimomedia.com"),
  openGraph: {
    title: "Kolimo Multimedia",
    description:
      "Visual stories for brands worth watching. A multimedia studio in Abuja since 2014.",
    url: "https://kolimomedia.com",
    siteName: "Kolimo Multimedia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
