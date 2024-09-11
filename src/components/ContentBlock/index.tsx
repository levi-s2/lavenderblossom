import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

// Import the images (broom and hand GIFs)
import broomGif from "./broom.gif";
import handGif from "./hand.gif";

const ContentBlock = ({
  title,
  content,
  section,
  button,
  id,
  direction,
  logoVersion, // New prop to choose the image version
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Choose logo based on the passed prop
  const logo = logoVersion === "hand" ? handGif : broomGif;

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <img src={logo} alt="logo" width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{title}</h6>
              <Content>{content}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {button &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => (
                        <Button
                          key={id}
                          color={item.color}
                          onClick={() =>
                            item.title === "Schedule a Visit"
                              ? scrollTo("appointment")
                              : scrollTo("about")
                          }
                        >
                          {item.title}
                        </Button>
                      )
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {section &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                          },
                          id: number
                        ) => (
                          <Col key={id} span={11}>
                            <MinTitle>{item.title}</MinTitle>
                            <MinPara>{item.content}</MinPara>
                          </Col>
                        )
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default ContentBlock;
