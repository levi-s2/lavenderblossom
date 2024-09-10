import React, { useState } from "react";
import { Row, Col, Button as AntdButton, Radio } from "antd";
import emailjs from "emailjs-com";
import { FormProps, IValues } from "./types";
import { FormContainer, FormGroup, Span, ButtonContainer } from "./styles";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { Slide } from "react-awesome-reveal";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form: React.FC<FormProps> = ({ title, content, id }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation Schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email("Invalid email address").required("Please enter your email address"),
    phone: Yup.string().required("Please enter your phone number"),
    cleaningService: Yup.string().required("Please select a cleaning service"), // Now a radio group
    preferredContact: Yup.string().required("Please select a preferred contact method"),
    heardAboutUs: Yup.string(),
    comments: Yup.string(),
  });

  const formik = useFormik<IValues>({
    initialValues: {
      name: "",
      email: "",
      phone: "", // No formatting here, just a placeholder
      cleaningService: "", // Only one can be selected
      preferredContact: "",
      heardAboutUs: "",
      comments: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const templateParams = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        cleaningService: values.cleaningService,
        preferredContact: values.preferredContact,
        heardAboutUs: values.heardAboutUs,
        comments: values.comments,
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID!,
          "template_2zg26zt",
          templateParams,
          process.env.REACT_APP_EMAILJS_USER_ID!
        )
        .then((response) => {
          setIsSubmitted(true);
          formik.resetForm();
        })
        .catch((error) => {
          console.error("There was an error sending the email:", error);
          alert("Failed to send your message. Please try again later.");
        });
    },
  });

  return (
    <FormContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <h2>{title}</h2>
            <p>{content}</p>
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={formik.handleSubmit}>
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
                  value={formik.values.name}
                  onChange={formik.handleChange}
                />
                <Span>{formik.touched.name && formik.errors.name ? formik.errors.name : ""}</Span>
              </Col>

              <Col span={24}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <Span>{formik.touched.email && formik.errors.email ? formik.errors.email : ""}</Span>
              </Col>

              <Col span={24}>
                <Input
                  type="text"
                  name="phone"
                  placeholder="123-456-7890" // Using placeholder as requested
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                <Span>{formik.touched.phone && formik.errors.phone ? formik.errors.phone : ""}</Span>
              </Col>

              <Col span={24}>
                <Radio.Group
                  name="cleaningService"
                  onChange={formik.handleChange}
                  value={formik.values.cleaningService}
                >
                  <Radio value="Residential Cleaning">Residential Cleaning</Radio>
                  <Radio value="Commercial Cleaning">Commercial Cleaning</Radio>
                  <Radio value="Move-In Cleaning">Move-In Cleaning</Radio>
                  <Radio value="Move-Out Cleaning">Move-Out Cleaning</Radio>
                  <Radio value="Deep Cleaning">Deep Cleaning</Radio>
                </Radio.Group>
                <Span>{formik.touched.cleaningService && formik.errors.cleaningService ? formik.errors.cleaningService : ""}</Span>
              </Col>

              <Col span={24}>
                <select
                  name="preferredContact"
                  value={formik.values.preferredContact}
                  onChange={formik.handleChange}
                >
                  <option value="" disabled>Select Preferred Contact</option>
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                </select>
                <Span>{formik.touched.preferredContact && formik.errors.preferredContact ? formik.errors.preferredContact : ""}</Span>
              </Col>

              <Col span={24}>
                <TextArea
                  placeholder="How did you hear about us?"
                  value={formik.values.heardAboutUs}
                  name="heardAboutUs"
                  onChange={formik.handleChange}
                />
              </Col>

              <Col span={24}>
                <TextArea
                  placeholder="Additional questions or comments"
                  value={formik.values.comments}
                  name="comments"
                  onChange={formik.handleChange}
                />
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
    </FormContainer>
  );
};

export default Form;
