import { Col, Card, Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Fade } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import {
  ContentSection,
  ContentWrapper,
  StyledRow,
  ButtonWrapper,
  ServiceImage,
  LogoWrapper,
  GifImage, // New styles for the GIF images
} from "./styles";

const { Meta } = Card;

// Custom Left Arrow Component
const CustomLeftArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <LeftOutlined style={{ fontSize: "20px", color: "#000" }} />
    </div>
  );
};

// Custom Right Arrow Component
const CustomRightArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <RightOutlined style={{ fontSize: "20px", color: "#000" }} />
    </div>
  );
};

// Scroll function to smoothly scroll to a section
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const ServicesBlock = () => {
  return (
    <ContentSection>
      <Fade direction="right" triggerOnce>
        <StyledRow justify="space-between" align="middle" id="services" direction="right">
          <Col lg={11} md={11} sm={12} xs={24}>
            {/* Place two GIFs side by side in the LogoWrapper */}
            <LogoWrapper>
              <GifImage src={require("./cleaning.gif")} alt="Cleaning GIF" />
              <GifImage src={require("./product.gif")} alt="Product GIF" />
            </LogoWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h2>Our Services</h2>
              <p>Explore our range of services designed to meet all your cleaning needs.</p>

              {/* Service Carousel */}
              <Carousel
                autoplay
                arrows
                prevArrow={<CustomLeftArrow />}
                nextArrow={<CustomRightArrow />}
                slidesToShow={3}
                responsive={[
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    },
                  },
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                    },
                  },
                  {
                    breakpoint: 1200,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3,
                    },
                  },
                ]}
              >
                <div>
                  <Card
                    hoverable
                    cover={<ServiceImage alt="Residential Cleaning" src={require("./images/residential.webp")} />}
                    onClick={() => scrollToSection("appointment")}
                  >
                    <Meta
                      title="Residential Cleaning"
                      description="Experience a fresh and inviting space with our residential cleaning."
                    />
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    cover={<ServiceImage alt="Commercial Cleaning" src={require("./images/office.jpg")} />}
                    onClick={() => scrollToSection("appointment")}
                  >
                    <Meta
                      title="Commercial Cleaning"
                      description="Maintain a professional atmosphere with our commercial cleaning services."
                    />
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    cover={<ServiceImage alt="Move-In/Move-Out Cleaning" src={require("./images/move.jpeg")} />}
                    onClick={() => scrollToSection("appointment")}
                  >
                    <Meta
                      title="Move-In/Move-Out Cleaning"
                      description="Start fresh with our move-in/move-out cleaning services."
                    />
                  </Card>
                </div>
                <div>
                  <Card
                    hoverable
                    cover={<ServiceImage alt="Deep Cleaning" src={require("./images/deep.webp")} />}
                    onClick={() => scrollToSection("appointment")}
                  >
                    <Meta
                      title="Deep Cleaning"
                      description="Revitalize your space with our comprehensive deep cleaning services."
                    />
                  </Card>
                </div>
              </Carousel>

              {/* Button */}
              <ButtonWrapper>
                <Button onClick={() => scrollToSection("appointment")}>
                  Schedule a Visit
                </Button>
                <Button onClick={() => scrollToSection("about")}>
                  Learn More
                </Button>
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ServicesBlock;
