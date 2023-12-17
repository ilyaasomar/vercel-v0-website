import Categories from "@/components/categories";
import Courses from "@/components/courses";
import Details from "@/components/details";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/nav";
import Services from "@/components/services";
import SocailProof from "@/components/social-proof";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Details />
      <SocailProof />
      <Categories />
      <Services />
      <Courses />
      <Footer />
    </>
  );
}
