import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import ServicesContent from "../../content/ServicesContent.json";
import FormContent from "../../content/FormContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Form = lazy(() => import("../../components/Form"));


const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      {/* Intro Section */}
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="lavender.svg" // Customize with an icon that fits the brand
        id="intro"
      />
      
      {/* About Us Section */}
      <ContentBlock
        direction="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="about-us.svg" // Customize with relevant icon
        id="about"
      />
      
      {/* Services Section */}
      <ContentBlock
        direction="right"
        title={ServicesContent.title}
        content={ServicesContent.text}
        section={ServicesContent.section}
        icon="cleaning-services.svg" // Relevant icon for services
        id="services"
      />
      
      {/* Appointment Form Section */}
      <Form
        title={FormContent.title}
        content={FormContent.text}
        id="appointment"
      />
      
      {/* Contact Us Section */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
