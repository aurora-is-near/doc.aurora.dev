import React from 'react';

import clsx from 'clsx';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import Image from '@theme/IdealImage';
import Layout from '@theme/Layout';

/*import Tweet from '@site/src/components/Tweet';
import Tweets, {type TweetItem} from '@site/src/data/tweets';*/
import Quotes from '@site/src/data/quotes';
import Features, {type FeatureItem} from '@site/src/data/features';
import Heading from '@theme/Heading';

import styles from './styles.module.css';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

function HeroBanner() {
  return (
    <div className={styles.hero}>
      <div className={styles.heroInner}>
        <Heading as="h1" className={styles.heroProjectTagline}>
        </Heading>
      </div>
    </div>
  );
}

function QuotesSection() {
  return (
    <div className={clsx(styles.section)}>
      <div className="container">
        <div className="row">
          {Quotes.map((quote) => (
            <div className="col" key={quote.name}>
              <div className="avatar avatar--vertical margin-bottom--sm">
                <Image
                  alt={quote.name}
                  className="avatar__photo avatar__photo--xl"
                  img={quote.thumbnail}
                  style={{overflow: 'hidden'}}
                />
                <div className="avatar__intro padding-top--sm">
                  <div className="avatar__name">{quote.name}</div>
                  <small className="avatar__subtitle">{quote.title}</small>
                </div>
              </div>
              <p className="text--center text--italic padding-horiz--md">
                {quote.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoContainer() {
  return (
    <div className="container text--center margin-top--xl">
      <div className="row">
        <div className="col">
          <Heading as="h2">
            <Translate>Check it out in the intro video</Translate>
          </Heading>
          <div className="video-container">
            <LiteYouTubeEmbed
              id="_An9EsKPhp0"
              params="autoplay=1&autohide=1&showinfo=0&rel=0"
              title="Explain Like I'm 5: Docusaurus"
              poster="maxresdefault"
              webp
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({
  feature,
  className,
}: {
  feature: FeatureItem;
  className?: string;
}) {
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.featureHeading)}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

function FeaturesContainer() {
  const firstRow = Features.slice(0, 3);
  const secondRow = Features.slice(3);

  return (
    <div className="container text--center">
      <div className="row margin-top--lg margin-bottom--lg">
        {firstRow.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div className="row">
        {secondRow.map((feature, idx) => (
          <Feature
            feature={feature}
            key={idx}
            className={clsx('col--4', idx === 0 && 'col--offset-2')}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  title,
  text,
  buttonCaption
}) {
  return ( 
    <div className={`card ${styles.mcard} ${styles.mcard1}`}>
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        <p>
          {text}
        </p>
      </div>
      <div className="card__footer">
        {/* <p>[footer]</p> */}
        {/* <button className="button button--secondary button--block">{buttonCaption}</button> */}
      </div>
    </div>
  )
}

function TopBanner() {
  return (
    <div className={styles.topBanner}>
      <div className={styles.topBannerTitle}>
        <div
          className={styles.topBannerTitleText}>
          Welcome to Aurora Docs
        </div>
      </div>
      {/*
      <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
        <div style={{flex: 1, whiteSpace: 'nowrap'}}>
          <div className={styles.topBannerDescription}>
            We are on{' '}
            <b>
              <Link to="https://www.producthunt.com/posts/docusaurus-2-0">
                ProductHunt
              </Link>{' '}
              and{' '}
              <Link to="https://news.ycombinator.com/item?id=32303052">
                Hacker News
              </Link>{' '}
              today!
            </b>
          </div>
        </div>
        <div
          style={{
            flexGrow: 1,
            flexShrink: 0,
            padding: '0.5rem',
            display: 'flex',
            justifyContent: 'center',
          }}>
          <ProductHuntCard />
          <HackerNewsIcon />
        </div>
      </div>
      */}
    </div>
  );
}

function IntroSection({title}) {
  return (
    <div className={styles.container}>
          <h2>{title}</h2>
          <div className="row">
            <div className="col col--4">
              <div className="col-demo">
                <Card title="Get started" text="We can also say smth here" buttonCaption="Go"/>
              </div>
            </div>
            <div className="col col--4">
              <Card title="Build on Aurora" text="" buttonCaption="Go"/>
            </div>
            <div className="col col--4">
              <Card title="Create Virtual Chain" text="" buttonCaption="Go"/>
            </div>
          </div>
        </div>
  );
}

function DevResources() {
  return (
    <>
    <h2>Developer Resources</h2>
    <div>
      <div className="row">
        <div className="col col--4">
          <div className="col-demo">
            <Card title="Developer Tools" text="" buttonCaption="Go"/>
          </div>
        </div>
        <div className="col col--4">
          <Card title="RPC Endpoints" text="" buttonCaption="Go"/>
        </div>
        <div className="col col--4">
          <Card title="XCC Documentation" text="" buttonCaption="Go"/>
        </div>
      </div>
    </div>
    </>
  );
}

function QuickstartSection() {
  return (
    <>
    <h2>Quickstart</h2>
    <div>
      <div className="row">
        <div className="col col--4">
          <div className="col-demo">
            <Card title="Integration tests with XCC" text="" buttonCaption="Go"/>
          </div>
        </div>
        <div className="col col--4">
          <Card title="Deploy your RainbowBridge token" text="" buttonCaption="Go"/>
        </div>
        <div className="col col--4">
          <Card title="How the gas price is calculated on Aurora?" text="" buttonCaption="Go"/>
        </div>
      </div>
      <div className="row">
        <div className="col col--4">
          <div className="col-demo">
            <Card title="Get NEAR transactions from Aurora ones" text="" buttonCaption="Go"/>
          </div>
        </div>
        <div className="col col--4">
          <Card title="Starting with Aurora Cloud Console" text="" buttonCaption="Go"/>
        </div>
        <div className="col col--4">
          <Card title="Building a game with BOS" text="" buttonCaption="Go"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: {customFields, tagline},
  } = useDocusaurusContext();
  const {description} = customFields as {description: string};
  return (
    <Layout title={tagline} description={description}>
      <main className={styles.main}>
        <TopBanner />
        {/* <HeroBanner /> */}
        <IntroSection title=""/>
        <DevResources />
        <QuickstartSection />
        <div className={styles.section}>
          <FeaturesContainer />
        </div>
        <QuotesSection />
      </main>
    </Layout>
  );
}