export default async function getUser(usersId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${usersId}`
  );

  if (!res.ok) throw new Error("failed to fetch user");

  return res.json();
}
