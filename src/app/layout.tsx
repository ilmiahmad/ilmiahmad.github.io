import type { Metadata, Viewport } from "next";
import { DM_Sans, Newsreader } from "next/font/google";
import "./globals.css";

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const ui = DM_Sans({
  subsets: ["latin"],
  variable: "--font-ui-face",
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
    <html lang="en" className={`${serif.variable} ${ui.variable}`}>
      <body>{children}</body>
    </html>
  );
}
