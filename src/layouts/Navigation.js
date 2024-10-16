import { Card, CardHeader, Row, Col, Label, Input, InputGroup, InputGroupText } from "reactstrap";
import { FaRegUserCircle, FaBell, FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

const Navigation = () => {
  return (
    <Card>
      <CardHeader>
        <Row className="gy-4 align-items-center">
         
          <Col xxl={2} md={2} sm={2} className="text-center text-md-left">
            <h1 className="mb-0">Store</h1>
          </Col>
          
          <Col xxl={6} md={6} sm={6}>
            <Row
              className="g-3 align-items-center"
              style={{
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <Col xs="auto">
                <Label className="form-label mb-0" >
                  Home
                </Label>
              </Col>
              <Col xs="auto">
                <Label className="form-label mb-0" >
                  Products
                </Label>
              </Col>
              <Col xs="auto">
                <Label className="form-label mb-0" >
                  Contact
                </Label>
              </Col>
              <Col xs="auto">
                <Label className="form-label mb-0" >
                  History
                </Label>
              </Col>
            </Row>
          </Col>
          {/* Phần biểu tượng */}
          <Col xxl={4} md={4} sm={4}className="text-right">
            <Row className="align-items-center">
              <Col xs="auto">
                <InputGroup>
                  <Input
                    type="text"
                    className="form-control"
                    id="basicInput"
                    placeholder="Search"
                  />
                  <InputGroupText>
                    <CiSearch />
                  </InputGroupText>
                </InputGroup>
              </Col>
              <Col xs="auto">
                <FaBell style={{ fontSize: "20px" }} />
              </Col>
              <Col xs="auto">
                <FaShoppingCart style={{ fontSize: "20px" }} />
              </Col>
              <Col xs="auto">
                <FaRegUserCircle style={{ fontSize: "24px" }} />
              </Col>
            </Row>
          </Col>
        </Row>
      </CardHeader>
    </Card>
  );
};

export default Navigation;
