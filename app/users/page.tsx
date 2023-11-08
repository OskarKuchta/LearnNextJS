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
    <section
      className={`${agbalumo.className} flex flex-col justify-between items-center`}
    >
      <Link href="/">Go to main</Link>
      <br /> <br />
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
    </section>
  );
  return content;
}
