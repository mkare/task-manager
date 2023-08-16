import { Outlet } from "react-router-dom";
import { Navbar } from "@components/block";

const headerLinks = [
  { href: "/", text: "Home" },
  { href: "/create", text: "New Task" },
];

const BaseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      {children && children}
      <main>
        <Navbar title="Task Manager" links={headerLinks} />
        <Outlet />
      </main>
    </>
  );
};

export default BaseLayout;
