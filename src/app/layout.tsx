import "./globals.css";
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
      <body>{children}</body>
    </html>
  );
}
