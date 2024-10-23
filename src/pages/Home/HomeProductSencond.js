import { Link } from "react-router-dom";
import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import ProductSencond from "./components/ProductSencond";
const HomeProductSencond = () => {
  return (
    <Card>
      <CardBody>
        <div className="text-muted">
          <Row>
            <Col lg={6}>
              <h2>Hàng bán chạy</h2>
              <Row>
              <Col lg={3}>
                <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </Col>
                <Col lg={3}>
                <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </Col>
                <Col lg={3}>
                <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </Col>
                <Col lg={3}>
                <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </Col>
                <Col lg={3}>
                <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </Col>
                <Col lg={3}>
                <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </Col>
                <Col lg={3}>
                <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </Col>
                <Col lg={3}>
                <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <img
                src="https://product.hstatic.net/200000525319/product/z5729497924115_a1953bdd635637b18324b7c3493ae123_f0326a196e46488a9091fbe4eebc9ac0_grande.jpg"
                alt="Product image"
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  );
};

export default HomeProductSencond;
