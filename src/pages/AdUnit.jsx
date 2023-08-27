// components/AdUnit.js
import React, { useEffect } from 'react';

function AdUnit() {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{display: 'block'}}
         data-ad-client="ca-pub-5554164709808714"
         data-ad-slot="2087172597"
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
}

export default AdUnit;
