import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* jQuery (harus paling awal) */}
        <Script
          src="/assets/js/jquery-1.12.4.min.js"
          strategy="beforeInteractive"
        />

        <Script src="/assets/js/bootstrap.min.js" strategy="afterInteractive" />
  
        <Script
          src="/assets/js/magnific-popup.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/isotope.min.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.scrollbar.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/jquery-ui.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/mobile-menu.js" strategy="afterInteractive" />
        <Script src="/assets/js/chosen.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/slick.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/jquery.elevateZoom.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/jquery.actual.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/fancybox/source/jquery.fancybox.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/lightbox.min.js" strategy="afterInteractive" />
    {/*     <Script
          src="/assets/js/owl.thumbs.min.js"
          strategy="afterInteractive"
        /> */}

        <title>Auralis Parfum</title>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
