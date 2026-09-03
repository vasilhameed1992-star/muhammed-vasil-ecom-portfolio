import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammed-vasil-ecom-portfolio.vasilhameed1992.workers.dev"),
  title: "Muhammed Vasil | Head of E-commerce",
  description: "Regional e-commerce leader scaling marketplaces, DTC, eRetail, quick commerce and omnichannel business across GCC, India and South Africa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammed Vasil | Head of E-commerce",
    description: "Regional P&L, marketplaces, DTC, eRetail, quick commerce and digital growth across GCC, India and South Africa.",
    url: "/",
    siteName: "Muhammed Vasil — E-commerce Leadership Portfolio",
    type: "website",
    images: [{ url: "/og-preview.png", width: 1200, height: 630, alt: "Muhammed Vasil — Head of E-commerce" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Vasil | Head of E-commerce",
    description: "Regional e-commerce leadership across GCC, India and South Africa.",
    images: ["/og-preview.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
