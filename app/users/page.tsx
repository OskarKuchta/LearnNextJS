import Link from "next/link";
import { Agbalumo } from "next/font/google";
import getAllUsers from "@/lib/getAllUsers";

const agbalumo = Agbalumo({
  weight: "400",
  subsets: ["latin"],
});

export default async function Page() {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;
  const content = (
    <section className={agbalumo.className}>
      <Link href="/" className="btn">
        Go to main
      </Link>
      <aside className="mt-12">
        {users.map((user) => {
          return (
            <>
              <p key={user.id}>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </>
          );
        })}
      </aside>
    </section>
  );
  return content;
}
