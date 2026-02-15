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
    <div className="navbar sticky top-0 bg-white text-black relative z-50 shadow-sm">
      <div className="navbar-start">
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
                    pathname === link.link
                      ? "text-red-900 font-semibold"
                      : "text-black font-semibold"
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
        <div className="hidden lg:flex items-center gap-2 rounded-full bg-red-800 px-4 py-1 text-white">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-zinc-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.29 10.44 22v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.29 22 17.1 22 12.07Z" />
            </svg>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="hover:text-zinc-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M19.95 7.04c.01.17.01.33.01.5 0 5.1-3.88 10.97-10.97 10.97-2.18 0-4.21-.64-5.92-1.75.3.03.6.05.91.05 1.81 0 3.48-.62 4.8-1.68a3.86 3.86 0 0 1-3.6-2.67c.23.04.47.07.72.07.35 0 .69-.05 1.02-.14a3.85 3.85 0 0 1-3.09-3.77v-.05c.52.29 1.11.47 1.74.49a3.84 3.84 0 0 1-1.71-3.2c0-.71.19-1.36.52-1.93a10.94 10.94 0 0 0 7.94 4.03 3.84 3.84 0 0 1 6.54-3.5 7.7 7.7 0 0 0 2.44-.93 3.85 3.85 0 0 1-1.69 2.12 7.64 7.64 0 0 0 2.21-.6 8.24 8.24 0 0 1-1.93 2.01Z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-zinc-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Zm4.25-3a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25Z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-zinc-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M4.98 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.75 9h2.46v11H3.75V9Zm5.25 0h2.36v1.52h.03c.33-.63 1.16-1.3 2.39-1.3 2.55 0 3.02 1.68 3.02 3.86V20H14.1v-5.77c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06V20H9V9Z" />
            </svg>
          </a>
        </div>
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
                  className={`block py-2 text-base font-semibold ${
                    pathname === link.link ? "text-red-900" : "text-black"
                  }`}
                  onClick={handleClose}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="pt-3">
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-red-800 hover:text-red-900"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M22 12.07C22 6.5 17.52 2 12 2S2 6.5 2 12.07C2 17.1 5.66 21.29 10.44 22v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.29 22 17.1 22 12.07Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="text-red-800 hover:text-red-900"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M19.95 7.04c.01.17.01.33.01.5 0 5.1-3.88 10.97-10.97 10.97-2.18 0-4.21-.64-5.92-1.75.3.03.6.05.91.05 1.81 0 3.48-.62 4.8-1.68a3.86 3.86 0 0 1-3.6-2.67c.23.04.47.07.72.07.35 0 .69-.05 1.02-.14a3.85 3.85 0 0 1-3.09-3.77v-.05c.52.29 1.11.47 1.74.49a3.84 3.84 0 0 1-1.71-3.2c0-.71.19-1.36.52-1.93a10.94 10.94 0 0 0 7.94 4.03 3.84 3.84 0 0 1 6.54-3.5 7.7 7.7 0 0 0 2.44-.93 3.85 3.85 0 0 1-1.69 2.12 7.64 7.64 0 0 0 2.21-.6 8.24 8.24 0 0 1-1.93 2.01Z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-red-800 hover:text-red-900"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Zm4.25-3a1.25 1.25 0 1 0 1.25 1.25 1.25 1.25 0 0 0-1.25-1.25Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-red-800 hover:text-red-900"
                onClick={handleClose}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.75 9h2.46v11H3.75V9Zm5.25 0h2.36v1.52h.03c.33-.63 1.16-1.3 2.39-1.3 2.55 0 3.02 1.68 3.02 3.86V20H14.1v-5.77c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06V20H9V9Z" />
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
