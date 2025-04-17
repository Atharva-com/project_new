import React from "react";
import "@/styles/globals.css";

import { Inter } from "next/font/google";
import { type Metadata } from "next";
import {
  AnalyticsTracker,
  ErrorBoundaryClient,
  DOMInspector,
  Branding,
} from "@/utils/creatr.scripts";
import { GlobalErrorHandler } from "@/utils/global-error-handler";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Create a proper React component wrapper
const ErrorBoundaryWrapper: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const ErrorBoundaryComponent =
    ErrorBoundaryClient as unknown as React.ComponentType<any>;
  return <ErrorBoundaryComponent {...props} />;
};

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "DocuNimbus",
    template: "%s | DocuNimbus",
  },
  description: "Smart Cloud Document Solution - Access. Organize. Secure.",
  applicationName: "DocuNimbus",
  keywords: ["document management", "cloud storage", "DMS", "document security", "file management", "cloud documents"],
  authors: [{ name: "DocuNimbus Team" }],
  creator: "DocuNimbus",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DocuNimbus",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col">
        <GlobalErrorHandler />
        <DOMInspector>
          <ErrorBoundaryWrapper>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
            <Branding />
          </ErrorBoundaryWrapper>
          <AnalyticsTracker siteKey="docunimbus" />
        </DOMInspector>
      </body>
    </html>
  );
}
