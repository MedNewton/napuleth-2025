import { CssBaseline } from "@mui/material";
import { type Metadata } from "next";
import localFont from 'next/font/local';
import ThemeWrapper from "@theme/ThemeWrapper";
import theme from "@theme/theme";
import Head from "next/head";

export const metadata: Metadata = {
  title: "NapulETH - Biggest Web3 Event In Southern Italy",
  description: "NapulETH - Biggest Web3 Event In Southern Italy",
  icons: [{ rel: "icon", url: "/fav.ico" }],
};

const URWGeometric = localFont({
  src: [
    { path: './fonts/URWGeometricExtraLight.otf', weight: '100', style: 'normal' },
    { path: './fonts/URWGeometricThin.otf', weight: '200', style: 'normal' },
    { path: './fonts/URWGeometricLight.otf', weight: '300', style: 'normal' },
    { path: './fonts/URWGeometricRegular.otf', weight: '400', style: 'normal' },
    { path: './fonts/URWGeometricMedium.otf', weight: '500', style: 'normal' },
    { path: './fonts/URWGeometricSemiBold.otf', weight: '600', style: 'normal' },
    { path: './fonts/URWGeometricBold.otf', weight: '700', style: 'normal' },
    { path: './fonts/URWGeometricBlack.otf', weight: '900', style: 'normal' },
  ],
  display: 'swap',
});


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </Head>
      <body className={URWGeometric.className} style={{ overflowX: 'hidden', backgroundColor: theme.palette.background.default }}>
        <ThemeWrapper>
          <CssBaseline />
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
