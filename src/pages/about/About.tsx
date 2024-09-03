import Contact from "@/components/Contact";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

const About = () => {
  return (
    <div className="w-screen">
      <Header />
      <MainSection />
      <Contact paddingTopLg="15rem" paddingTopSm="3rem" />
    </div>
  );
};

export default About;
