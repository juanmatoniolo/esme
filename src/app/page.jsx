import Navbar from "@/components/2Navbar/Navbar";
import Banner from "@/components/1Header/Banner";
import Hero from "@/components/3body/Hero";
import About from "@/components/4About/About";
import Services from "@/components/5Services/Services";
import Workshop from "@/components/6Workshop/Workshop";
import Book from "@/components/7Book/Book";
import Contact from "@/components/8Contact/Contact";
import Footer from "@/components/9Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <Hero />     
      <About />
      <Services />
      <Workshop />
      <Book />
      <Contact />
      <Footer />
    </main>
  );
}
