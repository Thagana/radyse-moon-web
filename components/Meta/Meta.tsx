import React from 'react'
import Head from 'next/head';

interface Props {
    keywords: string;
    title: string;
    description: string;
}

export default function Meta(props: Props) {
    const { keywords, title, description } = props;
  return (
    <Head>
    <title>{title}</title>
    <meta property="og:title" content="OvalBark" key="title" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
    <meta name="name" content="OvalBark" />
    <meta name="keywords" content={keywords} />
  </Head>
  )
}

Meta.defaultProps = {
    title: 'OvalBark',
    keywords: 'News, Updates, Breaking News, Application, OvalBark, News Subscription',
    description: "OvalBark is a news application that delivers news articles to you"
}