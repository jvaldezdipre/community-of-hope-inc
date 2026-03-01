import type { Metadata } from "next";
import { Layout } from "@/components/layout/Layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landing page design",
  description: "Community of Hope — A safe place to rebuild your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
