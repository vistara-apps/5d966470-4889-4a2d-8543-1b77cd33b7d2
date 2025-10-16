import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./components/Providers";

export const metadata: Metadata = {
  title: "PlatePal - AI Meal Planning on Base",
  description: "AI-powered meal planning & social food challenges on Base",
  openGraph: {
    title: "PlatePal",
    description: "AI-powered meal planning & social food challenges",
    images: ["/platepal_og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
