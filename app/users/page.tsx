import Link from "next/link";
import getAllUsers from "@/lib/getAllUsers";

const Page = async () => {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;
  const content = (
    <section>
      <Link href="/" className="btn">
        Go to main
      </Link>
      <aside className="mt-12">
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </p>
              <br />
            </div>
          );
        })}
      </aside>
    </section>
  );
  return content;
};

export default Page;
