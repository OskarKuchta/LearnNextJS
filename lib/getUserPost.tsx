const getUserPost = async (usersId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${usersId}`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!res.ok) throw new Error("failed to fetch user");
  return res.json();
};

export default getUserPost;
