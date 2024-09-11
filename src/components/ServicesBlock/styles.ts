import styled from "styled-components";
import { Row } from "antd";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const StyledRow = styled(Row)<{ direction?: string }>`
  flex-direction: ${({ direction }) =>
    direction === "left" ? "row" : direction === "right" ? "row-reverse" : "row"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceImage = styled("img")`
  height: 200px;
  object-fit: cover;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  margin-top: 20px;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const LogoWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const GifImage = styled("img")`
  width: 50%;
  object-fit: contain;
`;
