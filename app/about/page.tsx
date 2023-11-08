import Link from "next/link";

export default function About() {
  // throw new Error("not today!");
  return (
    <section className="flex flex-col justify-between items-center">
      <h1>About page</h1>
      <Link href="/">Back to main page</Link>
    </section>
  );
}
