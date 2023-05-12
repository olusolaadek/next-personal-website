import React from "react";
import Link from "next/link";

// Create FooterLink component
export type FooterLinkProps = {
  text: string;
  url: string;
};
export function FooterLink(props: FooterLinkProps) {
  let { url, text } = props;

  return (
    <Link className="transition hover:text-teal-500" href={url}>
      {text}
    </Link>
  );
}
