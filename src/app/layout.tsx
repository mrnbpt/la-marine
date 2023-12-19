import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const formula = localFont({
  src: "../../public/fonts/PPFormula-Medium.ttf",
  variable: "--font-formula",
  display: "swap",
});

const neueMachina = localFont({
  src: "../../public/fonts/PPNeueMachina-PlainMedium.ttf",
  variable: "--font-neueMachina",
  display: "swap",
});

export const metadata: Metadata = {
  title: "La Marine",
  description: "Daily sea conditions and personalized insights",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body
        className={`${inter.className} ${formula.variable} ${neueMachina.variable} bg-bgYellow antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
