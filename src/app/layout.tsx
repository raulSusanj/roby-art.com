import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Roby Art",
  description: "Unikatna i ručno izrađena ukrasna i uporabna keramika",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
