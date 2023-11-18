import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
import getAllUsers from "@/lib/getAllUsers";
import { notFound } from "next/navigation";

type Params = {
  params: {
    usersId: string;
  };
};
export async function generateMetadata({
  params: { usersId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(usersId);
  const user = await userData;
  if (!user.name) {
    return {
      title: `User ${usersId} `not found`,
    }
  }
  return {
    title: user.name,
    description: `This is page about ${user.name}`,
  };
}
const UserPage = async ({ params: { usersId } }: Params) => {
  const userData: Promise<User> = getUser(usersId);
  const userPostData: Promise<Post> = getUserPost(usersId);

  const user = await userData;
  const post = await userPostData;

  if (!user.name) {
    return notFound();
  }
  return (
    <>
      <h2 className="mt-10">
        {user.name} #{user.id}
      </h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <h2>{post.title}</h2>
        <p className="mb-32">{post.body}</p>
      </Suspense>
      <Link href="/users" className="btn">
        Back to users
      </Link>
    </>
  );
};

export default UserPage;

export const generateStaticParams = async () => {
  const userData: Promise<User[]> = getAllUsers();
  const users = await userData;
  return users.map((user) => ({
    params: { userId: user.id.toString() },
  }));
};
