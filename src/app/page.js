import Hero from "./section/hero";
import Header from "./section/header/header";
import About from "./section/about";
import Features from "./section/Features";
import HowItWorks from "./section/howItWorks";
import Pricing from "./section/pricing";
import FAQ from "./section/faq";
import Testimonial from "./section/testimonial";
import GetTemplete from "./section/getTemplete";
import Footer from "./section/footer";

export default function Home() {
  return (
    <>
    <div className="bg-[#080035]">
<Header/>
<Hero />
</div>
<div className="bg-[#EFEFEF]">

<About />
</div>
<div className="bg-[#E3E3E3]">
<Features />
</div>
<div className="bg-[#EFEFEF]">
  <HowItWorks />
  <Pricing />
  <Testimonial />
  <FAQ />
  <GetTemplete />
<Footer />
</div>
    </>

  );
}
