import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmad Jabar Ilmi – Resume",
  description:
    "Resume of Ahmad Jabar Ilmi – Electronics / Hardware Engineer. Digital design, FPGA, and IC design.",
  openGraph: {
    title: "Ahmad Jabar Ilmi – Resume",
    description: "Electronics / Hardware Engineer. Digital design, FPGA, and IC design.",
    url: "https://ilmiahmad.github.io/",
    type: "profile",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
