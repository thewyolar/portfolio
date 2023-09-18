import type { AppProps } from "next/app";
import "../styles/globals.css";

import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "@fontsource/jost/600.css";
import "@fontsource/jost/700.css";
import "@fontsource/sen/400.css";
import "@fontsource/sen/700.css";

import { NextSeo } from "next-seo";
import Head from "next/head";
import Script from "next/script";
import { SITE_URL } from "../data/config";
import {appWithTranslation, useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <NextSeo
        title={t('title')}
        titleTemplate={t('title')}
        defaultTitle={t('title')}
        description="Hi, I'm Alexey! Backend developer and student."
        openGraph={{
          url: `${SITE_URL}`,
          title: "thewyolar | Backend Developer",
          description:
            "Hi, I'm Alexey! Backend developer and student.",
          images: [
            {
              url: `${SITE_URL}/assets/avatar.png`,
              width: 420,
              height: 420,
              alt: "thewyolar | Backend Developer",
            },
          ],
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Backend developer, thewyolar, Web Developer, web development, web developer, open source",
          },
        ]}
      />
      <Head>
        <link rel="icon" type="image/png" href="/assets/avatar.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);
