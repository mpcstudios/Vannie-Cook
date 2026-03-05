import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vannie E. Cook Jr. Cancer Foundation",
  description:
    "Supporting pediatric cancer care in the Rio Grande Valley of South Texas. Ensuring every child receives world-class treatment, close to home, regardless of ability to pay.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-body h-full bg-[var(--color-cream)]`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
