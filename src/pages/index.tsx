import React from "react";

import Image from "next/image";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  return {
    props: {
      pageId: "about_me",
      metadata: {
        title: "Olusola Adekunle Professional Profile",
        description:
          "Discover the work of Olusola Adekunle on his personal website",
        openGraph: {
          image:
            "https://media.licdn.com/dms/image/C4D03AQHHbtCn800LTQ/profile-displayphoto-shrink_100_100/0/1579860715471?e=1689206400&v=beta&t=vXZh6P_m_rNUY3TpPhGQ89Col6uLUTUfWc4ygBGRyM0",
          url: "https://www.linkedin.com/in/olusolaadek",
        },
      },
    },
  };
}

export default function Home() {
  return (
    <>
      <div className="mt-16 px-8">
        <header>
          <h1 className="font-bold text-4xl text-zinc-800">I'm Festus</h1>
        </header>
      </div>
    </>
  );
}
