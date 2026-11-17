import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Literata } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Literata({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Jabar Ilmi – Hardware engineer",
  description:
    "Resume of Ahmad Jabar Ilmi – hardware engineer working on digital IC and FPGA design.",
  openGraph: {
    title: "Ahmad Jabar Ilmi – Hardware engineer",
    description: "Digital IC and FPGA design. Projects, experience and resume.",
    url: "https://ilmiahmad.github.io/",
    type: "profile",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
