import React, { useState } from "react";
import { Col, Label, Input, Row, Button } from "reactstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Facebook from "./../../assets/anh/Facebook.png";
import Github from "./../../assets/anh/Github.png";
import Google from "./../../assets/anh/Google.png";
import { Link } from "react-router-dom";
const Login = () => {
  const [eye, setEye] = useState(true);
  const handleEye = () => {
    setEye(!eye);
  };

  return (
    <div style={{ padding: "30px" }}>
      <Col
        lg={12}
        style={{ color: "#e4aec2", fontSize: "25px", fontWeight: "bold" }}
      >
        Store Here
      </Col>
      <Col
        lg={12}
        style={{ fontSize: "13px", marginTop: "10px", fontWeight: "bold" }}
      >
        Welcome !!!
      </Col>
      <Col
        lg={12}
        style={{
          fontSize: "30px",
          fontWeight: "bold",

          marginBottom: "20px",
        }}
      >
        Log In
      </Col>

      <Col lg={8} style={{ marginBottom: "10px" }}>
        <div>
          <Label className="form-label">Email</Label>
          <Input
            type="text"
            className="form-control"
            style={{
              backgroundColor: "#c0dbea",
              boxShadow: "none",
              border: "none",
              width: "110%",
            }}
          />
        </div>
      </Col>

      <Col lg={8}>
        <div style={{ position: "relative" }}>
          <Label className="form-label">Password</Label>

          <Input
            type={eye ? "password" : "text"}
            className="form-control"
            style={{
              paddingRight: "40px",
              backgroundColor: "#c0dbea",
              boxShadow: "none",
              border: "none",
              width: "110%",
            }}
          />

          <span
            onClick={handleEye}
            style={{
              position: "absolute",
              top: "70%",
              right: "-15px",
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
      <Col
        lg={8}
        style={{
          color: "#cbcbcb",
          fontSize: "12px",
          textAlign: "right",
          marginTop: "5px",
        }}
      >
        Forgot Password?
      </Col>
      <Col
        lg={9}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Button
          style={{
            backgroundColor: "#d885a3",
            border: "none",
            width: "30%",
            borderRadius: "10px",
            color: "#fdf9fa",
          }}
        >
          Login
        </Button>
      </Col>
      <Col
        lg={9}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8px",
          color: "#c0dbea",
          fontSize: "10px",
        }}
      >
        or continue with
      </Col>
      <Col lg={9} style={{marginTop:"10px"}}>
        <Row>
          <Col lg={4}>
            <div style={{border:"1px solid #c0dbea", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", height:"50px", borderRadius:"60px"}}>
              <img src={Google} alt="" style={{width:"35%"}} />
            </div>
          </Col>
          <Col lg={4}>
          <div>
          <div style={{border:"1px solid #c0dbea", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", height:"50px", borderRadius:"60px"}}>
              <img src={Facebook} alt="" style={{width:"35%"}} />
            </div>
          </div>
            
          </Col>
          <Col lg={4}>
          <div style={{border:"1px solid #c0dbea", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", height:"50px", borderRadius:"60px"}}>
              <img src={Github} alt="" style={{width:"35%"}} />
            </div>
           
          </Col>
        </Row>
      </Col>
      <Col
        lg={9}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "8px",
          color: "#c0dbea",
          fontSize: "10px",
        }}
      >
        Don't have an account yet?  <Link to="/login/register" style={{color:"#d885a3"}}> Sign up for free</Link>
      </Col>
    </div>
  );
};

export default Login;
