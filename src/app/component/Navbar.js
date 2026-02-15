"use client";

import Link from "next/link";
import { links } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const formatLabel = (name) =>
    name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="navbar bg-white text-black relative z-50">
      <div className="navbar-start">
        <button
          type="button"
          onClick={handleToggle}
          className="btn btn-ghost text-black lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <img
          className="pl-1"
          src="/zandar.jpg"
          width="100"
          alt="Zander's Construction Company logo"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => {
            const label = formatLabel(link.name);

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
          className="btn bg-red-800 text-white hidden lg:flex border-none rounded-full px-6"
        >
          Contact us
        </Link>
      </div>

      <div
        className={`lg:hidden absolute inset-x-0 top-full border-t bg-white shadow-md transition-all duration-200 ${
          isOpen ? "opacity-100 visible" : "invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-4 space-y-2">
          {links.map((link) => {
            const label = formatLabel(link.name);

            return (
              <li key={link.id}>
                <Link
                  href={link.link}
                  className={`block py-2 text-base ${
                    pathname === link.link
                      ? "text-red-900 font-semibold"
                      : "text-black"
                  }`}
                  onClick={handleClose}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              className="btn mt-2 w-full bg-red-800 text-white border-none rounded-full"
              onClick={handleClose}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
