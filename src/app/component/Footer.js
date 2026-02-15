import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 border-t border-base-300">
      <aside>
        <span className="text-xl font-semibold tracking-wide">
          Zander&apos;s Construction Company
        </span>

        <p>
          &copy; 2024 Zander&apos;s Construction Company LTD.
          <br />
          All rights reserved.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Info</h6>
        <p>
          Zander&apos;s Construction Company LTD.
          <br />
          72 Campbell Street
          <br />
          Delta - Nigeria
          <br />
          Tel: +234 (0)902 322 0000
          <br />
          E-mail: zanderconstruction.com
        </p>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <Link href="/" className="link link-hover capitalize">
          Home
        </Link>
        <Link href="/about" className="link link-hover capitalize">
          About us
        </Link>
        <Link href="/services" className="link link-hover capitalize">
          Services
        </Link>
        <Link href="/projects" className="link link-hover capitalize">
          Projects
        </Link>
        <Link href="/contact" className="link link-hover capitalize">
          Contact
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <Link href="/about" className="link link-hover">
          Terms of use
        </Link>
        <Link href="/about" className="link link-hover">
          Privacy policy
        </Link>
        <Link href="/about" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
