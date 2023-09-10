import MyNavbar from "./components/MyNavbar";
import AboutSection from "./components/about";
import ServicesSections from "./components/services";
import FeedbackForm from "./components/FeedbackForm";
import PortfolioSection from "./components/portfolio";
import FooterSection from "./components/footer2";
import MainHero from "./components/MainHero";
import Hero from "./components/hero";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/stylish-portfolio.css";
function App() {
  return (
<div> 
<MyNavbar />
        <MainHero />
        <AboutSection />
        <ServicesSections />
        <PortfolioSection />
        <Hero />
        <FeedbackForm />
        <FooterSection />
</div>
  );
}

export default App;
