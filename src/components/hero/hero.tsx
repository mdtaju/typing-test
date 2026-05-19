import Footer from "./footer";
import Navbar from "./navbar";
import TextArea from "./textarea";

function HeroSection() {
  return (
    <div className="w-full px-2">
      <Navbar />
      <TextArea />
      <Footer />
    </div>
  );
}

export default HeroSection;
