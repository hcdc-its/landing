import type { Metadata } from "next";
import "./globals.css";
import { Inter, Questrial, Inter_Tight } from "next/font/google";
import LenisScrollProvider from "~/providers/lenis-provider";
import { ThemeProvider } from "~/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HCDC Information Technology Society",
  description:
    "HCDC Information Technology Society Official Publication Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${questrial.variable} ${inter.variable} ${interTight.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisScrollProvider>
            {children}
          </LenisScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
