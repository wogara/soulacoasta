import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";
import MainFooter from "@/components/main-footer/main-footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soulacoasta",
  description: "Soulacoasta DJ site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
