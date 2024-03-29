import React from "react";
import { useCookies } from "react-cookie";
import CookieBanner from "./CookieBanner";
import Head from '@docusaurus/Head';
import useIsBrowser from '@docusaurus/useIsBrowser';

const COOKIES_CONSENT_NAME = "cookie-consent-given";
const COOKIES_CONSENT_VALUE = 1;

export default function CookiesConsent() {
  const isBrowser = useIsBrowser();
  if(!isBrowser) return null
  const [cookies, setCookie] = useCookies();
  const [consentGiven, setIsConsentGiven] = React.useState(
    cookies?.[COOKIES_CONSENT_NAME] === COOKIES_CONSENT_VALUE
  );

  return consentGiven ? (
    <Head>
      <script
        async
        defer
        src="https://scripts.simpleanalyticscdn.com/latest.js"
      ></script>
      <noscript>{`<img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt="" referrerPolicy="no-referrer-when-downgrade" />`}</noscript>
    </Head>
  ) : (
    <CookieBanner
      onClick={() => {
        const yearFromNow = new Date(
          new Date().setFullYear(new Date().getFullYear() + 1)
        );
        setCookie(COOKIES_CONSENT_NAME, COOKIES_CONSENT_VALUE, {
          expires: yearFromNow,
        });
        setIsConsentGiven(true);
      }}
    />
  );
}
