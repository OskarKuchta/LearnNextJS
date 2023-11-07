import Link from "next/link";

export default function Home() {
  return (
    <main className="text-red-500">
      <h1>Home page</h1>
      <Link href="/about">Go to about page</Link>
    </main>
  );
}
