import "./globals.css";
import NavBar from "@/components/Navigation/NavBar";
import Footer from "@/components/Navigation/Footer";
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
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
