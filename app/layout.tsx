import "./globals.css";
import Head from "./head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Next.js",
  description: "Repository for learn Next.js",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="min-h-screen">
        <nav className="flex items-center justify-center h-12 bg-blue-900">
          <h2 className="text-2xl">Learn Next.js</h2>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
