import React from "react";
import Navbar from "./navbar";
import Head from "next/head";
import { Footer } from "./Footer";

export const Layout = ({ children }: any) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>{children.props.metadata.title}</title>
      <meta name="description" content={children.props.metadata.description} />
      <meta property="og:title" content={children.props.metadata.title} />
      <meta
        property="og:image"
        content={children.props.metadata.openGraph.image}
      />
      <meta
        property="og:url"
        content={children.props.metadata.openGraph.url}
      />
    </Head>
    <Navbar pageId={children.props.pageId} />
    <main>{children}</main>
    <Footer />
  </>
);
