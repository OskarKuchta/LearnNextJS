import "./globals.css";
import Head from "./head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <nav className="flex items-center justify-center h-12 bg-blue-900">
          <h2 className="text-2xl">Learn Next.js</h2>
        </nav>
        {children}
      </body>
    </html>
  );
}
