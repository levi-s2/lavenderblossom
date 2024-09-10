import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled.span`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0.5rem 0 0 0.675rem; /* Adding margin above the error message */
  margin-bottom: 1rem; /* Add space below the error message */
`;

export const ButtonContainer = styled.div`
  text-align: end;
  position: relative;
  margin-top: 2rem; /* Add space between the last field and the button */

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;
