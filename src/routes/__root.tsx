/// <reference types="vite/client" />
import { Outlet, createRootRoute, Scripts } from '@tanstack/react-router';

import globalCss from '@/styles/global.css?url';
import { TrpcProvider } from '@/client/trpc/provider';

export const Route = createRootRoute({
  component: RootDocument,
});

function RootDocument() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="AIBIEI unifies AI, BI, and Enterprise Intelligence to transform data into decisions, insights into actions, and innovation into growth. Build your intelligent enterprise today."
        />
        <meta
          name="keywords"
          content="AI, Business Intelligence, Enterprise Intelligence, Data Analytics, Digital Transformation, Business Automation"
        />
        <meta name="author" content="AIBIEI" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="AIBIEI - The Intelligence Behind Every Decision"
        />
        <meta
          property="og:description"
          content="AIBIEI unifies AI, BI, and Enterprise Intelligence to transform data into decisions, insights into actions, and innovation into growth."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aibiei.com" />
        <meta property="og:image" content="https://aibiei.com/og-image.jpg" />
        <meta property="og:site_name" content="AIBIEI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AIBIEI - The Intelligence Behind Every Decision"
        />
        <meta
          name="twitter:description"
          content="AIBIEI unifies AI, BI, and Enterprise Intelligence to transform data into decisions, insights into actions, and innovation into growth."
        />
        <meta
          name="twitter:image"
          content="https://aibiei.com/twitter-image.jpg"
        />
        <meta name="twitter:creator" content="@aibiei" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="application-name" content="AIBIEI" />
        <meta name="apple-mobile-web-app-title" content="AIBIEI" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="referrer" content="no-referrer" />
        <link rel="canonical" href="https://aibiei.com/" />
        <link rel="shortcut icon" href="https://static.step1.dev/16vskh/assets/271351deaa8f.ico" />
        <link rel="stylesheet" href="/home/styles/style_7a49cb5f0050.css" />
        <link rel="stylesheet" href="/home/styles/style_4307272239c3.css" />
        <link rel="stylesheet" href="/home/styles/style_44662de83434.css" />
        <link rel="stylesheet" href="/home/styles/merged_styles.css" />
        <title>AIBIEI - The Intelligence Behind Every Decision</title>
        <link rel="stylesheet" href={globalCss} />
        <link rel="icon" href="favicon.png" />
      </head>
      <body className="app-loaded">
        <TrpcProvider>
          <Outlet />
        </TrpcProvider>
        <Scripts />
      </body>
    </html>
  );
}
