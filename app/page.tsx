import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col justify-between items-center text-red-500">
      <h1>Home page</h1>
      <Link href="/about">Go to about page</Link>
      <br />
      <Link href="/users">Go to users</Link>
    </section>
  );
}
