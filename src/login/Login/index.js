import React, { useState } from "react";
import { Col, Label, Input, Row } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [eye, setEye] = useState(true); // Quản lý trạng thái của mắt
  const handleEye = () => {
    setEye(!eye); // Đổi trạng thái mắt mỗi lần click
  };

  return (
    <div style={{ padding: "30px" }}>
      <Col
        lg={12}
        style={{ color: "#e4aec2", fontSize: "25px", fontWeight: "bold" }}
      >
        Welcome
      </Col>
      <Col
        lg={12}
        style={{
          fontSize: "30px",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        Log In
      </Col>

      <Col lg={8} style={{ marginBottom: "20px" }}>
        <div>
          <Label className="form-label">Email</Label>
          <Input type="text" className="form-control" />
        </div>
      </Col>

      <Col lg={8}>
        <div style={{ position: "relative" }}>
          <Label className="form-label">Password</Label>

          {/* Input mật khẩu */}
          <Input
            type={eye ? "password" : "text"}
            className="form-control"
            style={{ paddingRight: "40px" }}
          />

          {/* Icon mắt */}
          <span
            onClick={handleEye} // Sự kiện nhấn để đổi loại input
            style={{
              position: "absolute",
              top: "70%",
              right: "10px",
              transform: "translateY(-50%)",
              cursor: "pointer",
              fontSize: "18px",
              color: "#888",
            }}
          >
            {eye ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
      </Col>
    </div>
  );
};

export default Login;
