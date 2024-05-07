import type { Metadata } from "next";
import GlobalAppBar from "../components/GlobalAppBar";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ephraim Becker",
  description: "Website all about Ephraim Becker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalAppBar />
        <br />
        {children}
      </body>
    </html>
  );
}
