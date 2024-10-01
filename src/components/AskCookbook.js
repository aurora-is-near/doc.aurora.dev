import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import BaseAskCookbook from "@cookbookdev/docsbot/react";

/** It's a public API key, so it's safe to expose it here */
const COOKBOOK_PUBLIC_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmVhZjE2MjE3MDkyYjQzMGUyN2Y3MDMiLCJpYXQiOjE3MjY2NzMyNTAsImV4cCI6MjA0MjI0OTI1MH0.Ykxcq6_-PztrSsZnBEUQmrQSuJVL4HdXA2N9gg2q-Jg";

export default function AskCookbook() {
  return (
    <BrowserOnly>
      {() => <BaseAskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} />}
    </BrowserOnly>
  );
}
