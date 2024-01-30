import React from "react";
import CookiesConsent from "../components/CookieConsent";

export default function Root({ children }) {
  return (
    <>
      {children}
      <CookiesConsent />
    </>
  );
}
