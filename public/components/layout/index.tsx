import { ReactNode } from "react";
import styles from "./index.module.scss";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import utilStyles from "../../../styles/utils.module.css";
import profilePic from "../../images/profile.jpeg";
import classNames from "classnames";

interface LayoutProps {
  children: ReactNode;
  isHomepage: boolean;
}
const Layout = ({ children, isHomepage }: LayoutProps) => {
  const name = "Bryan Huang";
  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content={"Bryan's Blog Website"} />
      </Head>
      <header className={styles.header}>
        {isHomepage ? (
          <>
            <Image
              src={profilePic}
              alt={""}
              className={classNames(styles.image, utilStyles.borderCircle)}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href={"/"}>
              <Image
                src={profilePic}
                alt={""}
                className={classNames(styles.image, utilStyles.borderCircle)}
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href={"/"} className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!isHomepage && (
        <div className={styles["backToHome"]}>
          <Link href={"/"}>← Back to Home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
