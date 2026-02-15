"use client";

import Link from "next/link";
import { links } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="navbar bg-white text-black">
      <div className="navbar-start">
        <div className="dropdown dropdown-blur-xl lg:hidden h-full w-full">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-info-content lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-screen h-80 shadow"
          >
            {links.map((link) => {
              const label = link.name
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");

              return (
                <li key={link.id}>
                  <Link
                    className={
                      pathname === link.link ? "text-red-900" : "text-black"
                    }
                    href={link.link}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <img
          className="pl-1"
          src="/zandar.jpg"
          width="100"
          alt="Zander's Construction Company logo"
        />
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => {
            const label = link.name
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ");

            return (
              <li key={link.id}>
                <Link
                  className={
                    pathname === link.link ? "text-red-900" : "text-black"
                  }
                  href={link.link}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pr-7 navbar-end gap-3">
        <button className="btn lg:flex hidden btn-ghost text-red-800 btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <Link
          href="/contact"
          className="btn bg-red-800 text-white lg:flex border-none rounded-full px-6"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
