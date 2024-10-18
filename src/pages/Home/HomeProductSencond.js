import { Link } from "react-router-dom";
import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import ProductSencond from "./components/ProductSencond";
const HomeProductSencond = () => {
  return (
    <Card>
      <CardBody>
        <div className="text-muted">
          <Row>
            <Col lg={7}>
              <h2>Hàng bán chạy</h2>
              <Row>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                  <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Special Item"
                    isSale={false}
                    isReview={true}
                    price1="200.000"
                  />
                  <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Sale Item"
                    isSale={false}
                    price1="50.000"
                  />
                  <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Popular Item"
                    isReview={true}
                    price1="400.000"
                  />
                  <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Sale Item"
                    isSale={false}
                    price1="60.000"
                  />
                  <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    price1="120.000"
                  />
                  <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                  <ProductSencond
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </div>
              </Row>
            </Col>
            <Col lg={5}>
              <img
                src="https://product.hstatic.net/200000525319/product/z5729497924115_a1953bdd635637b18324b7c3493ae123_f0326a196e46488a9091fbe4eebc9ac0_grande.jpg"
                alt="Product image"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  );
};

export default HomeProductSencond;
