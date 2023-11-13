const RootLayout: React.FC<Children> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
