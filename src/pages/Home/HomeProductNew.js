import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row } from "reactstrap";
import Product from "./components/Product";

const HomeProductNew = () => {
  return (
    <Card>
      <CardBody>
        <div className="text-muted">
          <Row>
            {/* Hình ảnh chính */}
            <Col lg={5}>
              <img
                src="https://product.hstatic.net/200000525319/product/z5729497924115_a1953bdd635637b18324b7c3493ae123_f0326a196e46488a9091fbe4eebc9ac0_grande.jpg"
                alt="Product image"
                style={{ width: "100%", height: "100%" }}
              />
            </Col>

            {/* Sản phẩm mới */}
            <Col lg={7}>
              <h2>Hàng mới về</h2>
              <Row>
                {/* Sản phẩm 1 */}
                <Col lg={4}>
                  <Product
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Fancy Product"
                    isSale={true}
                    type={1}
                    price1="400.000"
                    price2="250.000"
                  />
                </Col>

                {/* Sản phẩm 2 */}
                <Col lg={4}>
                  <Product
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Special Item"
                    isSale={false}
                    isReview={true}
                    price1="200.000"
                  />
                </Col>

                {/* Sản phẩm 3 */}
                <Col lg={4}>
                  <Product
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Sale Item"
                    isSale={false}
                    price1="50.000"
                  />
                  <p className="HomeProductNew_TextProduct">Puff Sleeve Shirt</p>
                  <div style={{ fontSize: "15px" }}>
                    <span
                      style={{
                        textDecoration: "line-through",
                        color: "gray",
                        marginRight: "10px",
                      }}
                    >
                      $80.00
                    </span>
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      $65.00
                    </span>
                  </div>
                  <Link to="#">Add To Cart</Link>
                </Col>

                {/* Sản phẩm 4 */}
                <Col lg={4}>
                  <img
                    src="https://product.hstatic.net/200000525319/product/bo_1__39__3158a0749d1846e5b922b0da3a0c8d83_master.jpg"
                    style={{ width: "100%" }}
                    alt="Short Sleeve Dress"
                  />
                  <h5>Short Sleeve Dress</h5>
                  <h5>$24.00</h5>
                  <Link to="#">Quick Shop</Link>
                </Col>

                {/* Sản phẩm 5 */}
                <Col lg={4}>
                  <Product
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Popular Item"
                    isReview={true}
                    price1="400.000"
                  />
                </Col>

                {/* Sản phẩm 6 */}
                <Col lg={4}>
                  <Product
                    anh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg"
                    hoverAnh="https://4menshop.com/cache/image/300x400/images/thumbs/2024/10/ao-so-mi-vai-oxford-soc-phoi-co-trang-form-regular-sm165-mau-soc-xanh_small-18789.jpg"
                    name="Sale Item"
                    isSale={false}
                    price1="60.000"
                  />
                  <h5>Chenille Sweater</h5>
                  <h5>$29.00</h5>
                  <Link to="#">Quick Shop</Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>
  );
};

export default HomeProductNew;
