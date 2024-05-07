import type { Metadata } from "next";
import GlobalAppBar from "../components/GlobalAppBar";
import { DrawerProvider } from "../context/DrawerContext";
import { Inter } from "next/font/google";
import "./globals.css";
import GlobalDrawer from "@/components/GlobalDrawer";

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
        <DrawerProvider>
          <GlobalAppBar />
          <br />
          <GlobalDrawer />
          {children}
        </DrawerProvider>
      </body>
    </html>
  );
}
