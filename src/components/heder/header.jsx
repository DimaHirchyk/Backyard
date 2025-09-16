import { NavLink } from "react-router-dom";
import Logo from "../logo/logo";
import { useState } from "react";

const Header = () => {
  const [openBar, setOpenBar] = useState(false);
  return (
    <header
      className="mt-4 2xl:mt-6 3xl:mt-8
     ">
      <div className="mx-auto max-w-7xl px-5 flex items-center justify-between 2xl:px-8 relative">
        <Logo />
        <nav className="max-2xl:hidden absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center justify-center border border-shadow-gray  bg-light-gray py-2.5 px-1.5 rounded-full text-gray-200 font-medium text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-xs 3xl:text-sm
        ${
          isActive ? "bg-black text-white" : "text-gray-400 hover:text-gray-700"
        }`
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-xs 3xl:text-sm
        ${
          isActive ? "bg-black text-white" : "text-gray-400 hover:text-gray-700"
        }`
                }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/howWorks"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-xs 3xl:text-sm
        ${
          isActive ? "bg-black text-white" : "text-gray-400 hover:text-gray-700"
        }`
                }>
                How it works{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/token"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-xs 3xl:text-sm
        ${
          isActive ? "bg-black text-white" : "text-gray-400 hover:text-gray-700"
        }`
                }>
                Token design
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/yard"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-xs 3xl:text-sm
        ${
          isActive ? "bg-black text-white" : "text-gray-400 hover:text-gray-700"
        }`
                }>
                YARD flywheel
              </NavLink>
            </li>
          </ul>
        </nav>

        {!openBar && (
          <button
            className="2xl:hidden"
            onClick={() => setOpenBar((prev) => !prev)}>
            <svg width={40} height={40}>
              <use href="/icon.svg#icon-burger"></use>
            </svg>
          </button>
        )}

        {openBar && (
          <button onClick={() => setOpenBar(false)}>
            <svg width={40} height={40}>
              <use href="/icon.svg#icon-close"></use>
            </svg>
          </button>
        )}
        <div
          className={
            openBar
              ? " absolute w-[176px] h-[202px] right-0 top-10 z-20 border-shadow-gray  bg-light-gray rounded-3xl p-3.5"
              : "hidden"
          }>
          <ul className="border-gray-400 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-sm font-medium
        ${isActive ? " text-black" : "text-gray-400 hover:text-gray-700"}`
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-sm font-medium
        ${isActive ? " text-black" : "text-gray-400 hover:text-gray-700"}`
                }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/howWorks"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-sm font-medium
        ${isActive ? " text-black" : "text-gray-400 hover:text-gray-700"}`
                }>
                How it works{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/token"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-sm font-medium
        ${isActive ? " text-black" : "text-gray-400 hover:text-gray-700"}`
                }>
                Token design
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/yard"
                className={({ isActive }) =>
                  `rounded-full px-2.5 py-1.5 transition-colors duration-200 text-sm font-medium
        ${isActive ? " text-black" : "text-gray-400 hover:text-gray-700"}`
                }>
                YARD flywheel
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className="mt-3 w-full py-2 px-4 font-medium text-xs bg-black text-white rounded-full  ">
                Connect
              </button>
            </li>
          </ul>
        </div>

        <button
          type="button"
          className="py-2 px-4 font-medium text-xs bg-black text-white rounded-full max-2xl:hidden 3xl:hidden">
          Connect
        </button>
      </div>
    </header>
  );
};

export default Header;
