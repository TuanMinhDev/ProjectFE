import React from "react";
import { Outlet } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import Nguoi from "./../assets/anh/Nguoi.png";
import Cactus from "./../assets/anh/cactus.png";
import Facebook from "./../assets/anh/Facebook.png";
import Github from "./../assets/anh/Github.png";
import Google from "./../assets/anh/Google.png";

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
        background:
          "linear-gradient(90deg, rgba(0, 131, 176, 0.366) 0%, rgba(219, 0, 158, 0.324) 100%)",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "600px",
          border: "none",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "10px",
        }}
      >
        <CardBody
          style={{
            width: "1000px",
            height: "70vh",
            backgroundColor: "white",
            padding: "0",
            borderRadius: "10px",
          }}
        >
          <Row
            style={{
              height: "100%",
              width: "100%",
              margin: 0,
              display: "flex",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <Col
              lg={6}
              style={{
                height: "100%",
                padding: 0,
                flex: 1,
              }}
            >
              <Outlet />
            </Col>
            <Col
              lg={6}
              style={{
                height: "100%",
                paddingRight: "0",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  backgroundColor: "#c0dbea",
                  width: "60%",
                  height: "100%",
                  margin: "0",
                  borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                }}
              >
                <img
                  src={Nguoi}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "-10%",
                    width: "80%",
                    top: "10%",
                  }}
                />
                <img
                  src={Cactus}
                  alt=""
                  style={{
                    position: "absolute",
                    left: "60%",
                    width: "20%",
                    top: "30%",
                  }}
                />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default Welcome;
