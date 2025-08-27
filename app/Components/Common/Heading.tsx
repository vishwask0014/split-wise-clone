type h2props = {
  children: any;
  className: string;
};

export const H2 = ({ children, className }: h2props) => {
  return (
    <>
      <h2 className={`text-2xl font-semibold ${className}`}>
        {children}
      </h2>
    </>
  );
};
