import Contact from "@/components/Contact";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

const About = () => {
  return (
    <div className="w-screen">
      <Header />
      <MainSection />
      <Contact paddingTop="5rem" />
    </div>
  );
};

export default About;
