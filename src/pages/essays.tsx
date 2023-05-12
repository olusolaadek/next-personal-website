import React from "react";
export async function getStaticProps() {
  return {
    props: {
      pageId: "essays",
      metadata: {
        title: "Projects implemented by Olusola Adekunle",
        description: "Projects implemented by Olusola Adekunle",
        openGraph: { image: "", url: "" },
      },
    },
  };
}

export default function Essays() {
  return (
    <div className="mt-16 px-8">
      <header>
        <h1 className="font-bold text-4xl text-zinc-800">Essays</h1>{" "}
      </header>{" "}
    </div>
  );
}
