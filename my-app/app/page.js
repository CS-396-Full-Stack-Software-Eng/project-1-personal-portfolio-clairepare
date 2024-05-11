//components taken from this demo: https://www.youtube.com/watch?v=Kb1f5bvF6f4

import Image from "next/image";
import Head from 'next/head';
import HeroSection from "./components/HeroSection.jsx";
import Nav from "./components/Nav.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import EmailSection from "./components/EmailSection.jsx";
import Footer from "./components/Footer.jsx";

export default function Home() {
  return (
    <div>
      <Head >
        <title>Home Page</title>
        <meta name="description" content="Welcome to my website!" />
      </Head>
      <Nav />
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <div className="container mt-32 mx-auto px-12 py-4">
          <HeroSection />
        </div>
      </main>
      <Footer />
    </div>
    
  );
}
