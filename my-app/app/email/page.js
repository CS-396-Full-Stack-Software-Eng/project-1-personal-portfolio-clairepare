import Image from "next/image";
import Head from 'next/head';
import Nav from "../components/Nav.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import EmailSection from "../components/EmailSection.jsx";
import Footer from "../components/Footer.jsx";

export default function EmailPage() {
  return (
    <div>
      <Head >
        <title>Email Page</title>
        <meta name="description" content="Welcome to my website!" />
      </Head>
      <Nav />
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <div className="container mt-24 mx-auto px-12 py-4">
          <EmailSection />
        </div>
      </main>
      <Footer />
    </div>
    
  );
}
