import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setVisibility(false);
  };

  const MenuItem = () => (
    <>
      <CustomNavLinkSmall onClick={() => scrollTo("home")}>
        <Span>Home</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => scrollTo("about")}>
        <Span>About Us</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => scrollTo("services")}>
        <Span>Services</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => scrollTo("appointment")}>
        <Span>Appointment</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
        <Span>Contact Us</Span>
      </CustomNavLinkSmall>
    </>
  );

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <img src={require("./logo.png")} alt="logo" width="210px" height="65px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
