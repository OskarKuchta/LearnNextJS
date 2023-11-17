const getAllUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: {
      revalidate: 86400,
    },
  });
  if (!res.ok) {
    throw new Error("Problem with fetching data");
  }
  return res.json();
};

export default getAllUsers;
