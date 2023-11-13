"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <section className="flex flex-col justify-between items-center">
      <h2>About page</h2>
      <button className="btn" onClick={() => router.push("/")}>
        Back to main page
      </button>
    </section>
  );
};

export default About;
