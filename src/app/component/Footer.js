import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-900 text-zinc-100">
      <div className="footer mx-auto max-w-6xl px-5 py-10">
        <aside>
          <span className="text-xl font-semibold tracking-wide">
            Zander&apos;s Construction Company
          </span>

          <p className="mt-3 text-sm text-zinc-300">
            Building durable, high-quality spaces for businesses and communities
            across Nigeria.
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs uppercase tracking-wide text-zinc-400">
              Follow us
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-zinc-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
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
                className="text-zinc-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
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
                className="text-zinc-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
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
                className="text-zinc-300 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.75 9h2.46v11H3.75V9Zm5.25 0h2.36v1.52h.03c.33-.63 1.16-1.3 2.39-1.3 2.55 0 3.02 1.68 3.02 3.86V20H14.1v-5.77c0-1.38-.03-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06V20H9V9Z" />
                </svg>
              </a>
            </div>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-zinc-200">Info</h6>
          <p className="text-sm text-zinc-300">
            Zander&apos;s Construction Company LTD.
            <br />
            72 Campbell Street
            <br />
            Delta - Nigeria
          </p>
          <p className="mt-3 text-sm text-zinc-300">
            Tel:{" "}
            <a href="tel:+2349023220000" className="hover:text-white">
              +234 (0)902 322 0000
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:zanderconstruction.com"
              className="hover:text-white"
            >
              zanderconstruction.com
            </a>
          </p>
        </nav>
        <nav>
          <h6 className="footer-title text-zinc-200">Company</h6>
          <Link href="/" className="link link-hover capitalize text-sm">
            Home
          </Link>
          <Link href="/about" className="link link-hover capitalize text-sm">
            About us
          </Link>
          <Link href="/services" className="link link-hover capitalize text-sm">
            Services
          </Link>
          <Link href="/projects" className="link link-hover capitalize text-sm">
            Projects
          </Link>
          <Link href="/contact" className="link link-hover capitalize text-sm">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-zinc-200">Legal</h6>
          <Link href="/about" className="link link-hover text-sm">
            Terms of use
          </Link>
          <Link href="/about" className="link link-hover text-sm">
            Privacy policy
          </Link>
          <Link href="/about" className="link link-hover text-sm">
            Cookie policy
          </Link>
        </nav>
      </div>
      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-4 text-xs text-zinc-400 sm:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Zander&apos;s Construction Company
            LTD. All rights reserved.
          </span>
          <span>Registered in Nigeria • RC 000000</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
