import type { Metadata } from "next";
import { Inter, Fraunces, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audit Network Ltd | Audit, Accountancy & Advisory",
  description:
    "Audit Network brings together audit, accountancy, tax and advisory expertise so you can move forward with clarity and confidence.",
  icons: {
    icon: "/logo_with_background.png",
    shortcut: "/logo_with_background.png",
    apple: "/logo_with_background.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
