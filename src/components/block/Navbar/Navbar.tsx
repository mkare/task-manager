import React from "react";
import { Link } from "react-router-dom";
import { NavbarStyled } from "./Navbar.styles";

interface NavbarProps {
  title?: string;
  links: Array<{ href: string; text: string }>;
}

const Navbar: React.FC<NavbarProps> = ({ title, links }) => {
  return (
    <NavbarStyled>
      {title && <h1>{title}</h1>}
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </NavbarStyled>
  );
};

export default Navbar;
