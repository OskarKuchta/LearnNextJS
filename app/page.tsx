"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Home = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateToSubPage = (href: string) => {
    router.push(href, {
      scroll: false,
    });
  };
  return (
    <section className="flex flex-col justify-between items-center">
      <h1>Home page</h1>
      <button
        className={`link ${pathname === "/" ? "btn" : ""}`}
        onClick={() => navigateToSubPage("/about")}
      >
        Go to about page
      </button>
      <br />
      <button
        className={`link ${pathname === "/" ? "btn" : ""}`}
        onClick={() => navigateToSubPage("/users")}
      >
        Go to users
      </button>
    </section>
  );
};

export default Home;
