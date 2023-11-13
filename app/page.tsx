import Link from "next/link";

const Home = () => {
  return (
    <section className="flex flex-col justify-between items-center text-red-500">
      <h1>Home page</h1>
      <Link href="/about" className="btn">
        Go to about page
      </Link>
      <br />
      <Link href="/users" className="btn">
        Go to users
      </Link>
    </section>
  );
};

export default Home;
