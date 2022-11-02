import React from 'react';
import clsx from 'clsx';
import Typewriter from 'typewriter-effect';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
         <Typewriter
            options={{
              strings: ['Alone we can do so little; together we can do so much.', 'Talent wins games, but teamwork and intelligence win championships', 'Knowledge sharing is essential to economic survival'],
              autoStart: true,
              loop: true,
            }}
          /> 
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/blog/welcome">
            Quality Education 
          </Link>
        </div>
        <h3 className={styles.welcome}>Welcome to Community Ink </h3>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="GSU 100 level past question and answer <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
