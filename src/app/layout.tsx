import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import "./design-tokens.css";
// import "./design-tokens.css";
import GlobalNavigation from "@/components/Navigation/GlobalNavigation";
import Footer from "@/components/Layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear as Vodka",
  description: "Distilled from the heart",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalNavigation />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-MSQTMN3" />
    </html>
  );
}
