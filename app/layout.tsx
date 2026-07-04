import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  PLAUSIBLE_DOMAIN,
  STAY22_LMA_ID,
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
        {/* Stay22 Let Me Allez: lazy so it never competes with the LCP */}
        <Script id="stay22-lma" strategy="lazyOnload">
          {`(function (s, t, a, y, twenty, two) {
  s.Stay22 = s.Stay22 || {};
  s.Stay22.params = { lmaID: '${STAY22_LMA_ID}' };
  twenty = t.createElement(a);
  two = t.getElementsByTagName(a)[0];
  twenty.async = 1;
  twenty.src = y;
  two.parentNode.insertBefore(twenty, two);
})(window, document, 'script', 'https://scripts.stay22.com/letmeallez.js');`}
        </Script>
      </body>
    </html>
  );
}
