import styled from "styled-components";

export const FooterSection = styled("footer")`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;

export const Extra = styled("section")`
  background: rgb(241, 242, 243);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const Email = styled.a`
  font-size: 16px;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const LinkText = styled.a`
  font-size: 16px;
  color: #000;
  text-decoration: none;
  margin-right: 20px;

  &:hover {
    text-decoration: underline;
    color: #18216d;  /* Optional hover color */
  }
`;

export const LogoContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    display: block;
    max-width: 100%;
  }
`;
