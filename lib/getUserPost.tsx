export default async function getUserPost(usersId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${usersId}`,
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) throw new Error("failed to fetch user");
  return res.json();
}
