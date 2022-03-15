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
    <meta property="og:title" content="The Ultimate News" key="title" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
    <meta name="name" content="The Ultimate News" />
    <meta name="keywords" content={keywords} />
  </Head>
  )
}

Meta.defaultProps = {
    title: 'The Ultimate News',
    keywords: 'News, Updates, Breaking News, Application, The Ultimate News, News Subscription',
    description: "The Ultimate News is a news application that delivers news articles to you"
}