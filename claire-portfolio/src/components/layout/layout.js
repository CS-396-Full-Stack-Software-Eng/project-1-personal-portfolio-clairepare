import { Inter } from "next/font/google";
import "./styles/globals.css";
import { Header, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}