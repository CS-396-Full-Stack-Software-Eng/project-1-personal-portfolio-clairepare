// components/layout/Layout.js
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }) {
  return (
    <div className={inter.className}>
      {/* Assuming Header and Footer are proper components */}
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
}
