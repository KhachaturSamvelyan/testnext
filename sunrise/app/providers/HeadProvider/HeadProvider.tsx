import Head from "next/head";
import { FC, ReactNode } from "react";

import FavIcons from "./Favicons";

interface LayoutProps {
  children: ReactNode;
}

const HeadProvider: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Sunrise</title>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1.0"
        />
        <FavIcons />

        <meta name="theme-color" content={"#181B1E"} />
        <meta name="msapplication-navbutton-color" content={"#181B1E"} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={"#181B1E"}
        />
      </Head>
      {children}
    </>
  );
};

export default HeadProvider;
