import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "BorrowFind - Find the Best Loans & Financial Solutions",
  description:
    "BorrowFind helps you discover and compare the best loan options, insurance plans, and financial services tailored to your needs.",
  icons: {
    icon: "/favicon.ico"

  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${playfair.variable} font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}