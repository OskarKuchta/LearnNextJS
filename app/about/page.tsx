import Link from "next/link";

export default function About() {
  return (
    <section className="flex flex-col justify-between items-center">
      <h1>About page</h1>
      <Link href="/" className="btn">
        Back to main page
      </Link>
    </section>
  );
}
