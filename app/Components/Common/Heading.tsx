type h2props = {
  children: any;
};

export const H2 = ({ children }: h2props) => {
  return (
    <>
      <h2 className="text-white text-2xl font-semibold">{children}</h2>
    </>
  );
};
