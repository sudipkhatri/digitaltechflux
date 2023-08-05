"use client"
import React, { useState } from "react";
import Link from "next/link";
import NavItem from "./NavItem";

const Menu_List = [
  { text: "about us", href: "/services" },
  { text: "service", href: "/privacypolicy" },
  { text: "Blog", href: "/privacypolicy" },
  { text: "Terms & Conditions", href: "/terms-and-conditions" },
  { text: "Contact us", href: "/terms-and-conditions" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setNavActiveIdx] = useState(-1);
  return (
    <div className="sticky z-30 top-0 bg-white">
      <nav className={`nav ${navActive ? "active" : ""}`}>
        <Link href={"/"}>
          <span onClick={() => setNavActiveIdx(-1)}>
            <h1 className="text-xl font-semibold">DigitalFlux</h1>
          </span>
        </Link>
        <div
          className={`menu_icon ${navActive ? "active" : ""}`}
          onClick={() => setNavActive(!navActive)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`nav_menu ${navActive ? "active" : ""}`}>
          {Menu_List.map((menu, index) => (
            <div
              onClick={() => {
                setNavActiveIdx(index);
                setNavActive(false);
              }}
              key={menu.href}
            >
              <NavItem {...menu} active={index === activeIdx} />
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
