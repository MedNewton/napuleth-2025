import { CssBaseline } from "@mui/material";
import { type Metadata } from "next";
import localFont from 'next/font/local';
import { Inter } from 'next/font/google'
import ThemeWrapper from "@theme/ThemeWrapper";
import theme from "@theme/theme";

export const metadata: Metadata = {
  title: "NexLabs - Index your trades, your investment, your future",
  description: "NexLabs: Index your trades, your investment, your future.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
      <body className={URWGeometric.className} style={{ overflowX: 'hidden', backgroundColor: theme.palette.background.default }}>
        <ThemeWrapper>
            <CssBaseline />
            {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
