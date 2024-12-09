import type { Metadata } from "next";

import MainNavBar from "@/components/MainNavBar";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Sandbox",
  description: "Just a sand in a box",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <nav className="mainNavBar">
            <MainNavBar />
          </nav>
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
