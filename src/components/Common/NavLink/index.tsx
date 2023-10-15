import React from "react";
import { useDispatch } from "react-redux";
import { NavLink as RouterNavLink } from "react-router-dom";
import { toggleSidebar } from "../../../store/reducers/sidebarReducer";

interface CustomNavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<CustomNavLinkProps> = ({ to, children, className }) => {
  const dispatch = useDispatch();
  return (
    <RouterNavLink
      className={({ isActive }) =>
        `${
          isActive ? "dark:text-gray-300 text-violet-800 font-medium" : ""
        } hover:text-violet-700 transition-all duration-300 flex items-center gap-1 ${className}`
      }
      to={to}
      onClick={() => dispatch(toggleSidebar)}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
