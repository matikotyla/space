import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { Content, Title } from 'components/pages/home';

import styles from 'styles/Home.module.scss';
import { Layout } from 'components';

export default function Home() {
  return (
    <Layout>
      <div className={styles.root}>
        <Head>
          <title>Home</title>
          <meta name="description" content="Home page" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Content />
      </div>
    </Layout>
  );
}
