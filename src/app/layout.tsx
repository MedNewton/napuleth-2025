import { CssBaseline } from "@mui/material";
import { type Metadata } from "next";
import localFont from "next/font/local";
import ThemeWrapper from "@theme/ThemeWrapper";
import theme from "@theme/theme";
import Head from "next/head";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "NapulETH - Biggest Web3 Event In Southern Italy",
  description: "NapulETH - Biggest Web3 Event In Southern Italy",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const URWGeometric = localFont({
  src: [
    { path: "./fonts/URWGeometricExtraLight.otf", weight: "100", style: "normal" },
    { path: "./fonts/URWGeometricThin.otf", weight: "200", style: "normal" },
    { path: "./fonts/URWGeometricLight.otf", weight: "300", style: "normal" },
    { path: "./fonts/URWGeometricRegular.otf", weight: "400", style: "normal" },
    { path: "./fonts/URWGeometricMedium.otf", weight: "500", style: "normal" },
    { path: "./fonts/URWGeometricSemiBold.otf", weight: "600", style: "normal" },
    { path: "./fonts/URWGeometricBold.otf", weight: "700", style: "normal" },
    { path: "./fonts/URWGeometricBlack.otf", weight: "900", style: "normal" },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){
                if(f.fbq)return;
                n=f.fbq=function(){n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;
                n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];
                t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)
              }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '959172412385821');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=959172412385821&ev=PageView&noscript=1"
            alt="Facebook Pixel Tracking"
          />
        </noscript>
      </Head>
      <body
        className={URWGeometric.className}
        style={{ overflowX: "hidden", backgroundColor: theme.palette.background.default }}
      >
        <ThemeWrapper>
          <CssBaseline />
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
