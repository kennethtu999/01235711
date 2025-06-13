import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BaseLayout } from "@/components/layout/BaseLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "My Insight Hub",
    template: "%s | My Insight Hub",
  },
  description: "A platform for sharing personal insights, thoughts, and experiences.",
  keywords: ["insights", "blog", "personal", "thoughts", "experiences"],
  authors: [{ name: "Your Name" }],
  creator: "Your Name",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "My Insight Hub",
    description: "A platform for sharing personal insights, thoughts, and experiences.",
    siteName: "My Insight Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "My Insight Hub",
    description: "A platform for sharing personal insights, thoughts, and experiences.",
    creator: "@yourusername",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
