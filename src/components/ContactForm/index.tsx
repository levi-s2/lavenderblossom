import React, { useState } from "react";
import { Row, Col, Button as AntdButton } from "antd";
import emailjs from "emailjs-com";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";

const Contact = ({ title, content, id }: ContactProps) => {
  const { values, errors, handleChange } = useForm(validate);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check for validation errors (assumed handled in the useForm hook)
    if (!errors.name && !errors.email && !errors.message) {
      const templateParams = {
        name: values.name,
        email: values.email,
        message: values.message,
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!,
          "template_2zg26zt",
          templateParams,
          process.env.REACT_APP_EMAILJS_USER_ID!
        )
        .then((response) => {
          console.log("Email sent successfully:", response.status, response.text);
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error("There was an error sending the email:", error);
          alert("Failed to send your message. Please try again later.");
        });
    } else {
      console.log("Form has validation errors.");
    }
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={onSubmit}>
              {isSubmitted && (
                <p style={{ color: "green", fontWeight: "bold" }}>
                  Thank you for your message. We will be in touch soon.
                </p>
              )}
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder="Your Message"
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <ButtonContainer>
                <AntdButton type="primary" htmlType="submit">
                  Submit
                </AntdButton>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;