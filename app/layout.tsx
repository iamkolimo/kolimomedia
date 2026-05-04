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
    default: "Kolimo Multimedia — Branding, photography & visual stories from Abuja",
    template: "%s — Kolimo Multimedia",
  },
  description:
    "A multimedia agency in Abuja, Nigeria. Branding, photography, videography, 3D & animation, web design and social media — building brands since 2014.",
  metadataBase: new URL("https://kolimomedia.com"),
  openGraph: {
    title: "Kolimo Multimedia",
    description:
      "Branding, photography & visual stories from Abuja. Building brands since 2014.",
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
