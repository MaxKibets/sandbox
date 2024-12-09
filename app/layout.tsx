import type { Metadata } from "next";

import MainNavBar from "@/components/MainNavBar";

import "../styles/globals.css";
import Layout from "@/components/ui/Layout";

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
        <Layout>
          <MainNavBar />
          {children}
        </Layout>
      </body>
    </html>
  );
}
