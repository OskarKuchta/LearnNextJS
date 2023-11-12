import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="mt-16">{children}</main>;
}