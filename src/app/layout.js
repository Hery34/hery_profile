import { Inter } from "next/font/google";
import "./globals.css";
import ServiceWorkerHandler from "./components/service_worker_handler";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: '/manifest.json',
  themeColor: '#000000',
  viewport: 'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'hery_portfolio',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        <ServiceWorkerHandler />
        {children}</body>
    </html>
  );
}
