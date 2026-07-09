import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  PLAUSIBLE_DOMAIN,
  GA_MEASUREMENT_ID,
  CLARITY_ID,
} from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}: city break itineraries that answer the question`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} min-h-screen flex flex-col`}
      >
        {children}
        {PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        ) : null}
        {CLARITY_ID ? (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "${CLARITY_ID}");`}
          </Script>
        ) : null}
        {/* Stay22 LetMeAllez: auto-affiliates outbound booking links + place
            mentions. ignoreElements keeps it away from the FAQ toggles; the
            globals.css guard (#faq a[data-is-hyperlink22]) is the hard backstop
            against the mobile FAQ-tap-hijack bug that got it removed before. */}
        <Script id="stay22-lma-config" strategy="afterInteractive">
          {`window.Stay22 = window.Stay22 || {};
window.Stay22.params = Object.assign({}, window.Stay22.params, {
  lmaID: '6a48d53e72afe45e1b3300b0',
  ignoreElements: ['#faq', '#faq *', 'summary', 'details'],
});`}
        </Script>
        <Script
          id="stay22-lma"
          src="https://scripts.stay22.com/letmeallez.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
