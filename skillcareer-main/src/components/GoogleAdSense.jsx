'use client';

import Script from 'next/script';

export default function GoogleAdSense() {
  // Only load ads in production
  if (process.env.NODE_ENV !== 'production') return null;

  return (
    <Script
      async
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3325072669237958"
      crossOrigin="anonymous"
    />
  );
}
