import getUser from "@/lib/getUser";
import getUserPost from "@/lib/getUserPost";
import { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";

type Params = {
  params: {
    userId: string;
  };
};
export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  const userData: Promise<User> = getUser(userId);
  const user = await userData;
  return {
    title: user.name,
    description: `This is page about ${user.name}`,
  };
}
export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostData: Promise<Post> = getUserPost(userId);

  const user = await userData;
  const post = await userPostData;

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
}
