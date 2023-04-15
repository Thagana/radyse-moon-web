import React from "react";
import Head from "next/head";

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
      <meta property='og:title' content='Radyse Moon' key='title' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content={description} />
      <meta name='name' content='Radyse Moon' />
      <meta name='keywords' content={keywords} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <script
        async
        src='https://www.googletagmanager.com/gtag/js?id=G-B92XVTGRKR'
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B92XVTGRKR');
        `,
        }}
      />
    </Head>
  );
}

Meta.defaultProps = {
  title: "Radyse Moon",
  keywords:
    "News, Updates, Breaking News, Application, Radyse Moon, News Subscription",
  description:
    "Radyse Moon is a news application that delivers news articles to you",
};
