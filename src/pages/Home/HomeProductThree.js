import ProductThree from "./components/ProductThree";
import { Card, CardBody, Col, Row } from "reactstrap";

const HomeProductThree = () => {
  return (
    <Card>
      <CardBody>
        <div
          style={{
            width: "100%",
            height: "50px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "40px"
          }}
        >
          <p style={{ margin: "0" }}>
            UP TO 70% OFF THE ENTRIRE STORE! – MADE WITH LOVE by The4 studio
          </p>
        </div>
        <Row>
          <Col lg={4}>
            <Col lg={12}>
              <h2>Top Rated</h2>
            </Col>
            <Col lg={12}>
              <ProductThree
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                name="Fancy Product"
                price1="400.000"
                price2="250.000"
              />
            </Col>

            <Col lg={12}>
              <ProductThree
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                name="Fancy Product"
                price1="400.000"
                price2="250.000"
              />
            </Col>
            <Col lg={12}>
              <ProductThree
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                name="Fancy Product"
                price1="400.000"
                price2="250.000"
              />
            </Col>
          </Col>
          <Col lg={4}>
            <Col lg={12}>
              <h2>Top Rated</h2>
            </Col>
            <Col lg={12}>
              <ProductThree
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                name="Fancy Product"
                price1="400.000"
                price2="250.000"
              />
            </Col>

            <Col lg={12}>
              <ProductThree
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                name="Fancy Product"
                price1="400.000"
                price2="250.000"
              />
            </Col>
            <Col lg={12}>
              <ProductThree
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                name="Fancy Product"
                price1="400.000"
                price2="250.000"
              />
            </Col>
          </Col>
          <Col lg={4}>
            <Col lg={12}>
              <h2>Top Rated</h2>
            </Col>
            <Col lg={12}>
              <ProductThree
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                name="Fancy Product"
                price1="400.000"
                price2="250.000"
              />
            </Col>

            <Col lg={12}>
              <ProductThree
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                name="Fancy Product"
                price1="400.000"
                price2="250.000"
              />
            </Col>
            <Col lg={12}>
              <ProductThree
                image="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                name="Fancy Product"
                price1="400.000"
                price2="250.000"
              />
            </Col>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
export default HomeProductThree;
