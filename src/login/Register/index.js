import { Col, Row, Label, Input, Button } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(8),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .required("Phone number is required")
    .length(10),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm Password is required"),
});

const Register = () => {
  const [eyePass, setEyePass] = useState(false);
  const [eyeConfirm, setEyeConfirm] = useState(false);
  const handleEye = (value) => {
    if (value === "eyeConfirm") {
      setEyeConfirm(!eyeConfirm);
    } else {
      setEyePass(!eyePass);
    }
  };
  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form style={{ padding: "30px" }}>
          <Col
            lg={12}
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              color: "#d885a3",
              marginBottom: "10px",
            }}
          >
            Register
          </Col>
          <Row>
            <Col lg={6} style={{ height: "90px" }}>
              <Label className="form-label">Name</Label>
              <Field
                name="name"
                type="text"
                className={`form-control ${
                  errors.name && touched.name ? "is-invalid" : ""
                }`}
                placeholder="Name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="invalid-feedback"
              />
            </Col>

            <Col lg={6} style={{ height: "90px" }}>
              <Label className="form-label">Phone Number</Label>
              <Field
                name="phone"
                type="text"
                className={`form-control ${
                  errors.phone && touched.phone ? "is-invalid" : ""
                }`}
                placeholder="Phone Number"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="invalid-feedback"
              />
            </Col>

            <Col lg={12} style={{ height: "90px" }}>
              <Label className="form-label">Email</Label>
              <Field
                name="email"
                type="text"
                className={`form-control ${
                  errors.email && touched.email ? "is-invalid" : ""
                }`}
                placeholder="Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback"
              />
            </Col>

            <Col lg={12} style={{ height: "90px" }}>
              <Label className="form-label">Password</Label>
              <Field
                name="password"
                type={eyePass ? "password" : "text"}
                className={`form-control ${
                  errors.password && touched.password ? "is-invalid" : ""
                }`}
                placeholder="Password"
                style={{paddingRight:"30px"}}
              />
              <span
                onClick={() => handleEye("eyePass")}
                style={{
                  position: "absolute",
                  top: "55%",
                  right: "17px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#888",
                }}
              >
                {eyePass ? <FaEye /> : <FaEyeSlash />}
              </span>
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback"
              />
            </Col>

            <Col lg={12} style={{ height: "90px" }}>
              <Label className="form-label">Confirm Password</Label>
              <Field
                name="confirmPassword"
                type={eyeConfirm ? "password" : "text"}
                className={`form-control ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "is-invalid"
                    : ""
                }`}
                placeholder="Confirm Password"
                style={{paddingRight:"30px"}}
              />
              <span
                onClick={() => handleEye("eyeConfirm")}
                style={{
                  position: "absolute",
                  top: "55%",
                  right: "17px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  fontSize: "18px",
                  color: "#888",
                }}
              >
                {eyeConfirm ? <FaEye /> : <FaEyeSlash />}
              </span>
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="invalid-feedback"
              />
            </Col>
          </Row>

          <Col
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10px",
            }}
          >
            <Button
              type="submit"
              style={{
                backgroundColor: "#d885a3",
                border: "none",
                width: "30%",
                borderRadius: "10px",
                color: "#fdf9fa",
              }}
            >
              Register
            </Button>
          </Col>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
