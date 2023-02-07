import './globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }: AppProps) {

  return <>
    <Script id="google-tag-manager" async src="https://www.googletagmanager.com/gtag/js?id=G-MZCDDXKYR9"></Script>
    <Script id="data-layer">
      {
        `   window.dataLayer = window.dataLayer || []

            function gtag() {window.dataLayer.push(arguments)}

            gtag('js', new Date())

            gtag('config', 'G-MZCDDXKYR9', {'debug_mode': true })

            window.gtag = gtag`
      }
    </Script>
    <Head>

      <title>Vammo - Motos elétricas</title>
      <link rel="icon" href="/static/favicon.ico" />
      <link rel="canonical" href="https://vammo.com" />
      <link rel="preconnect" href="https://maps.googleapis.com" />

      <meta name="robots" content="follow, index" />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Economize tempo e dinheiro. Alugue agora sua moto elétrica com baterias ilimitadas. #vammo" />

      <meta name="author" content="Vammo" />

      <meta property="og:image" content="/opengrafts/facebook.webp" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content="Vammo - Motos elétricas" />
      <meta property="og:url" content="https://www.vammo.com" />

      <meta name="twitter:image" content="/opengrafts/twitter.webp" />

      <meta name="google-site-verification" content="g28aujdb0zjUtP30dO8ROkcG_3eMUx3sDiyhuZgZdmo" />

    </Head>
    <Component {...pageProps} />
  </>
}
