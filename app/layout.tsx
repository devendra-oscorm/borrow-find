import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import LeadPopup from "@/components/popup";

// ✅ Body Font (Manrope)
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// ✅ Heading Font (Roboto)
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // 600 not available in Roboto
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "BorrowFind - Find the Best Loans & Financial Solutions",
  description:
    "BorrowFind helps you discover and compare the best loan options, insurance plans, and financial services tailored to your needs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${roboto.variable}`}>
      <body className="font-sans antialiased">
        <LeadPopup />
        {children}
        <Analytics />
      </body>
    </html>
  );
}