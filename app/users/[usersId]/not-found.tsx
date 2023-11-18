import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <h1>User not found</h1>
      <Link href="/users">Back to users list</Link>
    </>
  );
};

export default NotFound;
