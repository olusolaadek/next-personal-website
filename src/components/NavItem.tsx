import Link from "next/link";
import React from "react";

export type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
};

export function NavItem(props: NavItemProps) {
  const { title, url, isSelected } = props;
  return (
    <li>
      <Link
        href={{ pathname: url }}
        className={`block px-3 py-2 transition hover:text-teal-500
        ${isSelected ? "text-teal-500" : ""}`}
      >
        {" "}
        {title}
        {/* <a></a> */}
      </Link>
    </li>
  );
}
