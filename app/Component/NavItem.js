import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <span className={`nav_item ${active ? "active" : ""}`}>{text}</span>
    </Link>
  );
};

export default NavItem;
