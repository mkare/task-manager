import { Outlet } from "react-router-dom";

const AuthLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      {children && children}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
