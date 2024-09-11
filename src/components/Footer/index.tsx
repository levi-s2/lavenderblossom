import { Row } from "antd";
import Container from "../../common/Container";
import {
  FooterSection,
  Extra,
  LogoContainer,
  FooterContainer,
  Email,
  LinkText,
} from "./styles";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="center">
            <FooterContainer>
              {/* Use text-based links for Nextdoor and Instagram */}
              <LinkText
                href="https://nextdoor.com/pages/lavender-blossom-cleaning-services-sugar-hill-ga/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nextdoor
              </LinkText>
              <LinkText
                href="https://www.instagram.com/lavenderblossomcs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </LinkText>
            </FooterContainer>
          </Row>
          <Row justify="center" style={{ marginTop: "20px" }}>
            <Email href="mailto:lavenderblossomcs@gmail.com">
              lavenderblossomcs@gmail.com
            </Email>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify="center" align="middle" style={{ paddingTop: "3rem" }}>
            <LogoContainer>
              <img
                src={require("./logo.png")}
                alt="Lavender Blossom Logo"
                width="210px"
                height="68px"
              />
            </LogoContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default Footer;
