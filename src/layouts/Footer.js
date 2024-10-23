import { Card, CardFooter, Col, Row } from "reactstrap";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <Card>
      <CardFooter>
        <Row>
          <Col lg={3} sm={6}>
            <h1>Store</h1>
            <p>Calista Wise 7292 Dictum Av. Antonio, Italy.</p>
            <p>(+01)-800-3456-88</p>
            <p>contact@company.com</p>
            <Row style={{ width: "60%" }}>
              <Col>
                <FaFacebook />
              </Col>
              <Col>
                <CiTwitter />
              </Col>
              <Col>
                <FaInstagram />
              </Col>
              <Col>
                <FaYoutube />
              </Col>
              <Col>
                <FaTiktok />
              </Col>
            </Row>
          </Col>
          <Col lg={2}>
            <h3>Useful links</h3>
            <Link>Delivery Information</Link>
            <br />
            <Link>Terms & Condition</Link>
            <br />
            <Link>Customer Service</Link>
            <br />
            <Link>Privacy Policy</Link>
            <br />
            <Link>Search Terms</Link>
          </Col>
          <Col lg={4}>
            <h3>Get in touch</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Whatsapp</p>
              <p>+001 2233 456 291</p>
            </div>
            <hr style={{ marginTop: "-5px" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Real Live Support</p>
              <p>Calista Antonio, Italy</p>
            </div>
            <hr style={{ marginTop: "-5px" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Monday - Friday</p>
              <p>08:00 - 20:00</p>
            </div>
            <hr style={{ marginTop: "-5px" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Saturday</p>
              <p>09:00 - 21:00</p>
            </div>
            <hr style={{ marginTop: "-5px" }} />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Sunday</p>
              <p>13:00 - 22:00</p>
            </div>
          </Col>
          <Col lg={3}>
             <h3>Newsletter signup</h3> 
             <p>Subscribe to our newsletters now and stay up-to-date with new collections.</p>

          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
};
export default Footer;
