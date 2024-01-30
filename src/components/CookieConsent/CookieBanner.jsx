import React from "react";

const CookieBanner = ({ onClick }) => {
  return (
    <div aria-live="assertive" className="cookie-consent">
      <div className="cookie-consent__wrapper">
        <div>
          This site uses cookies. <br />
        </div>
        <button className="cookie-consent__confirm" onClick={onClick}>
          OK
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
