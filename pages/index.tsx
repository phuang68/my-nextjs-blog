import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Home() {
  return (
    <>
      <Head>
        <title>Bryan Huang Blog</title>
        <meta name="description" content="Bryan Huang's Blog by Next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles["main"]}>
        Hello World
      </main>
    </>
  )
}
