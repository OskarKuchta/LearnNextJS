import "./globals.css";
import Head from "./head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn Next.js",
  description: "Repository for learn Next.js",
};
const RootLayout: React.FC<Children> = ({ children }) => {
  return (
    <html lang="en">
      <Head />
      <body className="min-h-screen">
        <nav className="flex items-center justify-center h-12 bg-blue-900">
          <h2 className="text-2xl">Learn Next.js</h2>
        </nav>
        <main className="flex items-center justify-center text-center">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
