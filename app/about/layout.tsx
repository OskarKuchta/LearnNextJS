export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="flex items-center justify-center h-12 bg-gray-900">
        About navbar
      </nav>
      <main>{children}</main>
    </>
  );
}
