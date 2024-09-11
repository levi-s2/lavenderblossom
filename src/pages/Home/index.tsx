import { lazy, Suspense } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import FormContent from "../../content/FormContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const Form = lazy(() => import("../../components/Form"));
const ServicesBlock = lazy(() => import("../../components/ServicesBlock")); // ServicesBlock component

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <ScrollToTop />

        {/* Intro Section */}
        <ContentBlock
          direction="right"
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button}
          id="home"
          logoVersion="broom" // Use broom.gif for the Home section
        />

        {/* About Us Section */}
        <ContentBlock
          direction="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          id="about"
          logoVersion="hand" // Use hand.gif for the About Us section
        />

        {/* Services Section */}
        <ServicesBlock /> {/* Ensure the component handles the layout and ID properly */}

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
    </Suspense>
  );
};

export default Home;
