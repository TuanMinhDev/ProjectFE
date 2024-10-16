import React from "react";
import { Outlet } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";

const Welcome = () => {
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        fontFamily: "Arial, sans-serif",
        height: "100vh", 
        width: "100vw", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(90deg, rgba(0, 131, 176, 0.366) 0%, rgba(219, 0, 158, 0.324) 100%)",
      }}
    >
      <Card
        style={{
          width: "100%", // Chiều rộng của thẻ Card
          maxWidth: "600px", // Giới hạn chiều rộng tối đa
          border: "none", // Xóa viền
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Thêm bóng cho thẻ
        }}
      >
        <CardBody style={{ width: "100%", height: "100%", backgroundColor: "white" }}>
          <Row style={{ height: "100%" }}>
            <Col lg={6}>
              <Outlet/>
            </Col>
            <Col lg={6}>
              <h1 style={{ color: "black" }}>Hello!</h1>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Welcome;