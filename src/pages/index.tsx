import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const Logo: React.ComponentType<React.ComponentProps<'svg'>> = require('@site/static/img/logo.svg').default;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Logo className={styles.LogoSvg} role="img" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="/docs/">
            文档
          </Link>
          <Link
            className={clsx('button button--secondary button--lg', styles.button)}
            to="/blog">
            博客
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageIntroduction() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.introduction}>
      <div className="container">
        <p>...</p>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      description="「OverDose.wiki」一个科普和分享OverDose相关的知识与体验的小网站">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <hr />
        <HomepageIntroduction />
      </main>
    </Layout>
  );
}
