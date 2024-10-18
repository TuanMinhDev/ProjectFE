import { Link } from "react-router-dom";
import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";

const HomeProductNew = () => {
  return (
    <Card>
      <CardBody>
        <div className="text-muted">
          <Row>
            <Col lg={5}>
              <img
                src="https://product.hstatic.net/200000525319/product/z5729497924115_a1953bdd635637b18324b7c3493ae123_f0326a196e46488a9091fbe4eebc9ac0_grande.jpg"
                alt="Product image"
                style={{ width: "100%", height: "auto" }}
              />
            </Col>
            <Col lg={7}>
              <h2>Hàng mới về</h2>
              <Row>
                <Col lg={4}>
                  <img
                    src="https://product.hstatic.net/200000525319/product/m31__2__46c9f9df3a5e4b75a3eccc2f8e67a7e3_master.jpg"
                    style={{ width: "100%" }}
                  />
                  <p className="HomeProductNew_TextProduct">puff Sleeve Shirt</p>
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
                  <Link>Add To Cart</Link>
                </Col>
                <Col lg={4}>
                  <img
                    src="https://product.hstatic.net/200000525319/product/bo_1__39__3158a0749d1846e5b922b0da3a0c8d83_master.jpg"
                    style={{ width: "100%" }}
                    alt=""
                  />
                  <h5>Short Sleeve Dress</h5>
                  <h5>$24.00</h5>
                  <Link>Quick Shop</Link>
                </Col>
                <Col lg={4}>
                  <img
                    src="https://product.hstatic.net/200000525319/product/o1cn01un1vlt1jpmp5ivuu2___4153474540_cbcdcda7c5ac4b34b224ab753c5afdf4_master.jpg"
                    style={{ width: "100%" }}
                    alt=""
                  />
                  <h5>Elessi Young T-shirt</h5>
                  <h5>$32.00</h5>
                  <Link>Quick Shop</Link>
                </Col>
                <Col lg={4}>
                  <img
                    src="https://product.hstatic.net/200000525319/product/dap_mau_-_149k___1__00869a0beceb4896b4c42f55549bc416_grande.jpg"
                    style={{ width: "100%" }}
                  />
                  <h5>Chenille Sweater</h5>
                  <h5>$29.00</h5>
                  <Link>Quick Shop</Link>
                </Col>
                <Col lg={4}>
                  <img
                    src="https://product.hstatic.net/200000525319/product/o1cn01rewngv1jpmpbnzwsn___4153474540_ade9ebf7fe2642a993471ebd6f39ef36_grande.jpg"
                    style={{ width: "100%" }}
                    alt=""
                  />
                  <h5>Elessi Knit</h5>
                  <h5>$96.00</h5>
                  <Link>Quick Shop</Link>
                </Col>
                <Col lg={4}>
                  <img
                    src="https://product.hstatic.net/200000525319/product/mat_cuoi_nghieng_-_149k__3__066869f1ac0a40ddbf91e336dae26612_grande.jpg"
                    style={{ width: "100%" }}
                  />
                  <h5>Floral Embroidery Jacket</h5>
                  <h5>$96.00</h5>
                  <Link>Quick Shop</Link>
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
