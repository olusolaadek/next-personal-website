import React from "react";
import { FooterLink } from "./FooterLink";

export function Footer() {
  const now = new Date().getFullYear();
  return (
    <footer className="pt-10 px-8 pb-16 border-t">
      <div className="flex justify-between gap-6">
        <div className="flex gap-6 text-sm font-medium text-zinc-600">
          <FooterLink text={"About Me"} url={"/"} />
          <FooterLink text={"Projects"} url={"/projects"} />
          <FooterLink text={"Essays"} url={"/essays"} />
        </div>
        <p className="text-sm text-zinc-400">
          &copy; {now} ABC Consulting. All right reserved.
        </p>
      </div>
    </footer>
  );
}
