import Head from "next/head";
import Layout from "../../../public/components/layout";
const FirstPost = () => {
  return (
    <Layout isHomepage={false}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
    </Layout>
  );
};

export default FirstPost;
