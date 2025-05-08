import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon for most browsers */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        {/* SVG favicon for modern browsers */}
        <link rel="icon" href="/icon0.svg" type="image/svg+xml" />
        {/* Apple touch icon for iOS */}
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        {/* Web app manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
