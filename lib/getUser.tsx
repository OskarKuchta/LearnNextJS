const getUser = async (usersId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${usersId}`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );

  if (!res.ok) undefined;
  return res.json();
};

export default getUser;
