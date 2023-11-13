import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
};

const RootLayout: React.FC<Children> = ({ children }) => {
  return <main className="mt-16">{children}</main>;
};

export default RootLayout;
