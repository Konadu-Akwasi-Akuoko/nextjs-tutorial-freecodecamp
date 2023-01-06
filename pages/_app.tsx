import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import MainLayout from "../src/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </MainLayout>
  );
}
