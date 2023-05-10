import React from "react";

type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
};

function NavItem(props: NavItemProps) {
  const { title, url, isSelected } = props;
  return (
    <li>
      <a
        href={url}
        className={`block px-3 py-2 transition hover:text-teal-500
        ${isSelected ? "text-teal-500" : ""}`}
      >
        {title}
      </a>
    </li>
  );
}

type NavbarProps = {
  pageId: string;
};
export default function Navbar(props: NavbarProps) {
  return (
    <div className="flex justify-center mx-auto max-w-7xl h-16 pt-6">
      <nav>
        <ul
          className="flex rounded-full
          bg-white/90 px-3 text-sm font-medi
          text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
        "
        >
          <NavItem
            title={"About Me"}
            url={"/"}
            isSelected={props.pageId == "about_me"}
          />
          <NavItem
            title={"Projects"}
            url={"/projects"}
            isSelected={props.pageId == "projects"}
          />
          <NavItem
            title={"Essays"}
            url={"/essays"}
            isSelected={props.pageId == "essays"}
          />
        </ul>
      </nav>
    </div>
  );
}